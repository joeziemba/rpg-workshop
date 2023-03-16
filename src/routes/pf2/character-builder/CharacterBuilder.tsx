import React from "react"
import _ from "lodash"

import { BUILDER_VERSION, PUBLISHED_ON } from "BUILDER_VERSION"
import { firebaseService } from "services/Firebase"
import Classes from "data/classes"
import { Ancestries, Ancestry, AncestryKey } from "data/ancestries"
import {
  calculateAbilityMods,
  calculateAbilityScores,
  calculatePerception,
  getBlankCharacter,
  calculateHP,
  character,
} from "data/character"
import { Skill, Skills } from "data/skills"
import { Backgrounds } from "data/backgrounds"

import { CharacterBuilderContext, PF2CharacterContext } from "context"
import {
  AbilityScoreSection,
  FeatsSection,
  SubNav,
  CharacterBasics,
  SkillsTable,
} from "components"

import { toast } from "react-toastify"
import { applyNewAncestry } from "services/AncestryService"
import { migrateToLatest } from "migrations"

interface InputEvent {
  target: {
    name: string
    value: string
  }
}

export class CharacterBuilder extends React.Component<any, any> {
  blankCharacter
  constructor(props) {
    super(props)

    this.state = {
      character: {},
    }

    this.blankCharacter = getBlankCharacter()

    this.selectClass = this.selectClass.bind(this)
    this.updateStats = this.updateStats.bind(this)
    this.selectAncestry = this.selectAncestry.bind(this)
    this.boostAbility = this.boostAbility.bind(this)
    this.selectSkill = this.selectSkill.bind(this)
    this.selectBackground = this.selectBackground.bind(this)
    this.updateName = this.updateName.bind(this)
    this.reset = this.reset.bind(this)
    this.getCharacter = this.getCharacter.bind(this)
    this.selectFeat = this.selectFeat.bind(this)
    this.deleteFeat = this.deleteFeat.bind(this)
    this.setLevel = this.setLevel.bind(this)
  }

  componentDidMount() {
    const { characterId } = this.props.match.params

    if (characterId) {
      this.getCharacter(characterId)
    } else {
      const character = getBlankCharacter()
      this.setState({ character })
    }
  }

  async getCharacter(characterId: string) {
    const response = await firebaseService.getPF2Character(characterId)
    const returnedCharacter = new character(response.data() as character)
    returnedCharacter.uid = characterId

    migrateToLatest(returnedCharacter)

    this.updateStats(returnedCharacter, () => {
      this.props.history.push(`/pf2/character-builder/${characterId}`)
    })
    return returnedCharacter
  }

  updateName(e: InputEvent) {
    this.setState({
      character: { ...this.state.character, name: e.target.value },
    })
  }

  reset() {
    const blankCharacter = getBlankCharacter()
    this.setState({ character: blankCharacter }, () => {
      this.props.history.push("/pf2/character-builder")
      toast("Cleared Sheet")
    })
  }

  selectBackground(e: InputEvent) {
    if ([undefined, null, ""].includes(e.target.value)) return
    const character = _.cloneDeep(this.state.character)

    character.abilityBoosts = character.abilityBoosts.filter(
      (boost) => boost.source !== character.background.id
    )

    character.skillBoosts = character.skillBoosts.filter(
      (boost) => boost.source !== character.background.id
    )

    character.background = Backgrounds[e.target.value]

    character.abilityBoosts = character.abilityBoosts.concat(
      character.background.abilityBoosts
    )

    // Remove any trained skills that will now be trained by background
    if (character.class.name) {
      const backgroundSkillNames = character.background.skillBoosts.map(
        (b) => b.skill.name
      )

      const classSkillsContainingBackgroundSkill =
        character.skillBoosts.filter((skillBoost) =>
          backgroundSkillNames.includes(skillBoost.skill.name)
        )

      classSkillsContainingBackgroundSkill.forEach((skillBoost) => {
        toast(
          `Removed ${skillBoost.skill.name} from Level ${
            skillBoost.level || 1
          } skills. It is now trained by your background: ${
            character.background.name
          }`
        )
        skillBoost.skill = { id: "Free" }
        skillBoost.isStatic = false
      })
    }

    character.skillBoosts = character.skillBoosts.concat(
      character.background.skillBoosts
    )

    this.updateStats(character)
  }

  selectClass(e: InputEvent) {
    if ([undefined, null, ""].includes(e.target.value)) return
    const character = _.cloneDeep(this.state.character)

    character.abilityBoosts = character.abilityBoosts.filter(
      (boost) => boost.source !== character.class.name
    )

    character.skillBoosts = character.skillBoosts.filter(
      (boost) => !boost.source.includes(character.class.name)
    )

    character.class = _.cloneDeep(Classes[e.target.value])

    character.abilityBoosts = character.abilityBoosts.concat(
      _.cloneDeep(character.class.abilityBoosts)
    )

    // Make any class boost assigned by background a free boost
    const newClassBoosts = character.class.skillBoosts.map(
      (classBoost) => {
        const isAssignedByBackground =
          character.background.skillBoosts.find(
            (bb) => bb.skill.name === classBoost.skill.name
          )
        if (isAssignedByBackground)
          return { ...classBoost, skill: { id: "Free" }, isStatic: false }

        return { ...classBoost }
      }
    )

    character.skillBoosts = character.skillBoosts.concat(newClassBoosts)

    // Remove old class and even skill feats
    character.feats = character.feats.filter((feat) => {
      // remove class feats
      if (feat.type.includes("class")) return false
      // remove even-numbered skill feats
      if (feat.type.includes("skill") && feat.level % 2 === 0) return false
      // keep others
      return true
    })

    // Add blank class and skill feats
    const blankFeats = this.blankCharacter.feats.filter(
      (feat) => feat.type.includes("class") || feat.type.includes("skill")
    )

    character.feats = character.feats.concat(blankFeats)

    if (character.class.feats)
      character.feats = character.feats.concat(character.class.feats)

    this.updateStats(character)
  }

  selectAncestry(newAncestry: AncestryKey) {
    const updatedCharacter = applyNewAncestry(
      this.state.character,
      newAncestry
    )
    this.updateStats(updatedCharacter)
  }

  updateStats(character: character, callback?: () => void) {
    const hasClass = !!character.class.name
    const hasAncestry = !!character.ancestry.name
    character.abilities = calculateAbilityScores(character)
    character.abilityMods = calculateAbilityMods(character)
    character.hitPoints = calculateHP(character)

    // Setup INT Skill boosts
    if (character.abilityMods.Intelligence > 0) {
      const level1IntMods = character.abilityBoosts.filter(
        (boost) =>
          boost.ability === "Intelligence" &&
          (boost.source === "Level_1" ||
            boost.source === character.background.name ||
            boost.source === character.class.name ||
            boost.source === character.ancestry.name)
      )

      const intSkills = character.skillBoosts.filter(
        (b) => b.source === "int"
      )

      if (intSkills.length < level1IntMods.length) {
        for (let i = intSkills.length; i < level1IntMods.length; i++) {
          character.skillBoosts.push({
            id: "int" + intSkills.length,
            source: "int",
            skill: { id: "Free" } as Skill,
            proficiency: 2,
            isStatic: false,
            level: 1,
          })
        }
      }
      if (intSkills.length > level1IntMods.length) {
        for (let i = 0; i < intSkills.length - level1IntMods.length; i++) {
          const boost = intSkills.pop()
          if (boost) {
            const index = character.skillBoosts.indexOf(boost)
            character.skillBoosts.splice(index, 1)
          }
        }
      }
    }

    // Other Skill Boosts
    character.skills = _.cloneDeep(Skills)
    character.skillBoosts.forEach((skillBoost) => {
      if (skillBoost.skill.id !== "Free") {
        character.skills[skillBoost.skill.id].proficiency += 2

        if (skillBoost.skill.id === "Lore")
          character.skills[skillBoost.skill.id].type = skillBoost.type
      }
    })

    // Speed
    if (hasAncestry) {
      character.speed = character.ancestry.speed
    }

    // Saves
    if (hasClass) {
      character.class.saveBoosts.forEach((boost) => {
        let charLevel =
          typeof character.level === "string"
            ? parseInt(character.level, 10)
            : character.level
        if (charLevel >= parseInt(boost.level, 10)) {
          character.saves[boost.save] = boost.proficiency
        }
      })
    }

    // Perception
    if (hasClass) {
      character.perceptionProficiency = calculatePerception(character)
    }

    // Sort Feats
    character.feats = this.sortFeats(character.feats)

    // Ensure current Builder version
    if (character.builderVersion < BUILDER_VERSION)
      character.builderVersion = BUILDER_VERSION

    this.setState({ character }, callback)
  }

  boostAbility(e: InputEvent) {
    const character = _.cloneDeep(this.state.character)

    const boost = character.abilityBoosts.find(
      (boost) => boost.id === e.target.name
    )
    debugger
    boost.ability = e.target.value

    this.updateStats(character)
  }

  selectSkill(e: InputEvent) {
    const character = _.cloneDeep(this.state.character)

    const skillId = e.target.value
    const boostId = e.target.name

    const skill = character.skills[skillId]

    const boost = character.skillBoosts.find(
      (boost) => boost.id === boostId
    )
    if (!boost || !skill) {
      return
    }

    // If this is a Class Boost (level 1) boost AND the skill
    // is already trained (from a Background) do not update.
    // Character cannot be >trained at Lv1
    const isIntBoost = boost.source === "int"

    const alreadyTrained = character.skillBoosts.filter(
      (boost) => boost.skill.name === skill.name
    )
    if (isIntBoost && alreadyTrained.length > 0) {
      toast(
        skill.name +
          "is already trained. INT skills can only be used on Untrained skills."
      )
      return
    }

    if (alreadyTrained.length > 0 && boost.level == 1) {
      toast("Cannot train skill " + skill.name + " twice at first level")
      return
    }
    if (alreadyTrained.length === 4) {
      toast("Cannot train skill " + skill.name + " again")
      return
    }
    boost.skill = skill
    this.updateStats(character)
  }

  selectFeat(featType, newFeat) {
    const character = _.cloneDeep(this.state.character)
    character.feats = character.feats.filter(
      (feat) => feat.type !== featType
    )
    newFeat.type = featType
    newFeat.level = featType.split("_")[1]
    character.feats.push(newFeat)
    character.feats = this.sortFeats(character.feats)

    this.setState({ character })
  }

  sortFeats(feats) {
    return feats.sort((a, b) => {
      return a.level - b.level
    })
  }

  deleteFeat(featToDelete) {
    const character = _.cloneDeep(this.state.character)
    // remove the feat
    character.feats = character.feats.filter(
      (feat) => feat.type !== featToDelete.type
    )

    // if not a misc feed, at placeholder back
    if (!featToDelete.type.includes("misc")) {
      character.feats.push({
        type: featToDelete.type,
        level: featToDelete.level,
      })
    }

    character.feats = this.sortFeats(character.feats)

    this.setState({ character })
  }

  setLevel(e: InputEvent) {
    const character = _.cloneDeep(this.state.character)
    character.level = parseInt(e.target.value, 10)
    this.updateStats(character)
  }

  render() {
    const { character } = this.state

    if (_.isEmpty(character)) return null

    const contextValue: CharacterBuilderContext = {
      character,
      selectAncestry: this.selectAncestry,
      selectBackground: this.selectBackground,
      selectClass: this.selectClass,
      selectSkill: this.selectSkill,
      selectFeat: this.selectFeat,
      deleteFeat: this.deleteFeat,
      getCharacter: this.getCharacter,
      boostAbility: this.boostAbility,
      Classes,
      Ancestries,
      Backgrounds,
    }

    return (
      <div>
        <main className="">
          <PF2CharacterContext.Provider value={contextValue}>
            <SubNav
              history={this.props.history}
              reset={this.reset}
              character={character}
              getCharacter={this.getCharacter}
            />
            <div className="pt-20 px-2 max-w-5xl mx-auto">
              <CharacterBasics
                selectBackground={this.selectBackground}
                selectClass={this.selectClass}
                updateName={this.updateName}
                character={character}
                setLevel={this.setLevel}
              />
              <div className="flex flex-wrap">
                <div className="flex-full md:flex-1 flex flex-col">
                  <AbilityScoreSection character={this.state.character} />
                  <FeatsSection />
                </div>
                <div className="flex-full md:flex-1">
                  <SkillsTable />
                </div>
              </div>
            </div>
          </PF2CharacterContext.Provider>
        </main>
        <footer className="w-full p-4 text-sm bg-gray-700 text-gray-300">
          <div className="pb-2 text-center font-bold">
            Builder v{BUILDER_VERSION} | Published {PUBLISHED_ON}
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            This website uses trademarks and/or copyrights owned by Paizo
            Inc., which are used under Paizo&apos;s Community Use Policy.
            We are expressly prohibited from charging you to use or access
            this content. This website is not published, endorsed, or
            specifically approved by Paizo Inc. For more information about
            Paizo&apos;s Community Use Policy, please visit{" "}
            <a
              className="font-bold text-white"
              href="http://www.paizo.com/communityuse"
              target="__blank"
            >
              paizo.com/communityuse
            </a>
            . For more information about Paizo Inc. and Paizo products,
            please visit{" "}
            <a
              className="font-bold text-white"
              href="http://www.paizo.com"
              target="__blank"
            >
              paizo.com
            </a>
            .
          </div>
        </footer>
      </div>
    )
  }
}
