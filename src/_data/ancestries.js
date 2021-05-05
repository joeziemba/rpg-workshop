import { Abilities } from "./abilities";

export const Ancestries = {
  Dwarf: {
    name: "Dwarf",
    hp: 10,
    size: "Medium",
    speed: 20,
    abilityBoosts: [
      {
        ability: Abilities.CON,
        source: "Dwarf",
        id: "1",
      },
      {
        ability: Abilities.WIS,
        source: "Dwarf",
        id: "2",
      },
      {
        ability: Abilities.FREE,
        source: "Dwarf",
        id: "3",
        type: Abilities.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Abilities.CHA,
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
        ability: Abilities.DEX,
        source: "Elf",
        id: "1",
      },
      {
        ability: Abilities.INT,
        source: "Elf",
        id: "2",
      },
      {
        ability: Abilities.FREE,
        source: "Elf",
        id: "3",
        type: Abilities.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Abilities.CON,
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
      { ability: Abilities.CON, source: "Gnome", id: "Gnome1" },
      { ability: Abilities.CHA, source: "Gnome", id: "Gnome2" },
      {
        ability: Abilities.FREE,
        source: "Gnome",
        id: "Gnome3",
        type: Abilities.FREE,
      },
    ],
    abilityFlaws: [
      { ability: Abilities.STR, source: "Gnome", id: "Gnome1" },
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
        ability: Abilities.DEX,
        source: "Goblin",
        id: "1",
      },
      {
        ability: Abilities.CHA,
        source: "Goblin",
        id: "2",
      },
      {
        ability: Abilities.FREE,
        source: "Goblin",
        id: "3",
        type: Abilities.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Abilities.WIS,
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
        ability: Abilities.FREE,
        source: "Human",
        id: "Human1",
        type: Abilities.FREE,
      },
      {
        ability: Abilities.FREE,
        source: "Human",
        id: "Human2",
        type: Abilities.FREE,
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
        ability: Abilities.DEX,
        source: "Halfling",
        id: "1",
      },
      {
        ability: Abilities.WIS,
        source: "Halfling",
        id: "2",
      },
      {
        ability: Abilities.FREE,
        source: "Halfling",
        id: "3",
        type: Abilities.FREE,
      },
    ],
    abilityFlaws: [
      {
        ability: Abilities.STR,
        source: "Halfling",
        id: "1",
      },
    ],
    languages: ["Common", "Halfling"],
  },
};
