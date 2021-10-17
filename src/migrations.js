import CLASSES from "./data/classes"
import { Backgrounds } from "./data/backgrounds"
import FEATS from "./data/feats/allFeats.json"
import { getBlankCharacter } from "./data/classTemplate"
import { cloneDeep } from "lodash"

export function v1_0_1(character) {
  character.abilityBoosts.forEach((boost) => {
    if (!boost.source.includes("_"))
      boost.source = boost.source.replace("Level", "Level_")
  })
}

export function v1_1_1(character) {
  // Map all old skillBoosts onto new skillBoost format
  let reconstructedSkillBoosts = character.skillBoosts.map((oldBoost) => {
    let existingBoost = CLASSES[character.class.name]?.skillBoosts.find(
      (b) => b.id === oldBoost.id
    )

    if (!existingBoost)
      existingBoost = Backgrounds[
        character.background.name
      ]?.skillBoosts.find((b) => b.id === oldBoost.id)

    if (!existingBoost) {
      let charTemplate = getBlankCharacter()
      existingBoost = charTemplate.skillBoosts.find(
        (b) => b.id === oldBoost.id
      )
    }

    if (!existingBoost) return

    let newBoost = cloneDeep(existingBoost)

    // retain assigned skill
    newBoost.isStatic = !!newBoost.skill.name

    newBoost.skill = oldBoost.skill

    return newBoost
  })

  character.skillBoosts = reconstructedSkillBoosts.filter((b) => !!b)

  character.feats = character.feats.map((oldFeat) => {
    if (!oldFeat.name) return oldFeat

    let newFeat = FEATS.find(
      (feat) => feat.name === oldFeat.name.split("[")[0].trim()
    )
    if (!newFeat) return oldFeat
    // retain feat type
    newFeat.type = oldFeat.type
    return newFeat
  })
  const uniqueVals = new Set(character.abilityBoosts.map((b) => b.id))
  if (character.abilityBoosts.length !== uniqueVals.size) {
    let seen = []
    // Check for duplicate abilities and remove
    character.abilityBoosts = character.abilityBoosts
      .map((boost) => {
        if (!seen.includes(boost.id)) {
          seen.push(boost.id)
          return boost
        }
      })
      .filter((b) => !!b)
  }

  character.builderVersion = "1.1.1"
}

function v1_3_0(character) {
  character.feats.forEach((feat) => {
    feat.level = +feat.type.split("_")[1]
  })
  character.builderVersion = "1.1.3"
}

export function migrateToLatest(character) {
  if (!character.builderVersion) character.builderVersion = "0"
  if (character.builderVersion < "1.0.1") {
    v1_0_1(character)
    character.builderVersion = "1.0.1"
  }

  if (character.builderVersion < "1.1.1") {
    v1_1_1(character)
  }
  if (character.builderVersion < "1.1.3") {
    v1_3_0(character)
  }
}
