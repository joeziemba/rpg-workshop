import { Ability } from "data/abilities"
import { Ancestries } from "data/ancestries"
import { character } from "data/character"
import { Fighter } from "data/classes/fighter"
import FEATS from "data/feats/feats"
import { applyNewAncestry } from "./AncestryService"

describe("applyNewAncestry", () => {
  let blankCharacter: character
  beforeEach(() => {
    blankCharacter = new character()
  })

  it("adds Ability Boosts/Flaws for the chosen Ancestry", () => {
    const updatedCharacter = applyNewAncestry(blankCharacter, "Human")

    const humanBoosts = updatedCharacter.abilityBoosts.filter(
      (boost) => boost.source === "Human"
    )

    expect(updatedCharacter.ancestry?.name).toEqual("Human")
    expect(updatedCharacter.ancestry?.hp).toEqual(8)
    expect(humanBoosts.length).toEqual(2)
  })

  it("removes Ability Boosts for a past ancestry", () => {
    blankCharacter.ancestry = Ancestries.Human

    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    const dwarfBoosts = updatedCharacter.abilityBoosts.filter(
      (boost) => boost.source === "Dwarf"
    )

    const humanBoosts = updatedCharacter.abilityBoosts.filter(
      (boost) => boost.source === "Human"
    )

    expect(dwarfBoosts).toHaveLength(3)
    expect(humanBoosts).toHaveLength(0)
  })

  it("does not remove Ability Boosts from non-ancestry sources", () => {
    blankCharacter.ancestry = Ancestries.Human
    blankCharacter.abilityBoosts = [
      ...Ancestries.Human.abilityBoosts,
      ...Fighter.abilityBoosts,
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
    blankCharacter.ancestry = Ancestries.Elf
    blankCharacter.abilityFlaws = Ancestries.Elf.abilityFlaws

    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")
    expect(updatedCharacter.abilityFlaws.length).toEqual(1)
    expect(updatedCharacter.abilityFlaws[0].source).toEqual("Dwarf")
  })

  it("clears all Ancestry Feats", () => {
    blankCharacter.feats = [{ type: "ancestry", level: 1, feat: FEATS[0] }]
    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    console.log(updatedCharacter.feats)

    expect(updatedCharacter.feats.length).toEqual(1)
    expect(updatedCharacter.feats[0].feat).toBe(undefined)
  })

  it("does not clear any feats from other sources", () => {
    blankCharacter.feats = [
      { type: "ancestry", level: 1, feat: FEATS[10] },
      { type: "class", level: 1, feat: FEATS[10] },
    ]
    const updatedCharacter = applyNewAncestry(blankCharacter, "Dwarf")

    expect(updatedCharacter.feats.length).toEqual(2)
    expect(updatedCharacter.feats[0].feat).toBe(undefined)
  })
})
