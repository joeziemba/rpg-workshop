import React, { useState } from "react"
import { Link } from "react-router-dom"
import { firebase } from "services/Firebase"
import { LoginButton } from "../index"
import "./TopBar.scss"

const TopBar = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav
      className={
        "fixed" + " w-full text-white z-20 shadow-md bg-slate-800"
      }
    >
      <div className="p-4 px-8 flex items-center h-12 max-w-5xl mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-xl md:text-2xl">
            RPG Workshop
          </Link>
        </div>
        {props.currentUser ? (
          <div className="relative group">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="px-4 bg-slate-700 hover:bg-slate-600 relative h-12 px-4 flex-1 flex-grow-2 justify-end flex items-center justify-around transition-colors"
              style={{ minWidth: "180px" }}
            >
              <div
                id="profile-photo"
                className="mr-4"
                style={{
                  backgroundImage:
                    "url(" + props.currentUser.photoURL + ")",
                }}
              />
              <div id="profile-name" className="">
                {props.currentUser.displayName}
              </div>
            </button>
            {showMenu && (
              <div
                // style={{ width: "110%" }}
                className="shadow-xl leading-snug z-20 right-0 left-0 absolute bg-slate-700 transition-colors text-white top-12 shadow-md"
                onClick={() => setShowMenu(false)}
              >
                <button
                  className="leading-snug text-right w-full px-4 py-3 hover:bg-slate-600"
                  onClick={firebase.signOut}
                >
                  Logout
                </button>
                <a
                  href="https://twitter.com/rpgworkshop_"
                  rel="noreferrer"
                  target="_blank"
                  className="border-t border-slate-400 leading-snug text-right block w-full py-3 px-4 transition-colors hover:bg-slate-600"
                >
                  <i className="fab fa-twitter mr-4 " />
                  @rpgworkshop_
                </a>
              </div>
            )}
          </div>
        ) : (
          <div>
            <LoginButton />
          </div>
        )}
      </div>
    </nav>
  )
}

export default TopBar
