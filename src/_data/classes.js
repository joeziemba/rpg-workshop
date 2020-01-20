import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import { Skills } from "./skills";

export const Saves = {
  FORT: "fortitude",
  WILL: "will",
  REF: "reflex"
};

export const ClassNames = {
  ALC: "Alchemist",
  BARB: "Barbarian",
  BARD: "Bard",
  CHAMP: "Champion",
  CLER: "Cleric",
  DRUID: "Druid",
  FIGHT: "Fighter",
  MONK: "Monk",
  RANGE: "Ranger",
  ROGUE: "Rogue",
  SORC: "Sorcerer",
  WIZ: "Wizard"
};

export const Classes = {
  Alchemist: {
    name: ClassNames.ALC,
    keyAbility: Abilities.INT,
    hp: 8,
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.ALC,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.ALC + "_1"
      },
      {
        source: ClassNames.ALC,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.ALC + "_9"
      }
    ],
    saves: {
      Fortitude: Proficiencies.EXPERT,
      Reflex: Proficiencies.EXPERT,
      Will: Proficiencies.TRAINED
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "1",
        type: ClassNames.ALC + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "2",
        type: ClassNames.ALC + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "3",
        type: ClassNames.ALC + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "4",
        type: ClassNames.ALC + "_7",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "5",
        type: ClassNames.ALC + "_11",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.REF,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "6",
        type: ClassNames.ALC + "_15",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Crafting,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "-skill-1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ALC,
        id: ClassNames.ALC + "-skill-2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ALC,
        id: ClassNames.ALC + "-skill-3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ALC,
        id: ClassNames.ALC + "-skill-4",
        proficiency: Proficiencies.TRAINED
      }
    ],
    abilityBoosts: [
      {
        ability: Abilities.INT,
        source: ClassNames.ALC,
        id: ClassNames.ALC + "-ability-1"
      }
    ]
  },
  Barbarian: {
    name: ClassNames.BARB,
    keyAbility: Abilities.STR,
    hp: 12,
    perceptionProficiency: Proficiencies.EXPERT,
    perceptionBoosts: [
      {
        source: ClassNames.BARB,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.BARB + "_1"
      },
      {
        source: ClassNames.BARB,
        proficiency: Proficiencies.MASTER,
        type: ClassNames.BARB + "_17"
      }
    ],
    saves: {
      Fortitude: Proficiencies.EXPERT,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.BARB,
        id: ClassNames.BARB + "1",
        type: ClassNames.BARB + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.BARB,
        id: ClassNames.BARB + "2",
        type: ClassNames.BARB + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.BARB,
        id: ClassNames.BARB + "3",
        type: ClassNames.BARB + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.BARB,
        id: ClassNames.BARB + "4",
        type: ClassNames.BARB + "_7",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.BARB,
        id: ClassNames.BARB + "5",
        type: ClassNames.BARB + "_9",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.BARB,
        id: ClassNames.BARB + "6",
        type: ClassNames.BARB + "_15",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Athletics,
        source: ClassNames.BARB,
        id: "Barb1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARB,
        id: "Barb2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARB,
        id: "Barb3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARB,
        id: "Barb4",
        proficiency: Proficiencies.TRAINED
      }
    ],
    abilityBoosts: [
      { ability: Abilities.STR, source: ClassNames.BARB, id: "Barb1" }
    ]
  },
  Bard: {
    name: ClassNames.BARD,
    keyAbility: Abilities.CHA,
    perceptionProficiency: Proficiencies.EXPERT,
    hp: 8,
    saves: {
      Fortitude: Proficiencies.TRAINED,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    perceptionBoosts: [
      {
        source: ClassNames.BARD,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.BARD + "_1"
      },
      {
        source: ClassNames.BARD,
        proficiency: Proficiencies.MASTER,
        type: ClassNames.BARD + "_11"
      }
    ],
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "1",
        type: ClassNames.BARD + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.REF,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "2",
        type: ClassNames.BARD + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "3",
        type: ClassNames.BARD + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "4",
        type: ClassNames.BARD + "_3",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "5",
        type: ClassNames.BARD + "_9",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.FORT,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "6",
        type: ClassNames.BARD + "_9",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.BARD,
        id: ClassNames.BARD + "7",
        type: ClassNames.BARD + "_17",
        proficiency: Proficiencies.LEGEND
      }
    ],
    additionalSkillChoices: 4,
    attacks: {
      simpleWeapons: 1
    },
    defenses: { unarmored: Proficiencies.TRAINED },
    abilityBoosts: [
      { ability: Abilities.CHA, source: ClassNames.BARD, id: "Bard1" }
    ],
    skillBoosts: [
      {
        skill: Skills.Occultism,
        source: ClassNames.BARD,
        id: "Bard1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: Skills.Performance,
        source: ClassNames.BARD,
        id: "Bard2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARD,
        id: "Bard3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARD,
        id: "Bard4",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARD,
        id: "Bard5",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.BARD,
        id: "Bard6",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Champion: {
    name: ClassNames.CHAMP,
    keyAbility: Abilities.STR,
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: ClassNames.CHAMP,
        id: "Champ1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS, Abilities.CHA],
        type: Abilities.FREE
      }
    ],
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.CHAMP,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.CHAMP + "_1"
      },
      {
        source: ClassNames.CHAMP,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.CHAMP + "_11"
      }
    ],
    hp: 10,
    saves: {
      Fortitude: Proficiencies.EXPERT,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "1",
        type: ClassNames.CHAMP + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "2",
        type: ClassNames.CHAMP + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "3",
        type: ClassNames.CHAMP + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "4",
        type: ClassNames.CHAMP + "_9",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.REF,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "5",
        type: ClassNames.CHAMP + "_9",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "6",
        type: ClassNames.CHAMP + "_11",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Religion,
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.CHAMP,
        id: ClassNames.CHAMP + "3",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Cleric: {
    name: ClassNames.CLER,
    keyAbility: Abilities.WIS,
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.CLER,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.CLER + "_1"
      },
      {
        source: ClassNames.CLER,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.CLER + "_5"
      }
    ],
    hp: 8,
    saves: {
      Fortitude: Proficiencies.TRAINED,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "1",
        type: ClassNames.CLER + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.REF,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "2",
        type: ClassNames.CLER + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "3",
        type: ClassNames.CLER + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "4",
        type: ClassNames.CLER + "_9",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.REF,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "5",
        type: ClassNames.CLER + "_11",
        proficiency: Proficiencies.EXPERT
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    abilityBoosts: [
      {
        ability: Abilities.WIS,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "1"
      }
    ],
    skillBoosts: [
      {
        skill: Skills.Religion,
        source: ClassNames.CLER,
        id: ClassNames.CLER + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.CLER,
        id: ClassNames.CLER + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.CLER,
        id: ClassNames.CLER + "3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.CLER,
        id: ClassNames.CLER + "4",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Druid: {
    name: ClassNames.DRUID,
    keyAbility: Abilities.WIS,
    abilityBoosts: [
      {
        ability: Abilities.WIS,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "1"
      }
    ],
    hp: 8,
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.DRUID,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.DRUID + "_1"
      },
      {
        source: ClassNames.DRUID,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.DRUID + "_3"
      }
    ],
    saves: {
      Fortitude: Proficiencies.TRAINED,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "1",
        type: ClassNames.DRUID + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.REF,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "2",
        type: ClassNames.DRUID + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "3",
        type: ClassNames.DRUID + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "4",
        type: ClassNames.DRUID + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "5",
        type: ClassNames.DRUID + "_3",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "6",
        type: ClassNames.DRUID + "_5",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "7",
        type: ClassNames.DRUID + "_11",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Nature,
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.DRUID,
        id: ClassNames.DRUID + "4",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Fighter: {
    name: ClassNames.FIGHT,
    keyAbility: Abilities.STR,
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS, Abilities.CHA],
        type: Abilities.FREE
      }
    ],
    hp: 10,
    perceptionProficiency: Proficiencies.EXPERT,
    perceptionBoosts: [
      {
        source: ClassNames.FIGHT,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.FIGHT + "_1"
      },
      {
        source: ClassNames.FIGHT,
        proficiency: Proficiencies.MASTER,
        type: ClassNames.FIGHT + "_7"
      }
    ],
    saves: {
      Fortitude: Proficiencies.EXPERT,
      Reflex: Proficiencies.EXPERT,
      Will: Proficiencies.TRAINED
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "1",
        type: ClassNames.FIGHT + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "2",
        type: ClassNames.FIGHT + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "3",
        type: ClassNames.FIGHT + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "4",
        type: ClassNames.FIGHT + "_3",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "5",
        type: ClassNames.FIGHT + "_9",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.REF,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "6",
        type: ClassNames.FIGHT + "_15",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Athletics,
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.FIGHT,
        id: ClassNames.FIGHT + "4",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Monk: {
    name: ClassNames.MONK,
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: ClassNames.MONK,
        id: "1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS, Abilities.CHA],
        type: Abilities.FREE
      }
    ],
    hp: 10,
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.MONK,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.MONK + "_1"
      },
      {
        source: ClassNames.MONK,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.MONK + "_5"
      }
    ],
    saves: {
      Fortitude: Proficiencies.EXPERT,
      Reflex: Proficiencies.EXPERT,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.MONK,
        id: ClassNames.MONK + "1",
        type: ClassNames.MONK + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.MONK,
        id: ClassNames.MONK + "2",
        type: ClassNames.MONK + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.MONK,
        id: ClassNames.MONK + "3",
        type: ClassNames.MONK + "_1",
        proficiency: Proficiencies.EXPERT
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: { id: "Free" },
        source: ClassNames.MONK,
        id: ClassNames.MONK + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.MONK,
        id: ClassNames.MONK + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.MONK,
        id: ClassNames.MONK + "3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.MONK,
        id: ClassNames.MONK + "4",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Ranger: {
    name: ClassNames.RANGE,
    hp: 10,
    keyAbility: Abilities.WIS,
    perceptionProficiency: Proficiencies.EXPERT,
    perceptionBoosts: [
      {
        source: ClassNames.RANGE,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.RANGE + "_1"
      },
      {
        source: ClassNames.RANGE,
        proficiency: Proficiencies.MASTER,
        type: ClassNames.RANGE + "_7"
      },
      {
        source: ClassNames.RANGE,
        proficiency: Proficiencies.LEGEND,
        type: ClassNames.RANGE + "_15"
      }
    ],
    saves: {
      Fortitude: Proficiencies.EXPERT,
      Reflex: Proficiencies.EXPERT,
      Will: Proficiencies.TRAINED
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "1",
        type: ClassNames.RANGE + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "2",
        type: ClassNames.RANGE + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "3",
        type: ClassNames.RANGE + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "4",
        type: ClassNames.RANGE + "_3",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "5",
        type: ClassNames.RANGE + "_7",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.FORT,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "6",
        type: ClassNames.RANGE + "_11",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS, Abilities.CHA],
        type: Abilities.FREE
      }
    ],
    skillBoosts: [
      {
        skill: Skills.Nature,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: Skills.Survival,
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "3",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "4",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "5",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.RANGE,
        id: ClassNames.RANGE + "6",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Rogue: {
    name: ClassNames.ROGUE,
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "1",
        exclude: [Abilities.CON, Abilities.INT, Abilities.WIS],
        type: Abilities.FREE
      }
    ],
    hp: 8,
    perceptionProficiency: Proficiencies.EXPERT,
    perceptionBoosts: [
      {
        source: ClassNames.ROGUE,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.ROGUE + "_1"
      },
      {
        source: ClassNames.ROGUE,
        proficiency: Proficiencies.MASTER,
        type: ClassNames.ROGUE + "_7"
      },
      {
        source: ClassNames.ROGUE,
        proficiency: Proficiencies.LEGEND,
        type: ClassNames.ROGUE + "_13"
      }
    ],
    saves: {
      Fortitude: Proficiencies.TRAINED,
      Reflex: Proficiencies.EXPERT,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "1",
        type: ClassNames.ROGUE + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.REF,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "2",
        type: ClassNames.ROGUE + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "3",
        type: ClassNames.ROGUE + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "4",
        type: ClassNames.ROGUE + "_7",
        proficiency: Proficiencies.MASTER
      },
      {
        save: Saves.FORT,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "5",
        type: ClassNames.ROGUE + "_9",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "6",
        type: ClassNames.ROGUE + "_13",
        proficiency: Proficiencies.LEGEND
      },
      {
        save: Saves.WILL,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "7",
        type: ClassNames.ROGUE + "_17",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Stealth,
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "1",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "2",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "3",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "4",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "5",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "6",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "7",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE,
        id: ClassNames.ROGUE + "8",
        proficiency: Proficiencies.TRAINED,
        level: 1
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_2",
        id: ClassNames.ROGUE + "9",
        level: 2
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_4",
        id: ClassNames.ROGUE + "10",
        level: 4
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_6",
        id: ClassNames.ROGUE + "11",
        level: 6
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_8",
        id: ClassNames.ROGUE + "12",
        level: 8
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_10",
        id: ClassNames.ROGUE + "13",
        level: 10
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_12",
        id: ClassNames.ROGUE + "14",
        level: 12
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_14",
        id: ClassNames.ROGUE + "15",
        level: 14
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_16",
        id: ClassNames.ROGUE + "16",
        level: 16
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_18",
        id: ClassNames.ROGUE + "17",
        level: 18
      },
      {
        skill: { id: "Free" },
        source: ClassNames.ROGUE + "_20",
        id: ClassNames.ROGUE + "18",
        level: 20
      }
    ],
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
      { type: "skill_19" }
    ]
  },
  Sorcerer: {
    name: ClassNames.SORC,
    abilityBoosts: [
      {
        ability: Abilities.CHA,
        source: ClassNames.SORC,
        id: "1"
      }
    ],
    hp: 6,
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.SORC,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.SORC + "_1"
      },
      {
        source: ClassNames.SORC,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.SORC + "_11"
      }
    ],
    saves: {
      Fortitude: Proficiencies.TRAINED,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.SORC,
        id: ClassNames.SORC + "1",
        type: ClassNames.SORC + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.REF,
        source: ClassNames.SORC,
        id: ClassNames.SORC + "2",
        type: ClassNames.SORC + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.SORC,
        id: ClassNames.SORC + "3",
        type: ClassNames.SORC + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.SORC,
        id: ClassNames.SORC + "4",
        type: ClassNames.SORC + "_5",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.SORC,
        id: ClassNames.SORC + "5",
        type: ClassNames.SORC + "_9",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.SORC,
        id: ClassNames.SORC + "6",
        type: ClassNames.SORC + "_17",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: { id: "Free" },
        source: ClassNames.SORC,
        id: ClassNames.SORC + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.SORC,
        id: ClassNames.SORC + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.SORC,
        id: ClassNames.SORC + "3",
        proficiency: Proficiencies.TRAINED
      }
    ]
  },
  Wizard: {
    name: ClassNames.WIZ,
    abilityBoosts: [
      {
        ability: Abilities.INT,
        source: ClassNames.WIZ,
        id: "1"
      }
    ],
    hp: 6,
    perceptionProficiency: Proficiencies.TRAINED,
    perceptionBoosts: [
      {
        source: ClassNames.WIZ,
        proficiency: Proficiencies.TRAINED,
        type: ClassNames.WIZ + "_1"
      },
      {
        source: ClassNames.WIZ,
        proficiency: Proficiencies.EXPERT,
        type: ClassNames.WIZ + "_11"
      }
    ],
    saves: {
      Fortitude: Proficiencies.TRAINED,
      Reflex: Proficiencies.TRAINED,
      Will: Proficiencies.EXPERT
    },
    saveBoosts: [
      {
        save: Saves.FORT,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "1",
        type: ClassNames.WIZ + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.REF,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "2",
        type: ClassNames.WIZ + "_1",
        proficiency: Proficiencies.TRAINED
      },
      {
        save: Saves.WILL,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "3",
        type: ClassNames.WIZ + "_1",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.REF,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "4",
        type: ClassNames.WIZ + "_5",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.FORT,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "5",
        type: ClassNames.WIZ + "_9",
        proficiency: Proficiencies.EXPERT
      },
      {
        save: Saves.WILL,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "6",
        type: ClassNames.WIZ + "_17",
        proficiency: Proficiencies.MASTER
      }
    ],
    defenses: { unarmored: Proficiencies.TRAINED },
    skillBoosts: [
      {
        skill: Skills.Arcana,
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "1",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "2",
        proficiency: Proficiencies.TRAINED
      },
      {
        skill: { id: "Free" },
        source: ClassNames.WIZ,
        id: ClassNames.WIZ + "3",
        proficiency: Proficiencies.TRAINED
      }
    ]
  }
};
