import React from "react";
import { UserContext } from "../../context";
import { firebase } from "../../Firebase";

class GeneratorNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statblocks: [],
      showOpenModal: false
    };
    this.getCharacters = this.getCharacters.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getCharacters() {
    firebase
      .load5eStatblocksForUser(this.context.currentUser.uid)
      .then(snapshot => {
        let statblocks = [];
        snapshot.forEach(doc => {
          statblocks.push({ ...doc.data(), uid: doc.id });
        });
        this.setState({ statblocks, showOpenModal: true });
      });
  }

  closeModal() {
    this.setState({ showOpenModal: false });
  }

  selectStatblock(statblock) {
    this.props.setStatblock(statblock);
    this.closeModal();
  }

  render() {
    return (
      <nav className="navbar navbar-expand secondary-nav fixed-top">
        <span className="navbar-brand mb-0 h1">Statblock Generator</span>
        <div className=" navbar-collapse " id="navbarNavDropdown">
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
                  firebase.saveStatblock(this.props.statblock);
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

            <li className="nav-item">
              <button
                className="btn btn-sm mr-3 mt-1 nav-button"
                onClick={this.props.toggleExportView}
              >
                {this.props.exportView ? "Generator" : "Export"} View
              </button>
            </li>
          </ul>
        </div>
        {this.state.showOpenModal && (
          <div className="c-modal">
            <div className="c-modal__window">
              Choose a Character
              {this.state.statblocks.map(statblock => {
                return (
                  <button onClick={() => this.selectStatblock(statblock)}>
                    {statblock.name}
                  </button>
                );
              })}
              <button onClick={this.closeModal}>Close</button>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

GeneratorNav.contextType = UserContext;

export default GeneratorNav;
