import { Abilities } from "../abilities"
import { generateSkillBoosts } from "../models/SkillBoost"
import { Proficiencies } from "../skills"
import { Saves } from "./saves"

const nameOfClass = "Witch"

export const Witch = {
  name: nameOfClass,
  abilityBoosts: [
    {
      ability: Abilities.INT,
      source: nameOfClass,
      id: "1",
    },
  ],
  hp: 6,
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
      type: nameOfClass + "_11",
      level: 11,
    },
  ],

  saveBoosts: [
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "1",
      type: nameOfClass + "_1",
      level: 1,
      proficiency: Proficiencies.TRAINED,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "2",
      type: nameOfClass + "_1",
      level: 1,
      proficiency: Proficiencies.TRAINED,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "3",
      type: nameOfClass + "_1",
      level: 1,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "4",
      type: nameOfClass + "_5",
      level: 5,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_9",
      level: 9,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_17",
      level: 17,
      proficiency: Proficiencies.MASTER,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
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
