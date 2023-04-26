import CLASSES from "./data/classes"
import { Backgrounds } from "./data/backgrounds"
import FEATS from "./data/feats/allFeats.json"
import { character, getBlankCharacter } from "./data/character"
import { cloneDeep } from "lodash"
import { AbilityBoost } from "data/models/abilityBoost.model"

export function v1_0_1(character: character) {
  character.abilityBoosts.forEach((boost) => {
    if (!boost.source.includes("_"))
      boost.source = boost.source.replace("Level", "Level_")
  })
}

export function v1_1_1(character: character) {
  // Map all old skillBoosts onto new skillBoost format
  const reconstructedSkillBoosts = character.skillBoosts.map(
    (oldBoost) => {
      let existingBoost

      if (character.class?.name)
        //@ts-expect-error
        existingBoost = CLASSES[character.class.name]?.skillBoosts.find(
          (b: any) => b.id === oldBoost.id
        )

      if (!existingBoost)
        existingBoost = Backgrounds[
          character.background?.name ?? ""
        ]?.skillBoosts.find((b: any) => b.id === oldBoost.id)

      if (!existingBoost) {
        const charTemplate = getBlankCharacter()
        existingBoost = charTemplate.skillBoosts.find(
          (b) => b.id === oldBoost.id
        )
      }

      if (!existingBoost) return

      const newBoost = cloneDeep(existingBoost)

      // retain assigned skill
      newBoost.isStatic = !!newBoost.skill.name

      newBoost.skill = oldBoost.skill

      return newBoost
    }
  )

  character.skillBoosts = reconstructedSkillBoosts.filter((b) => !!b)

  character.feats = character.feats.map((oldFeat: any) => {
    if (!oldFeat.name) return oldFeat

    const newFeat = FEATS.find(
      (feat) => feat.name === oldFeat.name.split("[")[0].trim()
    )
    if (!newFeat) return oldFeat
    // retain feat type
    // @ts-expect-error: need to use outdated type for migration purposes
    newFeat.type = oldFeat.type
    return newFeat
  })
  const uniqueVals = new Set(character.abilityBoosts.map((b) => b.id))
  if (character.abilityBoosts.length !== uniqueVals.size) {
    const seen = [] as any[]
    // Check for duplicate abilities and remove
    character.abilityBoosts = character.abilityBoosts
      .map((boost) => {
        if (!seen.includes(boost.id)) {
          seen.push(boost.id)
          return boost
        }
      })
      .filter((b) => !!b) as AbilityBoost[]
  }

  character.builderVersion = "1.1.1"
}

function v1_1_3(character: character) {
  character.feats.forEach((feat) => {
    feat.level = +feat.type.split("_")[1]
  })
  character.builderVersion = "1.1.3"
}

function v1_1_4(character: character) {
  // Migrate feats to FeatSlot format

  //@ts-expect-error
  character.feats = character.feats.map((oldFeat) => {
    const { level, type, ...feat } = oldFeat
    return {
      level,
      type,
      feat: { ...feat },
    }
  })

  character.builderVersion = "1.1.4"
}

export function migrateToLatest(character: character) {
  if (!character.builderVersion) character.builderVersion = "0"
  if (character.builderVersion < "1.0.1") {
    v1_0_1(character)
    character.builderVersion = "1.0.1"
  }

  if (character.builderVersion < "1.1.1") {
    v1_1_1(character)
  }
  if (character.builderVersion < "1.1.3") {
    v1_1_3(character)
  }

  if (character.builderVersion < "1.1.4") {
    v1_1_4(character)
  }
}
