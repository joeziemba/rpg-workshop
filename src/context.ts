import { Ancestries } from "data/ancestries"
import { Backgrounds } from "data/backgrounds"
import { character } from "data/character"
import Classes from "data/classes"
import { Guid } from "js-guid"
import React, { ChangeEvent, ChangeEventHandler } from "react"
import { Statblock } from "routes/dnd5e/statblock-generator/StatblockGenerator"
import { Ability } from "data/abilities"
import { StatblockAction } from "data/models/StatblockAction"
import { CharacterBuilder } from "routes/pf2/character-builder/CharacterBuilder"

export const UserContext = React.createContext({})

export const FirebaseContext = React.createContext(null)

export interface CharacterBuilderContext {
  character: character
  selectAncestry: CharacterBuilder["selectAncestry"]
  selectBackground: CharacterBuilder["selectBackground"]
  selectClass: CharacterBuilder["selectClass"]
  selectSkill: CharacterBuilder["selectSkill"]
  selectFeat: CharacterBuilder["selectFeat"]
  deleteFeat: CharacterBuilder["deleteFeat"]
  getCharacter: CharacterBuilder["getCharacter"]
  Classes: typeof Classes
  Ancestries: typeof Ancestries
  Backgrounds: typeof Backgrounds
}

export const PF2CharacterContext = React.createContext(
  {} as CharacterBuilderContext
)
export type StatblockActionType = "Melee" | "Ranged" | "General"
export type StatblockContextType = {
  stats: Statblock
  updateState: any
  updateAbility: (ability: AbilityKey, newValue: number) => void
  updateAC: ChangeEventHandler<HTMLInputElement>
  updateHP: ChangeEventHandler<HTMLInputElement>
  updatePropertyList: (selected: string[], arrayToUpdate: string) => void
  addFeature: () => void
  updateFeature: (event: ChangeEvent<HTMLInputElement>, id: string) => void
  addAction: (actionType: StatblockActionType) => void
  updateAction: (
    e: { target: HTMLButtonElement },
    actionId: string,
    legendary: boolean
  ) => void
  deleteAction: (
    actionId: StatblockAction["id"],
    isLegendary: boolean
  ) => void
  deleteFeature: (id: string) => void
  addLegendaryAction: (actionType: StatblockActionType) => void
  toggleSave: (save: AbilityKey) => void
}
export const StatblockContext = React.createContext(
  {} as StatblockContextType
)
