import { Ability } from "./abilities"

export type SkillName =
  | "Acrobatics"
  | "Arcana"
  | "Athletics"
  | "Crafting"
  | "Deception"
  | "Diplomacy"
  | "Intimidation"
  | "Lore"
  | "Medicine"
  | "Nature"
  | "Occultism"
  | "Performance"
  | "Religion"
  | "Society"
  | "Stealth"
  | "Survival"
  | "Thievery"

export type Skill = {
  id: string
  name: string
  modifier: Ability
  proficiency: number
  type?: string
}

export const Skills: Record<SkillName, Skill> = {
  Acrobatics: {
    id: "Acrobatics",
    name: "Acrobatics",
    modifier: Ability.DEX,
    proficiency: 0,
  },
  Arcana: {
    id: "Arcana",
    name: "Arcana",
    modifier: Ability.INT,
    proficiency: 0,
  },
  Athletics: {
    id: "Athletics",
    name: "Athletics",
    modifier: Ability.STR,
    proficiency: 0,
  },
  Crafting: {
    id: "Crafting",
    name: "Crafting",
    modifier: Ability.INT,
    proficiency: 0,
  },
  Deception: {
    id: "Deception",
    name: "Deception",
    modifier: Ability.CHA,
    proficiency: 0,
  },
  Diplomacy: {
    id: "Diplomacy",
    name: "Diplomacy",
    modifier: Ability.CHA,
    proficiency: 0,
  },
  Intimidation: {
    id: "Intimidation",
    name: "Intimidation",
    modifier: Ability.CHA,
    proficiency: 0,
  },
  Lore: {
    id: "Lore",
    name: "Lore",
    modifier: Ability.INT,
    proficiency: 0,
    type: "General",
  },
  Medicine: {
    id: "Medicine",
    name: "Medicine",
    modifier: Ability.WIS,
    proficiency: 0,
  },
  Nature: {
    id: "Nature",
    name: "Nature",
    modifier: Ability.WIS,
    proficiency: 0,
  },
  Occultism: {
    id: "Occultism",
    name: "Occultism",
    modifier: Ability.INT,
    proficiency: 0,
  },
  Performance: {
    id: "Performance",
    name: "Performance",
    modifier: Ability.CHA,
    proficiency: 0,
  },
  Religion: {
    id: "Religion",
    name: "Religion",
    modifier: Ability.WIS,
    proficiency: 0,
  },
  Society: {
    id: "Society",
    name: "Society",
    modifier: Ability.INT,
    proficiency: 0,
  },
  Stealth: {
    id: "Stealth",
    name: "Stealth",
    modifier: Ability.DEX,
    proficiency: 0,
  },
  Survival: {
    id: "Survival",
    name: "Survival",
    modifier: Ability.WIS,
    proficiency: 0,
  },
  Thievery: {
    id: "Thievery",
    name: "Thievery",
    modifier: Ability.DEX,
    proficiency: 0,
  },
}

export const Proficiencies = {
  TRAINED: 2,
  EXPERT: 4,
  MASTER: 6,
  LEGEND: 8,
}
