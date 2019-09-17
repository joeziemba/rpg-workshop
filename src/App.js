import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context";

import { StatblockGenerator } from "./StatblockGenerator";

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
          <div className="c-site-container">
            <Route exact path="/" component={StatblockGenerator} />
          </div>
        </UserContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
