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
    <div className="row">
      <div className="col col-4">
        <Statbox large stat={totalBonus} title={saveName} />
      </div>
      <div className="col-8">
        <span className="float-left my-2 mr-2">=</span>
        <Statbox
          className="float-left"
          stat={modifier}
          title={abilityAbbreviation}
        />
        <span className="float-left m-2">+</span>
        <Statbox
          className="float-left"
          stat={proficiencyBonus}
          title="PROF"
        />
        <div className="float-left ml-2">
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
    </div>
  )
}
