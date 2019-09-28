import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import { Skills } from "./skills";

export const Classes = {
  Bard: {
    name: "Bard",
    keyAbility: Abilities.CHA,
    perceptionProficiency: Proficiencies.TRAINED,
    hp: 8,
    saves: {
      fortitude: Proficiencies.TRAINED,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    additionalSkillChoices: 4,
    attacks: {
      simpleWeapons: 1
    },
    abilityBoosts: [{ ability: Abilities.CHA, source: "Bard", id: "Bard1" }],
    skillBoosts: [
      {
        skill: Skills.Occultism,
        source: "Bard",
        id: "Bard1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: Skills.Performance,
        source: "Bard",
        id: "Bard2",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 4
  },
  Cleric: {
    name: "Cleric",
    keyAbility: Abilities.WIS,
    perceptionProficiency: Proficiencies.TRAINED,
    hp: 8,
    saves: {
      fortitude: Proficiencies.TRAINED,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    skills: {
      occultism: 1,
      performance: 1
    },
    additionalSkillChoices: 4,
    attacks: {
      simpleWeapons: 1
    },
    abilityBoosts: [
      { ability: Abilities.WIS, source: "Cleric", id: "Cleric1" }
    ],
    skillBoosts: [
      {
        skill: Skills.Religion,
        source: "Cleric",
        id: "1",
        proficiency: Proficiencies.EXPERT
      }
    ],
    freeSkills: 3 // 2 + one from Deity
  },
  Ranger: {
    name: "Ranger",
    hp: 8,
    keyAbility: Abilities.WIS,
    perceptionProficiency: Proficiencies.EXPERT,
    saves: {
      fortitude: Proficiencies.EXPERT,
      reflex: Proficiencies.EXPERT,
      will: Proficiencies.TRAINED
    },
    abilityBoosts: [
      {
        ability: Abilities.WIS,
        source: "Ranger",
        id: "1"
      }
    ],
    skillBoosts: [
      {
        skill: Skills.Nature,
        source: "Ranger",
        id: "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: Skills.Survival,
        source: "Ranger",
        id: "2",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 4
  }
};
