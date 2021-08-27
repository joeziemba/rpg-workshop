import React from "react"
import Classes from "./_data/classes"
import { Ancestries } from "./_data/ancestries"
import { Backgrounds } from "./_data/backgrounds"

export const UserContext = React.createContext({})

export const FirebaseContext = React.createContext(null)

export const PF2CharacterContext = React.createContext({
  Classes,
  Ancestries,
  Backgrounds,
})
