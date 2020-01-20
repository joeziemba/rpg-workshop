import React from "react";
import _ from "lodash";
import { firebase } from "../../Firebase";
import { Classes, ClassNames } from "../../_data/classes";
import { Ancestries } from "../../_data/ancestries";
// import { Abilities } from "../../_data/abilities";
import BUILDER_VERSION from "../../BUILDER_VERSION";

import {
  calculateAbilityMods,
  calculateAbilityScores,
  calculatePerception,
  getBlankCharacter,
  upperLevelAbilityBoosts,
  calculateHP
} from "../../_data/classTemplate";
import { Proficiencies } from "../../_data/skills";
import { Skills } from "../../_data/skills";
import { Backgrounds } from "../../_data/backgrounds";
import SubNav from "../../PF2CharacterBuilder/_components/SubNav";
import CharacterBasics from "../../PF2CharacterBuilder/_components/CharacterBasics";
import SkillsTable from "../../PF2CharacterBuilder/_components/SkillsTable2";
import { PF2CharacterContext } from "../../context";
import AbilityScoreSection from "../../PF2CharacterBuilder/_components/AbilityScoresSection";
import FeatsSection from "../../PF2CharacterBuilder/_components/FeatsSection";

class CharacterBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {}
    };

    this.blankCharacter = getBlankCharacter();

    this.selectClass = this.selectClass.bind(this);
    this.updateStats = this.updateStats.bind(this);
    this.selectAncestry = this.selectAncestry.bind(this);
    this.boostAbility = this.boostAbility.bind(this);
    this.selectSkill = this.selectSkill.bind(this);
    this.selectBackground = this.selectBackground.bind(this);
    this.updateName = this.updateName.bind(this);
    this.reset = this.reset.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
    this.selectFeat = this.selectFeat.bind(this);
    this.deleteFeat = this.deleteFeat.bind(this);
    this.setLevel = this.setLevel.bind(this);
  }

  componentDidMount() {
    let { characterId } = this.props.match.params;

    if (characterId) {
      this.getCharacter(characterId);
    } else {
      let character = getBlankCharacter();
      this.setState({ character });
    }
  }

  componentDidUpdate(prevProps) {
    localStorage.setItem("pf2-character", JSON.stringify(this.state.character));

    if (
      prevProps.match.params.characterId !== this.props.match.params.characterId
    )
      this.getCharacter(this.props.match.params.characterId);
  }

  getCharacter(characterId) {
    firebase.getPF2Character(characterId).then(response => {
      let character = response.data();
      character.uid = characterId;

      if (!character.builderVersion || character.builderVersion < "1.0.0") {
        let blankCharacter = getBlankCharacter();

        character.abilityBoosts = character.abilityBoosts.concat(
          upperLevelAbilityBoosts
        );
        if (character.class.name) {
          character.class = Classes[character.class.name];
          if (!character.class.defenses) {
            character.class.defenses = {
              unarmored: Proficiencies.TRAINED
            };
          }
        }

        if (!character.feats || !Array.isArray(character.feats)) {
          character.feats = blankCharacter.feats;
        }

        if (!character.saves) {
          character.saves = blankCharacter.saves;
        }

        let oldBoosts = _.cloneDeep(character.skillBoosts);

        oldBoosts = oldBoosts.filter(b => b.source === "Free");

        character.skillBoosts = _.cloneDeep(blankCharacter.skillBoosts);

        if (character.class.name) {
          character.skillBoosts = character.skillBoosts.concat(
            _.cloneDeep(character.class.skillBoosts)
          );
        }

        if (character.background.name) {
          character.skillBoosts = character.skillBoosts.concat(
            _.cloneDeep(character.background.skillBoosts)
          );
        }

        for (let i = 1; i <= character.abilityMods.Intelligence; i++)
          character.skillBoosts.push({
            id: "int" + i,
            source: "int",
            skill: { id: "Free" },
            proficiency: 2
          });

        let freeClassBoosts = character.skillBoosts.filter(
          b =>
            (b.source === character.class.name || b.source === "int") &&
            b.skill.id === "Free"
        );

        freeClassBoosts.forEach((boost, i) => {
          if (oldBoosts[i]) boost.skill = oldBoosts[i].skill;
        });

        character.builderVersion = "1.0.0";
      }

      if (character.builderVersion < "1.0.1") {
        character.abilityBoosts.forEach(boost => {
          if (!boost.source.includes("_"))
            boost.source = boost.source.replace("Level", "Level_");
        });
        character.builderVersion = "1.0.1";
      }

      if (character.builderVersion < "1.0.3") {
        if (character.class.name === Classes.Rogue.name) {
          character.skillBoosts = character.skillBoosts.concat(NEWROGUEBOOSTS);
          character.feats = character.feats.concat(Classes.Rogue.feats);
        }
        character.builderVersion = "1.0.3";
      }

      character.builderVersion = BUILDER_VERSION;
      this.updateStats(character, () => {
        firebase.savePF2Character(character, false);
        this.props.history.push(`/pf2/character-builder/${characterId}`);
      });
    });
  }

  updateName(e) {
    this.setState({
      character: { ...this.state.character, name: e.target.value }
    });
  }

  reset() {
    let blankCharacter = getBlankCharacter();
    this.setState({ character: blankCharacter }, () => {
      this.props.history.push("/pf2/character-builder");
    });
  }

  selectBackground(e) {
    if ([undefined, null, ""].includes(e.target.value)) return;
    let character = _.cloneDeep(this.state.character);

    character.abilityBoosts = character.abilityBoosts.filter(
      boost => boost.source !== character.background.id
    );

    character.skillBoosts = character.skillBoosts.filter(
      boost => boost.source !== character.background.id
    );

    character.background = Backgrounds[e.target.value];

    character.abilityBoosts = character.abilityBoosts.concat(
      character.background.abilityBoosts
    );

    character.skillBoosts = character.skillBoosts.concat(
      character.background.skillBoosts
    );

    this.updateStats(character);
  }

  selectClass(e) {
    if ([undefined, null, ""].includes(e.target.value)) return;
    let character = _.cloneDeep(this.state.character);

    character.abilityBoosts = character.abilityBoosts.filter(
      boost => boost.source !== character.class.name
    );

    character.skillBoosts = character.skillBoosts.filter(
      boost => !boost.source.includes(character.class.name)
    );

    character.class = _.cloneDeep(Classes[e.target.value]);

    character.abilityBoosts = character.abilityBoosts.concat(
      _.cloneDeep(character.class.abilityBoosts)
    );

    character.skillBoosts = character.skillBoosts.concat(
      _.cloneDeep(character.class.skillBoosts)
    );

    // Remove old class and even skill feats
    character.feats = character.feats.filter(feat => {
      let [type, level] = feat.type.split("_");
      // remove class feats
      if (type === "class") return false;
      // remove even-numbered skill feats
      if (type === "skill" && level % 2 === 0) return false;
      // keep others
      return true;
    });

    // Add blank class and skill feats
    let blankFeats = this.blankCharacter.feats.filter(
      feat => feat.type.includes("class") || feat.type.includes("skill")
    );

    character.feats = character.feats.concat(blankFeats);

    if (character.class.feats)
      character.feats = character.feats.concat(character.class.feats);

    this.updateStats(character);
  }

  selectAncestry(e) {
    if ([undefined, null, ""].includes(e.target.value)) return;
    let character = _.cloneDeep(this.state.character);

    character.abilityBoosts = character.abilityBoosts.filter(
      boost => boost.source !== character.ancestry.name
    );

    character.abilityFlaws = character.abilityFlaws.filter(
      flaw => flaw.source !== character.ancestry.name
    );

    character.ancestry = Ancestries[e.target.value];

    character.abilityBoosts = character.abilityBoosts.concat(
      character.ancestry.abilityBoosts
    );

    character.abilityFlaws = character.abilityFlaws.concat(
      character.ancestry.abilityFlaws
    );

    // Remove old ancestry feats
    character.feats = character.feats.filter(
      feat => !feat.type.includes("ancestry")
    );

    // Get blank ancestry feats
    let blankFeats = this.blankCharacter.feats.filter(feat =>
      feat.type.includes("ancestry")
    );

    character.feats = character.feats.concat(blankFeats);

    this.updateStats(character);
  }

  updateStats(character, callback) {
    const hasClass = !!character.class.name;
    const hasAncestry = !!character.ancestry.name;

    character.abilities = calculateAbilityScores(character);
    character.abilityMods = calculateAbilityMods(character);

    // let conMod = character.abilityMods[Abilities.CON];

    // Calculate HP
    let hitPoints = 0;
    hitPoints += character.ancestry.hp || 0;

    if (hasClass) {
      hitPoints += calculateHP(character);
    }
    character.hitPoints = hitPoints;

    // Setup INT Skill boosts
    if (character.abilityMods.Intelligence > 0) {
      let level1IntMods = character.abilityBoosts.filter(
        boost =>
          boost.ability === "Intelligence" &&
          (boost.source === "Level_1" ||
            boost.source === character.background.name ||
            boost.source === character.class.name ||
            boost.source === character.ancestry.name)
      );

      let intSkills = character.skillBoosts.filter(b => b.source === "int");

      if (intSkills.length < level1IntMods.length) {
        for (let i = intSkills.length; i < level1IntMods.length; i++) {
          character.skillBoosts.push({
            id: "int" + intSkills.length,
            source: "int",
            skill: { id: "Free" },
            proficiency: 2
          });
        }
      }
      if (intSkills.length > level1IntMods.length) {
        for (let i = 0; i < intSkills.length - level1IntMods.length; i++) {
          let boost = intSkills.pop();
          let index = character.skillBoosts.indexOf(boost);
          character.skillBoosts.splice(index, 1);
        }
      }
    }

    // Other Skill Boosts
    character.skills = _.cloneDeep(Skills);
    character.skillBoosts.forEach(skillBoost => {
      if (skillBoost.skill.id !== "Free") {
        if (
          character.skills[skillBoost.skill.id].proficiency <
          skillBoost.proficiency
        ) {
          character.skills[skillBoost.skill.id].proficiency =
            skillBoost.proficiency;
        }
        character.skills[skillBoost.skill.id].source = skillBoost.source;
        if (skillBoost.skill.id === "Lore")
          character.skills[skillBoost.skill.id].type = skillBoost.type;
      }
    });

    // Speed
    if (hasAncestry) {
      character.speed = character.ancestry.speed;
    }

    // Saves
    if (hasClass) {
      character.class.saveBoosts.forEach(boost => {
        let level = boost.type.split("_")[1];
        if (parseInt(character.level, 10) >= parseInt(level, 10)) {
          character.saves[boost.save] = boost.proficiency;
        }
      });
    }

    // Perception
    if (hasClass) {
      character.perceptionProficiency = calculatePerception(character);
    }

    // Sort Feats
    character.feats = character.feats.sort((a, b) => {
      let aLevel = a.type.split("_")[1];
      let bLevel = b.type.split("_")[1];
      return parseInt(aLevel, 10) - parseInt(bLevel, 10);
    });

    this.setState({ character }, callback);
  }

  boostAbility(e) {
    let character = _.cloneDeep(this.state.character);

    let boost = character.abilityBoosts.find(
      boost => boost.id === e.target.name
    );

    boost.ability = e.target.value;

    this.updateStats(character);
  }

  selectSkill(e) {
    let character = _.cloneDeep(this.state.character);

    let skillId = e.target.value;
    let boostId = e.target.name;

    let skill = character.skills[skillId];

    let boost = character.skillBoosts.find(boost => boost.id === boostId);
    if (!boost || !skill) {
      return;
    }

    boost.skill = skill;
    boost.proficiency = skill.proficiency + 2;

    this.updateStats(character);
  }

  selectFeat(featKey, newFeat) {
    let character = _.cloneDeep(this.state.character);
    let newFeats = _.cloneDeep(character.feats);
    newFeats = newFeats.filter(feat => feat.type !== featKey);

    newFeat.type = featKey;

    newFeats.push(newFeat);
    character.feats = newFeats.sort((a, b) => {
      let aLevel = a.type.split("_")[1];
      let bLevel = b.type.split("_")[1];
      return parseInt(aLevel, 10) - parseInt(bLevel, 10);
    });

    this.setState({ character });
  }

  deleteFeat(featKey) {
    let character = _.cloneDeep(this.state.character);
    let newFeats = _.cloneDeep(character.feats);
    newFeats = newFeats.filter(feat => feat.type !== featKey);
    character.feats = newFeats;
    this.setState({ character });
  }

  setLevel(e) {
    let character = _.cloneDeep(this.state.character);
    character.level = parseInt(e.target.value, 10);
    this.updateStats(character);
  }

  render() {
    let { character } = this.state;

    if (_.isEmpty(character)) return null;

    const context = {
      character,
      selectAncestry: this.selectAncestry,
      selectBackground: this.selectBackground,
      selectClass: this.selectClass,
      Classes,
      Ancestries,
      Backgrounds
    };

    return (
      <div>
        <div className="container-fluid pf-body">
          <div className="page__container page__container--subnav">
            <PF2CharacterContext.Provider value={context}>
              <SubNav
                reset={this.reset}
                character={character}
                setCharacter={this.setCharacter}
              />
              <CharacterBasics
                selectAncestry={this.selectAncestry}
                selectBackground={this.selectBackground}
                selectClass={this.selectClass}
                updateName={this.updateName}
                character={character}
                setLevel={this.setLevel}
              />
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
                  <SkillsTable
                    character={character}
                    selectSkill={this.selectSkill}
                  />
                </div>
              </div>
            </PF2CharacterContext.Provider>
          </div>
        </div>
        <footer className="pf-footer">
          <div className="pb-1 text-center">
            Builder v{BUILDER_VERSION} | Published 1/19/2020
          </div>
          <div>
            This website uses trademarks and/or copyrights owned by Paizo Inc.,
            which are used under Paizo's Community Use Policy. We are expressly
            prohibited from charging you to use or access this content. This
            website is not published, endorsed, or specifically approved by
            Paizo Inc. For more information about Paizo's Community Use Policy,
            please visit{" "}
            <a href="http://www.paizo.com/communityuse" target="__blank">
              paizo.com/communityuse
            </a>
            . For more information about Paizo Inc. and Paizo products, please
            visit{" "}
            <a href="http://www.paizo.com" target="__blank">
              paizo.com
            </a>
            .
          </div>
        </footer>
      </div>
    );
  }
}

export default CharacterBuilder;

const NEWROGUEBOOSTS = [
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_2",
    id: ClassNames.ROGUE + "9",
    level: 2
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_4",
    id: ClassNames.ROGUE + "10",
    level: 4
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_6",
    id: ClassNames.ROGUE + "11",
    level: 6
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_8",
    id: ClassNames.ROGUE + "12",
    level: 8
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_10",
    id: ClassNames.ROGUE + "13",
    level: 10
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_12",
    id: ClassNames.ROGUE + "14",
    level: 12
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_14",
    id: ClassNames.ROGUE + "15",
    level: 14
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_16",
    id: ClassNames.ROGUE + "16",
    level: 16
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_18",
    id: ClassNames.ROGUE + "17",
    level: 18
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_20",
    id: ClassNames.ROGUE + "18",
    level: 20
  }
];
