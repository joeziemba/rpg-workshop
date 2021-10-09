import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { UserContext } from "context"

import { TopBar } from "components"
import { firebase } from "services/Firebase"
import { RedesignAnnounceModal } from "components/pfcb/_modals/RedesignAnnounceModal"
import { Home } from "views/Home"
import { StatblockGenerator } from "views/StatblockGenerator"
import { CharacterBuilder } from "views/CharacterBuilder"

const App = () => {
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
