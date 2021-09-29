import React from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context"
import { firebase } from "../../Firebase"
import { toast } from "react-toastify"
import NavButton from "../../_globalComponents/NavButton"
import { Modal } from "src/_globalComponents"

class SubNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      showOpenModal: false,
    }

    this.getCharacters = this.getCharacters.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  getCharacters() {
    firebase
      .getPF2CharactersForUser(this.context.currentUser.uid)
      .then((snapshot) => {
        let characters = []
        snapshot.forEach((doc) => {
          characters.push({ ...doc.data(), uid: doc.id })
        })
        this.setState({ characters, showOpenModal: true })
      })
  }

  closeModal() {
    this.setState({ showOpenModal: false })
  }

  render() {
    return (
      <div className="fixed w-full px-3 md:px-8 py-3 bg-navy-700 text-white flex z-10">
        <h1 className="m-0 mr-8 text-2xl leading-tight">
          Character Builder
        </h1>

        <NavButton color="navy-700" onClick={this.props.reset}>
          {this.context.currentUser ? "New" : "Clear Sheet"}
        </NavButton>

        {this.context.currentUser && (
          <React.Fragment>
            <NavButton
              color="navy-700"
              onClick={() => {
                if (this.props.character.name) {
                  firebase.savePF2Character(this.props.character)
                } else {
                  toast.error("Cannot Save a character without a name")
                }
              }}
            >
              Save
            </NavButton>

            <NavButton color="navy-700" onClick={this.getCharacters}>
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
            {this.state.characters.map((character) => {
              return (
                <Link
                  key={character.uid}
                  className="block text-black w-full px-8 py-2 hover:bg-gray-200 transition-colors"
                  to={"/pf2/character-builder/" + character.uid}
                  onClick={this.closeModal}
                >
                  {character.name}
                </Link>
              )
            })}
          </Modal>
        )}
      </div>
    )
  }
}

SubNav.contextType = UserContext

export default SubNav
