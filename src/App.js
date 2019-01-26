import React, { Component } from "react";
import './App.css';

import { Row, Column } from './_components/';

class App extends Component {
  render() {
    return (
      <div className="flex-container App">
        <Row>
          <Column stackSize='small'>
            One of three columns
          </Column>
          <Column stackSize='small'>
            One of three columns
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;