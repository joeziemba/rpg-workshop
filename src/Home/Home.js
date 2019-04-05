import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";
import { firebase } from "../Firebase";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      characters: []
    };

    this.renderCharacters = this.renderCharacters.bind(this);
  }

  componentDidMount() {
    firebase
      .loadCharactersForUser(this.context.currentUser.uid)
      .then(snapshot => {
        let characters = [];
        snapshot.forEach(doc => {
          characters.push({ ...doc.data() });
        });
        this.setState({ characters, loading: false });
      });
  }

  renderCharacters() {
    return this.state.characters.map((char, i) => {
      return <li key={i}>{char.name}</li>;
    });
  }

  render() {
    return this.state.loading ? null : (
      <div className="">
        <h1>Statblock Generator</h1>
        <Link to="/generator">
          <button>Create</button>
        </Link>
        <button>Load</button>
        <ul>
          {this.renderCharacters()}
          <li>test</li>
        </ul>
      </div>
    );
  }
}

Home.contextType = UserContext;

export default Home;
