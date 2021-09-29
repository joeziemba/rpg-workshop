import React from "react"
import { Modal } from "src/_globalComponents"
import NavButton from "src/_globalComponents/NavButton"
import { UserContext } from "../../context"
import { firebase } from "../../Firebase"

class GeneratorNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      statblocks: [],
      showOpenModal: false,
    }
    this.getCharacters = this.getCharacters.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.saveStatblock = this.saveStatblock.bind(this)
    this.selectStatblock = this.selectStatblock.bind(this)
  }

  getCharacters() {
    firebase
      .load5eStatblocksForUser(this.context.currentUser.uid)
      .then((snapshot) => {
        let statblocks = []
        snapshot.forEach((doc) => {
          statblocks.push({ ...doc.data(), uid: doc.id })
        })
        this.setState({ statblocks, showOpenModal: true })
      })
  }

  closeModal() {
    this.setState({ showOpenModal: false })
  }

  selectStatblock(statblock) {
    this.closeModal()
    this.props.setStatblock(statblock)
    this.props.history.push("/dnd5e/statblock-generator/" + statblock.uid)
  }

  saveStatblock(statblock) {
    firebase.saveStatblock(statblock)
  }

  render() {
    return (
      <nav className="fixed w-full px-3 md:px-8 py-3 bg-red-900 text-white flex z-50">
        <h1 className="m-0 mr-8 text-2xl leading-tight">
          Statblock Generator
        </h1>

        <NavButton color="red-900" onClick={this.props.reset}>
          New
        </NavButton>

        {this.context.currentUser && (
          <React.Fragment>
            <NavButton
              color="red-900"
              onClick={() => {
                this.saveStatblock(this.props.statblock)
              }}
            >
              Save
            </NavButton>

            <NavButton color="red-900" onClick={this.getCharacters}>
              Open
            </NavButton>
            <NavButton
              color="red-900"
              onClick={this.props.toggleExportView}
            >
              {this.props.exportView ? "Generator" : "Export"} View
            </NavButton>
          </React.Fragment>
        )}

        <Modal
          show={this.state.showOpenModal}
          title="Choose a Statblock"
          color="red-900"
          closeFunction={this.closeModal}
        >
          {this.state.statblocks.map((statblock, i) => {
            return (
              <button
                key={i}
                className="text-left block text-black w-full px-8 py-2 hover:bg-gray-200 transition-colors"
                onClick={() => this.selectStatblock(statblock)}
              >
                {statblock.name}
              </button>
            )
          })}
        </Modal>
      </nav>
    )
  }
}

GeneratorNav.contextType = UserContext

export default GeneratorNav
