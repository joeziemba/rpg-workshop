import _, { cloneDeep } from "lodash"
import { Saves } from "./classes"
import { Ability } from "./abilities"
import { Skills } from "./skills"
import { AbilityBoost } from "./models/abilityBoost.model"
// import SaveBoost from "./models/SaveBoost"
import SkillBoost from "./models/SkillBoost"

// class perceptionBoost {
//   constructor(
//     public type = "ANY_1",
//     public level = 1,
//     public proficiency = 2
//   ) {}
// }
// interface characterClass {
//   name: string
//   keyAbility: Ability
//   hp: number
//   perceptionBoosts: perceptionBoost[]
//   saveBoosts: SaveBoost[]
//   skillBoosts: SkillBoost[]
//   abilityBoosts: abilityBoost[]
// }

export class character {
  public uid = ""
  public name = ""
  public level = 1
  public hitPoints = 0
  public speed = 0

  public ancestry
  public background
  public class
  public saves = {
    [Saves.FORT]: 0,
    [Saves.REF]: 0,
    [Saves.WILL]: 0,
  }
  public skillBoosts: SkillBoost[] = []
  public proficiencyBoosts: [] = []

  public abilities = {
    [Ability.STR]: 10,
    [Ability.DEX]: 10,
    [Ability.CON]: 10,
    [Ability.INT]: 10,
    [Ability.WIS]: 10,
    [Ability.CHA]: 10,
  }
  public abilityMods = {
    [Ability.STR]: 0,
    [Ability.DEX]: 0,
    [Ability.CON]: 0,
    [Ability.INT]: 0,
    [Ability.WIS]: 0,
    [Ability.CHA]: 0,
  }

  abilityBoosts: AbilityBoost[] = [
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_5", 5),
    new AbilityBoost(Ability.FREE, "Level_5", 5),
    new AbilityBoost(Ability.FREE, "Level_5", 5),
    new AbilityBoost(Ability.FREE, "Level_5", 5),
    new AbilityBoost(Ability.FREE, "Level_10", 10),
    new AbilityBoost(Ability.FREE, "Level_10", 10),
    new AbilityBoost(Ability.FREE, "Level_10", 10),
    new AbilityBoost(Ability.FREE, "Level_10", 10),
    new AbilityBoost(Ability.FREE, "Level_15", 15),
    new AbilityBoost(Ability.FREE, "Level_15", 15),
    new AbilityBoost(Ability.FREE, "Level_15", 15),
    new AbilityBoost(Ability.FREE, "Level_15", 15),
    new AbilityBoost(Ability.FREE, "Level_20", 20),
    new AbilityBoost(Ability.FREE, "Level_20", 20),
    new AbilityBoost(Ability.FREE, "Level_20", 20),
    new AbilityBoost(Ability.FREE, "Level_20", 20),
  ]

  public abilityFlaws: AbilityBoost[] = []

  public skills = cloneDeep(Skills)
  public feats: FeatSlot[] = [
    { type: "ancestry_1", level: 1 },
    { type: "ancestry_5", level: 5 },
    { type: "ancestry_9", level: 9 },
    { type: "ancestry_13", level: 13 },
    { type: "ancestry_17", level: 17 },
    { type: "class_1", level: 1 },
    { type: "class_2", level: 2 },
    { type: "class_4", level: 4 },
    { type: "class_6", level: 6 },
    { type: "class_8", level: 8 },
    { type: "class_10", level: 10 },
    { type: "class_12", level: 12 },
    { type: "class_14", level: 14 },
    { type: "class_16", level: 16 },
    { type: "class_18", level: 18 },
    { type: "class_20", level: 20 },
    { type: "skill_2", level: 2 },
    { type: "skill_4", level: 4 },
    { type: "skill_6", level: 6 },
    { type: "skill_8", level: 8 },
    { type: "skill_10", level: 10 },
    { type: "skill_12", level: 12 },
    { type: "skill_14", level: 14 },
    { type: "skill_16", level: 16 },
    { type: "skill_18", level: 18 },
    { type: "skill_20", level: 20 },
    { type: "general_3", level: 3 },
    { type: "general_7", level: 7 },
    { type: "general_11", level: 11 },
    { type: "general_15", level: 15 },
    { type: "general_19", level: 19 },
  ]

  constructor(data: character) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key]
    })
  }
}

export function calculateAbilityScores(character) {
  // All abilities start at 10
  const abilities = {
    [Ability.STR]: 10,
    [Ability.DEX]: 10,
    [Ability.CON]: 10,
    [Ability.INT]: 10,
    [Ability.WIS]: 10,
    [Ability.CHA]: 10,
  }

  // Apply flaws first so boosts add correct points
  if (character.abilityFlaws)
    character.abilityFlaws.forEach((flaw) => {
      abilities[flaw.ability] -= 2
    })

  character.abilityBoosts.forEach((boost) => {
    // Ability boosts add 2, until 18 and then only 1
    if (abilities[boost.ability] < 18) {
      abilities[boost.ability] += 2
    } else {
      abilities[boost.ability] += 1
    }
  })

  return abilities
}

export function calculateHP(character) {
  // Initialize HP at Ancestry value, or 0 if none chosen
  let hitPoints = character.ancestry.hp || 0
  // If class is chosen, add Class HP for every level
  if (character.class.hp) hitPoints += character.class.hp * character.level

  // Calculate Ability scores for every level to add CON mod to HP
  // 1st
  const lv1boosts = character.abilityBoosts.filter(
    (boost) =>
      boost.source === "Level_1" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  )

  const lv1scores = calculateAbilityScores({
    abilityBoosts: lv1boosts,
    abilityFlaws: character.abilityFlaws,
  })
  const lv1mods = calculateAbilityMods({
    abilities: lv1scores,
  })

  // 5th
  const lv5boosts = character.abilityBoosts.filter(
    (boost) =>
      boost.source === "Level_1" ||
      boost.source === "Level_5" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  )

  const lv5scores = calculateAbilityScores({
    abilityBoosts: lv5boosts,
    abilityFlaws: character.abilityFlaws,
  })
  const lv5mods = calculateAbilityMods({
    abilities: lv5scores,
  })

  // 10th
  const lv10boosts = character.abilityBoosts.filter(
    (boost) =>
      boost.source === "Level_1" ||
      boost.source === "Level_5" ||
      boost.source === "Level_10" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  )

  const lv10scores = calculateAbilityScores({
    abilityBoosts: lv10boosts,
    abilityFlaws: character.abilityFlaws,
  })
  const lv10mods = calculateAbilityMods({
    abilities: lv10scores,
  })

  // 15th
  const lv15boosts = character.abilityBoosts.filter(
    (boost) =>
      boost.source === "Level_1" ||
      boost.source === "Level_5" ||
      boost.source === "Level_10" ||
      boost.source === "Level_15" ||
      boost.source === character.background.name ||
      boost.source === character.class.name ||
      boost.source === character.ancestry.name
  )

  const lv15scores = calculateAbilityScores({
    abilityBoosts: lv15boosts,
    abilityFlaws: character.abilityFlaws,
  })
  const lv15mods = calculateAbilityMods({
    abilities: lv15scores,
  })

  // Add CON modifier to HP for each level
  for (let i = 1; i <= character.level; i++) {
    if (i < 5) hitPoints += lv1mods[Ability.CON]
    if (i >= 5 && i < 10) hitPoints += lv5mods[Ability.CON]
    if (i >= 10 && i < 15) hitPoints += lv10mods[Ability.CON]
    if (i >= 15 && i < 20) hitPoints += lv15mods[Ability.CON]
    if (i === 20) hitPoints += character.abilityMods[Ability.CON]
  }

  return hitPoints
}

export function calculateAbilityMods(character) {
  const mods = {}

  Object.keys(character.abilities).forEach((ability) => {
    mods[ability] = abMod(character.abilities[ability])
  })

  return mods
}

export function abMod(abilityScore) {
  return Math.floor((abilityScore - 10) / 2)
}

export function calculatePerception(character) {
  let prof = 0
  if (character.class.perceptionBoosts)
    character.class.perceptionBoosts.forEach((boost) => {
      const level = boost.level
      if (level <= character.level) prof = boost.proficiency
    })

  return prof
}

export const upperLevelAbilityBoosts = [
  new AbilityBoost(Ability.FREE, "Level_5", 5),
  new AbilityBoost(Ability.FREE, "Level_5", 5),
  new AbilityBoost(Ability.FREE, "Level_5", 5),
  new AbilityBoost(Ability.FREE, "Level_5", 5),
  new AbilityBoost(Ability.FREE, "Level_10", 10),
  new AbilityBoost(Ability.FREE, "Level_10", 10),
  new AbilityBoost(Ability.FREE, "Level_10", 10),
  new AbilityBoost(Ability.FREE, "Level_10", 10),
  new AbilityBoost(Ability.FREE, "Level_15", 15),
  new AbilityBoost(Ability.FREE, "Level_15", 15),
  new AbilityBoost(Ability.FREE, "Level_15", 15),
  new AbilityBoost(Ability.FREE, "Level_15", 15),
  new AbilityBoost(Ability.FREE, "Level_20", 20),
  new AbilityBoost(Ability.FREE, "Level_20", 20),
  new AbilityBoost(Ability.FREE, "Level_20", 20),
  new AbilityBoost(Ability.FREE, "Level_20", 20),
]

export function getBlankCharacter() {
  const abilityBoosts: AbilityBoost[] = [
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    new AbilityBoost(Ability.FREE, "Level_1", 1),
    ...upperLevelAbilityBoosts,
  ]

  return {
    name: "",
    level: 1,
    hitPoints: 0,
    speed: 0,
    perceptionProficiency: 0,
    ancestry: {},
    background: { skillBoosts: [] },
    class: {
      defenses: { unarmored: 0 },
      skillBoosts: [],
      proficiencyBoosts: [],
    },
    saves: {
      [Saves.FORT]: 0,
      [Saves.REF]: 0,
      [Saves.WILL]: 0,
    },
    abilities: {
      [Ability.STR]: 10,
      [Ability.DEX]: 10,
      [Ability.CON]: 10,
      [Ability.INT]: 10,
      [Ability.WIS]: 10,
      [Ability.CHA]: 10,
    },
    abilityMods: {
      [Ability.STR]: 0,
      [Ability.DEX]: 0,
      [Ability.CON]: 0,
      [Ability.INT]: 0,
      [Ability.WIS]: 0,
      [Ability.CHA]: 0,
    },
    abilityBoosts: _.cloneDeep(abilityBoosts),
    abilityFlaws: [],
    skillBoosts: [
      {
        skill: { id: "Free" },
        id: "character_3",
        source: "character_3",
        level: 3,
      },
      {
        skill: { id: "Free" },
        id: "character_5",
        source: "character_5",
        level: 5,
      },
      {
        skill: { id: "Free" },
        id: "character_7",
        source: "character_7",
        level: 7,
      },
      {
        skill: { id: "Free" },
        id: "character_9",
        source: "character_9",
        level: 9,
      },
      {
        skill: { id: "Free" },
        id: "character_11",
        source: "character_11",
        level: 11,
      },
      {
        skill: { id: "Free" },
        id: "character_13",
        source: "character_13",
        level: 13,
      },
      {
        skill: { id: "Free" },
        id: "character_15",
        source: "character_15",
        level: 15,
      },
      {
        skill: { id: "Free" },
        id: "character_17",
        source: "character_17",
        level: 17,
      },
      {
        skill: { id: "Free" },
        id: "character_19",
        source: "character_19",
        level: 19,
      },
    ],
    skills: _.cloneDeep(Skills),
    feats: [
      { type: "ancestry_1", level: 1 },
      { type: "ancestry_5", level: 5 },
      { type: "ancestry_9", level: 9 },
      { type: "ancestry_13", level: 13 },
      { type: "ancestry_17", level: 17 },
      { type: "class_1", level: 1 },
      { type: "class_2", level: 2 },
      { type: "class_4", level: 4 },
      { type: "class_6", level: 6 },
      { type: "class_8", level: 8 },
      { type: "class_10", level: 10 },
      { type: "class_12", level: 12 },
      { type: "class_14", level: 14 },
      { type: "class_16", level: 16 },
      { type: "class_18", level: 18 },
      { type: "class_20", level: 20 },
      { type: "skill_2", level: 2 },
      { type: "skill_4", level: 4 },
      { type: "skill_6", level: 6 },
      { type: "skill_8", level: 8 },
      { type: "skill_10", level: 10 },
      { type: "skill_12", level: 12 },
      { type: "skill_14", level: 14 },
      { type: "skill_16", level: 16 },
      { type: "skill_18", level: 18 },
      { type: "skill_20", level: 20 },
      { type: "general_3", level: 3 },
      { type: "general_7", level: 7 },
      { type: "general_11", level: 11 },
      { type: "general_15", level: 15 },
      { type: "general_19", level: 19 },
    ],
  }
}
