import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { UserContext } from "context"

import firebase from "firebase"
import { firebaseService } from "services/Firebase"

import { TopBar } from "components"
import { RedesignAnnounceModal } from "components/common/RedesignAnnounceModal"

import { Home } from "routes/Home"
import { StatblockGenerator } from "routes/dnd5e/statblock-generator/StatblockGenerator"
import { CharacterBuilder } from "routes/pf2/character-builder/CharacterBuilder"

const App = () => {
  const [currentUser, setUser] = useState<firebase.User>()

  useEffect(() => {
    firebaseService.auth.onAuthStateChanged((user: firebase.User) => {
      if (user) setUser(user)
      return
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
