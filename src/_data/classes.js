import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import { Skills } from "./skills";

export const Classes = {
  Alchemist: {
    name: "Alchemist",
    keyAbility: Abilities.INT,
    hp: 8,
    perceptionProficiency: Proficiencies.TRAINED,
    saves: {
      fortitude: Proficiencies.EXPERT,
      reflex: Proficiencies.EXPERT,
      will: Proficiencies.TRAINED
    },
    skillBoosts: [
      {
        skill: Skills.Crafting,
        source: "Alchemist",
        id: "Alc1",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 3,
    abilityBoosts: [{ ability: Abilities.INT, source: "Alchemist", id: "Alc1" }]
  },
  Barbarian: {
    name: "Barbarian",
    keyAbility: Abilities.STR,
    hp: 12,
    perceptionProficiency: Proficiencies.EXPERT,
    saves: {
      fortitude: Proficiencies.EXPERT,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [
      {
        skill: Skills.Athletics,
        source: "Barbarian",
        id: "Barb1",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 3,
    abilityBoosts: [
      { ability: Abilities.STR, source: "Barbarian", id: "Barb1" }
    ]
  },
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
  Champion: {
    name: "Champion",
    keyAbility: Abilities.STR,
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Champion",
        id: "Champ1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS, Abilities.CHA],
        type: Abilities.FREE
      }
    ],
    perceptionProficiency: Proficiencies.TRAINED,
    hp: 10,
    saves: {
      fortitude: Proficiencies.EXPERT,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [
      {
        skill: Skills.Religion,
        source: "Champion",
        id: "1",
        proficiency: Proficiencies.EXPERT
      }
    ],
    freeSkills: 3
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
  },
  Druid: {
    name: "Druid",
    keyAbility: Abilities.WIS,
    abilityBoosts: [{ ability: Abilities.WIS, source: "Druid", id: "Druid1" }],
    hp: 8,
    perceptionProficiency: Proficiencies.TRAINED,
    saves: {
      fortitude: Proficiencies.TRAINED,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [
      {
        skill: Skills.Nature,
        source: "Druid",
        id: "1",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 3 // One from Druidic order
  },
  Fighter: {
    name: "Fighter",
    keyAbility: Abilities.STR,
    abilityBoosts: [{ ability: Abilities.STR, source: "Fighter", id: "1" }],
    hp: 10,
    perceptionProficiency: Proficiencies.EXPERT,
    saves: {
      fortitude: Proficiencies.EXPERT,
      reflex: Proficiencies.EXPERT,
      will: Proficiencies.TRAINED
    },
    skillBoosts: [
      {
        skill: Skills.Athletics,
        source: "Fighter",
        id: "1",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 3 // One from Druidic order
  },
  Monk: {
    name: "Monk",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Monk",
        id: "1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS, Abilities.CHA],
        type: Abilities.FREE
      }
    ],
    hp: 10,
    perceptionProficiency: Proficiencies.TRAINED,
    saves: {
      fortitude: Proficiencies.EXPERT,
      reflex: Proficiencies.EXPERT,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [],
    freeSkills: 4
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
  },
  Rogue: {
    name: "Rogue",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Rogue",
        id: "1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS],
        type: Abilities.FREE
      }
    ],
    hp: 10,
    perceptionProficiency: Proficiencies.EXPERT,
    saves: {
      fortitude: Proficiencies.TRAINED,
      reflex: Proficiencies.EXPERT,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [
      {
        skill: Skills.Stealth,
        source: "Rogue",
        id: "1",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 7
  },
  Sorcerer: {
    name: "Sorcerer",
    abilityBoosts: [
      {
        ability: Abilities.CHA,
        source: "Sorcerer",
        id: "1"
      }
    ],
    hp: 6,
    perceptionProficiency: Proficiencies.TRAINED,
    saves: {
      fortitude: Proficiencies.TRAINED,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [],
    freeSkills: 3
  },
  Wizard: {
    name: "Wizard",
    abilityBoosts: [
      {
        ability: Abilities.INT,
        source: "Wizard",
        id: "1"
      }
    ],
    hp: 6,
    perceptionProficiency: Proficiencies.TRAINED,
    saves: {
      fortitude: Proficiencies.TRAINED,
      reflex: Proficiencies.TRAINED,
      will: Proficiencies.EXPERT
    },
    skillBoosts: [
      {
        skill: Skills.Arcana,
        source: "Wizard",
        id: "1",
        proficiency: Proficiencies.TRAINED
      }
    ],
    freeSkills: 3
  }
};
