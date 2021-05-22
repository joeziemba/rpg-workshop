import { Ancestries } from "./ancestries";
import { Classes } from "./classes";
import {
  calculateHP,
  calculateAbilityScores,
  calculatePerception,
} from "./classTemplate";
const hpTests = [
  {
    testName: "lv 1 character with CON boost",
    level: 1,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "" },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
    ],
    correctHP: 9,
  },
  {
    testName: "lv 1 Elf Sorc with no boosts",
    level: 1,
    class: Classes.Sorcerer,
    background: { name: "" },
    ancestry: Ancestries.Elf,
    abilityBoosts: [
      ...Ancestries.Elf.abilityBoosts,
      ...Classes.Sorcerer.abilityBoosts,
    ],
    abilityFlaws: [...Ancestries.Elf.abilityFlaws],
    // Class: 6, Ancestry: 6, CON: -1
    correctHP: 6 + (6 - 1),
  },
  {
    testName: "lv 4 Elf Sorc with CON boosts",
    level: 1,
    class: Classes.Sorcerer,
    background: { name: "" },
    ancestry: Ancestries.Elf,
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
    ],
    abilityFlaws: [...Ancestries.Elf.abilityFlaws],
    // Class: 6, Ancestry: 6, CON: 0
    correctHP: 12,
  },
  {
    testName: "lv 4 character with CON boost",
    level: 4,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "" },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
    ],
    correctHP: 36,
  },
  {
    testName: "lv 4 character with CON boost and ancestry",
    level: 4,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "Dwarf", hp: 10 },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
      {
        source: "Dwarf",
        ability: "Constitution",
      },
      {
        source: "Level_5",
        ability: "Constitution",
      },
    ],
    correctHP: 10 + (8 + 2) + (8 + 2) + (8 + 2) + (8 + 2),
  },
  {
    testName: "lv 5 character with CON boost and ancestry",
    level: 5,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "Dwarf", hp: 10 },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
      {
        source: "Dwarf",
        ability: "Constitution",
      },
      {
        source: "Level_5",
        ability: "Constitution",
      },
    ],
    correctHP: 10 + (8 + 2) + (8 + 2) + (8 + 2) + (8 + 2) + (8 + 3),
  },
  {
    testName: "lv 10 character with 3 CON boost",
    level: 10,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "" },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
      {
        source: "Level_5",
        ability: "Constitution",
      },
      {
        source: "Level_10",
        ability: "Constitution",
      },
      {
        source: "Level_15",
        ability: "Constitution",
      },
    ],
    correctHP: 97,
  },
  {
    testName: "lv 10 character with 3 CON boost and Flaw",
    level: 10,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "" },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
      {
        source: "Level_5",
        ability: "Constitution",
      },
      {
        source: "Level_10",
        ability: "Constitution",
      },
      {
        source: "Level_15",
        ability: "Constitution",
      },
    ],
    abilityFlaws: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
    ],
    correctHP: 87,
  },
  {
    testName: "lv 15 character with 4 CON boosts",
    level: 15,
    class: { hp: 8, name: "" },
    background: { name: "" },
    ancestry: { name: "" },
    abilityBoosts: [
      {
        source: "Level_1",
        ability: "Constitution",
      },
      {
        source: "Level_5",
        ability: "Constitution",
      },
      {
        source: "Level_10",
        ability: "Constitution",
      },
      {
        source: "Level_15",
        ability: "Constitution",
      },
    ],
    // 15 lvls of +8 from class
    // +1 from con lv1-4 = 4
    // +2 from con lv5-9 = 10
    // +3 from con lv10-14 = 15
    // +4 from con lv15 = 4
    correctHP: 15 * 8 + 4 + 10 + 15 + 4,
  },
];
describe("calculateHP", () => {
  hpTests.forEach((test) => {
    it(`${test.testName}`, () => {
      expect(calculateHP(test)).toEqual(test.correctHP);
    });
  });
});

describe("calculateAbilityScores", () => {
  it("adds 2 for each ability boost", () => {
    const mockCharacter = {
      abilityBoosts: [
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Strength" },
        { ability: "Dexterity" },
        { ability: "Charisma" },
        { ability: "Charisma" },
        { ability: "Charisma" },
        { ability: "Wisdom" },
      ],
    };

    const calculatedScores = calculateAbilityScores(mockCharacter);

    expect(calculatedScores.Strength).toEqual(12);
    expect(calculatedScores.Dexterity).toEqual(12);
    expect(calculatedScores.Constitution).toEqual(14);
    expect(calculatedScores.Intelligence).toEqual(10);
    expect(calculatedScores.Wisdom).toEqual(12);
    expect(calculatedScores.Charisma).toEqual(16);
  });

  it("adds 1 once the ability reaches 18", () => {
    const mockCharacter = {
      abilityBoosts: [
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Constitution" },
      ],
    };

    const calculatedScores = calculateAbilityScores(mockCharacter);

    expect(calculatedScores.Strength).toEqual(10);
    expect(calculatedScores.Dexterity).toEqual(10);
    expect(calculatedScores.Constitution).toEqual(21);
    expect(calculatedScores.Intelligence).toEqual(10);
    expect(calculatedScores.Wisdom).toEqual(10);
    expect(calculatedScores.Charisma).toEqual(10);
  });

  it("applies ability flaws properly", () => {
    const mockCharacter = {
      abilityBoosts: [
        { ability: "Constitution" },
        { ability: "Constitution" },
        { ability: "Strength" },
        { ability: "Dexterity" },
        { ability: "Charisma" },
        { ability: "Charisma" },
        { ability: "Charisma" },
        { ability: "Wisdom" },
      ],
      abilityFlaws: [{ ability: "Wisdom" }, { ability: "Intelligence" }],
    };

    const calculatedScores = calculateAbilityScores(mockCharacter);

    expect(calculatedScores.Strength).toEqual(12);
    expect(calculatedScores.Dexterity).toEqual(12);
    expect(calculatedScores.Constitution).toEqual(14);
    expect(calculatedScores.Intelligence).toEqual(8);
    expect(calculatedScores.Wisdom).toEqual(10);
    expect(calculatedScores.Charisma).toEqual(16);
  });
});

describe("calculatePerception", () => {
  let mockCharacter = {
    level: 1,
    class: {
      perceptionBoosts: [
        { type: "ANY_1", proficiency: 2 },
        { type: "ANY_4", proficiency: 4 },
        { type: "ANY_6", proficiency: 6 },
        { type: "ANOTHER_6", proficiency: 10 },
      ],
    },
  };
  it("returns the highest boost available for the characters level", () => {
    expect(calculatePerception(mockCharacter)).toEqual(2);
    mockCharacter.level = 4;
    expect(calculatePerception(mockCharacter)).toEqual(4);
    mockCharacter.level = 5;
    expect(calculatePerception(mockCharacter)).toEqual(4);
    mockCharacter.level = 6;
    expect(calculatePerception(mockCharacter)).toEqual(10);
  });
});
