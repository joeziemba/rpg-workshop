import { Ability } from "./abilities"
import { AbilityBoost } from "./models/abilityBoost.model"

export interface Ancestry {
  name: string
  hp: number
  size: string
  speed: number
  abilityBoosts: AbilityBoost[]
  abilityFlaws: AbilityBoost[]
  languages: string[]
  traits: string[]
  heritages?: any
}

const AncestryNames = {
  Dwarf: "Dwarf",
  Elf: "Elf",
  Gnome: "Gnome",
  Goblin: "Goblin",
  Human: "Human",
  Halfling: "Halfling",
}

export const Ancestries: Record<keyof typeof AncestryNames, Ancestry> = {
  Dwarf: {
    name: "Dwarf",
    hp: 10,
    size: "Medium",
    speed: 20,
    abilityBoosts: [
      new AbilityBoost(Ability.CON, "Dwarf", 1),
      new AbilityBoost(Ability.WIS, "Dwarf", 1),
      new AbilityBoost(Ability.FREE, "Dwarf", 1),
    ],
    abilityFlaws: [new AbilityBoost(Ability.CHA, "Dwarf", 1)],
    languages: ["Common", "Dwarven"],
    traits: ["Dwarf", "Humanoid"],
  },
  Elf: {
    name: "Elf",
    hp: 6,
    size: "Medium",
    speed: 30,
    abilityBoosts: [
      new AbilityBoost(Ability.DEX, "Elf", 1),
      new AbilityBoost(Ability.INT, "Elf", 1),
      new AbilityBoost(Ability.FREE, "Elf", 1),
    ],
    abilityFlaws: [new AbilityBoost(Ability.CON, "Elf", 1)],
    languages: ["Common", "Elven"],
    traits: ["Elf", "Humanoid"],
  },
  Gnome: {
    name: "Gnome",
    hp: 8,
    size: "small",
    speed: 25,
    abilityBoosts: [
      new AbilityBoost(Ability.CON, "Gnome", 1),
      new AbilityBoost(Ability.CHA, "Gnome", 1),
      new AbilityBoost(Ability.FREE, "Gnome", 1),
    ],
    abilityFlaws: [new AbilityBoost(Ability.STR, "Gnome", 1)],
    languages: ["Common"],
    traits: ["Gnome", "Humanoid"],
    heritages: {
      halfElf: {
        name: "Half Elf",
        traits: ["Elf"],
      },
      halfOrc: {},
      skilled: {},
      versatile: {},
    },
  },
  Goblin: {
    name: "Goblin",
    hp: 6,
    size: "Small",
    speed: 25,
    abilityBoosts: [
      new AbilityBoost(Ability.DEX, "Goblin", 1),
      new AbilityBoost(Ability.CHA, "Goblin", 1),
      new AbilityBoost(Ability.FREE, "Goblin", 1),
    ],
    abilityFlaws: [new AbilityBoost(Ability.WIS, "Goblin", 1)],
    languages: ["Common", "Goblin"],
    traits: [],
  },
  Human: {
    name: "Human",
    hp: 8,
    size: "medium",
    speed: 25,
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Human", 1),
      new AbilityBoost(Ability.FREE, "Human", 1),
    ],
    abilityFlaws: [],
    languages: ["Common"],
    traits: ["Human", "Humanoid"],
    heritages: {
      halfElf: {
        name: "Half Elf",
        traits: ["Elf"],
      },
      halfOrc: {},
      skilled: {},
      versatile: {},
    },
  },
  Halfling: {
    name: AncestryNames.Halfling,
    hp: 6,
    size: "Small",
    speed: 25,
    abilityBoosts: [
      new AbilityBoost(Ability.DEX, AncestryNames.Halfling, 1),
      new AbilityBoost(Ability.WIS, AncestryNames.Halfling, 1),
      new AbilityBoost(Ability.FREE, AncestryNames.Halfling, 1),
    ],
    abilityFlaws: [
      new AbilityBoost(Ability.STR, AncestryNames.Halfling, 1),
    ],
    languages: ["Common", "Halfling"],
    traits: [],
  },
}
