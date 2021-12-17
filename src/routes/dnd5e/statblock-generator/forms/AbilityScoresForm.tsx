import React, { useContext } from "react"
import { SBG_Select } from "components"
import { StatblockContext } from "context"
import { CheckboxButton } from "components/sbg/CheckboxButton"

export const AbilityScoresForm = () => {
  const abilities = ["str", "dex", "con", "int", "wis", "cha"]
  const { stats, updateAbility, toggleSave } = useContext(StatblockContext)
  return (
    <div className="grid grid-rows-1 grid-cols-6 gap-4">
      {abilities.map((ability) => {
        return (
          <div className="col-span-1" key={ability}>
            <SBG_Select
              id={ability + "-select"}
              label={ability.toUpperCase()}
              options={global.abilityScores}
              value={stats.abilities[ability]}
              fieldName={ability}
              onChange={(e) => updateAbility(ability, e.target.value)}
              center
            />
            <CheckboxButton
              id={ability + "-save"}
              fieldName={ability}
              label="save"
              checked={stats.saves[ability]}
              onClick={() => toggleSave(ability)}
            />
          </div>
        )
      })}
    </div>
  )
}
