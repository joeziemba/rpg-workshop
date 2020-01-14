import React from "react";
import _ from "lodash";
import { firebase } from "../../Firebase";
import { Classes } from "../../_data/classes";
import { Ancestries } from "../../_data/ancestries";
import { Abilities } from "../../_data/abilities";
import VERSION from "../../VERSION";

import {
  calculateAbilityMods,
  calculateAbilityScores,
  calculatePerception,
  getBlankCharacter,
  upperLevelAbilityBoosts
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

      if (!character.builderVersion || character.builderVersion < VERSION) {
        let blankCharacter = getBlankCharacter();

        character.builderVersion = VERSION;
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

        firebase.savePF2Character(character);

        this.updateStats(character, () => {
          this.props.history.push(`/pf2/character-builder/${characterId}`);
        });
      } else {
        this.setState({ character });
      }
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
    let { character } = this.state;

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
    let { character } = this.state;

    character.abilityBoosts = character.abilityBoosts.filter(
      boost => boost.source !== character.class.name
    );

    character.skillBoosts = character.skillBoosts.filter(
      boost => boost.source !== character.class.name
    );

    character.class = _.cloneDeep(Classes[e.target.value]);

    character.abilityBoosts = character.abilityBoosts.concat(
      _.cloneDeep(character.class.abilityBoosts)
    );

    character.skillBoosts = character.skillBoosts.concat(
      _.cloneDeep(character.class.skillBoosts)
    );

    this.updateStats(character);
  }

  selectAncestry(e) {
    if ([undefined, null, ""].includes(e.target.value)) return;
    let { character } = this.state;

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

    this.updateStats(character);
  }

  updateStats(character, callback) {
    const hasClass = !!character.class.name;

    character.abilities = calculateAbilityScores(character);
    character.abilityMods = calculateAbilityMods(character);

    let conMod = character.abilityMods[Abilities.CON];

    character.hitPoints =
      0 + (character.class.hp || 0) + (character.ancestry.hp || 0) + conMod;

    if (character.abilityMods.Intelligence > 0) {
      let level1IntMods = character.abilityBoosts.filter(
        boost =>
          boost.ability === "Intelligence" &&
          (boost.source === "Level1" ||
            boost.source === character.background.name ||
            boost.source === character.class.name ||
            boost.source === character.ancestry.name)
      );

      let intSkills = character.skillBoosts.filter(b => b.source === "int");

      if (intSkills.length < level1IntMods.length) {
        debugger;
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
        debugger;
        for (let i = 0; i < intSkills.length - level1IntMods.length; i++) {
          let boost = intSkills.pop();
          let index = character.skillBoosts.indexOf(boost);
          character.skillBoosts.splice(index, 1);
        }
      }
    }

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
    character.maxTrainedSkills = 0;

    if (!_.isEmpty(character.ancestry)) {
      character.speed = character.ancestry.speed;
    }

    // SAVES
    if (hasClass) {
      character.class.saveBoosts.forEach(boost => {
        let level = boost.type.split("_")[1];
        if (parseInt(character.level, 10) >= parseInt(level, 10)) {
          character.saves[boost.save] = boost.proficiency;
        }
      });
    }

    if (hasClass) {
      character.perceptionProficiency = calculatePerception(character);
    }

    this.setState({ character }, callback);
  }

  boostAbility(e) {
    let { character } = this.state;

    let boost = character.abilityBoosts.find(
      boost => boost.id === e.target.name
    );

    boost.ability = e.target.value;

    this.updateStats(character);
  }

  selectSkill(e) {
    let { character } = this.state;

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
    let { character } = this.state;
    let newFeats = _.cloneDeep(character.feats);
    newFeats = newFeats.filter(feat => feat.type !== featKey);

    newFeat.type = featKey;

    newFeats.push(newFeat);

    character.feats = newFeats.sort((a, b) => (a.type < b.type ? -1 : 1));

    this.setState({ character });
  }

  deleteFeat(featKey) {
    let { character } = this.state;
    let newFeats = _.cloneDeep(character.feats);
    newFeats = newFeats.filter(feat => feat.type !== featKey);
    character.feats = newFeats;
    this.setState({ character });
  }

  setLevel(e) {
    let { character } = this.state;
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
            Builder v{VERSION} | Published 1/12/2020
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
