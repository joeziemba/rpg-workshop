import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import { firebase } from "../../Firebase";

class SubNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      showOpenModal: false
    };

    this.getCharacters = this.getCharacters.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getCharacters() {
    firebase
      .getPF2CharacrersForUser(this.context.currentUser.uid)
      .then(snapshot => {
        let characters = [];
        snapshot.forEach(doc => {
          characters.push({ ...doc.data(), uid: doc.id });
        });
        this.setState({ characters, showOpenModal: true });
      });
  }

  closeModal() {
    this.setState({ showOpenModal: false });
  }

  render() {
    return (
      <nav className="navbar navbar-expand secondary-nav fixed-top navbar--pathfinder">
        <h1 className="navbar-brand mb-0">PF2 Character Builder</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              className="btn btn-sm mr-3 mt-1 nav-button"
              onClick={this.props.reset}
            >
              New
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-sm mr-3 mt-1 nav-button"
              onClick={() => {
                firebase.savePF2Character(this.props.character);
              }}
            >
              Save
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-sm mr-3 mt-1 nav-button"
              onClick={this.getCharacters}
            >
              Open
            </button>
          </li>
        </ul>
        {this.state.showOpenModal && (
          <div className="c-modal">
            <div className="c-modal__window">
              <h2 className="c-modal__header">Choose a Character</h2>
              {this.state.characters.map(character => {
                return (
                  <Link
                    className="c-modal-button-row"
                    to={"/pf2/character-builder/" + character.uid}
                    onClick={this.closeModal}
                  >
                    {character.name}
                  </Link>
                );
              })}
              <button className="c-modal__close" onClick={this.closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

SubNav.contextType = UserContext;

export default SubNav;
