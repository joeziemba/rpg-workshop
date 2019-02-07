import React, { Component } from "react";
import { Route } from 'react-router-dom';
import './App.css';

import StatblockGenerator from './views/StatblockGenerator';
import About from './views/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={StatblockGenerator} />
        <Route exact path='/about' component={About} />
      </React.Fragment>
    );
  }
}

export default App;