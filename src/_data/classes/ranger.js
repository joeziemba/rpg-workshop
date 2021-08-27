import { Abilities } from "../abilities"
import { generateSkillBoosts } from "../models/SkillBoost"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"

const nameOfClass = "Ranger"

export const Ranger = {
  name: nameOfClass,
  hp: 10,
  keyAbility: Abilities.WIS,
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
      type: nameOfClass + "_15",
    },
  ],
  saveBoosts: [
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "1",
      type: nameOfClass + "_1",
      proficiency: Proficiencies.EXPERT,
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
      proficiency: Proficiencies.TRAINED,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "4",
      type: nameOfClass + "_3",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_7",
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_11",
      proficiency: Proficiencies.MASTER,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  abilityBoosts: [
    {
      ability: Abilities.FREE,
      source: nameOfClass,
      id: nameOfClass + "1",
      exclude: [
        Abilities.CON,
        Abilities.INT,
        Abilities.WIS,
        Abilities.CHA,
      ],
      type: Abilities.FREE,
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
