import React from "react"
import Classes from "./data/classes"
import { Ancestries } from "./data/ancestries"
import { Backgrounds } from "./data/backgrounds"

export const UserContext = React.createContext({})

export const FirebaseContext = React.createContext(null)

export const PF2CharacterContext = React.createContext({
  Classes,
  Ancestries,
  Backgrounds,
})

export const StatblockContext = React.createContext()
