import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context";

import { StatblockGenerator } from "./StatblockGenerator";
import About from "./views/About";

import { TopBar } from "./_globalComponents";
import Home from "./Home/Home";

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
    if (!this.state.currentUser) return null;
    return (
      <React.Fragment>
        <TopBar currentUser={this.state.currentUser} />
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            registerCurrentUserToState: this.registerCurrentUserToState
          }}
        >
          <div className="c-site-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/generator/:characterId"
              component={StatblockGenerator}
            />
            <Route exact path="/generator" component={StatblockGenerator} />
            <Route exact path="/characters" component={About} />
          </div>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
