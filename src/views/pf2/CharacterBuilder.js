import React from "react";
import _ from "lodash";
import { Classes } from "../../_data/classes";
import { Ancestries } from "../../_data/ancestries";
import { Abilities } from "../../_data/abilities";

import {
  calculateAbilityMods,
  calculateAbilityScores,
  countTrainedSkills
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
      character: {
        name: "",
        level: 1,
        hitPoints: 0,
        speed: 0,
        perceptionProficiency: 0,
        ancestry: {},
        background: {},
        class: { saves: { reflex: 0, fortitude: 0, will: 0 } },
        abilities: {
          [Abilities.STR]: 10,
          [Abilities.DEX]: 10,
          [Abilities.CON]: 10,
          [Abilities.INT]: 10,
          [Abilities.WIS]: 10,
          [Abilities.CHA]: 10
        },
        abilityMods: {
          [Abilities.STR]: 0,
          [Abilities.DEX]: 0,
          [Abilities.CON]: 0,
          [Abilities.INT]: 0,
          [Abilities.WIS]: 0,
          [Abilities.CHA]: 0
        },
        abilityBoosts: [
          {
            ability: Abilities.FREE,
            source: "Level1",
            id: "Level1-1",
            type: Abilities.FREE
          },
          {
            ability: Abilities.FREE,
            source: "Level1",
            id: "Level1-2",
            type: Abilities.FREE
          },
          {
            ability: Abilities.FREE,
            source: "Level1",
            id: "Level1-3",
            type: Abilities.FREE
          },
          {
            ability: Abilities.FREE,
            source: "Level1",
            id: "Level1-4",
            type: Abilities.FREE
          }
        ],
        abilityFlaws: [],
        skillBoosts: [],
        freeSkills: 0,
        maxTrainedSkills: 0,
        skills: _.cloneDeep(Skills)
      }
    };

    this.selectClass = this.selectClass.bind(this);
    this.updateStats = this.updateStats.bind(this);
    this.selectAncestry = this.selectAncestry.bind(this);
    this.boostAbility = this.boostAbility.bind(this);
    this.selectSkill = this.selectSkill.bind(this);
    this.selectBackground = this.selectBackground.bind(this);
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

    character.class = Classes[e.target.value];

    character.abilityBoosts = character.abilityBoosts.concat(
      character.class.abilityBoosts
    );

    character.skillBoosts = character.skillBoosts.concat(
      character.class.skillBoosts
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

    character.hitPoints =
      0 +
      (character.class.hp || 0) +
      (character.ancestry.hp || 0) +
      character.abilityMods[Abilities.CON] * 2;

    character.skills = _.cloneDeep(Skills);

    character.skillBoosts.forEach(skillBoost => {
      character.skills[skillBoost.skill.id].proficiency =
        skillBoost.proficiency;
      character.skills[skillBoost.skill.id].source = skillBoost.source;
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
        let isKey = character.class.keyAbility === Abilities[abilityKey];
        return (
          <div className={`pf-ability ${isKey ? "pf-ability--key" : ""}`}>
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
            className="text-center float-left pf-select pf-select--float"
            aria-label={"Level 1 Ability Boost: " + i}
          >
            <option value="">–</option>
            {Object.keys(Abilities).map(ability => {
              return excludedAbilities.includes(Abilities[ability]) ? null : (
                <option key={ability} value={Abilities[ability]}>
                  {ability}
                </option>
              );
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
        proficiency: Proficiencies.TRAINED
      });
    } else {
      character.skillBoosts = character.skillBoosts.map(boost => {
        if (boost.source === undefined && boost.skill.id === skillName)
          return null;
        return boost;
      });
    }
    character.skillBoosts = character.skillBoosts.filter(b => b !== null);
    this.updateStats(character);
  }

  render() {
    let { character } = this.state;

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
      <div className="page--dark container-fluid pf-body">
        <div className="page__container">
          <PF2CharacterContext.Provider value={context}>
            <SubNav />
            <CharacterBasics
              selectAncestry={this.selectAncestry}
              selectBackground={this.selectBackground}
              selectClass={this.selectClass}
            />
            <div className="row">
              <div className="col-md-6">
                <div className="pf-section">
                  <h2 className="pf-section__heading">Ability Scores</h2>
                  <div className="pf-section__body">
                    <div className="clearfix">{this.renderAbilities()}</div>

                    <div className="row">
                      <div className="col">
                        <h3 className="c-gray-block-heading mb-2">
                          Level 1 Boosts
                        </h3>
                        <div className="row">
                          {this.freeAbilityOptions("Level1")}
                        </div>
                        <React.Fragment>
                          <h3 className="c-gray-block-heading mb-2 mt-2">
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
                          <h3 className="c-gray-block-heading mt-2 mb-2">
                            Background Boosts{" "}
                            {character.background.name &&
                              " - " + character.background.name}
                          </h3>
                          <div className="row mb-2">
                            {_.isEmpty(character.background) ? (
                              <div className="col u-placeholder-text mb-3">
                                choose a background above
                              </div>
                            ) : (
                              this.freeAbilityOptions(character.background.id)
                            )}
                          </div>
                        </React.Fragment>
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
