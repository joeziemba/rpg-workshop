import React, { useContext } from "react"
import { SBG_Select } from "components"
import { StatblockContext } from "context"

export const AbilityScoresForm = () => {
  const abilities = ["str", "dex", "con", "int", "wis", "cha"]
  const { stats, updateAbility } = useContext(StatblockContext)
  return (
    <div className="grid grid-rows-1 grid-cols-6 gap-4">
      {abilities.map((ability) => {
        return (
          <div className="col-span-1" key={ability}>
            <SBG_Select
              label={ability.toUpperCase()}
              options={global.abilityScores}
              value={stats.abilities[ability]}
              fieldName={ability}
              onChange={(e) => updateAbility(ability, e.target.value)}
              center
            />
          </div>
        )
      })}
    </div>
  )
}
