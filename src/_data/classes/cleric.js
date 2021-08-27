import { Abilities } from "../abilities"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"
import { generateSkillBoosts } from "../models/SkillBoost"

const nameOfClass = "Cleric"

export const Cleric = {
  name: nameOfClass,
  keyAbility: Abilities.WIS,
  perceptionProficiency: Proficiencies.TRAINED,
  perceptionBoosts: [
    {
      source: nameOfClass,
      proficiency: Proficiencies.TRAINED,
      type: nameOfClass + "_1",
    },
    {
      source: nameOfClass,
      proficiency: Proficiencies.EXPERT,
      type: nameOfClass + "_5",
    },
  ],
  hp: 8,
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
      proficiency: Proficiencies.TRAINED,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "3",
      type: nameOfClass + "_1",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "4",
      type: nameOfClass + "_9",
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_11",
      proficiency: Proficiencies.EXPERT,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  abilityBoosts: [
    {
      ability: Abilities.WIS,
      source: nameOfClass,
      id: nameOfClass + "1",
    },
  ],
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Religion,
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
