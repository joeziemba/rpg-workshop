import React from "react";
import _ from "lodash";
import { Classes } from "../../_data/classes";
import { Ancestries } from "../../_data/ancestries";
import { Abilities } from "../../_data/abilities";

import {
  character,
  calculateAbilityMods,
  calculateAbilityScores,
  abMod,
  countTrainedSkills
} from "../../_data/classTemplate";
import { Proficiencies } from "../../_data/skills";
import { Skills } from "../../_data/skills";
import { Backgrounds } from "../../_data/backgrounds";

class CharacterBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {
        name: "",
        level: 1,
        ancestry: {},
        background: {},
        class: {},
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
            source: "Character",
            id: "Character1",
            type: Abilities.FREE
          },
          {
            ability: Abilities.FREE,
            source: "Character",
            id: "Character2",
            type: Abilities.FREE
          },
          {
            ability: Abilities.FREE,
            source: "Character",
            id: "Character3",
            type: Abilities.FREE
          },
          {
            ability: Abilities.FREE,
            source: "Character",
            id: "Character4",
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
      boost => boost.source !== character.background.name
    );

    character.skillBoosts = character.skillBoosts.filter(
      boost => boost.source !== character.background.name
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

    character.hitPoints =
      character.class.hp +
      character.ancestry.hp +
      abMod(character.abilities[Abilities.CON]) * 2;

    character.abilityMods = calculateAbilityMods(character);

    character.skills = _.cloneDeep(Skills);

    character.skillBoosts.forEach(skillBoost => {
      character.skills[skillBoost.skill.id].proficiency =
        skillBoost.proficiency;
      character.skills[skillBoost.skill.id].source = skillBoost.source;
    });
    character.maxTrainedSkills = 0;

    if (!_.isEmpty(character.class)) {
      character.maxTrainedSkills +=
        character.class.skillBoosts.length + character.class.freeSkills;
    }
    if (!_.isEmpty(character.background))
      character.maxTrainedSkills += character.background.skillBoosts.length;

    character.maxTrainedSkills += character.abilityMods.Intelligence;

    character.freeSkills =
      character.maxTrainedSkills - countTrainedSkills(character);

    this.setState({ character });
  }

  renderAbilities() {
    let { character } = this.state;
    return Object.keys(Abilities).map(ability => {
      if (ability !== "FREE")
        return (
          <p key={ability}>
            <b>{Abilities[ability]}</b>:{" "}
            {character.abilities[Abilities[ability]]}
            {character.abilityMods[Abilities[ability]] < 0 ? " " : " +"}
            {character.abilityMods[Abilities[ability]]}
          </p>
        );

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

  freeAbilityOptions() {
    let { abilityBoosts } = this.state.character;
    let freebies = abilityBoosts.filter(boost => boost.type === Abilities.FREE);

    return freebies.map((boost, i) => {
      let boostsFromSameSource = abilityBoosts.filter(
        b => b.source === boost.source && b.id !== boost.id
      );
      let excludedAbilities = boostsFromSameSource.map(b => b.ability);
      if (boost.exclude) excludedAbilities.push(...boost.exclude);

      return (
        <div key={boost.id}>
          Free {boost.source} Ability Boost:
          <select key={i} onChange={this.boostAbility} name={boost.id}>
            <option value="">Choose Ability</option>
            {Object.keys(Abilities).map(ability => {
              return excludedAbilities.includes(Abilities[ability]) ? null : (
                <option key={ability} value={Abilities[ability]}>
                  {" "}
                  {Abilities[ability]}
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
    if (e.target.checked) {
      character.skillBoosts.push({
        skill: Skills[e.target.name],
        proficiency: Proficiencies.TRAINED
      });
    } else {
      character.skillBoosts = character.skillBoosts.map(boost => {
        if (boost.source === undefined && boost.skill.id === e.target.name)
          return null;
        return boost;
      });
    }
    character.skillBoosts = character.skillBoosts.filter(b => b !== null);
    this.updateStats(character);
  }

  render() {
    let { character } = this.state;
    console.log(character);
    return (
      <div className="page-container">
        <h1>PF2 Character Builder</h1>
        <p>Name: {character.name}</p>
        <p>
          {character.ancestry.name}
          <select
            onChange={this.selectAncestry}
            value={character.ancestry.name}
          >
            <option value="">Choose Ancestry</option>
            {Object.keys(Ancestries).map(ancestry => (
              <option value={ancestry} key={ancestry}>
                {ancestry}
              </option>
            ))}
          </select>
        </p>
        <p>
          Class: {character.class.name} {character.level}
          <select onChange={this.selectClass} value={character.class.name}>
            <option value="">Choose Class</option>
            {Object.keys(Classes).map(class_name => (
              <option value={class_name} key={class_name}>
                {class_name}
              </option>
            ))}
          </select>
        </p>
        <p>
          <b>Background</b>: {character.background.name}
          <select
            onChange={this.selectBackground}
            value={character.background.name}
          >
            <option value="">Choose Background</option>
            {Object.keys(Backgrounds).map(background => (
              <option value={background} key={background}>
                {background}
              </option>
            ))}
          </select>
        </p>

        <p>Hit Points: {character.hitPoints}</p>
        {this.renderAbilities()}
        {this.freeAbilityOptions()}
        <SkillsTable character={character} selectSkill={this.selectSkill} />
      </div>
    );
  }
}

export default CharacterBuilder;

const SkillsTable = ({ character, selectSkill }) => {
  let { freeSkills } = character;
  let sources = character.skillBoosts
    .map(boost => boost.source)
    .filter(b => b !== undefined)
    .sort();
  sources = [...new Set(sources)];
  return (
    <div>
      <h2>Skills</h2>
      <p>Available Skill Training: {freeSkills}</p>
      {Object.keys(character.skills).map(skill => {
        skill = character.skills[skill];

        let proficiencyBonus =
          skill.proficiency > 0 ? +skill.proficiency + character.level : 0;
        let abilityMod = character.abilityMods[skill.modifier];
        let totalMod = proficiencyBonus + abilityMod;
        return (
          <p key={skill.name}>
            <input
              type="checkbox"
              onClick={selectSkill}
              name={skill.id}
              disabled={
                skill.source !== undefined ||
                (freeSkills === 0 && skill.proficiency === 0)
              }
              checked={skill.proficiency > 0}
              className="mr-2"
            />
            <b>
              {skill.name}
              {"*".repeat(sources.indexOf(skill.source) + 1)}
            </b>{" "}
            +{abilityMod}({skill.modifier}) +{proficiencyBonus} ={" "}
            {totalMod > 0 ? "+" : ""}
            {totalMod}
          </p>
        );
      })}
      {sources.map((source, i) => {
        return (
          <div>
            {"*".repeat(i + 1)} {source}
          </div>
        );
      })}
    </div>
  );
};
