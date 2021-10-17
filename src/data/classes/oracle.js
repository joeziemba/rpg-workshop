import { Abilities } from "../abilities"
import { generateSkillBoosts } from "../models/SkillBoost"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"

const nameOfClass = "Oracle"

export const Oracle = {
  name: nameOfClass,
  keyAbility: Abilities.CHA,
  perceptionProficiency: Proficiencies.EXPERT,
  hp: 8,
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
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "4",
      type: nameOfClass + "_7",
      level: 7,
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_9",
      level: 9,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_13",
      level: 13,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "7",
      type: nameOfClass + "_17",
      level: 17,
      proficiency: Proficiencies.LEGEND,
    },
  ],
  additionalSkillChoices: 4,
  attacks: {
    simpleWeapons: 1,
  },
  defenses: { unarmored: Proficiencies.TRAINED },
  abilityBoosts: [
    { ability: Abilities.CHA, source: nameOfClass, id: "Bard1" },
  ],
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Occultism,
      source: nameOfClass,
      level: 1,
    },
    {
      skill: Skills.Performance,
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
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 1,
    },
  ]),
}
