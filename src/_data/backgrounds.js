import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import { Skills } from "./skills";

export const Backgrounds = {
  FortuneTeller: {
    id: "FortuneTeller",
    name: "Fortune Teller",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "FortuneTeller",
        type: Abilities.FREE,
        id: "1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [Abilities.STR, Abilities.DEX, Abilities.CON, Abilities.WIS]
      },
      {
        ability: Abilities.FREE,
        source: "FortuneTeller",
        type: Abilities.FREE,
        id: "2"
      }
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Occultism,
        source: "FortuneTeller",
        id: "1"
      },
      {
        id: "2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        source: "FortuneTeller"
      }
    ]
  },
  Gambler: {
    id: "Gambler",
    name: "Gambler",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Gambler",
        type: Abilities.FREE,
        id: "1",
        restrictTo: [Abilities.DEX, Abilities.CHA],
        exclude: [Abilities.STR, Abilities.INT, Abilities.CON, Abilities.WIS]
      },
      {
        ability: Abilities.FREE,
        source: "Gambler",
        type: Abilities.FREE,
        id: "2"
      }
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Deception,
        source: "Gambler",
        id: "1"
      },
      {
        id: "2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        source: "Gambler"
      }
    ]
  },
  Merchant: {
    id: "Merchant",
    name: "Merchant",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Merchant",
        type: Abilities.FREE,
        id: "1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [Abilities.STR, Abilities.DEX, Abilities.CON, Abilities.WIS]
      },
      {
        ability: Abilities.FREE,
        source: "Merchant",
        type: Abilities.FREE,
        id: "2"
      }
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Diplomacy,
        source: "Merchant",
        id: "1"
      },
      {
        skill: Skills.MerchantileLore,
        proficiency: Proficiencies.TRAINED,
        source: "Merchant",
        id: "2"
      }
    ]
  },
  Nomad: {
    id: "Nomad",
    name: "Nomad",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Nomad",
        type: Abilities.FREE,
        id: "1",
        restrictTo: [Abilities.WIS, Abilities.CON],
        exclude: [Abilities.INT, Abilities.DEX, Abilities.CHA, Abilities.STR]
      },
      {
        ability: Abilities.FREE,
        source: "Nomad",
        type: Abilities.FREE,
        id: "2"
      }
    ],
    skillBoosts: [
      {
        skill: Skills.Survival,
        proficiency: Proficiencies.TRAINED,
        source: "Nomad",
        id: "1"
      },
      {
        skill: Skills.Lore,
        loreType: "1 Travelled Terrain",
        proficiency: Proficiencies.TRAINED,
        source: "Nomad",
        id: "2"
      }
    ]
  },
  Warrior: {
    id: "Warrior",
    name: "Warrior",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Warrior",
        type: Abilities.FREE,
        id: "1",
        restrictTo: [Abilities.STR, Abilities.CON],
        exclude: [Abilities.INT, Abilities.DEX, Abilities.CHA, Abilities.WIS]
      },
      {
        ability: Abilities.FREE,
        source: "Warrior",
        type: Abilities.FREE,
        id: "2"
      }
    ],
    skillBoosts: [
      {
        skill: Skills.Crafting,
        proficiency: Proficiencies.TRAINED,
        source: "Warrior",
        id: "1"
      },
      {
        skill: Skills.EngineeringLore,
        proficiency: Proficiencies.TRAINED,
        source: "Warrior",
        id: "2"
      }
    ]
  }
};
