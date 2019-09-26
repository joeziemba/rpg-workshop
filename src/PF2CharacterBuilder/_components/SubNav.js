import React from "react";
import { UserContext } from "../../context";
import { firebase } from "../../Firebase";

class SubNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand secondary-nav fixed-top navbar--pathfinder">
        <h1 className="navbar-brand mb-0">PF2 Character Builder</h1>
      </nav>
    );
  }
}

SubNav.contextType = UserContext;

export default SubNav;
