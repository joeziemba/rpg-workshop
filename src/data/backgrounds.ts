import { Ability } from "./abilities"
import { AbilityBoost, IAbilityBoost } from "./models/abilityBoost.model"
import { ISkillBoost } from "./models/SkillBoost"
import { Proficiencies } from "./skills"
import { Skills } from "./skills"

interface Background {
  id: string
  name: string
  abilityBoosts: IAbilityBoost[]
  skillBoosts: ISkillBoost[]
  feat?: string
}

export const Backgrounds: Record<any, Background> = {
  Acolyte: {
    id: "Acolyte",
    name: "Acolyte",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Acolyte", 1, [
        Ability.STR,
        Ability.DEX,
        Ability.CON,
        Ability.CHA,
      ]),
      new AbilityBoost(Ability.FREE, "Acolyte", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Religion,
        source: "Acolyte",
        id: "Acolyte1",
      },
      {
        id: "Acolyte2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Acolyte",
        type: "Scribing",
      },
    ],
    feat: "Student of the Canon",
  },
  Acrobat: {
    id: "Acrobat",
    name: "Acrobat",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Acrobat", 1, [
        Ability.CON,
        Ability.INT,
        Ability.WIS,
        Ability.CHA,
      ]),
      new AbilityBoost(Ability.FREE, "Acrobat", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Acrobatics,
        source: "Acrobat",
        id: "Acrobat1",
      },
      {
        id: "Acrobat2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Acrobat",
        type: "Circus",
      },
    ],
    feat: "Steady Balance",
  },
  AnimalWhisperer: {
    id: "AnimalWhisperer",
    name: "Animal Whisperer",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "AnimalWhisperer", 1, [
        Ability.CON,
        Ability.INT,
        Ability.STR,
        Ability.DEX,
      ]),
      new AbilityBoost(Ability.FREE, "AnimalWhisperer", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Nature,
        source: "AnimalWhisperer",
        id: "AnimalWhisperer1",
      },
      {
        id: "AnimalWhisperer2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "AnimalWhisperer",
        type: "One Terrain",
      },
    ],
    feat: "Train Animal",
  },
  Artisan: {
    id: "Artisan",
    name: "Artisan",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Artisan", 1, [
        Ability.DEX,
        Ability.CON,
        Ability.WIS,
        Ability.CHA,
      ]),
      new AbilityBoost(Ability.FREE, "Artisan", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Crafting,
        source: "Artisan",
        id: "Guild1",
      },
      {
        id: "Guild2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Artisan",
        type: "Guild",
      },
    ],
    feat: "Specialty Crafting",
  },
  Artist: {
    id: "Artist",
    name: "Artist",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Artist", 1, [
        Ability.STR,
        Ability.CON,
        Ability.INT,
        Ability.WIS,
      ]),
      new AbilityBoost(Ability.FREE, "Artist", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Crafting,
        source: "Artist",
        id: "Artist1",
      },
      {
        id: "Artist2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Artist",
        type: "Art",
      },
    ],
    feat: "Specialty Crafting",
  },
  Barkeep: {
    id: "Barkeep",
    name: "Barkeep",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Barkeep", 1, [
        Ability.STR,
        Ability.DEX,
        Ability.INT,
        Ability.WIS,
      ]),
      new AbilityBoost(Ability.FREE, "Barkeep", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Diplomacy,
        source: "Barkeep",
        id: "Barkeep1",
      },
      {
        id: "Barkeep2",
        skill: Skills.Lore,
        type: "Alcohol",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Barkeep",
      },
    ],
    feat: "Hobnobber",
  },
  Barrister: {
    id: "Barrister",
    name: "Barrister",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Barrister", 1, [
        Ability.STR,
        Ability.DEX,
        Ability.CON,
        Ability.WIS,
      ]),
      new AbilityBoost(Ability.FREE, "Barrister", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Diplomacy,
        source: "Barrister",
        id: "Barrister1",
      },
      {
        id: "Barrister2",
        skill: Skills.Lore,
        type: "Legal",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Barrister",
      },
    ],
    feat: "Group Impression",
  },
  BountyHunter: {
    id: "BountyHunter",
    name: "Bounty Hunter",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "BountyHunter", 1, [
        Ability.DEX,
        Ability.CON,
        Ability.INT,
        Ability.CHA,
      ]),
      new AbilityBoost(Ability.FREE, "BountyHunter", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Survival,
        source: "BountyHunter",
        id: "BountyHunter1",
      },
      {
        id: "BountyHunter2",
        skill: Skills.Lore,
        type: "Legal",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "BountyHunter",
      },
    ],
    feat: "Experienced Tracker",
  },
  Charlatan: {
    id: "Charlatan",
    name: "Charlatan",
    abilityBoosts: [
      new AbilityBoost(Ability.FREE, "Charlatan", 1, [
        Ability.STR,
        Ability.DEX,
        Ability.CON,
        Ability.WIS,
      ]),
      new AbilityBoost(Ability.FREE, "Charlatan", 1),
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Deception,
        source: "Charlatan",
        id: "Charlatan1",
      },
      {
        id: "Charlatan2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Charlatan",
      },
    ],
    feat: "Charming Liar",
  },
  Criminal: {
    id: "Criminal",
    name: "Criminal",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Criminal",
        type: Ability.FREE,
        id: "Criminal1",
        exclude: [Ability.STR, Ability.CON, Ability.WIS, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Criminal",
        type: Ability.FREE,
        id: "Criminal2",
        level: 1,
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Stealth,
        source: "Criminal",
        id: "Criminal1",
      },
      {
        id: "Criminal2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Criminal",
      },
    ],
    feat: "Experienced Smuggler",
  },
  Detective: {
    id: "Detective",
    name: "Detective",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Detective",
        type: Ability.FREE,
        id: "Detective1",
        exclude: [Ability.STR, Ability.CON, Ability.DEX, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Detective",
        type: Ability.FREE,
        id: "Detective2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Society,
        source: "Detective",
        id: "Detective1",
      },
      {
        id: "Detective2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Detective",
      },
    ],
    feat: "Streetwise",
  },
  Emissary: {
    id: "Emissary",
    name: "Emissary",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Emissary",
        type: Ability.FREE,
        id: "Emissary1",
        exclude: [Ability.STR, Ability.CON, Ability.DEX, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Emissary",
        type: Ability.FREE,
        id: "Emissary2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Society,
        source: "Emissary",
        id: "Emissary1",
      },
      {
        id: "Emissary2",
        skill: Skills.Lore,
        type: "One City",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Emissary",
      },
    ],
    feat: "Multilingual",
  },
  Entertainer: {
    id: "Entertainer",
    name: "Entertainer",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Entertainer",
        type: Ability.FREE,
        id: "Entertainer1",
        exclude: [Ability.STR, Ability.CON, Ability.INT, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Entertainer",
        type: Ability.FREE,
        id: "Entertainer2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Performance,
        source: "Entertainer",
        id: "Entertainer1",
      },
      {
        id: "Entertainer2",
        skill: Skills.Lore,
        type: "Theater",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Entertainer",
      },
    ],
    feat: "Fascinating Performance",
  },
  Farmhand: {
    id: "Farmhand",
    name: "Farmhand",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Farmhand",
        type: Ability.FREE,
        id: "Farmhand1",
        exclude: [Ability.STR, Ability.DEX, Ability.INT, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Farmhand",
        type: Ability.FREE,
        id: "Farmhand2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Athletics,
        source: "Farmhand",
        id: "Farmhand1",
      },
      {
        id: "Farmhand2",
        skill: Skills.Lore,
        type: "Farming",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Farmhand",
      },
    ],
    feat: "Assurance: Athletics",
  },
  FieldMedic: {
    id: "FieldMedic",
    name: "Field Medic",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "FieldMedic",
        type: Ability.FREE,
        id: "FieldMedic1",

        exclude: [Ability.STR, Ability.DEX, Ability.INT, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "FieldMedic",
        type: Ability.FREE,
        id: "FieldMedic2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Medicine,
        source: "FieldMedic",
        id: "FieldMedic1",
      },
      {
        id: "FieldMedic2",
        skill: Skills.Lore,
        type: "Warfare",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "FieldMedic",
      },
    ],
    feat: "Battle Medicine",
  },
  FortuneTeller: {
    id: "FortuneTeller",
    name: "Fortune Teller",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "FortuneTeller",
        type: Ability.FREE,
        id: "FortuneTeller1",

        exclude: [Ability.STR, Ability.DEX, Ability.CON, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "FortuneTeller",
        type: Ability.FREE,
        id: "FortuneTeller2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Occultism,
        source: "FortuneTeller",
        id: "FortuneTeller1",
      },
      {
        id: "FortuneTeller2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "FortuneTeller",
        type: "Fortune Telling",
      },
    ],
  },
  Gambler: {
    id: "Gambler",
    name: "Gambler",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Gambler",
        type: Ability.FREE,
        id: "Gambler1",

        exclude: [Ability.STR, Ability.INT, Ability.CON, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Gambler",
        type: Ability.FREE,
        id: "Gambler2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Deception,
        source: "Gambler",
        id: "Gambler1",
      },
      {
        id: "Gambler2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Gambler",
        type: "Games",
      },
    ],
  },
  Gladiator: {
    id: "Gladiator",
    name: "Gladiator",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Gladiator",
        type: Ability.FREE,
        id: "Gladiator1",

        exclude: [Ability.DEX, Ability.INT, Ability.CON, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Gladiator",
        type: Ability.FREE,
        id: "Gladiator2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Performance,
        source: "Gladiator",
        id: "Gladiator1",
      },
      {
        id: "Gladiator2",
        skill: Skills.Lore,
        type: "Gladitorial",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Gladiator",
      },
    ],
    feat: "Impressive Performance",
  },
  Guard: {
    id: "Guard",
    name: "Guard",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Guard",
        type: Ability.FREE,
        id: "Guard1",

        exclude: [Ability.DEX, Ability.INT, Ability.WIS, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Guard",
        type: Ability.FREE,
        id: "Guard2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Intimidation,
        source: "Guard",
        id: "Guard1",
      },
      {
        id: "Guard2",
        skill: Skills.Lore,
        type: "Legal",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Guard",
      },
    ],
    feat: "Quick Coercion",
  },
  Herbalist: {
    id: "Herbalist",
    name: "Herbalist",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Herbalist",
        type: Ability.FREE,
        id: "Herbalist1",

        exclude: [Ability.STR, Ability.DEX, Ability.INT, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Herbalist",
        type: Ability.FREE,
        id: "Herbalist2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Nature,
        source: "Herbalist",
        id: "Herbalist1",
      },
      {
        id: "Herbalist2",
        skill: Skills.Lore,
        type: "Herbalism",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Herbalist",
      },
    ],
    feat: "Natural Medicine",
  },
  Hermit: {
    id: "Hermit",
    name: "Hermit",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Hermit",
        type: Ability.FREE,
        id: "Hermit1",
        exclude: [Ability.STR, Ability.DEX, Ability.WIS, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Hermit",
        type: Ability.FREE,
        id: "Hermit2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Nature, // TODO: Implement skill choices from backgrounds
        source: "Hermit",
        id: "Hermit1",
      },
      {
        id: "Hermit2",
        skill: Skills.Lore,
        type: "Terrain",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Hermit",
      },
    ],
    feat: "Dubious Knowledge",
  },
  Hunter: {
    id: "Hunter",
    name: "Hunter",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Hunter",
        type: Ability.FREE,
        id: "Hunter1",

        exclude: [Ability.STR, Ability.CON, Ability.INT, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Hunter",
        type: Ability.FREE,
        id: "Hunter2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Survival,
        source: "Hunter",
        id: "Hunter1",
      },
      {
        id: "Hunter2",
        skill: Skills.Lore,
        type: "Tanning",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Hunter",
      },
    ],
    feat: "Survey Wildlife",
  },
  Laborer: {
    id: "Laborer",
    name: "Laborer",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Laborer",
        type: Ability.FREE,
        id: "Laborer1",

        exclude: [Ability.DEX, Ability.INT, Ability.WIS, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Laborer",
        type: Ability.FREE,
        id: "Laborer2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Athletics,
        source: "Laborer",
        id: "Laborer1",
      },
      {
        id: "Laborer2",
        skill: Skills.Lore,
        type: "Labor",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Laborer",
      },
    ],
    feat: "Hefty Hauler Athletics",
  },
  MartialDisciple: {
    id: "MartialDisciple",
    name: "Martial Disciple",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "MartialDisciple",
        type: Ability.FREE,
        id: "MartialDisciple1",

        exclude: [Ability.CON, Ability.INT, Ability.WIS, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "MartialDisciple",
        type: Ability.FREE,
        id: "MartialDisciple2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Athletics,
        source: "MartialDisciple",
        id: "MartialDisciple1",
      },
      {
        id: "MartialDisciple2",
        skill: Skills.Lore,
        type: "Warfare",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "MartialDisciple",
      },
    ],
    feat: "Cat Fall of Quick Jump",
  },
  Merchant: {
    id: "Merchant",
    name: "Merchant",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Merchant",
        type: Ability.FREE,
        id: "Merchant1",

        exclude: [Ability.STR, Ability.DEX, Ability.CON, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Merchant",
        type: Ability.FREE,
        id: "Merchant2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Diplomacy,
        source: "Merchant",
        id: "Merchant1",
      },
      {
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Merchant",
        id: "Merchant2",
        type: "Merchantile",
      },
    ],
  },
  Miner: {
    id: "Miner",
    name: "Miner",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Miner",
        type: Ability.FREE,
        id: "Miner1",

        exclude: [Ability.CON, Ability.INT, Ability.DEX, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Miner",
        type: Ability.FREE,
        id: "Miner2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Survival,
        source: "Miner",
        id: "Miner1",
      },
      {
        id: "Miner2",
        skill: Skills.Lore,
        type: "Mining",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Miner",
      },
    ],
    feat: "Terrain Expertise",
  },
  Noble: {
    id: "Noble",
    name: "Noble",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Noble",
        type: Ability.FREE,
        id: "Noble1",

        exclude: [Ability.STR, Ability.DEX, Ability.CON, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Noble",
        type: Ability.FREE,
        id: "Noble2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Society,
        source: "Noble",
        id: "Noble1",
      },
      {
        id: "Noble2",
        skill: Skills.Lore,
        type: "Genealogy",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Noble",
      },
    ],
    feat: "Courtly Graces",
  },
  Nomad: {
    id: "Nomad",
    name: "Nomad",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Nomad",
        type: Ability.FREE,
        id: "Nomad1",

        exclude: [Ability.INT, Ability.DEX, Ability.CHA, Ability.STR],
      },
      {
        ability: Ability.FREE,
        source: "Nomad",
        type: Ability.FREE,
        id: "Nomad2",
      },
    ],
    skillBoosts: [
      {
        skill: Skills.Survival,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Nomad",
        id: "Nomad1",
      },
      {
        skill: Skills.Lore,
        type: "One Travelled Terrain",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Nomad",
        id: "Nomad2",
      },
    ],
  },
  Prisoner: {
    id: "Prisoner",
    name: "Prisoner",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Prisoner",
        type: Ability.FREE,
        id: "Prisoner1",

        exclude: [Ability.INT, Ability.DEX, Ability.CHA, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Prisoner",
        type: Ability.FREE,
        id: "Prisoner2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Stealth,
        source: "Prisoner",
        id: "Prisoner1",
      },
      {
        id: "Prisoner2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Prisoner",
      },
    ],
    feat: "Experienced Smuggler",
  },
  Sailor: {
    id: "Sailor",
    name: "Sailor",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Sailor",
        type: Ability.FREE,
        id: "Sailor1",

        exclude: [Ability.INT, Ability.CON, Ability.CHA, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Sailor",
        type: Ability.FREE,
        id: "Sailor2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Athletics,
        source: "Sailor",
        id: "Sailor1",
      },
      {
        id: "Sailor2",
        skill: Skills.Lore,
        type: "Sailing",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Sailor",
      },
    ],
    feat: "Underwater Marauder",
  },
  Scholar: {
    id: "Scholar",
    name: "Scholar",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Scholar",
        type: Ability.FREE,
        id: "Scholar1",

        exclude: [Ability.STR, Ability.DEX, Ability.CON, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Scholar",
        type: Ability.FREE,
        id: "Scholar2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Arcana,
        source: "Scholar",
        id: "Scholar1",
      },
      {
        id: "Scholar2",
        skill: Skills.Lore,
        type: "Academia",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Scholar",
      },
    ],
    feat: "Assurance",
  },
  Scout: {
    id: "Scout",
    name: "Scout",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Scout",
        type: Ability.FREE,
        id: "Scout1",

        exclude: [Ability.STR, Ability.INT, Ability.CON, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Scout",
        type: Ability.FREE,
        id: "Scout2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Survival,
        source: "Scout",
        id: "Scout1",
      },
      {
        id: "Scout2",
        skill: Skills.Lore,
        type: "Terrain",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Scout",
      },
    ],
    feat: "Forager",
  },
  StreetUrchin: {
    id: "StreetUrchin",
    name: "Street Urchin",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "StreetUrchin",
        type: Ability.FREE,
        id: "StreetUrchin1",

        exclude: [Ability.STR, Ability.INT, Ability.WIS, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "StreetUrchin",
        type: Ability.FREE,
        id: "StreetUrchin2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Thievery,
        source: "StreetUrchin",
        id: "StreetUrchin1",
      },
      {
        id: "StreetUrchin2",
        skill: Skills.Lore,
        type: "City",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "StreetUrchin",
      },
    ],
    feat: "Pickpocket",
  },
  Tinker: {
    id: "Tinker",
    name: "Tinker",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Tinker",
        type: Ability.FREE,
        id: "Tinker1",

        exclude: [Ability.STR, Ability.WIS, Ability.CON, Ability.CHA],
      },
      {
        ability: Ability.FREE,
        source: "Tinker",
        type: Ability.FREE,
        id: "Tinker2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        skill: Skills.Crafting,
        source: "Tinker",
        id: "Tinker1",
      },
      {
        id: "Tinker2",
        skill: Skills.Lore,
        type: "Engineering",
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Tinker",
      },
    ],
    feat: "Specialty Crafting",
  },
  Warrior: {
    id: "Warrior",
    name: "Warrior",
    abilityBoosts: [
      {
        ability: Ability.FREE,
        source: "Warrior",
        type: Ability.FREE,
        id: "Warrior1",

        exclude: [Ability.INT, Ability.DEX, Ability.CHA, Ability.WIS],
      },
      {
        ability: Ability.FREE,
        source: "Warrior",
        type: Ability.FREE,
        id: "Warrior2",
      },
    ],
    skillBoosts: [
      {
        skill: Skills.Intimidation,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Warrior",
        id: "Warrior1",
      },
      {
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        isStatic: true,
        level: 1,
        source: "Warrior",
        id: "Warrior2",
        type: "Warfare",
      },
    ],
    feat: "Intimidating Glare",
  },
}
