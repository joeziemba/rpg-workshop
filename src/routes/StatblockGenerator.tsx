import React, { Component } from "react"
import { RouteProps } from "react-router"
import { Guid } from "js-guid"
import _ from "lodash"

import { GeneratorNav } from "components"

import { StatblockContext } from "context"
import { firebaseService } from "services/Firebase"
import "./StatblockGenerator.css"
import { toast } from "react-toastify"
import StatBlockDisplay from "StatblockGenerator/StatBlockDisplay"
import StatBlockForm from "StatblockGenerator/StatBlockForm"
import { StatblockAction } from "data/models/StatblockAction"
import { StatblockAttack } from "data/models/StatblockAttack"

class abilityObject {
  constructor(
    public str = 10,
    public strMod = 0,
    public dex = 10,
    public dexMod = 0,
    public con = 10,
    public conMod = 0,
    public int = 10,
    public intMod = 0,
    public wis = 10,
    public wisMod = 0,
    public cha = 10,
    public chaMod = 0
  ) {}
}

class attack {
  id = 1
  title = "Longsword"
  type = "Melee"
  prof = true
  reach = 5
  targets = 1
  dmgDie = 8
  dieNum = 1
  dmgType = "Slashing"
  dex = false
  constructor() {}
}

class feature {
  public id = new Guid()
  constructor(
    public title = "Sample",
    public content = "This is a sample feature, change my content!",
    public type = "General"
  ) {}
}

class State {
  public exportView = false
  public name = "Creature Name"
  public size = "Medium"
  public creatureType = "Humanoid"
  public saves = {
    str: false,
    dex: false,
    con: false,
    int: false,
    wis: false,
    cha: false,
  }
  public abilities: abilityObject = {
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
  }
  public ac = {
    score: 10,
    support: "",
  }
  public hp = {
    hitDie: 4,
    dieNum: 1,
  }
  public calculatedHP = 0
  public proficiency = 1
  public speed = 30
  public flySpeed = 0
  public swimSpeed = 0
  public skills = []
  public conditionImmune = []
  public immune = []
  public resists = []
  public vulnerable = []
  public senses = []
  public langs = ["Common"]
  public challenge = ""
  public xp = ""
  public features: feature[] = [new feature()]
  public actions: (attack | feature)[] = [
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
  ]
  public legendaryActPerRound = 1
  public legendaryActions: feature[] = [
    new feature(
      "Legendary",
      "This is a sample legendary action, change my content!",
      "Legendary"
    ),
  ]
  constructor() {}
}

interface Props {
  match: { params: string[] }
  history: { push: Function }
}

export class StatblockGenerator extends Component<
  Props & RouteProps,
  State
> {
  constructor(props: any) {
    super(props)

    this.state = new State()

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
    // @ts-ignore
    let { characterId } = this.props.match.params
    if (characterId) {
      firebaseService
        .getStatblock(characterId)
        .then((response) => {
          let stats = response.data()
          if (!stats) throw new Error("No character found")
          this.updateAttacksToNewFormat(stats)
          stats.uid = characterId
          this.setState(stats as State, this.calcAbilityMods)
        })
        .catch((err) => {
          toast(err.message)
        })
    }

    this.setState(new State())
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
    localStorage.removeItem("stats")
  }

  toggleExportView() {
    this.setState({
      exportView: !this.state.exportView,
    })
  }

  reset() {
    this.setState(new State())
    this.props.history.push("/dnd5e/statblock-generator")
    toast("Sheet Cleared")
  }

  updateState(e) {
    let { name, value }: { name: string; value: string } = e.target
    this.setState({
      ...this.state,
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
    let newAbilities = new abilityObject()
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
      ...this.state,
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
    let newActions = [...this.state.actions]

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
      actions = [...this.state.legendaryActions]
    } else {
      actions = [this.state.actions]
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
      actions = [this.state.legendaryActions]
    } else {
      actions = [this.state.actions]
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
    let newActions = [...this.state.legendaryActions]

    newActions.push(new feature())

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
                  <StatBlockForm />
                </div>
                <div className="flex-1" style={{ minWidth: "" }}>
                  <div className="statblock-container">
                    <div className="statblock-container__inner">
                      <StatBlockDisplay
                        stats={this.state}
                        exportView={this.state.exportView}
                      />
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
