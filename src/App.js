import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "./_assets/css/main.css";
import { UserContext } from "./context";

import { StatblockGenerator } from "./StatblockGenerator";
import About from "./views/About";
import Home from "./views/Home";
import CharacterBuilder from "./views/pf2/CharacterBuilder";

import { TopBar } from "./_globalComponents";

import { firebase } from "./Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged((currentUser) => {
      currentUser
        ? this.setState({ currentUser })
        : this.setState({ currentUser: null });
    });
  }

  render() {
    return (
      <>
        <ToastContainer
          toastClassName="c-toast"
          autoClose={3000}
          hideProgressBar={true}
        />
        <TopBar currentUser={this.state.currentUser} />
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            registerCurrentUserToState: this.registerCurrentUserToState,
          }}
        >
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
          <Route exact path="/about" component={About} />
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
        </UserContext.Provider>
      </>
    );
  }
}

export default App;
