import { Ability } from "./abilities"

export const Ancestries = {
  Dwarf: {
    name: "Dwarf",
    hp: 10,
    size: "Medium",
    speed: 20,
    abilityBoosts: [
      {
        ability: Ability.CON,
        source: "Dwarf",
        id: "1",
      },
      {
        ability: Ability.WIS,
        source: "Dwarf",
        id: "2",
      },
      {
        ability: Ability.FREE,
        source: "Dwarf",
        id: "3",
        type: Ability.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Ability.CHA,
        source: "Dwarf",
        id: "1",
      },
    ],
    languages: ["Common", "Dwarven"],
    traits: ["Dwarf", "Humanoid"],
  },
  Elf: {
    name: "Elf",
    hp: 6,
    size: "Medium",
    speed: 30,
    abilityBoosts: [
      {
        ability: Ability.DEX,
        source: "Elf",
        id: "1",
      },
      {
        ability: Ability.INT,
        source: "Elf",
        id: "2",
      },
      {
        ability: Ability.FREE,
        source: "Elf",
        id: "3",
        type: Ability.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Ability.CON,
        source: "Elf",
        id: "1",
      },
    ],
    languages: ["Common", "Elven"],
    traits: ["Elf", "Humanoid"],
  },
  Gnome: {
    name: "Gnome",
    hp: 8,
    size: "small",
    speed: 25,
    abilityBoosts: [
      { ability: Ability.CON, source: "Gnome", id: "Gnome1" },
      { ability: Ability.CHA, source: "Gnome", id: "Gnome2" },
      {
        ability: Ability.FREE,
        source: "Gnome",
        id: "Gnome3",
        type: Ability.FREE,
      },
    ],
    abilityFlaws: [
      { ability: Ability.STR, source: "Gnome", id: "Gnome1" },
    ],
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
      {
        ability: Ability.DEX,
        source: "Goblin",
        id: "1",
      },
      {
        ability: Ability.CHA,
        source: "Goblin",
        id: "2",
      },
      {
        ability: Ability.FREE,
        source: "Goblin",
        id: "3",
        type: Ability.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Ability.WIS,
        source: "Goblin",
        id: "1",
      },
    ],
    languages: ["Common", "Goblin"],
  },
  Human: {
    name: "Human",
    hp: 8,
    size: "medium",
    speed: 25,
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Human",
        id: "Human1",
        type: Ability.FREE,
      },
      {
        ability: Ability.FREE,
        source: "Human",
        id: "Human2",
        type: Ability.FREE,
      },
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
    name: "Halfling",
    hp: 6,
    size: "Small",
    speed: 25,
    abilityBoosts: [
      {
        ability: Ability.DEX,
        source: "Halfling",
        id: "1",
      },
      {
        ability: Ability.WIS,
        source: "Halfling",
        id: "2",
      },
      {
        ability: Ability.FREE,
        source: "Halfling",
        id: "3",
        type: Ability.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Ability.STR,
        source: "Halfling",
        id: "1",
      },
    ],
    languages: ["Common", "Halfling"],
  },
}
