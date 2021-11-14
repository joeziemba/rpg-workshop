import React from "react"
import { toast } from "react-toastify"
import { Modal, NavButton, OpenOrDeleteItem } from "components"
import { UserContext } from "context"
import { firebaseService } from "services/Firebase"

export class GeneratorNav extends React.Component {
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
    toast("Opened " + statblock.name)
  }

  async saveStatblock(statblock) {
    const savedStatblock = await firebase.saveStatblock(statblock)
    if (savedStatblock) {
      savedStatblock.uid = savedStatblock.id
      this.props.setStatblock(savedStatblock)
      this.props.history.push(
        "/dnd5e/statblock-generator/" + savedStatblock.id
      )
    }
  }

  async deleteStatblock(statblock) {
    await firebase.deleteStatblock(statblock.uid)
    toast("Deleted " + statblock.name)
    this.closeModal()
    this.getCharacters()
  }

  render() {
    return (
      <nav className="fixed w-full bg-red-900 text-white z-10">
        <div className="max-w-5xl px-8 py-2 mx-auto flex">
          <h1 className="flex-1 m-0 lg:mr-8 text-2xl leading-tight">
            Statblock Generator
          </h1>

          <NavButton color="red" onClick={this.props.reset}>
            New
          </NavButton>

          {this.context.currentUser && !this.props.exportView && (
            <React.Fragment>
              <NavButton
                color="red"
                onClick={async () => {
                  await this.saveStatblock(this.props.statblock)
                }}
              >
                Save
              </NavButton>

              <NavButton color="red" onClick={this.getCharacters}>
                Open
              </NavButton>
            </React.Fragment>
          )}
          <NavButton color="red" onClick={this.props.toggleExportView}>
            {this.props.exportView ? "Generator" : "Export"}
          </NavButton>

          <Modal
            show={this.state.showOpenModal}
            title="Choose a Statblock"
            color="bg-red-900"
            closeFunction={this.closeModal}
          >
            <ul>
              {this.state.statblocks.map((statblock, i) => {
                return (
                  <OpenOrDeleteItem
                    key={i}
                    id={statblock.id}
                    className="text-left block text-black w-full px-8 py-2 hover:bg-gray-200 transition-colors"
                    selectFunc={() => this.selectStatblock(statblock)}
                    deleteFunc={async () =>
                      await this.deleteStatblock(statblock)
                    }
                  >
                    {statblock.name}
                  </OpenOrDeleteItem>
                )
              })}
            </ul>
          </Modal>
        </div>
      </nav>
    )
  }
}

GeneratorNav.contextType = UserContext

export default GeneratorNav
