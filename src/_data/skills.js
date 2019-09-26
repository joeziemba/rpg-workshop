import { Abilities } from "./abilities";

export const Skills = {
  Acrobatics: {
    id: "Acrobatics",
    name: "Acrobatics",
    modifier: Abilities.DEX,
    proficiency: 0
  },
  Arcana: {
    id: "Arcana",
    name: "Arcana",
    modifier: Abilities.INT,
    proficiency: 0
  },
  Athletics: {
    id: "Athletics",
    name: "Athletics",
    modifier: Abilities.STR,
    proficiency: 0
  },
  Crafting: {
    id: "Crafting",
    name: "Crafting",
    modifier: Abilities.INT,
    proficiency: 0
  },
  Deception: {
    id: "Deception",
    name: "Deception",
    modifier: Abilities.CHA,
    proficiency: 0
  },
  Diplomacy: {
    id: "Diplomacy",
    name: "Diplomacy",
    modifier: Abilities.CHA,
    proficiency: 0
  },
  Intimidation: {
    id: "Intimidation",
    name: "Intimidation",
    modifier: Abilities.CHA,
    proficiency: 0
  },
  MerchantileLore: {
    id: "MerchantileLore",
    name: "Lore (Merchantile)",
    modifier: Abilities.INT,
    proficiency: 0
  },
  EngineeringLore: {
    id: "EngineeringLore",
    name: "Lore (Engineering)",
    modifier: Abilities.INT,
    proficiency: 0
  },
  Lore: {
    id: "Lore",
    name: "Lore",
    modifier: Abilities.INT,
    proficiency: 0,
    type: "General"
  },
  Medicine: {
    id: "Medicine",
    name: "Medicine",
    modifier: Abilities.WIS,
    proficiency: 0
  },
  Nature: {
    id: "Nature",
    name: "Nature",
    modifier: Abilities.WIS,
    proficiency: 0
  },
  Occultism: {
    id: "Occultism",
    name: "Occultism",
    modifier: Abilities.INT,
    proficiency: 0
  },
  Performance: {
    id: "Performance",
    name: "Performance",
    modifier: Abilities.CHA,
    proficiency: 0
  },
  Religion: {
    id: "Religion",
    name: "Religion",
    modifier: Abilities.WIS,
    proficiency: 0
  },
  Society: {
    id: "Society",
    name: "Society",
    modifier: Abilities.INT,
    proficiency: 0
  },
  Stealth: {
    id: "Stealth",
    name: "Stealth",
    modifier: Abilities.DEX,
    proficiency: 0
  },
  Survival: {
    id: "Survival",
    name: "Survival",
    modifier: Abilities.WIS,
    proficiency: 0
  },
  Thievery: {
    id: "Thievery",
    name: "Thievery",
    modifier: Abilities.DEX,
    proficiency: 0
  }
};

export const Proficiencies = {
  TRAINED: 2,
  EXPERT: 4,
  MASTER: 6,
  LEGEND: 8
};
