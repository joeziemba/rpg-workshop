import _ from "lodash";
import { Classes } from "./classes";
import { Ancestries } from "./ancestries";
import { Abilities } from "./abilities";
import { Backgrounds } from "./backgrounds";
import { Skills } from "./skills";

export const Feats = {
  adaptedCantrip: {
    name: "Adapted Cantrip",
    requires: [Ancestries.Human.name, "Spellcasting"],
    level: 1
  }
};

export function calculateAbilityScores(character) {
  let abilities = {
    [Abilities.STR]: 10,
    [Abilities.DEX]: 10,
    [Abilities.CON]: 10,
    [Abilities.INT]: 10,
    [Abilities.WIS]: 10,
    [Abilities.CHA]: 10
  };

  character.abilityBoosts.forEach(boost => {
    abilities[boost.ability] += 2;
  });

  character.abilityFlaws.forEach(flaw => {
    abilities[flaw.ability] -= 2;
  });

  return abilities;
}

export function calculateAbilityMods(character) {
  let mods = {};

  Object.keys(character.abilities).forEach(ability => {
    mods[ability] = abMod(character.abilities[ability]);
  });

  return mods;
}

export function abMod(abilityScore) {
  return Math.floor((abilityScore - 10) / 2);
}

export const character = {
  name: "Abram Wills",
  level: 1,
  class: Classes.Bard,
  ancestry: Ancestries.Human,
  heritage: Ancestries.Human.heritages.halfElf,
  background: Backgrounds.Merchant,
  feats: [Feats.adaptedCantrip],
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
  skills: _.cloneDeep(Skills),
  maxTrainedSkills: 0,
  freeSkills: 0,
  skillBoosts: []
};

character.abilityBoosts = character.abilityBoosts.concat(
  character.class.abilityBoosts,
  character.ancestry.abilityBoosts,
  character.background.abilityBoosts
);

character.abilityFlaws = character.ancestry.abilityFlaws;

character.abilities = calculateAbilityScores(character);

character.hitPoints =
  character.class.hp +
  character.ancestry.hp +
  abMod(character.abilities[Abilities.CON]) * 2;

character.abilityMods = calculateAbilityMods(character);

character.skillBoosts.push(
  ...character.class.skillBoosts,
  ...character.background.skillBoosts
);

character.skillBoosts.forEach(skillBoost => {
  if (character.skills[skillBoost.skill.id].proficiency === 0) {
    character.skills[skillBoost.skill.id].proficiency = skillBoost.proficiency;
    character.skills[skillBoost.skill.id].source = skillBoost.source;
  } else {
    character.freeSkills++;
  }
});

// character.freeSkills +=
//   character.class.freeSkills + character.abilityMods.Intelligence;

export function countTrainedSkills(character) {
  let count = 0;
  Object.keys(character.skills).forEach(skillKey => {
    if (character.skills[skillKey].proficiency > 0) count++;
  });
  return count;
}

character.maxTrainedSkills =
  character.class.skillBoosts.length +
  character.class.freeSkills +
  character.background.skillBoosts.length +
  character.abilityMods.Intelligence;

character.freeSkills =
  character.maxTrainedSkills - countTrainedSkills(character);

export function calculatePerception(character) {
  let perception = 0;
  perception += character.abilityMods.Wisdom;
  if (!_.isEmpty(character.class))
    perception += character.class.perceptionBonus.proficiency;
  return perception;
}

export function getBlankCharacter() {
  let levelOneBoosts = [
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
  ];
  return {
    name: "",
    level: 1,
    hitPoints: 0,
    speed: 0,
    perceptionProficiency: 0,
    ancestry: {},
    background: {},
    class: {
      saves: { Reflex:0, Fortitude:0, Will: 0 },
      defenses: { unarmored: 0 }
    },
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
    abilityBoosts: _.cloneDeep(levelOneBoosts),
    abilityFlaws: [],
    skillBoosts: [],
    freeSkills: 0,
    maxTrainedSkills: 0,
    skills: _.cloneDeep(Skills)
  };
}
