import React, { Component } from "react"
import _ from "lodash"

import { GeneratorNav } from "components"

import { StatblockContext } from "context"
import { firebase } from "services/Firebase"
import "./StatblockGenerator.css"
import { toast } from "react-toastify"
import StatBlockDisplay from "StatblockGenerator/StatBlockDisplay"
import StatBlockForm from "StatblockGenerator/StatBlockForm"
import { StatblockAction } from "data/models/StatblockAction"
import { StatblockAttack } from "data/models/StatblockAttack"

const initialState = {
  exportView: false,
  name: "Creature Name",
  size: "Medium",
  creatureType: "Humanoid",
  saves: {
    str: false,
    dex: false,
    con: false,
    int: false,
    wis: false,
    cha: false,
  },
  abilities: {
    str: 10,
    strMod: 0,
    dex: 10,
    dexMod: 0,
    con: 10,
    conMod: 0,
    int: 10,
    intMod: 0,
    wis: 10,
    wisMod: 0,
    cha: 10,
    chaMod: 0,
  },
  ac: {
    score: 10,
    support: "",
  },
  hp: {
    hitDie: 4,
    dieNum: 1,
  },
  calculatedHP: 0,
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
      type: "General",
    },
  ],
  actions: [
    {
      id: 1,
      title: "Longsword",

      type: "Melee",
      prof: true,
      reach: 5,
      targets: 1,
      dmgDie: 8,
      dieNum: 1,
      dmgType: "Slashing",
      dex: false,
    },
    {
      id: 2,
      title: "Longbow",

      type: "Ranged",
      prof: true,
      reach: 120,
      targets: 1,
      dmgDie: 8,
      dieNum: 1,
      dmgType: "Piercing",
      dex: true,
    },
  ],
  legendaryActPerRound: 1,
  legendaryActions: [
    {
      id: "1",
      title: "Legendary",
      content: "This is a sample legendary action, change my content!",
      type: "Legendary",
    },
  ],
}

export class StatblockGenerator extends Component {
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
    this.toggleSave = this.toggleSave.bind(this)
  }

  componentDidMount() {
    let { characterId } = this.props.match.params
    if (characterId) {
      firebase.getStatblock(characterId).then((response) => {
        let stats = response.data()
        this.updateAttacksToNewFormat(stats)
        stats.uid = characterId
        this.setState(stats, this.calcAbilityMods)
      })
    }

    this.setState(_.cloneDeep(initialState))
  }

  updateAttacksToNewFormat(stats) {
    if (!stats) return
    stats.actions = stats.actions.map((action) => {
      return {
        ...action,
        content: action.content ?? "",
        type: action.type ?? "",
        ...action.attack,
      }
    })
  }

  setStatblock(statblock) {
    this.setState({ ...statblock })
  }

  componentDidUpdate() {
    localStorage.removeItem("stats", JSON.stringify(this.state))
  }

  toggleExportView() {
    this.setState({
      exportView: !this.state.exportView,
    })
  }

  reset() {
    this.setState(_.cloneDeep(initialState))
    this.props.history.push("/dnd5e/statblock-generator")
    toast("Sheet Cleared")
  }

  updateState(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  updateAbility(ability, value) {
    this.setState(
      {
        abilities: {
          ...this.state.abilities,
          [ability]: value,
          [ability + "Mod"]: Math.floor((value - 10) / 2),
        },
      },
      this.calcHP
    )
  }

  calcAbilityMods() {
    let newAbilities = {}
    const abArray = ["str", "dex", "con", "int", "wis", "cha"]
    abArray.forEach((ability) => {
      newAbilities[ability] = this.state.abilities[ability]
      newAbilities[ability + "Mod"] = Math.floor(
        (this.state.abilities[ability] - 10) / 2
      )
    })
    this.setState({ abilities: newAbilities })
  }

  updateAC(e) {
    let { name, value } = e.target
    this.setState({
      ac: {
        ...this.state.ac,
        [name]: value,
      },
    })
  }

  updateHP(e) {
    let { name, value } = e.target
    this.setState(
      {
        hp: {
          ...this.state.hp,
          [name]: value,
        },
      },
      this.calcHP
    )
  }

  calcHP() {
    const {
      hp: { hitDie, dieNum },
      abilities: { conMod },
    } = this.state

    let calculatedHP =
      (hitDie * dieNum) / 2 + Math.ceil(dieNum * 0.5) + dieNum * conMod
    this.setState({ calculatedHP })
  }

  updatePropertyList(selected, arrayToUpdate) {
    this.setState({
      [arrayToUpdate]: selected.sort(),
    })
  }

  addFeature() {
    this.setState({
      features: [...this.state.features, new StatblockAction()],
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
        newAction = new StatblockAction()
        break
      case "Melee":
        newAction = new StatblockAttack()
        break
      case "Ranged":
        newAction = new StatblockAttack("", "", "Ranged")
        break
      default:
        break
    }

    newActions.push(newAction)

    this.setState({
      actions: newActions,
    })
  }

  toggleSave(save) {
    this.setState({
      ...this.state,
      saves: {
        ...this.state.saves,
        [save]: !this.state.saves[save],
      },
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
        } else if (name === "dex") {
          action.dex = !action.dex
        } else {
          action[name] = value
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
            toggleSave: this.toggleSave,
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
              <div className="flex">
                <div className="flex-1 flex-grow-2">
                  <div className="statblock-container--export">
                    <div className="statblock-container__inner--export">
                      <StatBlockDisplay stats={this.state} exportView />
                    </div>
                  </div>
                </div>
                <div
                  id="export-instructions"
                  className="flex-1 mt-20 text-xl leading-loose"
                >
                  To Export:
                  <br />
                  <i>
                    File &lsquo;Print&rsquo; &gt; &lsquo;Save as PDF&rsquo;
                  </i>
                </div>
              </div>
            )}
            {!this.state.exportView && (
              <div className="flex flex-wrap mt-12">
                <div className="flex-1 mt-8" style={{ minWidth: "410px" }}>
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
