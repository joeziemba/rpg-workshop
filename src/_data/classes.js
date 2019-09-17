import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import {Skills} from "./skills";

export const Classes = {
  Bard: {
    name: "Bard",
    spellcasting: true, // needed to identify feat pre-requisites
    hp: 8,
    saves: {
      fortitude: 1,
      reflext: 1,
      will: 2
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
    spellcasting: true, // needed to identify feat pre-requisites
    hp: 8,
    saves: {
      fortitude: 1,
      reflext: 1,
      will: 2
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
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 3 // 2 + one from Deity
  }
};
