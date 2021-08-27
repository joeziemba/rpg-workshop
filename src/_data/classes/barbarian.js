import SaveBoost from "../models/SaveBoost"
import { Abilities } from "../abilities"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"
import { generateSkillBoosts } from "../models/SkillBoost"

const nameOfClass = "Barbarian"

export const Barbarian = {
  name: nameOfClass,
  keyAbility: Abilities.STR,
  hp: 12,
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
      type: nameOfClass + "_17",
    },
  ],

  saveBoosts: [
    new SaveBoost({
      save: Saves.FORT,
      source: nameOfClass,
      proficiency: Proficiencies.EXPERT,
      level: 1,
    }),
    new SaveBoost({
      save: Saves.REF,
      source: nameOfClass,
      level: 1,
      proficiency: Proficiencies.TRAINED,
    }),
    new SaveBoost({
      save: Saves.WILL,
      source: nameOfClass,
      level: 1,
      proficiency: Proficiencies.EXPERT,
    }),
    new SaveBoost({
      save: Saves.FORT,
      source: nameOfClass,
      level: 7,
      proficiency: Proficiencies.MASTER,
    }),
    new SaveBoost({
      save: Saves.REF,
      source: nameOfClass,
      level: 9,
      proficiency: Proficiencies.EXPERT,
    }),
    new SaveBoost({
      save: Saves.FORT,
      source: nameOfClass,
      level: 13,
      proficiency: Proficiencies.LEGEND,
    }),
    new SaveBoost({
      save: Saves.WILL,
      source: nameOfClass,
      level: 15,
      proficiency: Proficiencies.MASTER,
    }),
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Athletics,
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
  abilityBoosts: [
    { ability: Abilities.STR, source: nameOfClass, id: "Barb1" },
  ],
}
