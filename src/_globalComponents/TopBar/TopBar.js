import React from "react"
import { Link } from "react-router-dom"
import { firebase } from "../../Firebase"
import { LoginButton } from "../index"
import "./TopBar.scss"
import NavButton from "../NavButton"

const TopBar = (props) => {
  return (
    <nav
      className={
        "bg-gray-800 flex items-center fixed" +
        " w-full p-3 md:px-8 text-white z-50"
      }
      aria-label="Primary"
      style={{ height: "4rem" }}
    >
      <div className="flex-1">
        <Link to="/" className="text-xl md:text-2xl">
          RPG Workshop
        </Link>
      </div>
      {props.currentUser ? (
        <div className="flex-1 flex-grow-2 justify-end flex items-center md:text-lg">
          <div
            id="profile-photo"
            className="mr-4"
            style={{
              backgroundImage: "url(" + props.currentUser.photoURL + ")",
            }}
          />
          <div id="profile-name" className="mr-8">
            {props.currentUser.displayName}
          </div>
          <NavButton color="gray-800" onClick={firebase.signOut}>Logout</NavButton>
        </div>
      ) : (
        <LoginButton />
      )}
    </nav>
  )
}

export default TopBar
