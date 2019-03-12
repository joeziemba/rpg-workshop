import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { UserContext, FirebaseContext } from "./context";

import StatblockGenerator from "./views/StatblockGenerator";
import About from "./views/About";

import { LoginButton, Dropdown } from "./_components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  // componentDidMount() {
  //   var user = this.context.getCurrentUser();
  //   var name, email, photoUrl, uid, emailVerified;

  //   if (user != null) {
  //     name = user.displayName;
  //     email = user.email;
  //     photoUrl = user.photoURL;
  //     emailVerified = user.emailVerified;
  //     uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
  //     // this value to authenticate with your backend server, if
  //     // you have one. Use User.getToken() instead.
  //   }

  //   debugger;

  // }

  componentDidMount() {
    this.context.auth.onAuthStateChanged(currentUser => {
      currentUser
        ? this.setState({ currentUser })
        : this.setState({ currentUser: null });
    });
  }

  renderNav() {
    if (this.state.currentUser) {
      return (
        <nav className="navbar topbar fixed-top">
          <span className="navbar-brand mb-0 h1" />

          <button id="profile-details">
            <div
              id="profile-photo"
              style={{
                backgroundImage: "url(" + this.state.currentUser.photoURL + ")",
                textAlign: "right"
              }}
            />
            <div id="profile-name">{this.state.currentUser.displayName}</div>
          </button>
          <Dropdown />
        </nav>
      );
    } else {
      return (
        <nav className="navbar topbar fixed-top">
          <span className="navbar-brand mb-0 h1" />
          <LoginButton />
        </nav>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderNav()}
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            registerCurrentUserToState: this.registerCurrentUserToState
          }}
        >
          <Route exact path="/" component={StatblockGenerator} />
          <Route exact path="/about" component={About} />
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

App.contextType = FirebaseContext;

export default App;
