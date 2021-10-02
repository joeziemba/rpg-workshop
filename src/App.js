import React, { Component, useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./App.css"
import "./_assets/css/main.css"
import { UserContext } from "./context"

import { StatblockGenerator } from "./StatblockGenerator"
import Home from "./views/Home"
import CharacterBuilder from "./views/pf2/CharacterBuilder"

import { TopBar } from "./_globalComponents"

import { firebase } from "./Firebase"
import { RedesignAnnounceModal } from "./PF2CharacterBuilder/_modals/RedesignAnnounceModal"

const App = (props) => {
  const [currentUser, setUser] = useState(null)

  useEffect(() => {
    firebase.auth.onAuthStateChanged((currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null)
    })
  }, [])

  return (
    <>
      <UserContext.Provider
        value={{
          currentUser: currentUser,
        }}
      >
        <ToastContainer
          toastClassName="c-toast"
          autoClose={3000}
          hideProgressBar={true}
        />
        <RedesignAnnounceModal />
        <TopBar currentUser={currentUser} />
        <div className="pt-12">
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/dnd5e/statblock-generator/:characterId"
            component={StatblockGenerator}
          />
          <Route
            exact
            path="/dnd5e/statblock-generator/"
            component={StatblockGenerator}
          />
          <Route
            exact
            path="/pf2/character-builder/:characterId"
            component={CharacterBuilder}
          />
          <Route
            exact
            path="/pf2/character-builder/"
            component={CharacterBuilder}
          />
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
