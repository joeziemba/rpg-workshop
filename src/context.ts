import { Ancestries } from "data/ancestries"
import { Backgrounds } from "data/backgrounds"
import { character } from "data/character"
import Classes from "data/classes"
import { Guid } from "js-guid"
import React, { ChangeEvent, ChangeEventHandler, useContext } from "react"
import {
  Statblock,
  StatblockGenerator,
} from "routes/dnd5e/statblock-generator/StatblockGenerator"
import { Ability } from "data/abilities"
import { StatblockAction } from "data/models/StatblockAction"
import { CharacterBuilder } from "routes/pf2/character-builder/CharacterBuilder"

export const UserContext = React.createContext({})

export const FirebaseContext = React.createContext(null)

export interface CharacterBuilderContext {
  Ancestries: typeof Ancestries
  Backgrounds: typeof Backgrounds
  boostAbility: CharacterBuilder["boostAbility"]
  character: character
  Classes: typeof Classes
  deleteFeat: CharacterBuilder["deleteFeat"]
  getCharacter: CharacterBuilder["getCharacter"]
  selectAncestry: CharacterBuilder["selectAncestry"]
  selectBackground: CharacterBuilder["selectBackground"]
  selectClass: CharacterBuilder["selectClass"]
  selectFeat: CharacterBuilder["selectFeat"]
  selectSkill: CharacterBuilder["selectSkill"]
  setLevel: CharacterBuilder["setLevel"]
  updateName: CharacterBuilder["updateName"]
}

export const PF2CharacterContext = React.createContext(
  {} as CharacterBuilderContext
)

export const useCharacterBuilderContext = () =>
  useContext(PF2CharacterContext)

export type StatblockActionType = "Melee" | "Ranged" | "General"
export type StatblockContextType = {
  addAction: StatblockGenerator["addAction"]
  addFeature: StatblockGenerator["addAction"]
  addLegendaryAction: StatblockGenerator["addAction"]
  deleteAction: StatblockGenerator["deleteAction"]
  deleteFeature: StatblockGenerator["deleteFeature"]
  stats: Statblock
  toggleSave: (save: AbilityKey) => void
  updateAbility: StatblockGenerator["updateAbility"]
  updateAC: ChangeEventHandler<HTMLInputElement>
  updateAction: StatblockGenerator["updateAction"]
  updateFeature: StatblockGenerator["updateFeature"]
  updateHP: ChangeEventHandler<HTMLInputElement>
  updatePropertyList: (selected: string[], arrayToUpdate: string) => void
  updateState: StatblockGenerator["updateState"]
}
export const StatblockContext = React.createContext(
  {} as StatblockContextType
)

export const useStatblockContext = () => useContext(StatblockContext)
