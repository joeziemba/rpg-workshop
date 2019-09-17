import { Abilities } from "./abilities";

export const Ancestries = {
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
        type: Abilities.FREE
      },
      {
        ability: Abilities.FREE,
        source: "Human",
        id: "Human2",
        type: Abilities.FREE
      }
    ],
    abilityFlaws: [],
    languages: ["Common"],
    traits: ["Human", "Humanoid"],
    heritages: {
      halfElf: {
        name: "Half Elf",
        traits: ["Elf"]
      },
      halfOrc: {},
      skilled: {},
      versatile: {}
    }
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
        type: Abilities.FREE
      }
    ],
    abilityFlaws: [{ ability: Abilities.STR, source: "Gnome", id: "Gnome1" }],
    languages: ["Common"],
    traits: ["Gnome", "Humanoid"],
    heritages: {
      halfElf: {
        name: "Half Elf",
        traits: ["Elf"]
      },
      halfOrc: {},
      skilled: {},
      versatile: {}
    }
  }
};
