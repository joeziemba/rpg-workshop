import CLASSES from "./_data/classes"
import { Backgrounds } from "./_data/backgrounds"
import FEATS from "./_data/feats/allFeats.json"

export function v1_0_1(character) {
  character.abilityBoosts.forEach((boost) => {
    if (!boost.source.includes("_"))
      boost.source = boost.source.replace("Level", "Level_")
  })
}

export function v1_1_0(character) {
  character.skillBoosts = character.skillBoosts.map((oldBoost) => {
    // Replace old skill boosts with new ones
    let newBoost = CLASSES[character.class.name]?.skillBoosts.find(
      (b) => b.id === oldBoost.id
    )

    if (!newBoost)
      newBoost = Backgrounds[character.background.name]?.skillBoosts.find(
        (b) => b.id === oldBoost.id
      )

    if (!newBoost) return oldBoost
    // retain assigned skill
    newBoost.skill = oldBoost.skill
    newBoost.isStatic = !!newBoost.skill.name

    return newBoost
  })

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

  character.builderVersion = "1.1.0"
}

export function migrateToLatest(character) {
  if (character.builderVersion < "1.0.1") {
    v1_0_1(character)
    character.builderVersion = "1.0.1"
  }

  if (character.builderVersion < "1.1.0") {
    v1_1_0(character)
  }
}
