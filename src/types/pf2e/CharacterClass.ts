import { Ability } from "data/abilities"
import { AbilityBoost } from "data/models/abilityBoost.model"
import SaveBoost from "data/models/SaveBoost"
import SkillBoost from "data/models/SkillBoost"

export interface PF2CharacterClass {
  name: string
  keyAbility: Ability
  hp: number
  perceptionProficiency: number
  perceptionBoosts: SkillBoost[]
  saveBoosts: SaveBoost[]
  defenses: { unarmored: number }
  skillBoosts: SkillBoost[]
  abilityBoosts: AbilityBoost[]
  abilityFlaws: AbilityBoost[]
  feats: FeatSlot[]
}
