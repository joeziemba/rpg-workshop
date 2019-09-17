import React from "react";
import { Link } from "react-router-dom";
import { firebase } from "../Firebase";
import { LoginButton } from "./index";

const TopBar = props => {
  return (
    <nav className="navbar topbar fixed-top">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">TableTopTools</span>
      </Link>
      {props.currentUser ? (
        <div className="float-right">
          <div
            id="profile-photo"
            style={{
              backgroundImage: "url(" + props.currentUser.photoURL + ")",
              textAlign: "right"
            }}
          />
          <div id="profile-name">{props.currentUser.displayName}</div>
          <button onClick={firebase.signOut}>Logout</button>
        </div>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};

export default TopBar;
