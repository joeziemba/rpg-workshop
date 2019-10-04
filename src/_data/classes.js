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
             Fortitude: Proficiencies.EXPERT,
             Reflex: Proficiencies.EXPERT,
             Will: Proficiencies.TRAINED
           },
           defenses: { unarmored: Proficiencies.TRAINED },
           skillBoosts: [
             {
               skill: Skills.Crafting,
               source: "Alchemist",
               id: "Alc1",
               proficiency: Proficiencies.TRAINED
             }
           ],
           freeSkills: 3,
           abilityBoosts: [
             { ability: Abilities.INT, source: "Alchemist", id: "Alc1" }
           ]
         },
         Barbarian: {
           name: "Barbarian",
           keyAbility: Abilities.STR,
           hp: 12,
           perceptionProficiency: Proficiencies.EXPERT,
           saves: {
             Fortitude: Proficiencies.EXPERT,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
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
           perceptionProficiency: Proficiencies.EXPERT,
           hp: 8,
           saves: {
             Fortitude: Proficiencies.TRAINED,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           additionalSkillChoices: 4,
           attacks: {
             simpleWeapons: 1
           },
           defenses: { unarmored: Proficiencies.TRAINED },
           abilityBoosts: [
             { ability: Abilities.CHA, source: "Bard", id: "Bard1" }
           ],
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
               exclude: [
                 Abilities.CON,
                 Abilities.INT,
                 Abilities.WIS,
                 Abilities.CHA
               ],
               type: Abilities.FREE
             }
           ],
           perceptionProficiency: Proficiencies.TRAINED,
           hp: 10,
           saves: {
             Fortitude: Proficiencies.EXPERT,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
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
             Fortitude: Proficiencies.TRAINED,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
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
           abilityBoosts: [
             { ability: Abilities.WIS, source: "Druid", id: "Druid1" }
           ],
           hp: 8,
           perceptionProficiency: Proficiencies.TRAINED,
           saves: {
             Fortitude: Proficiencies.TRAINED,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
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
           abilityBoosts: [
             {
               ability: Abilities.FREE,
               source: "Fighter",
               id: "Fighter1",
               exclude: [
                 Abilities.CON,
                 Abilities.INT,
                 Abilities.WIS,
                 Abilities.CHA
               ],
               type: Abilities.FREE
             }
           ],
           hp: 10,
           perceptionProficiency: Proficiencies.EXPERT,
           saves: {
             Fortitude: Proficiencies.EXPERT,
             Reflex: Proficiencies.EXPERT,
             Will: Proficiencies.TRAINED
           },
           defenses: { unarmored: Proficiencies.TRAINED },
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
               exclude: [
                 Abilities.CON,
                 Abilities.INT,
                 Abilities.WIS,
                 Abilities.CHA
               ],
               type: Abilities.FREE
             }
           ],
           hp: 10,
           perceptionProficiency: Proficiencies.TRAINED,
           saves: {
             Fortitude: Proficiencies.EXPERT,
             Reflex: Proficiencies.EXPERT,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
           skillBoosts: [],
           freeSkills: 4
         },
         Ranger: {
           name: "Ranger",
           hp: 10,
           keyAbility: Abilities.WIS,
           perceptionProficiency: Proficiencies.EXPERT,
           saves: {
             Fortitude: Proficiencies.EXPERT,
             Reflex: Proficiencies.EXPERT,
             Will: Proficiencies.TRAINED
           },
           defenses: { unarmored: Proficiencies.TRAINED },
           abilityBoosts: [
             {
               ability: Abilities.FREE,
               source: "Ranger",
               id: "Ranger1",
               exclude: [
                 Abilities.CON,
                 Abilities.INT,
                 Abilities.WIS,
                 Abilities.CHA
               ],
               type: Abilities.FREE
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
               id: "Rogue1",
               exclude: [Abilities.CON, Abilities.INT, Abilities.WIS],
               type: Abilities.FREE
             }
           ],
           hp: 8,
           perceptionProficiency: Proficiencies.EXPERT,
           saves: {
             Fortitude: Proficiencies.TRAINED,
             Reflex: Proficiencies.EXPERT,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
           skillBoosts: [
             {
               skill: Skills.Stealth,
               source: "Rogue",
               id: "Rogue1",
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
             Fortitude: Proficiencies.TRAINED,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
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
             Fortitude: Proficiencies.TRAINED,
             Reflex: Proficiencies.TRAINED,
             Will: Proficiencies.EXPERT
           },
           defenses: { unarmored: Proficiencies.TRAINED },
           skillBoosts: [
             {
               skill: Skills.Arcana,
               source: "Wizard",
               id: "1",
               proficiency: Proficiencies.TRAINED
             }
           ],
           freeSkills: 2
         }
       };
