import React, { useState } from "react"
import { Link } from "react-router-dom"
import { firebase } from "../../Firebase"
import { LoginButton } from "../index"
import "./TopBar.scss"
import NavButton from "../NavButton"

const TopBar = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav
      className={
        "flex items-center fixed" + " w-full  md:px-8 text-white z-50"
      }
      aria-label="Primary"
      style={{ height: "3rem", backgroundColor: "#333" }}
    >
      <div className="flex-1">
        <Link to="/" className="text-xl md:text-2xl">
          RPG Workshop
        </Link>
      </div>
      {props.currentUser ? (
        <div className="relative group">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className=" relative h-full px-2 flex-1 flex-grow-2 justify-end flex items-center md:text-lg"
          >
            <div
              id="profile-photo"
              className="mr-4"
              style={{
                backgroundImage: "url(" + props.currentUser.photoURL + ")",
              }}
            />
            <div id="profile-name" className="">
              {props.currentUser.displayName}
            </div>
          </button>
          {showMenu && (
            <div
              style={{ width: "110%" }}
              className="leading-snug z-50 py-2 right-0 left-0 absolute bg-slate-900 transition-colors text-white top-11 shadow-md"
              onClick={() => setShowMenu(false)}
            >
              <button
                className="leading-snug text-left w-full px-4 py-3 hover:bg-slate-700"
                onClick={firebase.signOut}
              >
                Logout
              </button>
              <a
                href="https://twitter.com/rpgworkshop_"
                rel="noreferrer"
                target="_blank"
                className="leading-snug block w-full py-3 px-4 transition-colors hover:bg-slate-700"
              >
                <i className="fab fa-twitter mr-2" />
                @rpgworkshop_
              </a>
            </div>
          )}
        </div>
      ) : (
        <LoginButton />
      )}
    </nav>
  )
}

export default TopBar
