import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import { Skills } from "./skills";

export const Backgrounds = {
  Merchant: {
    name: "Merchant",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Merchant",
        type: Abilities.FREE,
        id: "Merchant1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [Abilities.STR, Abilities.DEX, Abilities.CON, Abilities.WIS]
      },
      {
        ability: Abilities.FREE,
        source: "Merchant",
        type: Abilities.FREE,
        id: "Merchant2"
      }
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Diplomacy,
        source: "Merchant"
      },
      {
        skill: Skills.MerchantileLore,
        proficiency: Proficiencies.TRAINED,
        source: "Merchant"
      }
    ]
  },
  Warrior: {
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
        source: "Warrior"
      },
      {
        skill: Skills.EngineeringLore,
        proficiency: Proficiencies.TRAINED,
        source: "Warrior"
      }
    ]
  }
};
