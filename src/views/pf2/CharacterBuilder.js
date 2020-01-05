import React from "react";
import _ from "lodash";
import { firebase } from "../../Firebase";
import { Classes } from "../../_data/classes";
import { Ancestries } from "../../_data/ancestries";
import { Abilities } from "../../_data/abilities";

import {
  calculateAbilityMods,
  calculateAbilityScores,
  countTrainedSkills,
  getBlankCharacter
} from "../../_data/classTemplate";
import { Proficiencies } from "../../_data/skills";
import { Skills } from "../../_data/skills";
import { Backgrounds } from "../../_data/backgrounds";
import SubNav from "../../PF2CharacterBuilder/_components/SubNav";
import CharacterBasics from "../../PF2CharacterBuilder/_components/CharacterBasics";
import SkillsTable from "../../PF2CharacterBuilder/_components/SkillsTable";
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
      if (!character.class.defenses) {
        character.class.defenses = {
          unarmored: Proficiencies.TRAINED
        };
      }
      if (!character.feats || !Array.isArray(character.feats)) {
        let blankCharacter = getBlankCharacter();
        character.feats = blankCharacter.feats;
      }
      this.setState({ character }, () => {
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

  updateStats(character) {
    character.abilities = calculateAbilityScores(character);
    character.abilityMods = calculateAbilityMods(character);

    let conMod = character.abilityMods[Abilities.CON];

    character.hitPoints =
      0 + (character.class.hp || 0) + (character.ancestry.hp || 0) + conMod;

    character.skills = _.cloneDeep(Skills);

    character.skillBoosts.forEach(skillBoost => {
      character.skills[skillBoost.skill.id].proficiency =
        skillBoost.proficiency;
      character.skills[skillBoost.skill.id].source = skillBoost.source;
      if (skillBoost.skill.id === "Lore")
        character.skills[skillBoost.skill.id].type = skillBoost.type;
    });
    character.maxTrainedSkills = 0;

    if (!_.isEmpty(character.ancestry)) {
      character.speed = character.ancestry.speed;
    }

    if (character.class.name) {
      character.maxTrainedSkills +=
        character.class.skillBoosts.length + character.class.freeSkills;

      character.perceptionProficiency = character.class.perceptionProficiency;
    }
    if (!_.isEmpty(character.background)) {
      character.maxTrainedSkills += character.background.skillBoosts.length;
    }

    character.maxTrainedSkills += character.abilityMods.Intelligence;

    character.freeSkills =
      character.maxTrainedSkills - countTrainedSkills(character);

    this.setState({ character });
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
    let skillName = e.target.name.split("-").shift();
    console.log(skillName);

    if (e.target.checked) {
      character.skillBoosts.push({
        skill: Skills[skillName],
        proficiency: Proficiencies.TRAINED,
        source: "Free"
      });
    } else {
      character.skillBoosts = character.skillBoosts.map(boost => {
        if (boost.source === "Free" && boost.skill.id === skillName)
          return null;
        return boost;
      });
    }
    character.skillBoosts = character.skillBoosts.filter(b => b !== null);
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
    this.setState(character);
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
          This website uses trademarks and/or copyrights owned by Paizo Inc.,
          which are used under Paizo's Community Use Policy. We are expressly
          prohibited from charging you to use or access this content. This
          website is not published, endorsed, or specifically approved by Paizo
          Inc. For more information about Paizo's Community Use Policy, please
          visit{" "}
          <a href="http://www.paizo.com/communityuse" target="__blank">
            paizo.com/communityuse
          </a>
          . For more information about Paizo Inc. and Paizo products, please
          visit{" "}
          <a href="http://www.paizo.com" target="__blank">
            paizo.com
          </a>
          .
        </footer>
      </div>
    );
  }
}

export default CharacterBuilder;
