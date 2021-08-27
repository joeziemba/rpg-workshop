import { applyNewAncestry } from "./ancestry"

describe("applyNewAncestry", () => {
  let blankCharacter
  beforeEach(() => {
    blankCharacter = {
      ancestry: {},
      abilityBoosts: [],
      abilityFlaws: [],
      feats: [],
    }
  })

  it("adds Ability Boosts/Flaws for the chosen Ancestry", () => {
    const updatedCharacter = applyNewAncestry(blankCharacter, "Human")

    expect(updatedCharacter.ancestry.name).toEqual("Human")
    expect(updatedCharacter.ancestry.hp).toEqual(8)
    expect(updatedCharacter.abilityBoosts.length).toEqual(2)
  })

  it("removes Ability Boosts for a past ancestry", () => {
    blankCharacter.ancestry = { name: "Human" }
    blankCharacter.abilityBoosts = [
      {
        source: "Human",
      },
      {
        source: "Human",
      },
    ]

    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    expect(updatedCharacter.abilityBoosts.length).toEqual(3)
    expect(updatedCharacter.abilityBoosts[0].source).toEqual("Dwarf")
    expect(updatedCharacter.abilityBoosts[1].source).toEqual("Dwarf")
    expect(updatedCharacter.abilityBoosts[2].source).toEqual("Dwarf")
  })

  it("does not remove Ability Boosts from non-ancestry sources", () => {
    blankCharacter.ancestry = { name: "Human" }
    blankCharacter.abilityBoosts = [
      {
        source: "Human",
      },
      {
        source: "Human",
      },
      {
        source: "Fighter",
      },
    ]

    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    expect(updatedCharacter.abilityBoosts.length).toEqual(4)
  })

  it("Adds Ability Flaws for new ancestry that has one", () => {
    const updatedCharacter = applyNewAncestry(blankCharacter, "Elf")

    expect(updatedCharacter.abilityFlaws.length).toEqual(1)
    expect(updatedCharacter.abilityFlaws[0].source).toEqual("Elf")
  })

  it("removes Ability Flaws for a past ancestry", () => {
    blankCharacter.ancestry = { name: "Elf" }
    blankCharacter.abilityFlaws = [
      {
        source: "Elf",
      },
    ]

    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")
    expect(updatedCharacter.abilityFlaws.length).toEqual(1)
    expect(updatedCharacter.abilityFlaws[0].source).toEqual("Dwarf")
  })

  it("clears all Ancestry Feats", () => {
    blankCharacter.feats = [{ type: "ancestry", name: "Durability" }]
    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    expect(updatedCharacter.feats.length).toEqual(1)
    expect(updatedCharacter.feats[0].name).toBe(undefined)
  })

  it("does not clear any feats from other sources", () => {
    blankCharacter.feats = [
      { type: "ancestry", name: "Durability" },
      { type: "class", name: "Durability" },
    ]
    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    expect(updatedCharacter.feats.length).toEqual(2)
    expect(updatedCharacter.feats[0].name).toBe(undefined)
    expect(updatedCharacter.feats[1].name).toBe("Durability")
  })
})
