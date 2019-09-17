import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./_assets/css/main.css";
import { UserContext, FirebaseContext } from "./context";

import StatblockGenerator from "./views/StatblockGenerator";
import About from "./views/About";
import CharacterBuilder from "./views/pf2/CharacterBuilder";
import Home from "./views/Home";

import { LoginButton } from "./_components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  // componentDidMount() {

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
          <div>
            <span className="navbar-brand mb-0 h1">DMTools</span>
            <Link to="/5e/statblock-generator"><span className="mr-3">5e Statblock Generator</span></Link>
            <Link to="/pf2/character-builder">
              Pathfinder 2e Character Builder
            </Link>
          </div>
          <div className="">
            <div
              id="profile-photo"
              style={{
                backgroundImage: "url(" + this.state.currentUser.photoURL + ")",
                textAlign: "right"
              }}
            />
            <div id="profile-name">{this.state.currentUser.displayName}</div>
            <button onClick={this.context.signOut}>Logout</button>
          </div>
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
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/5e/statblock-generator"
            component={StatblockGenerator}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/pf2/character-builder"
            component={CharacterBuilder}
          />
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

App.contextType = FirebaseContext;

export default App;
