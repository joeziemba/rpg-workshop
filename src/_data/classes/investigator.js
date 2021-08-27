import { Abilities } from "../abilities"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"
import { generateSkillBoosts } from "../models/SkillBoost"

const nameOfClass = "Investigator"

export const Investigator = {
  name: nameOfClass,
  abilityBoosts: [
    {
      ability: Abilities.INT,
      source: nameOfClass,
      id: "1",
    },
  ],
  hp: 8,
  perceptionProficiency: Proficiencies.EXPERT,
  perceptionBoosts: [
    {
      source: nameOfClass,
      proficiency: Proficiencies.EXPERT,
      type: nameOfClass + "_1",
    },
    {
      source: nameOfClass,
      proficiency: Proficiencies.MASTER,
      type: nameOfClass + "_7",
    },
    {
      source: nameOfClass,
      proficiency: Proficiencies.LEGEND,
      type: nameOfClass + "_13",
    },
  ],

  saveBoosts: [
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "1",
      type: nameOfClass + "_1",
      proficiency: Proficiencies.TRAINED,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "2",
      type: nameOfClass + "_1",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "3",
      type: nameOfClass + "_1",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_9",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.Will,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_11",
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_15",
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_17",
      proficiency: Proficiencies.MASTER,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Society,
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
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 1,
    },
  ]),
}
