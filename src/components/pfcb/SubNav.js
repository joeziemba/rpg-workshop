import React from "react"
import { toast } from "react-toastify"
import { UserContext } from "context"
import { firebaseService } from "services/Firebase"
import { Modal, NavButton, OpenOrDeleteItem } from "components"

class SubNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      showOpenModal: false,
    }

    this.getCharacters = this.getCharacters.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.deleteCharacter = this.deleteCharacter.bind(this)
    this.saveCharacter = this.saveCharacter.bind(this)
  }

  async getCharacters() {
    const snapshot = await firebaseService.getPF2CharactersForUser(
      this.context.currentUser.uid
    )

    let characters = []
    snapshot.forEach((doc) => {
      characters.push({ ...doc.data(), uid: doc.id, id: doc.id })
    })
    if (characters.length === 0) toast("You have no saved characters")
    this.setState({ characters, showOpenModal: characters.length > 0 })
  }

  async saveCharacter() {
    if (this.props.character.name) {
      let character = await firebaseService.savePF2Character(
        this.props.character
      )
      if (character)
        this.props.history.push(`/pf2/character-builder/${character.id}`)
    } else {
      toast.error("Cannot Save a character without a name")
    }
  }

  async deleteCharacter(character) {
    await firebaseService.deletePF2Character(character.id)
    await this.getCharacters()
    toast("Deleted " + character.name)
  }

  async selectCharacter(id) {
    const character = await this.props.getCharacter(id)
    this.closeModal()
    toast("Opened " + character.name)
  }

  closeModal() {
    this.setState({ showOpenModal: false })
  }

  render() {
    return (
      <div className="fixed w-full bg-navy-700 text-white z-10 shadow-md">
        <div className="max-w-5xl mx-auto px-8 py-2 flex">
          <h1 className="flex-1 m-0 mr-8 text-2xl leading-tight">
            Character Builder
          </h1>

          <NavButton color="navy" onClick={this.props.reset}>
            {this.context.currentUser ? "New" : "Clear Sheet"}
          </NavButton>

          {this.context.currentUser && (
            <React.Fragment>
              <NavButton color="navy" onClick={this.saveCharacter}>
                Save
              </NavButton>

              <NavButton color="navy" onClick={this.getCharacters}>
                Open
              </NavButton>
            </React.Fragment>
          )}

          {this.state.showOpenModal && (
            <Modal
              title="Choose a Character"
              show={this.state.showOpenModal}
              closeFunction={this.closeModal}
            >
              <ul className="text-black">
                {this.state.characters.map((character) => {
                  return (
                    <OpenOrDeleteItem
                      key={character.uid}
                      id={character.uid}
                      selectFunc={async () =>
                        await this.selectCharacter(character.uid)
                      }
                      deleteFunc={async () =>
                        await this.deleteCharacter(character)
                      }
                    >
                      {character.name}
                    </OpenOrDeleteItem>
                  )
                })}
              </ul>
            </Modal>
          )}
        </div>
      </div>
    )
  }
}

SubNav.contextType = UserContext

export default SubNav
