import React, { Component } from "react"
import _ from "lodash"

import { Row } from "_globalComponents"
import {
  StatBlockDisplay,
  StatBlockForm,
  GeneratorNav,
} from "StatblockGenerator/_components"
import { StatblockContext, UserContext } from "context"
import { firebase } from "services/Firebase"
import "./StatblockGenerator.css"

const initialState = {
  exportView: false,
  name: "Monster Name",
  size: "Medium",
  creatureType: "Humanoid",
  abilities: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  },
  ac: {
    score: 10,
    support: "",
  },
  hp: {
    hitDie: 4,
    dieNum: 1,
    manualHp: "",
  },
  proficiency: 1,
  speed: 30,
  flySpeed: 0,
  swimSpeed: 0,
  skills: [],
  conditionImmune: [],
  immune: [],
  resists: [],
  vulnerable: [],
  senses: [],
  langs: ["Common"],
  challenge: "",
  xp: "",
  features: [
    {
      id: "1",
      title: "Sample",
      content: "This is a sample feature, change my content!",
    },
  ],
  actions: [
    {
      id: 1,
      title: "Longsword",
      attack: {
        type: "Melee",
        prof: true,
        reach: 5,
        targets: 1,
        dmgDie: 8,
        dieNum: 1,
        dmgType: "Slashing",
        dex: false,
      },
    },
    {
      id: 2,
      title: "Longbow",
      attack: {
        type: "Ranged",
        prof: true,
        reach: 120,
        targets: 1,
        dmgDie: 8,
        dieNum: 1,
        dmgType: "Piercing",
        dex: true,
      },
    },
  ],
  legendaryActPerRound: 1,
  legendaryActions: [
    {
      id: "1",
      title: "Legendary",
      content: "This is a sample legendary action, change my content!",
    },
  ],
}

class StatblockGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ..._.cloneDeep(initialState),
    }

    this.updateState = this.updateState.bind(this)
    this.updateAbility = this.updateAbility.bind(this)
    this.updateAC = this.updateAC.bind(this)
    this.updateHP = this.updateHP.bind(this)
    this.updatePropertyList = this.updatePropertyList.bind(this)
    this.addFeature = this.addFeature.bind(this)
    this.updateFeature = this.updateFeature.bind(this)
    this.addAction = this.addAction.bind(this)
    this.updateAction = this.updateAction.bind(this)
    this.deleteAction = this.deleteAction.bind(this)
    this.deleteFeature = this.deleteFeature.bind(this)
    this.reset = this.reset.bind(this)
    this.addLegendaryAction = this.addLegendaryAction.bind(this)
    this.toggleExportView = this.toggleExportView.bind(this)
    this.setStatblock = this.setStatblock.bind(this)
  }

  componentDidMount() {
    let { characterId } = this.props.match.params
    if (characterId) {
      firebase.getStatblock(characterId).then((response) => {
        this.setState({ ...response.data(), uid: characterId })
      })
    }

    let state = _.cloneDeep(initialState)
    this.setState({
      ...state,
    })
  }

  setStatblock(statblock) {
    this.setState({ ...statblock })
  }

  componentDidUpdate() {
    localStorage.setItem("stats", JSON.stringify(this.state))
  }

  toggleExportView() {
    this.setState({
      exportView: !this.state.exportView,
    })
  }

  reset() {
    let state = _.cloneDeep(initialState)
    this.setState({
      ...state,
    })
    this.props.history.push("/dnd5e/statblock-generator")
  }

  updateState(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  updateAbility(ability, value) {
    let newAbilities = Object.assign({}, this.state.abilities)

    newAbilities[ability] = value

    this.setState({
      abilities: newAbilities,
    })
  }

  updateAC(e) {
    let fieldName = e.target.name
    let newAC = {
      ...this.state.ac,
      [fieldName]: e.target.value,
    }
    this.setState({
      ac: newAC,
    })
  }

  updateHP(e) {
    let fieldName = e.target.name
    let newHP = {
      ...this.state.hp,
      [fieldName]: e.target.value,
    }
    this.setState({
      hp: newHP,
    })
  }

  updatePropertyList(selected, arrayToUpdate) {
    let sorted = selected.sort()
    this.setState({
      [arrayToUpdate]: sorted,
    })
  }

  addFeature() {
    let newFeatures = [].concat(this.state.features)

    newFeatures.push({
      id: newFeatures.length + 1,
      title: "",
      content: "",
    })

    this.setState({
      features: newFeatures,
    })
  }

  updateFeature(e, featureId) {
    let { name, value } = e.target
    let newFeatures = this.state.features.map((feat) => {
      if (feat.id === featureId) {
        feat[name] = value
      }
      return feat
    })

    this.setState({
      features: newFeatures,
    })
  }

  addAction(actionType) {
    let newActions = [].concat(this.state.actions)

    let newAction

    switch (actionType) {
      case "General":
        newAction = {
          id: newActions.length + 1,
          title: "",
          content: "",
        }
        break
      case "Melee":
        newAction = {
          id: newActions.length + 1,
          title: "",
          attack: {
            type: "Melee",
            prof: true,
            reach: 0,
            targets: 0,
            dmgDie: 4,
            dieNum: 0,
            dmgType: "",
            dex: false,
          },
        }
        break
      case "Ranged":
        newAction = {
          id: newActions.length + 1,
          title: "",
          attack: {
            type: "Ranged",
            prof: true,
            reach: 0,
            targets: 0,
            dmgDie: 4,
            dieNum: 0,
            dmgType: "",
            dex: true,
          },
        }
        break
      default:
        break
    }

    newActions.push(newAction)

    this.setState({
      actions: newActions,
    })
  }

  updateAction(e, actionId, legendary) {
    let { name, value } = e.target

    let actions

    if (legendary) {
      actions = [].concat(this.state.legendaryActions)
    } else {
      actions = [].concat(this.state.actions)
    }

    let newActions = actions.map((action) => {
      if (action.id === actionId) {
        if (name === "content") {
          action[name] = value
        } else if (name === "title") {
          action[name] = value
        } else {
          action.attack[name] = value
        }
      }
      return action
    })

    if (legendary) {
      this.setState({
        legendaryActions: newActions,
      })
    } else {
      this.setState({
        actions: newActions,
      })
    }
  }

  deleteAction(actionId, legendary) {
    let actions

    if (legendary) {
      actions = [].concat(this.state.legendaryActions)
    } else {
      actions = [].concat(this.state.actions)
    }

    let newActions = actions.filter((action) => action.id !== actionId)

    if (legendary) {
      this.setState({
        legendaryActions: newActions,
      })
    } else {
      this.setState({
        actions: newActions,
      })
    }
  }

  deleteFeature(featureId) {
    let newFeats = this.state.features.filter((f) => f.id !== featureId)

    this.setState({
      features: newFeats,
    })
  }

  addLegendaryAction() {
    let newActions = [].concat(this.state.legendaryActions)

    let newAction = {
      id: newActions.length + 1,
      title: "",
      content: "",
    }

    newActions.push(newAction)

    this.setState({
      legendaryActions: newActions,
    })
  }

  render() {
    return (
      <React.Fragment>
        <StatblockContext.Provider
          value={{
            stats: this.state,
            updateState: this.updateState,
            updateAbility: this.updateAbility,
            updateAC: this.updateAC,
            updateHP: this.updateHP,
            updatePropertyList: this.updatePropertyList,
            addFeature: this.addFeature,
            updateFeature: this.updateFeature,
            addAction: this.addAction,
            updateAction: this.updateAction,
            deleteAction: this.deleteAction,
            deleteFeature: this.deleteFeature,
            addLegendaryAction: this.addLegendaryAction,
          }}
        >
          <GeneratorNav
            statblock={this.state}
            exportView={this.state.exportView}
            toggleExportView={this.toggleExportView}
            reset={this.reset}
            setStatblock={this.setStatblock}
            history={this.props.history}
          />
          <div
            className="max-w-5xl mx-auto px-8"
            style={{ position: "relative" }}
          >
            {this.state.exportView && (
              <Row>
                <div className="flex-1 flex-grow-2">
                  <div className="statblock-container--export">
                    <div className="statblock-container__inner--export">
                      <StatBlockDisplay stats={this.state} export />
                    </div>
                  </div>
                </div>
                <div className="flex-1 mt-20 text-xl leading-loose">
                  To Export:
                  <br />
                  <i>
                    File &lsquo;Print&rsquo; &gt; &lsquo;Save as PDF&rsquo;
                  </i>
                </div>
              </Row>
            )}
            {!this.state.exportView && (
              <div className="flex flex-wrap mt-12">
                <div
                  className="flex-1 mt-8"
                  style={{ minWidth: "410px" }}
                >
                  <StatBlockForm
                    stats={this.state}
                    updateState={this.updateState}
                    updateAbility={this.updateAbility}
                    updateAC={this.updateAC}
                    updateHP={this.updateHP}
                    updatePropertyList={this.updatePropertyList}
                    addFeature={this.addFeature}
                    updateFeature={this.updateFeature}
                    addAction={this.addAction}
                    updateAction={this.updateAction}
                    deleteAction={this.deleteAction}
                    deleteFeature={this.deleteFeature}
                    addLegendaryAction={this.addLegendaryAction}
                  />
                </div>
                <div className="flex-1" style={{ minWidth: "" }}>
                  <div className="statblock-container">
                    <div className="statblock-container__inner">
                      <StatBlockDisplay stats={this.state} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </StatblockContext.Provider>
      </React.Fragment>
    )
  }
}

StatblockGenerator.contextType = UserContext

export default StatblockGenerator
