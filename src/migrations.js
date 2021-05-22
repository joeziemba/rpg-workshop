import _ from "lodash";
import { Proficiencies } from "./_data/skills";
import { Classes, ClassNames } from "./_data/classes";
import {
  getBlankCharacter,
  upperLevelAbilityBoosts,
} from "./_data/classTemplate";

export function v1_0_0(character) {
  let blankCharacter = getBlankCharacter();

  character.abilityBoosts = character.abilityBoosts.concat(
    upperLevelAbilityBoosts
  );
  if (character.class.name) {
    character.class = Classes[character.class.name];
    if (!character.class.defenses) {
      character.class.defenses = {
        unarmored: Proficiencies.TRAINED,
      };
    }
  }

  if (!character.feats || !Array.isArray(character.feats)) {
    character.feats = blankCharacter.feats;
  }

  if (!character.saves) {
    character.saves = blankCharacter.saves;
  }

  let oldBoosts = _.cloneDeep(character.skillBoosts);

  oldBoosts = oldBoosts.filter((b) => b.source === "Free");

  character.skillBoosts = _.cloneDeep(blankCharacter.skillBoosts);

  if (character.class.name) {
    character.skillBoosts = character.skillBoosts.concat(
      _.cloneDeep(character.class.skillBoosts)
    );
  }

  if (character.background.name) {
    character.skillBoosts = character.skillBoosts.concat(
      _.cloneDeep(character.background.skillBoosts)
    );
  }

  for (let i = 1; i <= character.abilityMods.Intelligence; i++)
    character.skillBoosts.push({
      id: "int" + i,
      source: "int",
      skill: { id: "Free" },
      proficiency: 2,
    });

  let freeClassBoosts = character.skillBoosts.filter(
    (b) =>
      (b.source === character.class.name || b.source === "int") &&
      b.skill.id === "Free"
  );

  freeClassBoosts.forEach((boost, i) => {
    if (oldBoosts[i]) boost.skill = oldBoosts[i].skill;
  });
}

export function v1_0_1(character) {
  character.abilityBoosts.forEach((boost) => {
    if (!boost.source.includes("_"))
      boost.source = boost.source.replace("Level", "Level_");
  });
}

export function v1_0_3(character) {
  if (character.class.name === Classes.Rogue.name) {
    character.skillBoosts = character.skillBoosts.concat(NEWROGUEBOOSTS);
    character.feats = character.feats.concat(Classes.Rogue.feats);
  }
}

export function migrateToLatest(character) {
  if (!character.builderVersion || character.builderVersion < "1.0.0") {
    v1_0_0(character);
    character.builderVersion = "1.0.0";
  }

  if (character.builderVersion < "1.0.1") {
    v1_0_1(character);
    character.builderVersion = "1.0.1";
  }

  if (character.builderVersion < "1.0.3") {
    v1_0_3(character);
    character.builderVersion = "1.0.3";
  }

  if (character.builderVersion < "1.0.4") {
    // No migrations for 1.0.4
    character.builderVersion = "1.0.4";
  }
}

const NEWROGUEBOOSTS = [
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_2",
    id: ClassNames.ROGUE + "9",
    level: 2,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_4",
    id: ClassNames.ROGUE + "10",
    level: 4,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_6",
    id: ClassNames.ROGUE + "11",
    level: 6,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_8",
    id: ClassNames.ROGUE + "12",
    level: 8,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_10",
    id: ClassNames.ROGUE + "13",
    level: 10,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_12",
    id: ClassNames.ROGUE + "14",
    level: 12,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_14",
    id: ClassNames.ROGUE + "15",
    level: 14,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_16",
    id: ClassNames.ROGUE + "16",
    level: 16,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_18",
    id: ClassNames.ROGUE + "17",
    level: 18,
  },
  {
    skill: { id: "Free" },
    source: ClassNames.ROGUE + "_20",
    id: ClassNames.ROGUE + "18",
    level: 20,
  },
];
