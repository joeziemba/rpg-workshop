import _ from "lodash";
import { Saves } from "./classes";
import { Abilities } from "./abilities";
import { Skills } from "./skills";

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
    if (abilities[boost.ability] < 18) {
      abilities[boost.ability] += 2;
    } else {
      abilities[boost.ability] += 1;
    }
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

export function countTrainedSkills(character) {
  let count = 0;
  Object.keys(character.skills).forEach(skillKey => {
    if (character.skills[skillKey].proficiency > 0) count++;
  });
  return count;
}

export function calculatePerception(character) {
  let prof = 0;
  debugger;
  if (character.class.name)
    character.class.perceptionBoosts.forEach(boost => {
      let level = boost.type.split("_")[1];
      if (level <= character.level) prof = boost.proficiency;
    });

  return prof;
}

export const upperLevelAbilityBoosts = [
  {
    ability: Abilities.FREE,
    source: "Level5",
    id: "Level5-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level5",
    id: "Level5-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level5",
    id: "Level5-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level5",
    id: "Level5-4",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level10",
    id: "Level10-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level10",
    id: "Level10-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level10",
    id: "Level10-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level10",
    id: "Level10-4",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level15",
    id: "Level15-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level15",
    id: "Level15-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level15",
    id: "Level15-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level15",
    id: "Level15-4",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level20",
    id: "Level20-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level20",
    id: "Level20-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level20",
    id: "Level20-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level20",
    id: "Level20-4",
    type: Abilities.FREE
  }
];

export function getBlankCharacter() {
  let abilityBoosts = [
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

  abilityBoosts = abilityBoosts.concat(upperLevelAbilityBoosts);

  return {
    name: "",
    level: 1,
    hitPoints: 0,
    speed: 0,
    perceptionProficiency: 0,
    ancestry: {},
    background: { skillBoosts: [] },
    class: {
      // saves: { Reflex: 0, Fortitude: 0, Will: 0 },
      defenses: { unarmored: 0 },
      skillBoosts: [],
      proficiencyBoosts: []
    },
    saves: {
      [Saves.FORT]: 0,
      [Saves.REF]: 0,
      [Saves.WILL]: 0
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
    abilityBoosts: _.cloneDeep(abilityBoosts),
    abilityFlaws: [],
    skillBoosts: [
      { skill: { id: "Free" }, id: "character_3", source: "character_3" },
      { skill: { id: "Free" }, id: "character_5", source: "character_5" },
      { skill: { id: "Free" }, id: "character_7", source: "character_7" },
      { skill: { id: "Free" }, id: "character_9", source: "character_9" },
      { skill: { id: "Free" }, id: "character_11", source: "character_11" },
      { skill: { id: "Free" }, id: "character_13", source: "character_13" },
      { skill: { id: "Free" }, id: "character_15", source: "character_15" },
      { skill: { id: "Free" }, id: "character_17", source: "character_17" },
      { skill: { id: "Free" }, id: "character_19", source: "character_19" }
    ],
    freeSkills: 0,
    maxTrainedSkills: 0,
    skills: _.cloneDeep(Skills),
    feats: [
      { type: "ancestry_1" },
      { type: "ancestry_5" },
      { type: "ancestry_9" },
      { type: "ancestry_13" },
      { type: "ancestry_17" },
      { type: "class_1" },
      { type: "class_2" },
      { type: "class_4" },
      { type: "class_6" },
      { type: "class_8" },
      { type: "class_10" },
      { type: "class_12" },
      { type: "class_14" },
      { type: "class_16" },
      { type: "class_18" },
      { type: "class_20" },
      { type: "skill_2" },
      { type: "skill_4" },
      { type: "skill_6" },
      { type: "skill_8" },
      { type: "skill_10" },
      { type: "skill_12" },
      { type: "skill_14" },
      { type: "skill_16" },
      { type: "skill_18" },
      { type: "skill_20" },
      { type: "general_3" },
      { type: "general_7" },
      { type: "general_11" },
      { type: "general_15" },
      { type: "general_19" }
    ]
  };
}
