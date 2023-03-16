import React from "react"
import { toast } from "react-toastify"
import { Modal, NavButton, OpenOrDeleteItem } from "components"
import { UserContext } from "context"
import { firebaseService } from "services/Firebase"
import { Statblock } from "routes/dnd5e/statblock-generator/StatblockGenerator"

type GeneratorNavProps = {
  exportView: boolean
  history: { push: (arg: string) => void }
  reset(): void
  setStatblock(arg: Statblock): void
  statblock: Statblock
  toggleExportView(): void
}

type GeneratorNavState = {
  statblocks: Statblock[]
  showOpenModal: boolean
}

export class GeneratorNav extends React.Component<
  GeneratorNavProps,
  GeneratorNavState
> {
  constructor(props: GeneratorNavProps) {
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

  getCharacters(): void {
    firebaseService.load5eStatblocksForUser().then((snapshot) => {
      const statblocks: Statblock[] = []

      snapshot.forEach((doc) => {
        const data = doc.data()
        data.uid = doc.id
        statblocks.push(data as Statblock)
      })
      this.setState({ statblocks, showOpenModal: true })
    })
  }

  closeModal(): void {
    this.setState({ showOpenModal: false })
  }

  selectStatblock(statblock: Statblock): void {
    this.closeModal()
    this.props.setStatblock(statblock)
    this.props.history.push("/dnd5e/statblock-generator/" + statblock.uid)
    toast("Opened " + statblock.name)
  }

  async saveStatblock(statblock: Statblock) {
    const savedStatblock = await firebaseService.saveStatblock(statblock)
    if (savedStatblock) {
      statblock.uid = savedStatblock.id
      this.props.setStatblock(statblock)
      this.props.history.push(
        "/dnd5e/statblock-generator/" + savedStatblock.id
      )
    }
  }

  async deleteStatblock(uid: string, name: string) {
    await firebaseService.deleteStatblock(uid)
    toast("Deleted " + name)
    this.closeModal()
    this.getCharacters()
  }

  render(): JSX.Element {
    return (
      <nav className="fixed w-full bg-red-900 text-white z-10">
        <div className="max-w-5xl px-8 py-2 mx-auto flex">
          <h1 className="flex-1 m-0 lg:mr-8 text-2xl leading-tight">
            Statblock Generator
          </h1>

          <NavButton
            color="red"
            onClick={this.props.reset}
            id="new-statblock-button"
          >
            New
          </NavButton>

          {this.context.currentUser && !this.props.exportView && (
            <React.Fragment>
              <NavButton
                id="save-statblock-button"
                color="red"
                onClick={async () => {
                  await this.saveStatblock(this.props.statblock)
                }}
              >
                Save
              </NavButton>

              <NavButton
                id="open-statblock-button"
                color="red"
                onClick={this.getCharacters}
              >
                Open
              </NavButton>
            </React.Fragment>
          )}
          <NavButton
            id="export-statblock-button"
            color="red"
            onClick={this.props.toggleExportView}
          >
            {this.props.exportView ? "Generator" : "Export"}
          </NavButton>

          <Modal
            large={false}
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
                    id={statblock.id || ""}
                    selectFunc={() => this.selectStatblock(statblock)}
                    deleteFunc={async () =>
                      await this.deleteStatblock(
                        statblock.uid as string,
                        statblock.name
                      )
                    }
                  >
                    <>{statblock.name}</>
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
