import { Abilities } from "../abilities"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"
import { generateSkillBoosts } from "../models/SkillBoost"

const nameOfClass = "Druid"

export const Druid = {
  name: nameOfClass,
  keyAbility: Abilities.WIS,
  abilityBoosts: [
    {
      ability: Abilities.WIS,
      source: nameOfClass,
      id: nameOfClass + "1",
    },
  ],
  hp: 8,
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
      type: nameOfClass + "_3",
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
      type: nameOfClass + "_1",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_3",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_5",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "7",
      type: nameOfClass + "_11",
      proficiency: Proficiencies.MASTER,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Nature,
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
