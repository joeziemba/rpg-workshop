import { cloneDeep } from "lodash"
import { Ancestries } from "data/ancestries"

export function applyNewAncestry(characterToUpdate, ancestryId) {
  // Make a clone to prevent side effect.
  let character = cloneDeep(characterToUpdate)

  // Remove any Ability Boosts from a previous Ancestry
  character.abilityBoosts = character.abilityBoosts.filter(
    (boost) => boost.source !== character.ancestry.name
  )

  // Remove any Ability Flaws from a previous Ancestry
  character.abilityFlaws = character.abilityFlaws.filter(
    (flaw) => flaw.source !== character.ancestry.name
  )

  // Set new Ancestry
  character.ancestry = Ancestries[ancestryId]

  // Add Ability Boosts and Flaws for new Ancestry
  character.abilityBoosts = character.abilityBoosts.concat(
    character.ancestry.abilityBoosts
  )
  character.abilityFlaws = character.abilityFlaws.concat(
    character.ancestry.abilityFlaws
  )

  // Clear old ancestry feats
  character.feats = character.feats.map((feat) => {
    if (!feat.type.includes("ancestry")) return feat
    else return { type: feat.type }
  })

  return character

  // this.updateStats(character);
}
