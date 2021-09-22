import React from "react"
import Statbox from "./Statbox"
import TEMLbuttons from "./TEMLbuttons"

export const SaveRow = ({ character, saveType }) => {
  let abilityAbbreviation, modifier, saveName

  switch (saveType) {
    case "will": {
      abilityAbbreviation = "WIS"
      modifier = character.abilityMods.Wisdom
      saveName = "WILL"
      break
    }
    case "fortitude": {
      abilityAbbreviation = "CON"
      modifier = character.abilityMods.Constitution
      saveName = "FORT"
      break
    }
    case "reflex": {
      abilityAbbreviation = "DEX"
      modifier = character.abilityMods.Dexterity
      saveName = "REF"
      break
    }
    default:
      break
  }

  let proficiencyBonus = 0

  if (character.saves[saveType] > 0) {
    proficiencyBonus += character.saves[saveType] + character.level
  }

  let totalBonus = proficiencyBonus + modifier
  return (
    <div className="flex-1 flex items-center">
      <div className="flex-1">
        <Statbox large stat={totalBonus} title={saveName} />
      </div>
      <div className="flex-1 flex items-center">
        <span className="mr-2">=</span>
        <Statbox
          className="flex-1"
          stat={modifier}
          title={abilityAbbreviation}
        />
        <span className="mx-2">+</span>
        <Statbox className="flex-1" stat={proficiencyBonus} title="PROF" />
      </div>
      <div className="flex-1 flex justify-around">
        <TEMLbuttons
          skill={{
            proficiency: character.saves[saveType],
            id: saveName,
            name: saveName,
          }}
          disabled
        />
      </div>
    </div>
  )
}
