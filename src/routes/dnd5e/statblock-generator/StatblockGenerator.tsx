import React, { ChangeEvent, Component } from "react"
import { RouteProps } from "react-router"
import { Guid } from "js-guid"

import { GeneratorNav } from "components"

import { StatblockActionType, StatblockContext } from "context"
import { firebaseService } from "services/Firebase"
import "./StatblockGenerator.css"
import { toast } from "react-toastify"
import StatblockDisplay from "./display/StatblockDisplay"
import { StatblockForms } from "./forms/StatblockForms"
import { StatblockAction } from "data/models/StatblockAction"
import { StatblockAttack } from "data/models/StatblockAttack"
import { Skill } from "data/skills"
import { Ability } from "data/abilities"

type ability = "str" | "dex" | "con" | "int" | "wis" | "cha"
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

class Attack {
  public id = 1
  public title = "Longsword"
  public type: "Melee" | "Ranged" = "Melee"
  public prof = true
  public reach = 5
  public targets = 1
  public dmgDie = 8
  public dieNum = 1
  public dmgType = "Slashing"
  public dex = false
}

class Feature {
  public id = new Guid().toString()
  constructor(
    public title = "Sample",
    public content = "This is a sample feature, change my content!",
    public type = "General"
  ) {}
}

type Action = Feature | Attack

export class Statblock {
  constructor(
    public uid?: string,
    public id?: string,
    public exportView = false,
    public name = "Creature Name",
    public size = "Medium",
    public creatureType = "Humanoid",
    public saves = {
      str: false,
      dex: false,
      con: false,
      int: false,
      wis: false,
      cha: false,
    },
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
    },
    public ac = {
      score: 10,
      support: "",
    },
    public hp = {
      hitDie: 4,
      dieNum: 1,
    },
    public calculatedHP = 0,
    public proficiency = 1,
    public speed = 30,
    public flySpeed = 0,
    public swimSpeed = 0,
    public skills: Skill[] = [],
    public conditionImmune = [],
    public immune = [],
    public resists = [],
    public vulnerable = [],
    public senses = [],
    public langs = ["Common"],
    public challenge = "",
    public xp = "",
    public features: Feature[] = [new Feature()],
    public actions: Action[] = [
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
    public legendaryActPerRound = 1,
    public legendaryActions: Feature[] = [
      new Feature(
        "Legendary",
        "This is a sample legendary action, change my content!",
        "Legendary"
      ),
    ]
  ) {}
}

type StatblockGeneratorProps = {
  match: { params: { characterId: string } }
  history: { push(arg: string): void }
}

export class StatblockGenerator extends Component<
  StatblockGeneratorProps & RouteProps,
  Statblock
> {
  constructor(props: StatblockGeneratorProps) {
    super(props)

    this.state = new Statblock()

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
    const { characterId } = this.props.match.params
    if (characterId) {
      firebaseService
        .getStatblock(characterId)
        .then((response) => {
          const stats = response.data()
          if (!stats) throw new Error("No character found")
          this.updateAttacksToNewFormat(stats as Statblock)
          stats.uid = characterId
          this.setState(stats as Statblock, this.calcAbilityMods)
        })
        .catch((err: Error) => {
          toast(err.message)
        })
    }

    this.setState(new Statblock())
  }

  updateAttacksToNewFormat(statblock: Statblock) {
    if (!statblock) return
    statblock.actions = statblock.actions.map((action: any) => {
      return {
        ...action,
        content: action.content ?? "",
        type: action.type ?? "",
        ...action.attack,
      }
    })
  }

  setStatblock(statblock: Statblock) {
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
    this.setState(new Statblock())
    this.props.history.push("/dnd5e/statblock-generator")
    toast("Sheet Cleared")
  }

  updateState(event) {
    const { name, value }: { name: string; value: string } = event.target
    this.setState({
      ...this.state,
      [name]: value,
    })
  }

  updateAbility(ability: AbilityKey, value: number) {
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
    const newAbilities = new abilityObject()
    const abArray: ability[] = ["str", "dex", "con", "int", "wis", "cha"]
    abArray.forEach((ability) => {
      newAbilities[ability] = this.state.abilities[ability]
      newAbilities[ability + "Mod"] = Math.floor(
        (this.state.abilities[ability] - 10) / 2
      )
    })
    this.setState({ abilities: newAbilities })
  }

  updateAC(e: { target: HTMLInputElement }) {
    const { name, value } = e.target
    this.setState({
      ac: {
        ...this.state.ac,
        [name]: value,
      },
    })
  }

  updateHP(e: { target: HTMLInputElement }) {
    const { name, value } = e.target
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

    const calculatedHP =
      (hitDie * dieNum) / 2 + Math.ceil(dieNum * 0.5) + dieNum * conMod
    this.setState({ calculatedHP })
  }

  updatePropertyList(selected: string[], arrayToUpdate: string) {
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

  updateFeature(e: { target: HTMLInputElement }, featureId: string) {
    const { name, value } = e.target
    const newFeatures = this.state.features.map((feat) => {
      if (feat.id === featureId) {
        feat[name] = value
      }
      return feat
    })

    this.setState({
      features: newFeatures,
    })
  }

  addAction(actionType: StatblockActionType) {
    const newActions = [...this.state.actions]

    let newAction: Action

    switch (actionType) {
      case "Melee":
        newAction = new StatblockAttack()
        break
      case "Ranged":
        newAction = new StatblockAttack("", "", "Ranged")
        break
      default:
        newAction = new StatblockAction()
        break
    }

    newActions.push(newAction)

    this.setState({
      actions: newActions,
    })
  }

  toggleSave(save: ability) {
    this.setState({
      ...this.state,
      saves: {
        ...this.state.saves,
        [save]: !this.state.saves[save],
      },
    })
  }

  updateAction(
    e: { target: HTMLButtonElement },
    actionId: string,
    legendary: boolean
  ) {
    const { name, value } = e.target
    let actions: Action[]

    if (legendary) {
      actions = [...this.state.legendaryActions]
    } else {
      actions = [...this.state.actions]
    }

    const newActions = actions.map((action) => {
      if (action.id === actionId) {
        if (name === "content" && "content" in action) {
          action.content = value
        } else if (name === "title") {
          action.title = value
        } else if ("dex" in action && name === "dex") {
          action.dex = !action.dex
        } else if (name in action) {
          action[name] = value
        }
      }
      return action
    })

    if (legendary) {
      this.setState({
        legendaryActions: newActions as Feature[],
      })
    } else {
      this.setState({
        actions: newActions,
      })
    }
  }

  deleteAction(actionId: StatblockAction["id"], legendary: boolean) {
    let actions: Action[]

    if (legendary) {
      actions = [...this.state.legendaryActions]
    } else {
      actions = [...this.state.actions]
    }

    const newActions = actions.filter((action) => action.id !== actionId)

    if (legendary) {
      this.setState({
        legendaryActions: newActions as Feature[],
      })
    } else {
      this.setState({
        actions: newActions,
      })
    }
  }

  deleteFeature(featureId: string) {
    const newFeats = this.state.features.filter((f) => f.id !== featureId)

    this.setState({
      features: newFeats,
    })
  }

  addLegendaryAction() {
    const newActions = [...this.state.legendaryActions]

    newActions.push(new Feature())

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
                      <StatblockDisplay stats={this.state} exportView />
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
                  <StatblockForms />
                </div>
                <div className="flex-1" style={{ minWidth: "" }}>
                  <div className="statblock-container">
                    <div className="statblock-container__inner">
                      <StatblockDisplay
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
