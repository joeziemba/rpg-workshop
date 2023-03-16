/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-done-callback */
import { Selector, fixture } from "testcafe"
import { Ancestries } from "../src/data/ancestries"
const greenCheck = "\x1b[32m√\x1b[0m"
const success = (...args) => console.log(greenCheck, ...args)

fixture("PF2 - Assign Ancestries").page(
  "http://localhost:3000/pf2/character-builder"
)

for (let ancestryName of Object.keys(Ancestries)) {
  test(`${ancestryName}`, async (tc) => {
    const closeModalButton = Selector("#close-modal")
    if (await closeModalButton.exists) await tc.click(closeModalButton)

    const ancestrySelect = Selector("#ancestry-select")

    const ancestry = Ancestries[ancestryName]
    const ancestryOption = ancestrySelect
      .find("option")
      .withText(ancestry.name)

    await tc.click(ancestrySelect).click(ancestryOption)

    const boostHeading = Selector("div").withText(
      "ANCESTRY BOOSTS - " + ancestry.name.toUpperCase()
    )
    await tc.expect(boostHeading.exists).ok()
    await checkStat("speed", ancestry.speed, tc)

    for (let boost of ancestry.abilityBoosts) {
      if (boost.ability !== "Free") {
        success(boost.ability)
        let ab = boost.ability.slice(0, 3).toLowerCase()
        await checkAbilityMod(ab, "+1", tc)
        await checkAbilityScore(ab, 12, tc)
      }
    }

    for (let boost of ancestry.abilityFlaws) {
      let ab = boost.ability.slice(0, 3).toLowerCase()
      await checkAbilityMod(ab, "-1", tc)
      await checkAbilityScore(ab, 8, tc)
    }
  })
}

async function checkStat(stat, value, tc) {
  let statValue = await Selector(`#${stat}-stat`).textContent
  success(stat, statValue, value)
  await tc.expect(statValue).eql(value.toString())
}

async function checkAbilityMod(stat, value, tc) {
  let modValue = await Selector(`#${stat}-mod`).textContent
  success(stat, modValue, value)
  await tc.expect(modValue).eql(value.toString())
}

async function checkAbilityScore(stat, value, tc) {
  let scoreValue = await Selector(`#${stat}-score`).textContent
  success(stat, scoreValue, value)
  await tc.expect(scoreValue).eql(value.toString())
}
