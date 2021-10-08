import React from "react"
import _ from "lodash"
import { firebase } from "services/Firebase"
import Classes from "_data/classes"
import { Ancestries } from "_data/ancestries"
import { migrateToLatest } from "../migrations"
import { BUILDER_VERSION, PUBLISHED_ON } from "../BUILDER_VERSION"

import {
  calculateAbilityMods,
  calculateAbilityScores,
  calculatePerception,
  getBlankCharacter,
  calculateHP,
} from "_data/classTemplate"
import { Skills } from "_data/skills"
import { Backgrounds } from "_data/backgrounds"

import { PF2CharacterContext } from "context"
import {
  AbilityScoreSection,
  FeatsSection,
  SubNav,
  CharacterBasics,
  SkillsTable,
} from "components"

import { toast } from "react-toastify"
import { applyNewAncestry } from "services/AncestryService"

export class CharacterBuilder extends React.Component {
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
    let { characterId } = this.props.match.params

    if (characterId) {
      this.getCharacter(characterId)
    } else {
      let character = getBlankCharacter()
      this.setState({ character })
    }
  }

  async getCharacter(characterId) {
    const response = await firebase.getPF2Character(characterId)
    let character = response.data()
    character.uid = characterId

    migrateToLatest(character)

    this.updateStats(character, () => {
      this.props.history.push(`/pf2/character-builder/${characterId}`)
    })
    return character
  }

  updateName(e) {
    this.setState({
      character: { ...this.state.character, name: e.target.value },
    })
  }

  reset() {
    let blankCharacter = getBlankCharacter()
    this.setState({ character: blankCharacter }, () => {
      this.props.history.push("/pf2/character-builder")
      toast("Cleared Sheet")
    })
  }

  selectBackground(e) {
    if ([undefined, null, ""].includes(e.target.value)) return
    let character = _.cloneDeep(this.state.character)

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
      let backgroundSkillNames = character.background.skillBoosts.map(
        (b) => b.skill.name
      )

      let classSkillsContainingBackgroundSkill =
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

  selectClass(e) {
    if ([undefined, null, ""].includes(e.target.value)) return
    let character = _.cloneDeep(this.state.character)

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
    let newClassBoosts = character.class.skillBoosts.map((classBoost) => {
      let isAssignedByBackground = character.background.skillBoosts.find(
        (bb) => bb.skill.name === classBoost.skill.name
      )
      if (isAssignedByBackground)
        return { ...classBoost, skill: { id: "Free" }, isStatic: false }

      return { ...classBoost }
    })

    character.skillBoosts = character.skillBoosts.concat(newClassBoosts)

    // Remove old class and even skill feats
    character.feats = character.feats.filter((feat) => {
      let [type, level] = feat.type.split("_")
      // remove class feats
      if (type === "class") return false
      // remove even-numbered skill feats
      if (type === "skill" && level % 2 === 0) return false
      // keep others
      return true
    })

    // Add blank class and skill feats
    let blankFeats = this.blankCharacter.feats.filter(
      (feat) => feat.type.includes("class") || feat.type.includes("skill")
    )

    character.feats = character.feats.concat(blankFeats)

    if (character.class.feats)
      character.feats = character.feats.concat(character.class.feats)

    this.updateStats(character)
  }

  selectAncestry(e) {
    if ([undefined, null, ""].includes(e.target.value)) return
    const updatedCharacter = applyNewAncestry(
      this.state.character,
      e.target.value
    )
    this.updateStats(updatedCharacter)
  }

  updateStats(character, callback) {
    const hasClass = !!character.class.name
    const hasAncestry = !!character.ancestry.name
    character.abilities = calculateAbilityScores(character)
    character.abilityMods = calculateAbilityMods(character)
    character.hitPoints = calculateHP(character)

    // Setup INT Skill boosts
    if (character.abilityMods.Intelligence > 0) {
      let level1IntMods = character.abilityBoosts.filter(
        (boost) =>
          boost.ability === "Intelligence" &&
          (boost.source === "Level_1" ||
            boost.source === character.background.name ||
            boost.source === character.class.name ||
            boost.source === character.ancestry.name)
      )

      let intSkills = character.skillBoosts.filter(
        (b) => b.source === "int"
      )

      if (intSkills.length < level1IntMods.length) {
        for (let i = intSkills.length; i < level1IntMods.length; i++) {
          character.skillBoosts.push({
            id: "int" + intSkills.length,
            source: "int",
            skill: { id: "Free" },
            proficiency: 2,
          })
        }
      }
      if (intSkills.length > level1IntMods.length) {
        for (let i = 0; i < intSkills.length - level1IntMods.length; i++) {
          let boost = intSkills.pop()
          let index = character.skillBoosts.indexOf(boost)
          character.skillBoosts.splice(index, 1)
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
        let level = boost.type.split("_")[1]
        if (parseInt(character.level, 10) >= parseInt(level, 10)) {
          character.saves[boost.save] = boost.proficiency
        }
      })
    }

    // Perception
    if (hasClass) {
      character.perceptionProficiency = calculatePerception(character)
    }

    // Sort Feats
    character.feats = character.feats.sort((a, b) => {
      let aLevel = a.type.split("_")[1]
      let bLevel = b.type.split("_")[1]
      return parseInt(aLevel, 10) - parseInt(bLevel, 10)
    })

    // Ensure current Builder version
    if (character.builderVersion < BUILDER_VERSION)
      character.builderVersion = BUILDER_VERSION

    this.setState({ character }, callback)
  }

  boostAbility(e) {
    let character = _.cloneDeep(this.state.character)

    let boost = character.abilityBoosts.find(
      (boost) => boost.id === e.target.name
    )

    boost.ability = e.target.value

    this.updateStats(character)
  }

  selectSkill(e) {
    let character = _.cloneDeep(this.state.character)

    let skillId = e.target.value
    let boostId = e.target.name

    let skill = character.skills[skillId]

    let boost = character.skillBoosts.find((boost) => boost.id === boostId)
    if (!boost || !skill) {
      return
    }

    // If this is a Class Boost (level 1) boost AND the skill
    // is already trained (from a Background) do not update.
    // Character cannot be >trained at Lv1
    let isIntBoost = boost.source === "int"

    let alreadyTrained = character.skillBoosts.filter(
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

  selectFeat(featKey, newFeat) {
    let character = _.cloneDeep(this.state.character)
    let newFeats = _.cloneDeep(character.feats)
    newFeats = newFeats.filter((feat) => feat.type !== featKey)

    newFeat.type = featKey

    newFeats.push(newFeat)
    character.feats = newFeats.sort((a, b) => {
      let aLevel = a.type.split("_")[1]
      let bLevel = b.type.split("_")[1]
      return parseInt(aLevel, 10) - parseInt(bLevel, 10)
    })

    this.setState({ character })
  }

  deleteFeat(featKey) {
    this.selectFeat(featKey, {})
  }

  setLevel(e) {
    let character = _.cloneDeep(this.state.character)
    character.level = parseInt(e.target.value, 10)
    this.updateStats(character)
  }

  render() {
    let { character } = this.state

    if (_.isEmpty(character)) return null

    const context = {
      character,
      selectAncestry: this.selectAncestry,
      selectBackground: this.selectBackground,
      selectClass: this.selectClass,
      selectSkill: this.selectSkill,
      selectFeat: this.selectFeat,
      deleteFeat: this.deleteFeat,
      getCharacter: this.getCharacter,
      Classes,
      Ancestries,
      Backgrounds,
    }

    return (
      <div>
        <main className="">
          <PF2CharacterContext.Provider value={context}>
            <SubNav
              history={this.props.history}
              reset={this.reset}
              character={character}
              setCharacter={this.setCharacter}
              getCharacter={this.getCharacter}
            />
            <div className="pt-20 px-2 max-w-5xl mx-auto">
              <CharacterBasics
                selectAncestry={this.selectAncestry}
                selectBackground={this.selectBackground}
                selectClass={this.selectClass}
                updateName={this.updateName}
                character={character}
                setLevel={this.setLevel}
              />
              <div className="flex flex-wrap">
                <div className="flex-full md:flex-1 flex flex-col">
                  <AbilityScoreSection
                    character={this.state.character}
                    boostAbility={this.boostAbility}
                  />
                  <FeatsSection
                    character={this.state.character}
                    selectFeat={this.selectFeat}
                    deleteFeat={this.deleteFeat}
                  />
                </div>
                <div className="flex-full md:flex-1">
                  <SkillsTable
                    character={character}
                    selectSkill={this.selectSkill}
                  />
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
