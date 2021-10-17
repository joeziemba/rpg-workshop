import { Abilities } from "../abilities"
import { Proficiencies } from "../skills"
import { Saves } from "./saves"
import { generateSkillBoosts } from "../models/SkillBoost"

const nameOfClass = "Monk"

export const Monk = {
  name: nameOfClass,
  abilityBoosts: [
    {
      ability: Abilities.FREE,
      source: nameOfClass,
      id: "1",
      exclude: [
        Abilities.CON,
        Abilities.INT,
        Abilities.WIS,
        Abilities.CHA,
      ],
      type: Abilities.FREE,
    },
  ],
  hp: 10,
  perceptionProficiency: Proficiencies.TRAINED,
  perceptionBoosts: [
    {
      source: nameOfClass,
      proficiency: Proficiencies.TRAINED,
      type: nameOfClass + "_1",
      level: 1,
    },
    {
      source: nameOfClass,
      proficiency: Proficiencies.EXPERT,
      type: nameOfClass + "_5",
      level: 5,
    },
  ],

  saveBoosts: [
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "1",
      type: nameOfClass + "_1",
      level: 1,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "2",
      type: nameOfClass + "_1",
      level: 1,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "3",
      type: nameOfClass + "_1",
      level: 1,
      proficiency: Proficiencies.EXPERT,
    },
  ],
  defenses: { unarmored: Proficiencies.EXPERT },
  skillBoosts: generateSkillBoosts([
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 1,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 1,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 1,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 1,
    },
  ]),
}
