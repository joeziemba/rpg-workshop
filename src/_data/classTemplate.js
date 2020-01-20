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

  if (character.abilityFlaws)
    character.abilityFlaws.forEach(flaw => {
      abilities[flaw.ability] -= 2;
    });

  return abilities;
}

export function calculateHP(character) {
  // Add con mods from boosts
  let lv1mods, lv5mods, lv10mods, lv15mods;
  // 1st
  let lv1boosts = character.abilityBoosts.filter(
    boost =>
      boost.source === "Level_1" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  );

  let lv1scores = calculateAbilityScores({ abilityBoosts: lv1boosts });
  lv1mods = calculateAbilityMods({
    abilities: lv1scores
  });

  // 5th
  let lv5boosts = character.abilityBoosts.filter(
    boost =>
      boost.source === "Level_1" ||
      boost.source === "Level_5" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  );

  let lv5scores = calculateAbilityScores({ abilityBoosts: lv5boosts });
  lv5mods = calculateAbilityMods({
    abilities: lv5scores
  });

  // 10th
  let lv10boosts = character.abilityBoosts.filter(
    boost =>
      boost.source === "Level_1" ||
      boost.source === "Level_5" ||
      boost.source === "Level_10" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  );

  let lv10scores = calculateAbilityScores({ abilityBoosts: lv10boosts });
  lv10mods = calculateAbilityMods({
    abilities: lv10scores
  });

  // 15th
  let lv15boosts = character.abilityBoosts.filter(
    boost =>
      boost.source === "Level_1" ||
      boost.source === "Level_5" ||
      boost.source === "Level_10" ||
      boost.source === "Level_15" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  );

  let lv15scores = calculateAbilityScores({ abilityBoosts: lv15boosts });
  lv15mods = calculateAbilityMods({
    abilities: lv15scores
  });

  let hitPoints = 0;

  for (let i = 1; i <= character.level; i++) {
    if (i < 5) hitPoints += character.class.hp + lv1mods[Abilities.CON];

    if (i >= 5 && i < 10)
      hitPoints += character.class.hp + lv5mods[Abilities.CON];

    if (i >= 10 && i < 15)
      hitPoints += character.class.hp + lv10mods[Abilities.CON];

    if (i >= 15 && i < 20)
      hitPoints += character.class.hp + lv15mods[Abilities.CON];

    if (i === 20)
      hitPoints += character.class.hp + character.abilityMods[Abilities.CON];
  }

  return hitPoints;
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
    source: "Level_5",
    id: "Level5-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_5",
    id: "Level5-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_5",
    id: "Level5-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_5",
    id: "Level5-4",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_10",
    id: "Level10-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_10",
    id: "Level10-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_10",
    id: "Level10-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_10",
    id: "Level10-4",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_15",
    id: "Level15-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_15",
    id: "Level15-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_15",
    id: "Level15-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_15",
    id: "Level15-4",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_20",
    id: "Level20-1",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_20",
    id: "Level20-2",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_20",
    id: "Level20-3",
    type: Abilities.FREE
  },
  {
    ability: Abilities.FREE,
    source: "Level_20",
    id: "Level20-4",
    type: Abilities.FREE
  }
];

export function getBlankCharacter() {
  let abilityBoosts = [
    {
      ability: Abilities.FREE,
      source: "Level_1",
      id: "Level1-1",
      type: Abilities.FREE
    },
    {
      ability: Abilities.FREE,
      source: "Level_1",
      id: "Level1-2",
      type: Abilities.FREE
    },
    {
      ability: Abilities.FREE,
      source: "Level_1",
      id: "Level1-3",
      type: Abilities.FREE
    },
    {
      ability: Abilities.FREE,
      source: "Level_1",
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
      {
        skill: { id: "Free" },
        id: "character_3",
        source: "character_3",
        level: 3
      },
      {
        skill: { id: "Free" },
        id: "character_5",
        source: "character_5",
        level: 5
      },
      {
        skill: { id: "Free" },
        id: "character_7",
        source: "character_7",
        level: 7
      },
      {
        skill: { id: "Free" },
        id: "character_9",
        source: "character_9",
        level: 9
      },
      {
        skill: { id: "Free" },
        id: "character_11",
        source: "character_11",
        level: 11
      },
      {
        skill: { id: "Free" },
        id: "character_13",
        source: "character_13",
        level: 13
      },
      {
        skill: { id: "Free" },
        id: "character_15",
        source: "character_15",
        level: 15
      },
      {
        skill: { id: "Free" },
        id: "character_17",
        source: "character_17",
        level: 17
      },
      {
        skill: { id: "Free" },
        id: "character_19",
        source: "character_19",
        level: 19
      }
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
