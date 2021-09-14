/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-done-callback */
import { Selector, fixture } from "testcafe"

fixture("Builder").page("http://localhost:3000/pf2/character-builder")

test("Choose Ancestry", async (tc) => {
  const ancestrySelect = Selector("#ancestry-select")
  const dwarfOption = ancestrySelect.find("option").withText("Dwarf")

  await tc.click(ancestrySelect).click(dwarfOption)

  await checkStat("speed", "20", tc)
  await checkStat("hp", 0, tc)
  await checkStat("fort", 1, tc)
  await checkStat("will", 1, tc)
  await checkStat("con", 1, tc)
  await checkStat("wis", 1, tc)
  // checkStat("cha", "", tc)
})

async function checkStat(stat, value, tc) {
  tc.expect(await Selector(`#${stat}-stat`).textContent).eql(value)
}
