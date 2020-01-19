import { calculateHP } from "./classTemplate";

describe("calculateHP", () => {
  it("should return correct HP for character class and level", () => {
    const tests = [
      {
        level: 1,
        class: { hp: 8, name: "" },
        background: { name: "" },
        ancestry: { name: "" },
        abilityBoosts: [
          {
            source: "Level_1",
            ability: "Constitution"
          }
        ],
        correctHP: 9
      },
      {
        level: 4,
        class: { hp: 8, name: "" },
        background: { name: "" },
        ancestry: { name: "" },
        abilityBoosts: [
          {
            source: "Level_1",
            ability: "Constitution"
          }
        ],
        correctHP: 36
      },
      {
        level: 4,
        class: { hp: 8, name: "" },
        background: { name: "" },
        ancestry: { name: "Dwarf" },
        abilityBoosts: [
          {
            source: "Level_1",
            ability: "Constitution"
          },
          {
            source: "Dwarf",
            ability: "Constitution"
          },
          {
            source: "Level_5",
            ability: "Constitution"
          }
        ],
        correctHP: 40
      },
      {
        level: 5,
        class: { hp: 8, name: "" },
        background: { name: "" },
        ancestry: { name: "Dwarf" },
        abilityBoosts: [
          {
            source: "Level_1",
            ability: "Constitution"
          },
          {
            source: "Dwarf",
            ability: "Constitution"
          },
          {
            source: "Level_5",
            ability: "Constitution"
          }
        ],
        correctHP: 51
      },
      {
        level: 10,
        class: { hp: 8, name: "" },
        background: { name: "" },
        ancestry: { name: "" },
        abilityBoosts: [
          {
            source: "Level_1",
            ability: "Constitution"
          },
          {
            source: "Level_5",
            ability: "Constitution"
          },
          {
            source: "Level_10",
            ability: "Constitution"
          }
        ],
        correctHP: 97
      },
      {
        level: 15,
        class: { hp: 8, name: "" },
        background: { name: "" },
        ancestry: { name: "" },
        abilityBoosts: [
          {
            source: "Level_1",
            ability: "Constitution"
          },
          {
            source: "Level_5",
            ability: "Constitution"
          },
          {
            source: "Level_10",
            ability: "Constitution"
          },
          {
            source: "Level_15",
            ability: "Constitution"
          }
        ],
        correctHP: 135 + 11 + 6 + 1
      }
    ];
    tests.forEach(test => {
      expect(calculateHP(test)).toEqual(test.correctHP);
    });
  });
});
