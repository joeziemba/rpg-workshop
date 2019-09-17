import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import "./_assets/css/main.css";
import { UserContext, FirebaseContext } from "./context";

import { StatblockGenerator } from "./StatblockGenerator";
import About from "./views/About";
import CharacterBuilder from "./views/pf2/CharacterBuilder";
import Home from "./views/Home";

import { TopBar } from "./_globalComponents";

import { firebase } from "./Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(currentUser => {
      currentUser
        ? this.setState({ currentUser })
        : this.setState({ currentUser: null });
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopBar currentUser={this.state.currentUser} />
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            registerCurrentUserToState: this.registerCurrentUserToState
          }}
        >
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/dnd5e/statblock-generator"
            component={StatblockGenerator}
          />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/pf2/character-builder"
            component={CharacterBuilder}
          />
          <Redirect from="*" to="/" />
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
