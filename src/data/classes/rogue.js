import { Abilities } from "../abilities"
import { Proficiencies, Skills } from "../skills"
import { Saves } from "./saves"
import { generateSkillBoosts } from "../models/SkillBoost"

const nameOfClass = "Rogue"

export const Rogue = {
  name: nameOfClass,
  abilityBoosts: [
    {
      ability: Abilities.FREE,
      source: nameOfClass,
      id: nameOfClass + "1",
      exclude: [Abilities.CON, Abilities.INT, Abilities.WIS],
      type: Abilities.FREE,
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
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "4",
      type: nameOfClass + "_7",
      proficiency: Proficiencies.MASTER,
    },
    {
      save: Saves.FORT,
      source: nameOfClass,
      id: nameOfClass + "5",
      type: nameOfClass + "_9",
      proficiency: Proficiencies.EXPERT,
    },
    {
      save: Saves.REF,
      source: nameOfClass,
      id: nameOfClass + "6",
      type: nameOfClass + "_13",
      proficiency: Proficiencies.LEGEND,
    },
    {
      save: Saves.WILL,
      source: nameOfClass,
      id: nameOfClass + "7",
      type: nameOfClass + "_17",
      proficiency: Proficiencies.MASTER,
    },
  ],
  defenses: { unarmored: Proficiencies.TRAINED },
  skillBoosts: generateSkillBoosts([
    {
      skill: Skills.Stealth,
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
      level: 2,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 4,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 6,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 8,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 10,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 12,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 14,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 16,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 18,
    },
    {
      skill: { id: "Free" },
      source: nameOfClass,
      level: 20,
    },
  ]),
  feats: [
    { type: "skill_1" },
    { type: "skill_3" },
    { type: "skill_5" },
    { type: "skill_7" },
    { type: "skill_9" },
    { type: "skill_11" },
    { type: "skill_13" },
    { type: "skill_15" },
    { type: "skill_17" },
    { type: "skill_19" },
  ],
}
