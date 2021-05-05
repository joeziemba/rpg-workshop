import { Abilities } from "./abilities";
import { Proficiencies } from "./skills";
import { Skills } from "./skills";

export const Backgrounds = {
  Acolyte: {
    id: "Acolyte",
    name: "Acolyte",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Acolyte",
        type: Abilities.FREE,
        id: "Acolyte1",
        restrictTo: [Abilities.INT, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Acolyte",
        type: Abilities.FREE,
        id: "Acolyte2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Religion,
        source: "Acolyte",
        id: "Acolyte1",
      },
      {
        id: "Acolyte2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
      {
        ability: Abilities.FREE,
        source: "Acrobat",
        type: Abilities.FREE,
        id: "Acrobat1",
        restrictTo: [Abilities.STR, Abilities.DEX],
        exclude: [
          Abilities.CON,
          Abilities.INT,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Acrobat",
        type: Abilities.FREE,
        id: "Acrobat2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Acrobatics,
        source: "Acrobat",
        id: "Acrobat1",
      },
      {
        id: "Acrobat2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
      {
        ability: Abilities.FREE,
        source: "AnimalWhisperer",
        type: Abilities.FREE,
        id: "AnimalWhisperer1",
        restrictTo: [Abilities.WIS, Abilities.CHA],
        exclude: [
          Abilities.CON,
          Abilities.INT,
          Abilities.STR,
          Abilities.DEX,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "AnimalWhisperer",
        type: Abilities.FREE,
        id: "AnimalWhisperer2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Nature,
        source: "AnimalWhisperer",
        id: "AnimalWhisperer1",
      },
      {
        id: "AnimalWhisperer2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
      {
        ability: Abilities.FREE,
        source: "Artisan",
        type: Abilities.FREE,
        id: "Guild1",
        restrictTo: [Abilities.STR, Abilities.INT],
        exclude: [
          Abilities.DEX,
          Abilities.CON,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Artisan",
        type: Abilities.FREE,
        id: "Guild2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Crafting,
        source: "Artisan",
        id: "Guild1",
      },
      {
        id: "Guild2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
      {
        ability: Abilities.FREE,
        source: "Artist",
        type: Abilities.FREE,
        id: "Artist1",
        restrictTo: [Abilities.DEX, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.CON,
          Abilities.INT,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Artist",
        type: Abilities.FREE,
        id: "Artist2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Crafting,
        source: "Artist",
        id: "Artist1",
      },
      {
        id: "Artist2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
      {
        ability: Abilities.FREE,
        source: "Barkeep",
        type: Abilities.FREE,
        id: "Barkeep1",
        restrictTo: [Abilities.CON, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.INT,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Barkeep",
        type: Abilities.FREE,
        id: "Barkeep2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Diplomacy,
        source: "Barkeep",
        id: "Barkeep1",
      },
      {
        id: "Barkeep2",
        skill: Skills.Lore,
        type: "Alcohol",
        proficiency: Proficiencies.TRAINED,
        source: "Barkeep",
      },
    ],
    feat: "Hobnobber",
  },
  Barrister: {
    id: "Barrister",
    name: "Barrister",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Barrister",
        type: Abilities.FREE,
        id: "Barrister1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Barrister",
        type: Abilities.FREE,
        id: "Barrister2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Diplomacy,
        source: "Barrister",
        id: "Barrister1",
      },
      {
        id: "Barrister2",
        skill: Skills.Lore,
        type: "Legal",
        proficiency: Proficiencies.TRAINED,
        source: "Barrister",
      },
    ],
    feat: "Group Impression",
  },
  BountyHunter: {
    id: "BountyHunter",
    name: "Bounty Hunter",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "BountyHunter",
        type: Abilities.FREE,
        id: "BountyHunter1",
        restrictTo: [Abilities.STR, Abilities.WIS],
        exclude: [
          Abilities.DEX,
          Abilities.CON,
          Abilities.INT,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "BountyHunter",
        type: Abilities.FREE,
        id: "BountyHunter2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Survival,
        source: "BountyHunter",
        id: "BountyHunter1",
      },
      {
        id: "BountyHunter2",
        skill: Skills.Lore,
        type: "Legal",
        proficiency: Proficiencies.TRAINED,
        source: "BountyHunter",
      },
    ],
    feat: "Experienced Tracker",
  },
  Charlatan: {
    id: "Charlatan",
    name: "Charlatan",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "Charlatan",
        type: Abilities.FREE,
        id: "Charlatan1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Charlatan",
        type: Abilities.FREE,
        id: "Charlatan2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Deception,
        source: "Charlatan",
        id: "Charlatan1",
      },
      {
        id: "Charlatan2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Criminal",
        type: Abilities.FREE,
        id: "Criminal1",
        restrictTo: [Abilities.INT, Abilities.DEX],
        exclude: [
          Abilities.STR,
          Abilities.CON,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Criminal",
        type: Abilities.FREE,
        id: "Criminal2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Stealth,
        source: "Criminal",
        id: "Criminal1",
      },
      {
        id: "Criminal2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Detective",
        type: Abilities.FREE,
        id: "Detective1",
        restrictTo: [Abilities.INT, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.CON,
          Abilities.DEX,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Detective",
        type: Abilities.FREE,
        id: "Detective2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Society,
        source: "Detective",
        id: "Detective1",
      },
      {
        id: "Detective2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Emissary",
        type: Abilities.FREE,
        id: "Emissary1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.CON,
          Abilities.DEX,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Emissary",
        type: Abilities.FREE,
        id: "Emissary2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Society,
        source: "Emissary",
        id: "Emissary1",
      },
      {
        id: "Emissary2",
        skill: Skills.Lore,
        type: "One City",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Entertainer",
        type: Abilities.FREE,
        id: "Entertainer1",
        restrictTo: [Abilities.DEX, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.CON,
          Abilities.INT,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Entertainer",
        type: Abilities.FREE,
        id: "Entertainer2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Performance,
        source: "Entertainer",
        id: "Entertainer1",
      },
      {
        id: "Entertainer2",
        skill: Skills.Lore,
        type: "Theater",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Farmhand",
        type: Abilities.FREE,
        id: "Farmhand1",
        restrictTo: [Abilities.CON, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.INT,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Farmhand",
        type: Abilities.FREE,
        id: "Farmhand2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Athletics,
        source: "Farmhand",
        id: "Farmhand1",
      },
      {
        id: "Farmhand2",
        skill: Skills.Lore,
        type: "Farming",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "FieldMedic",
        type: Abilities.FREE,
        id: "FieldMedic1",
        restrictTo: [Abilities.CON, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.INT,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "FieldMedic",
        type: Abilities.FREE,
        id: "FieldMedic2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Medicine,
        source: "FieldMedic",
        id: "FieldMedic1",
      },
      {
        id: "FieldMedic2",
        skill: Skills.Lore,
        type: "Warfare",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "FortuneTeller",
        type: Abilities.FREE,
        id: "FortuneTeller1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "FortuneTeller",
        type: Abilities.FREE,
        id: "FortuneTeller2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Occultism,
        source: "FortuneTeller",
        id: "FortuneTeller1",
      },
      {
        id: "FortuneTeller2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Gambler",
        type: Abilities.FREE,
        id: "Gambler1",
        restrictTo: [Abilities.DEX, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.INT,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Gambler",
        type: Abilities.FREE,
        id: "Gambler2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Deception,
        source: "Gambler",
        id: "Gambler1",
      },
      {
        id: "Gambler2",
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Gladiator",
        type: Abilities.FREE,
        id: "Gladiator1",
        restrictTo: [Abilities.STR, Abilities.CHA],
        exclude: [
          Abilities.DEX,
          Abilities.INT,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Gladiator",
        type: Abilities.FREE,
        id: "Gladiator2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Performance,
        source: "Gladiator",
        id: "Gladiator1",
      },
      {
        id: "Gladiator2",
        skill: Skills.Lore,
        type: "Gladitorial",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Guard",
        type: Abilities.FREE,
        id: "Guard1",
        restrictTo: [Abilities.STR, Abilities.CHA],
        exclude: [
          Abilities.DEX,
          Abilities.INT,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Guard",
        type: Abilities.FREE,
        id: "Guard2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Intimidation,
        source: "Guard",
        id: "Guard1",
      },
      {
        id: "Guard2",
        skill: Skills.Lore,
        type: "Legal",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Herbalist",
        type: Abilities.FREE,
        id: "Herbalist1",
        restrictTo: [Abilities.CON, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.INT,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Herbalist",
        type: Abilities.FREE,
        id: "Herbalist2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Nature,
        source: "Herbalist",
        id: "Herbalist1",
      },
      {
        id: "Herbalist2",
        skill: Skills.Lore,
        type: "Herbalism",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Hermit",
        type: Abilities.FREE,
        id: "Hermit1",
        restrictTo: [Abilities.CON, Abilities.INT],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Hermit",
        type: Abilities.FREE,
        id: "Hermit2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Nature, // TODO: Implement skill choices from backgrounds
        source: "Hermit",
        id: "Hermit1",
      },
      {
        id: "Hermit2",
        skill: Skills.Lore,
        type: "Terrain",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Hunter",
        type: Abilities.FREE,
        id: "Hunter1",
        restrictTo: [Abilities.DEX, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.CON,
          Abilities.INT,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Hunter",
        type: Abilities.FREE,
        id: "Hunter2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Survival,
        source: "Hunter",
        id: "Hunter1",
      },
      {
        id: "Hunter2",
        skill: Skills.Lore,
        type: "Tanning",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Laborer",
        type: Abilities.FREE,
        id: "Laborer1",
        restrictTo: [Abilities.STR, Abilities.CON],
        exclude: [
          Abilities.DEX,
          Abilities.INT,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Laborer",
        type: Abilities.FREE,
        id: "Laborer2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Athletics,
        source: "Laborer",
        id: "Laborer1",
      },
      {
        id: "Laborer2",
        skill: Skills.Lore,
        type: "Labor",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "MartialDisciple",
        type: Abilities.FREE,
        id: "MartialDisciple1",
        restrictTo: [Abilities.STR, Abilities.DEX],
        exclude: [
          Abilities.CON,
          Abilities.INT,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "MartialDisciple",
        type: Abilities.FREE,
        id: "MartialDisciple2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Athletics, //TODO: Implement choice of skills from backgrounds
        source: "MartialDisciple",
        id: "MartialDisciple1",
      },
      {
        id: "MartialDisciple2",
        skill: Skills.Lore,
        type: "Warfare",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Merchant",
        type: Abilities.FREE,
        id: "Merchant1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Merchant",
        type: Abilities.FREE,
        id: "Merchant2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Diplomacy,
        source: "Merchant",
        id: "Merchant1",
      },
      {
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Miner",
        type: Abilities.FREE,
        id: "Miner1",
        restrictTo: [Abilities.STR, Abilities.WIS],
        exclude: [
          Abilities.CON,
          Abilities.INT,
          Abilities.DEX,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Miner",
        type: Abilities.FREE,
        id: "Miner2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Survival,
        source: "Miner",
        id: "Miner1",
      },
      {
        id: "Miner2",
        skill: Skills.Lore,
        type: "Mining",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Noble",
        type: Abilities.FREE,
        id: "Noble1",
        restrictTo: [Abilities.INT, Abilities.CHA],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Noble",
        type: Abilities.FREE,
        id: "Noble2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Society,
        source: "Noble",
        id: "Noble1",
      },
      {
        id: "Noble2",
        skill: Skills.Lore,
        type: "Genealogy",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Nomad",
        type: Abilities.FREE,
        id: "Nomad1",
        restrictTo: [Abilities.WIS, Abilities.CON],
        exclude: [
          Abilities.INT,
          Abilities.DEX,
          Abilities.CHA,
          Abilities.STR,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Nomad",
        type: Abilities.FREE,
        id: "Nomad2",
      },
    ],
    skillBoosts: [
      {
        skill: Skills.Survival,
        proficiency: Proficiencies.TRAINED,
        source: "Nomad",
        id: "Nomad1",
      },
      {
        skill: Skills.Lore,
        type: "One Travelled Terrain",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Prisoner",
        type: Abilities.FREE,
        id: "Prisoner1",
        restrictTo: [Abilities.STR, Abilities.CON],
        exclude: [
          Abilities.INT,
          Abilities.DEX,
          Abilities.CHA,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Prisoner",
        type: Abilities.FREE,
        id: "Prisoner2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Stealth,
        source: "Prisoner",
        id: "Prisoner1",
      },
      {
        id: "Prisoner2",
        skill: Skills.Lore,
        type: "Underworld",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Sailor",
        type: Abilities.FREE,
        id: "Sailor1",
        restrictTo: [Abilities.STR, Abilities.DEX],
        exclude: [
          Abilities.INT,
          Abilities.CON,
          Abilities.CHA,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Sailor",
        type: Abilities.FREE,
        id: "Sailor2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Athletics,
        source: "Sailor",
        id: "Sailor1",
      },
      {
        id: "Sailor2",
        skill: Skills.Lore,
        type: "Sailing",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Scholar",
        type: Abilities.FREE,
        id: "Scholar1",
        restrictTo: [Abilities.INT, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.DEX,
          Abilities.CON,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Scholar",
        type: Abilities.FREE,
        id: "Scholar2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Arcana, //TODO: Choices
        source: "Scholar",
        id: "Scholar1",
      },
      {
        id: "Scholar2",
        skill: Skills.Lore,
        type: "Academia",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Scout",
        type: Abilities.FREE,
        id: "Scout1",
        restrictTo: [Abilities.DEX, Abilities.WIS],
        exclude: [
          Abilities.STR,
          Abilities.INT,
          Abilities.CON,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Scout",
        type: Abilities.FREE,
        id: "Scout2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Survival,
        source: "Scout",
        id: "Scout1",
      },
      {
        id: "Scout2",
        skill: Skills.Lore,
        type: "Terrain",
        proficiency: Proficiencies.TRAINED,
        source: "Scout",
      },
    ],
    feat: "Forager",
  },
  StreetUrchin: {
    id: "StreetUrchin",
    name: "StreetUrchin",
    abilityBoosts: [
      {
        ability: Abilities.FREE,
        source: "StreetUrchin",
        type: Abilities.FREE,
        id: "StreetUrchin1",
        restrictTo: [Abilities.DEX, Abilities.CON],
        exclude: [
          Abilities.STR,
          Abilities.INT,
          Abilities.WIS,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "StreetUrchin",
        type: Abilities.FREE,
        id: "StreetUrchin2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Thievery,
        source: "StreetUrchin",
        id: "StreetUrchin1",
      },
      {
        id: "StreetUrchin2",
        skill: Skills.Lore,
        type: "City",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Tinker",
        type: Abilities.FREE,
        id: "Tinker1",
        restrictTo: [Abilities.DEX, Abilities.INT],
        exclude: [
          Abilities.STR,
          Abilities.WIS,
          Abilities.CON,
          Abilities.CHA,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Tinker",
        type: Abilities.FREE,
        id: "Tinker2",
      },
    ],
    skillBoosts: [
      {
        proficiency: Proficiencies.TRAINED,
        skill: Skills.Crafting,
        source: "Tinker",
        id: "Tinker1",
      },
      {
        id: "Tinker2",
        skill: Skills.Lore,
        type: "Engineering",
        proficiency: Proficiencies.TRAINED,
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
        ability: Abilities.FREE,
        source: "Warrior",
        type: Abilities.FREE,
        id: "Warrior1",
        restrictTo: [Abilities.STR, Abilities.CON],
        exclude: [
          Abilities.INT,
          Abilities.DEX,
          Abilities.CHA,
          Abilities.WIS,
        ],
      },
      {
        ability: Abilities.FREE,
        source: "Warrior",
        type: Abilities.FREE,
        id: "Warrior2",
      },
    ],
    skillBoosts: [
      {
        skill: Skills.Intimidation,
        proficiency: Proficiencies.TRAINED,
        source: "Warrior",
        id: "Warrior1",
      },
      {
        skill: Skills.Lore,
        proficiency: Proficiencies.TRAINED,
        source: "Warrior",
        id: "Warrior2",
        type: "Warfare",
      },
    ],
    feat: "Intimidating Glare",
  },
};
