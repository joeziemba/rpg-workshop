import React from "react"

import { DisplayProperty } from "components"

export class StatBlockDisplay extends React.Component {
  renderAbilities() {
    let { abilities } = this.props.stats
    let orderedAbilities = ["str", "dex", "con", "int", "wis", "cha"]
    return orderedAbilities.map((ability) => {
      let score = abilities[ability]
      let mod = abilities[ability + "Mod"]

      return (
        <div className="ability" key={ability}>
          <h4>{ability}</h4>
          <span>
            {score} ({mod < 0 ? "" : "+"}
            {mod})
          </span>
        </div>
      )
    })
  }

  renderFeatures() {
    let { features } = this.props.stats

    return features.map((feature) => {
      return (
        <DisplayProperty
          key={feature.title}
          title={feature.title}
          content={feature.content}
          block
        />
      )
    })
  }

  renderActions(legendary) {
    let { actions } = this.props.stats

    if (legendary) {
      actions = this.props.stats.legendaryActions
    }

    return actions.map((action, i) => {
      if (["Melee", "Ranged"].includes(action.type)) {
        let { dieNum, dmgDie, prof, dex, reach, targets, dmgType } = action
        // Get hit mod
        let toHit = this.props.stats.abilities.strMod
        if (dex) {
          toHit = this.props.stats.abilities.dexMod
        }

        // Get Damage Mod
        let avg = (dieNum * dmgDie) / 2 + toHit

        let operator = "+"
        let dmgMod = toHit
        if (toHit < 0) {
          operator = "-"
          dmgMod = toHit *= -1
        }

        let damage = `${avg} (${dieNum}d${dmgDie} ${operator} ${dmgMod}) ${dmgType.toLowerCase()}.`

        if (prof) toHit += parseInt(this.props.stats.proficiency)

        return (
          <div
            className="statblock__property statblock__property--block"
            key={i}
          >
            <span className="statblock__property-name italic">
              {action.title}.{" "}
            </span>
            <span className="italic">
              {action.type} Weapon Attack.{" "}
            </span>
            {`${toHit >= 0 ? "+" : ""}${toHit}`} to Hit.&ensp;
            {action.type === "Ranged" ? "Range" : "Reach"} {reach}
            ft.&ensp;
            {targets} target{targets > 1 ? "s" : ""}.&ensp; Damage:&ensp;
            {damage}
          </div>
        )
      }

      if (!action) {
        return (
          <DisplayProperty
            block
            key={i}
            title={action.title}
            content={action.content}
          />
        )
      }
      return null
    })
  }

  render() {
    let {
      abilities,
      hp: { hitDie, dieNum },
      calculatedHP,
    } = this.props.stats

    let conMod = Math.floor((abilities.con - 10) / 2)
    dieNum = parseInt(dieNum)

    let mod = dieNum * conMod

    let hitPoints = `${calculatedHP} (${dieNum}d${hitDie} ${
      mod < 0 ? "-" : "+"
    } ${mod < 0 ? mod * -1 : mod})`

    return (
      <div
        id="StatBlockDisplay"
        className={`statblock ${
          this.props.export ? "statblock--export" : ""
        }`}
      >
        <div id="creatureHeading" className="statblock__header">
          <h1 id="monsterName">{this.props.stats.name}</h1>
          <h2 id="monsterDetails">
            {this.props.stats.size} {this.props.stats.creatureType}
          </h2>
        </div>

        <div className="statblock__section red">
          <div className="statblock__property">
            <span className="statblock__property-name">Armor Class</span>
            {this.props.stats.ac.score}
            {this.props.stats.ac.support &&
              ` (${this.props.stats.ac.support})`}
          </div>
          <div className="statblock__property">
            <span className="statblock__property-name">Hit Points</span>{" "}
            {hitPoints}
          </div>
          <div className="statblock__property">
            <span className="statblock__property-name">Speed</span>
            {this.props.stats.speed}ft
            {this.props.stats.flySpeed > 0
              ? `, ${this.props.stats.flySpeed}ft (Fly)`
              : ""}
            {this.props.stats.swimSpeed > 0
              ? `, ${this.props.stats.swimSpeed}ft (Swim)`
              : ""}
          </div>
        </div>

        <div className="statblock__section red">
          {this.renderAbilities()}
        </div>

        <div className="statblock__section red">
          {this.props.stats.conditionImmune.length > 0 && (
            <DisplayProperty
              title="Condition Immunities"
              content={this.props.stats.conditionImmune.join(", ")}
            />
          )}
          {this.props.stats.immune.length > 0 && (
            <DisplayProperty
              title="Damage Immunities"
              content={this.props.stats.immune.join(", ")}
            />
          )}
          {this.props.stats.resists.length > 0 && (
            <DisplayProperty
              title="Damage Resistances"
              content={this.props.stats.resists.join(", ")}
            />
          )}
          {this.props.stats.vulnerable.length > 0 && (
            <DisplayProperty
              title="Damage Vulnerabilities"
              content={this.props.stats.vulnerable.join(", ")}
            />
          )}
          {this.props.stats.skills.length > 0 && (
            <DisplayProperty
              title="Skills"
              content={this.props.stats.skills.join(", ")}
            />
          )}
          {this.props.stats.senses.length > 0 && (
            <DisplayProperty
              title="Senses"
              content={this.props.stats.senses.join(", ")}
            />
          )}
          {this.props.stats.langs.length > 0 && (
            <DisplayProperty
              title="Languages"
              content={this.props.stats.langs.join(", ")}
            />
          )}
        </div>

        <div className="statblock__section">{this.renderFeatures()}</div>

        <div className="statblock__section statblock__section--with-heading">
          <h3>Actions</h3>
          {this.renderActions()}
        </div>

        {this.props.stats.legendaryActions.length > 0 && (
          <div className="statblock__section statblock__section--with-heading">
            <h3>Legendary Actions</h3>
            <p className="mb-1 text-sm">
              {this.props.stats.name} can take{" "}
              <b>{this.props.stats.legendaryActPerRound}</b> legendary
              action
              {this.props.stats.legendaryActPerRound === 1 ? "" : "s"},
              choosing from the options below. Only one legendary action
              option can be used at a time and only at the end of another
              creature&apos;s turn. They regain spent legendary actions at
              the start of their turn.
            </p>
            {this.props.stats.legendaryActions.map((action, i) => (
              <DisplayProperty
                block
                key={i + action.title}
                title={action.title}
                content={action.content}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default StatBlockDisplay
