/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-done-callback */
import { Selector, fixture } from "testcafe"
const greenCheck = "\x1b[32m√\x1b[0m"
const success = (...args) => console.log(greenCheck, ...args)

fixture("SBG")
  .page("http://localhost:3000/dnd5e/statblock-generator")
  .beforeEach(async (tc) => {
    const closeModalButton = Selector("#close-modal")
    // await tc.resizeWindow(1024, 768)

    if (closeModalButton.exists) await tc.click(closeModalButton)
  })

test("Statblock Generator", async (tc) => {
  await testCreatureName(tc)
  await testSizeAndType(tc)
  await testArmorClass(tc)
  await testHitPoints(tc)
  await testSpeed(tc)

  // Proficiency
  await tc.selectText(Selector("#prof-input")).pressKey("delete")
  await tc.typeText(Selector("#prof-input"), "7")
  success("Proficiency")

  // Open Ability Scores menu
  await openMenu(tc, "#accordion-ability-scores")

  await testAbility(tc, "str", "29", "9")
  await testAbility(tc, "dex", "11", "0")
  await testAbility(tc, "con", "27", "8")
  await testAbility(tc, "int", "18", "4")
  await testAbility(tc, "wis", "17", "3")
  await testAbility(tc, "cha", "21", "5")

  // Check con added to hit points
  await tc
    .expect(Selector("#hit-points").innerText)
    .eql("Hit Points 444 (24d20 + 192)")
  success("Hit Points calculate with CON and Proficiency")

  // Saves
  await testSave(tc, "dex", "7")
  await testSave(tc, "con", "15")
  await testSave(tc, "wis", "10")
  await testSave(tc, "cha", "12")

  await openMenu(tc, "#accordion-properties")

  await testProperty(tc, "condition-immunities", "Prone")
  // remove property
  await tc.click(
    Selector(
      `#condition-immunities-input > div > div.rbt-input-multi.form-control.rbt-input > div > div:nth-child(1) > button`
    )
  )
  await tc
    .expect(Selector("#condition-immunities-input").innerText)
    .notContains("Prone")
  await testProperty(tc, "condition-immunities", "Blinded")
  await testProperty(tc, "condition-immunities", "Grappled")

  await testProperty(tc, "skills", "Acrobatics")
  await testProperty(tc, "skills", "Arcana")
  await testProperty(tc, "skills", "Stealth")

  await testProperty(tc, "damage-immunities", "Fire")
  await testProperty(tc, "damage-immunities", "Lightning")

  await testProperty(tc, "damage-resistances", "Piercing")
  await testProperty(tc, "damage-resistances", "Acid")

  await testProperty(tc, "damage-vulnerabilities", "Radiant")
  await testProperty(tc, "damage-vulnerabilities", "Force")

  await testProperty(tc, "languages", "Draconic")
  await testProperty(tc, "languages", "Abyssal")

  await openMenu(tc, "#accordion-features")

  await testEditFeature(
    tc,
    0,
    "Amphibious",
    "The dragon can breathe air and water."
  )

  await testAddFeature(tc)
  await testEditFeature(
    tc,
    1,
    "Legendary Resistance (3/Day)",
    "If the dragon fails a saving throw, it can choose to succeed instead."
  )

  await openMenu(tc, "#accordion-actions")
  // await deleteAction(tc, 0, "Longsword")
  await testAddAction(tc, "action")
  await testAddAction(tc, "melee-attack")
  await testAddAction(tc, "ranged-attack")

  await editAttack(tc, 0, {
    title: "Bite",
    type: "Melee",
    targets: "2",
    reach: "15",
    dieNum: "2",
    dmgDie: "10",
    dmgType: "Piercing",
  })

  await openMenu(tc, "#accordion-legendary-actions")
  await testAddLegendaryAction(tc)
  await testAddLegendaryAction(tc)
  await testEditLegendaryAction(tc, 2, {
    title: "Detect",
    content: "The dragon makes a Wisdom (Perception) check.",
  })
})

const openMenu = async (tc, menuId) => {
  const accordionButton = Selector(menuId)
  await tc.click(accordionButton)
  success("Open " + menuId)
}

const testCreatureName = async (tc) => {
  // Enter name in form
  const nameInput = Selector("#name-input")
  const nameDisplay = Selector("#creature-name")
  await tc.selectText(nameInput).pressKey("delete")
  await tc.typeText(nameInput, "Ancient Bronze Dragon")
  // Check name on Statblock
  await tc.expect(nameDisplay.innerText).eql("Ancient Bronze Dragon")
  success("Creature Name")
}

const testSizeAndType = async (tc) => {
  const sizeSelect = Selector("#size-select")
  const typeSelect = Selector("#type-select")
  const sizeTypeDisplay = Selector("#creature-details")

  await tc
    .click(sizeSelect)
    .click(Selector("option").withText("Gargantuan"))

  await tc.click(typeSelect).click(Selector("option").withText("Dragon"))

  await tc.expect(sizeTypeDisplay.innerText).eql("Gargantuan Dragon")
  success("Creature Type and Size")
}

const testArmorClass = async (tc) => {
  const acInput = Selector("#ac-input")
  const supportInput = Selector("#ac-support-input")
  const acDisplay = Selector("#armor-class")

  await tc.selectText(acInput).pressKey("delete")
  await tc.typeText(acInput, "22")
  await tc.typeText(supportInput, "Natural Armor")

  await tc
    .expect(acDisplay.innerText)
    .eql("Armor Class 22 (Natural Armor)")
  success("Armor Class")
}

const testHitPoints = async (tc) => {
  const hitDieSelect = Selector("#hit-die-select")
  const numberDieInput = Selector("#number-hit-die-input")
  const hitPointsDisplay = Selector("#hit-points")

  await tc.click(hitDieSelect).click(Selector("option").withText("20"))
  await tc.selectText(numberDieInput).pressKey("delete")
  await tc.typeText(numberDieInput, "24")

  await tc
    .expect(hitPointsDisplay.innerText)
    .eql("Hit Points 252 (24d20 + 0)")
  success("Hit Points")
}

const testSpeed = async (tc) => {
  const baseSpeedInput = Selector("#base-speed")
  const flySpeedInput = Selector("#fly-speed")
  const swimSpeedInput = Selector("#swim-speed")
  const speedDisplay = Selector("#speed")

  await tc.selectText(baseSpeedInput).pressKey("delete")
  await tc.typeText(baseSpeedInput, "40")

  await tc.selectText(flySpeedInput).pressKey("delete")
  await tc.typeText(flySpeedInput, "80")

  await tc.selectText(swimSpeedInput).pressKey("delete")
  await tc.typeText(swimSpeedInput, "40")

  await tc
    .expect(speedDisplay.innerText)
    .eql("Speed 40ft, 80ft (Fly), 40ft (Swim)")
  success("Speed")
}

const testAbility = async (tc, ability, score, mod) => {
  const abilitySelect = Selector(`#${ability}-select`)
  const abilityDisplay = Selector(`#${ability}-display`)

  await tc
    .click(abilitySelect)
    .click(Selector(`#${ability}-select option`).withText(score))
  await tc.expect(abilityDisplay.innerText).eql(score + " (+" + mod + ")")
  success(ability, score, mod)
}

const testSave = async (tc, save, score) => {
  const saveButton = Selector(`#${save}-save`)
  const saveDisplay = Selector(`#saving-throw-display`)

  await tc.click(saveButton)
  await tc
    .expect(saveDisplay.innerText)
    .contains(save.toUpperCase() + " +" + score)
  success(save, "save", score)
}

const testProperty = async (tc, property, selection) => {
  const propertyInput = Selector(`#${property}-input input`)
  const propertyDisplay = Selector(`#${property}-display`)

  await tc.typeText(propertyInput, selection.slice(0, 3))
  await tc.click(Selector(`a[aria-label="${selection}"]`))
  await tc
    .expect(Selector(`#${property}-input`).innerText)
    .contains(selection)
  await tc.expect(propertyDisplay.innerText).contains(selection)

  success(property, selection)
}

const testEditFeature = async (tc, featureId, title, content) => {
  const titleInput = Selector("#feature-title-" + featureId)
  const contentInput = Selector("#feature-content-" + featureId)
  const featureDisplay = Selector("#display-feature-" + featureId)

  await tc.selectText(titleInput).pressKey("delete")
  await tc.typeText(titleInput, title)

  await tc.selectText(contentInput).pressKey("delete")
  await tc.typeText(contentInput, content)

  await tc.expect(featureDisplay.innerText).eql(`${title}. ${content}`)
  success("edited", featureId, title, content)
}

const testAddFeature = async (tc) => {
  const addFeatureButton = Selector("button#add-feature")
  const initialCount = await Selector(
    "#accordion-content-features >div.feature-block"
  ).count

  await tc.click(addFeatureButton)

  await tc
    .expect(
      await Selector("#accordion-content-features >div.feature-block")
        .count
    )
    .eql(initialCount + 1)
  success("added feature")
}

// const deleteAction = async (tc, actionIndex) => {
//   const deleteButton = Selector("#delete-action-" + actionIndex)
//   await tc.click(deleteButton)
// }

const editAttack = async (
  tc,
  attackIndex,
  { title, type, targets, reach, dieNum, dmgDie, dmgType }
) => {
  await tc
    .selectText(Selector("#attack-title-input-" + attackIndex))
    .pressKey("delete")
  await tc.typeText(Selector("#attack-title-input-" + attackIndex), title)
  await tc
    .selectText(Selector("#attack-targets-input-" + attackIndex))
    .pressKey("delete")
  await tc.typeText(
    Selector("#attack-targets-input-" + attackIndex),
    targets
  )

  await tc
    .selectText(Selector("#attack-reach-input-" + attackIndex))
    .pressKey("delete")
  await tc.typeText(Selector("#attack-reach-input-" + attackIndex), reach)

  await tc
    .selectText(Selector("#attack-die-num-input-" + attackIndex))
    .pressKey("delete")
  await tc.typeText(
    Selector("#attack-die-num-input-" + attackIndex),
    dieNum
  )

  await tc
    .click(Selector("#attack-type-select-" + attackIndex))
    .click(
      Selector(`#attack-type-select-${attackIndex} option`).withText(type)
    )

  await tc
    .click(Selector("#attack-dmg-die-select-" + attackIndex))
    .click(
      Selector(`#attack-dmg-die-select-${attackIndex} option`).withText(
        dmgDie
      )
    )

  await tc
    .click(Selector("#attack-dmg-type-select-" + attackIndex))
    .click(
      Selector(`#attack-dmg-type-select-${attackIndex} option`).withText(
        dmgType
      )
    )

  await tc
    .expect(Selector("#display-action-" + attackIndex).innerText)
    .contains(title + ".")
  await tc
    .expect(Selector("#display-action-" + attackIndex).innerText)
    .contains(type + " Weapon Attack.")
  await tc
    .expect(Selector("#display-action-" + attackIndex).innerText)
    .contains(targets + " targets.")
  await tc
    .expect(Selector("#display-action-" + attackIndex).innerText)
    .contains("Reach " + reach + "ft.")
  await tc
    .expect(Selector("#display-action-" + attackIndex).innerText)
    .contains(dmgType.toLowerCase())

  success("edited action " + title)
}

const testAddAction = async (tc, actionType) => {
  const addButton = Selector("button#add-" + actionType)
  const initialCount = await Selector("#accordion-content-actions > div")
    .count

  await tc.click(addButton)

  await tc
    .expect(await Selector("#accordion-content-actions > div").count)
    .eql(initialCount + 1)
  success("added " + actionType)
}

const testAddLegendaryAction = async (tc) => {
  const addButton = Selector("button#add-legendary-action")
  const initialCount = await Selector(
    "#accordion-content-legendary-actions > div.feature-block"
  ).count

  await tc.click(addButton)

  await tc
    .expect(
      await Selector(
        "#accordion-content-legendary-actions > div.feature-block"
      ).count
    )
    .eql(initialCount + 1)
  success("added legendary action")
}
const testEditLegendaryAction = async (
  tc,
  actionIndex,
  { title, content }
) => {
  const titleInput = Selector(
    "#accordion-content-legendary-actions #feature-title-" + actionIndex
  )
  const contentInput = Selector(
    "#accordion-content-legendary-actions #feature-content-" + actionIndex
  )
  const actionDisplay = Selector(
    "#display-legendary-action-" + actionIndex
  )

  await tc.selectText(titleInput).pressKey("delete")
  await tc.typeText(titleInput, title)

  await tc.selectText(contentInput).pressKey("delete")
  await tc.typeText(contentInput, content)

  await tc.expect(actionDisplay.innerText).eql(`${title}. ${content}`)
  success("edited legendary action " + title)
}
