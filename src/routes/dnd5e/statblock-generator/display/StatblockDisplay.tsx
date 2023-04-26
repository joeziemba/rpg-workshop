import React from "react"
import { DisplayProperty, DisplayAttack } from "components"
import { ability, abilityObject, Statblock } from "../StatblockGenerator"

const orderedAbilities: ability[] = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha",
]

export interface StatblockDisplayProps {
  stats: Statblock
  exportView: boolean
}

export const StatblockDisplay = ({
  stats,
  exportView,
}: StatblockDisplayProps) => {
  const dieNum = +stats.hp.dieNum
  const mod = dieNum * stats.abilities.conMod

  const hitPoints = `${stats.calculatedHP} (${dieNum}d${stats.hp.hitDie} ${
    mod < 0 ? "" : "+"
  } ${mod})`

  // Build save string
  let saveText = orderedAbilities.map((ability) => {
    if (stats.saves[ability])
      return (
        ability.toUpperCase() +
        " +" +
        (+stats.abilities[(ability + "Mod") as ability] +
          +stats.proficiency)
      )

    return null
  })
  saveText = saveText.filter((save) => !!save)

  return (
    <div
      id="StatblockDisplay"
      className={`statblock shadow ${
        exportView ? "statblock--export" : ""
      }`}
    >
      <div id="creature-heading" className="statblock__header">
        <h1 id="creature-name">{stats.name}</h1>
        <h2 id="creature-details">
          {stats.size} {stats.creatureType}
        </h2>
      </div>

      <div className="statblock__section red">
        <div id="armor-class" className="statblock__property">
          <span className="statblock__property-name">Armor Class</span>{" "}
          {stats.ac.score}
          {stats.ac.support && ` (${stats.ac.support})`}
        </div>
        <div id="hit-points" className="statblock__property">
          <span className="statblock__property-name">Hit Points</span>{" "}
          {hitPoints}
        </div>
        <div id="speed" className="statblock__property">
          <span className="statblock__property-name">Speed</span>{" "}
          {stats.speed}ft
          {stats.flySpeed > 0 ? `, ${stats.flySpeed}ft (Fly)` : ""}
          {stats.swimSpeed > 0 ? `, ${stats.swimSpeed}ft (Swim)` : ""}
        </div>
      </div>

      <div className="statblock__section red">
        {orderedAbilities.map((ability) => {
          const score = stats.abilities[ability]
          const mod = stats.abilities[(ability + "Mod") as ability]

          return (
            <div className="ability" key={ability}>
              <h4>{ability}</h4>
              <span id={ability + "-display"}>
                {score} ({mod < 0 ? "" : "+"}
                {mod})
              </span>
            </div>
          )
        })}
      </div>

      <div className="statblock__section red">
        {saveText.length > 0 && (
          <DisplayProperty
            id="saving-throw-display"
            title="Saving Throws"
            content={saveText.join(", ")}
          />
        )}
        {stats.skills.length > 0 && (
          <DisplayProperty
            id="skills-display"
            title="Skills"
            content={stats.skills.join(", ")}
          />
        )}
        {stats.conditionImmune.length > 0 && (
          <DisplayProperty
            id="condition-immunities-display"
            title="Condition Immunities"
            content={stats.conditionImmune.join(", ")}
          />
        )}
        {stats.immune.length > 0 && (
          <DisplayProperty
            id="damage-immunities-display"
            title="Damage Immunities"
            content={stats.immune.join(", ")}
          />
        )}
        {stats.resists.length > 0 && (
          <DisplayProperty
            id="damage-resistances-display"
            title="Damage Resistances"
            content={stats.resists.join(", ")}
          />
        )}
        {stats.vulnerable.length > 0 && (
          <DisplayProperty
            id="damage-vulnerabilities-display"
            title="Damage Vulnerabilities"
            content={stats.vulnerable.join(", ")}
          />
        )}
        {stats.senses.length > 0 && (
          <DisplayProperty
            id="senses-display"
            title="Senses"
            content={stats.senses.join(", ")}
          />
        )}
        {stats.langs.length > 0 && (
          <DisplayProperty
            id="languages-display"
            title="Languages"
            content={stats.langs.join(", ")}
          />
        )}
      </div>

      <div className="statblock__section">
        {stats.features.map((feature, i) => {
          return (
            <DisplayProperty
              id={"display-feature-" + i}
              key={feature.title}
              title={feature.title}
              content={feature.content}
              block
            />
          )
        })}
      </div>

      <div className="statblock__section statblock__section--with-heading">
        <h3>Actions</h3>
        {stats.actions.map((action, i) => {
          if (
            !("content" in action) &&
            ["Melee", "Ranged"].includes(action.type)
          ) {
            return (
              <DisplayAttack
                id={"display-action-" + i}
                action={action}
                key={action.title + i}
              />
            )
          }
          if ("content" in action)
            return (
              <DisplayProperty
                block
                id={"display-action-" + i}
                key={action.title + i}
                title={action.title}
                content={action.content}
              />
            )
        })}
      </div>

      {stats.legendaryActions.length > 0 && (
        <div className="statblock__section statblock__section--with-heading">
          <h3>Legendary Actions</h3>
          <p className="mb-1 text-sm">
            {stats.name} can take <b>{stats.legendaryActPerRound}</b>{" "}
            legendary action
            {stats.legendaryActPerRound === 1 ? "" : "s"}, choosing from
            the options below. Only one legendary action option can be used
            at a time and only at the end of another creature&apos;s turn.
            They regain spent legendary actions at the start of their turn.
          </p>
          {stats.legendaryActions.map((action, i) => (
            <DisplayProperty
              block
              id={"display-legendary-action-" + i}
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

export default StatblockDisplay
