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
      0 + (character.class.hp || 0) + (character.ancestry.hp || 0);

    if (conMod > 0) character.hitPoints += conMod;

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

  renderAbilities() {
    let { character } = this.state;
    return Object.keys(Abilities).map(abilityKey => {
      if (abilityKey !== "FREE") {
        let keyAbility = character.abilityBoosts.find(
          b => b.source === character.class.name
        );
        let isKey = keyAbility && keyAbility.ability === Abilities[abilityKey];
        return (
          <div
            key={abilityKey}
            className={`pf-ability ${isKey ? "pf-ability--key" : ""}`}
          >
            <span className="pf-ability__name">{abilityKey}</span>
            <span className="pf-ability__score">
              {character.abilityMods[Abilities[abilityKey]] < 0 ? " " : " +"}
              {character.abilityMods[Abilities[abilityKey]]}
            </span>
            <span className="pf-ability__mod">
              {character.abilities[Abilities[abilityKey]]}
            </span>
          </div>
        );
      }
      return null;
    });
  }

  boostAbility(e) {
    let { character } = this.state;

    let boost = character.abilityBoosts.find(
      boost => boost.id === e.target.name
    );

    boost.ability = e.target.value;

    this.updateStats(character);
  }

  freeAbilityOptions(source) {
    let { abilityBoosts } = this.state.character;
    let freebies = abilityBoosts.filter(
      boost => boost.type === Abilities.FREE && boost.source === source
    );

    return freebies.map((boost, i) => {
      let boostsFromSameSource = abilityBoosts.filter(
        b => b.source === boost.source && b.id !== boost.id
      );
      let excludedAbilities = boostsFromSameSource.map(b => b.ability);
      if (boost.exclude) excludedAbilities.push(...boost.exclude);

      return (
        <div key={boost.id} className="col">
          <select
            key={i}
            onChange={this.boostAbility}
            name={boost.id}
            className="text-center float-left pf-select pf-select--float pf-select--center"
            aria-label={"Level 1 Ability Boost: " + i}
            value={boost.ability}
          >
            <option value="FREE"></option>
            {Object.keys(Abilities).map(ability => {
              if (ability !== "FREE") {
                return excludedAbilities.includes(Abilities[ability]) ? null : (
                  <option key={ability} value={Abilities[ability]}>
                    {ability}
                  </option>
                );
              }
              return null;
            })}
          </select>
        </div>
      );
    });
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
            />
            <div className="row">
              <div className="col-md-6">
                <div className="pf-section">
                  <h2 className="pf-section__heading">Ability Scores</h2>
                  <div className="pf-section__body pf-section__body--pad">
                    <div className="clearfix">{this.renderAbilities()}</div>

                    <div className="row">
                      <div className="col-12">
                        <h3 className="c-gray-block-heading">Level 1 Boosts</h3>
                        <div className="row">
                          {this.freeAbilityOptions("Level1")}
                        </div>
                        <React.Fragment>
                          <h3 className="c-gray-block-heading mt-2">
                            Ancestry Boosts{" "}
                            {character.ancestry.name &&
                              " - " + character.ancestry.name}
                          </h3>
                          <div className="row">
                            {_.isEmpty(character.ancestry) ? (
                              <p className="col u-placeholder-text">
                                choose an ancestry above
                              </p>
                            ) : (
                              this.freeAbilityOptions(character.ancestry.name)
                            )}
                          </div>
                        </React.Fragment>
                        <React.Fragment>
                          <h3 className="c-gray-block-heading mt-2">
                            Background Boosts{" "}
                            {character.background.name &&
                              " - " + character.background.name}
                          </h3>
                          <div className="row">
                            {_.isEmpty(character.background) ? (
                              <div className="col u-placeholder-text mb-4">
                                choose a background above
                              </div>
                            ) : (
                              this.freeAbilityOptions(character.background.id)
                            )}
                          </div>
                        </React.Fragment>
                        {character.class.name &&
                          character.class.abilityBoosts[0].ability ===
                            Abilities.FREE && (
                            <React.Fragment>
                              <h3 className="c-gray-block-heading mt-2 mb-2">
                                Class Boost{" "}
                                {character.class.name &&
                                  " - " + character.class.name}
                              </h3>
                              <div className="row mb-2">
                                {!character.class.name ? (
                                  <div className="col u-placeholder-text mb-3">
                                    choose a class above
                                  </div>
                                ) : (
                                  this.freeAbilityOptions(character.class.name)
                                )}
                              </div>
                            </React.Fragment>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
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
    );
  }
}

export default CharacterBuilder;
