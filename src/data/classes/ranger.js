import { Ability } from "../abilities"
import { generateSkillBoosts } from "../models/SkillBoost"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"

const nameOfClass = "Ranger"

export const Ranger = {
  name: nameOfClass,
  hp: 10,
  keyAbility: Ability.WIS,
  perceptionProficiency: Proficiencies.EXPERT,
  perceptionBoosts: [
    {
      source: nameOfClass,
      proficiency: Proficiencies.EXPERT,
      type: nameOfClass + "_1",
      level: 1,
    },
    {
      source: nameOfClass,
      proficiency: Proficiencies.MASTER,
      type: nameOfClass + "_7",
      level: 7,
    },
    {
      source: nameOfClass,
      proficiency: Proficiencies.LEGEND,
      type: nameOfClass + "_15",
      level: 15,
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
      proficiency: Proficiencies.TRAINED,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "4",
      type: nameOfClass + "_3",
      level: 3,
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_7",
      level: 7,
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_11",
      level: 11,
      proficiency: Proficiencies.MASTER,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  abilityBoosts: [
    {
      ability: Ability.FREE,
      source: nameOfClass,
      id: nameOfClass + "1",
      exclude: [
        Ability.CON,
        Ability.INT,
        Ability.WIS,
        Ability.CHA,
      ],
      type: Ability.FREE,
    },
  ],
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Nature,
      source: nameOfClass,
      level: 1,
    },
    {
      skill: Skills.Survival,
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
