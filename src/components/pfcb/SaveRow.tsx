import { character } from "data/character"
import SaveBoost from "data/models/SaveBoost"
import React from "react"
import { Save } from "types/pf2e/Boosts"
import Statbox from "./Statbox"
import TEMLbuttons from "./TEMLbuttons"

interface SaveRowProps {
  character: character
  saveType: Save
}

export const SaveRow = ({ character, saveType }: SaveRowProps) => {
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
    case "reflex":
    default: {
      abilityAbbreviation = "DEX"
      modifier = character.abilityMods.Dexterity
      saveName = "REF"
      break
    }
  }

  let proficiencyBonus = 0

  if (character.saves[saveType] > 0) {
    proficiencyBonus += character.saves[saveType] + character.level
  }

  const totalBonus = proficiencyBonus + modifier
  return (
    <div className="flex-initial flex items-center">
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
        <Statbox
          className="flex-1"
          stat={proficiencyBonus.toString()}
          title="PROF"
        />
      </div>
      <div className="flex-1 flex justify-around">
        <TEMLbuttons proficiency={character.saves[saveType]} />
      </div>
    </div>
  )
}
