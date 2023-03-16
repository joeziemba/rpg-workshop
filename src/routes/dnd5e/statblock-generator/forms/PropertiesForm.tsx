import { StatblockContext } from "context"
import {
  conditions,
  damageTypes,
  languages,
  skills,
} from "data/dnd5e-constants"
import React, { useContext } from "react"
import { Typeahead } from "react-bootstrap-typeahead"
import "react-bootstrap-typeahead/css/Typeahead.css"

export const PropertyForm = () => {
  const { stats, updatePropertyList } = useContext(StatblockContext)
  return (
    <div className="text-sm">
      <div id="skills-input">
        Skill Proficiencies
        <Typeahead
          multiple
          options={skills.map((skill) => skill.name)}
          selected={stats.skills}
          onChange={(selected) => updatePropertyList(selected, "skills")}
        />
      </div>
      <div id="condition-immunities-input">
        Condition Immunities
        <Typeahead
          multiple
          options={conditions}
          selected={stats.conditionImmune}
          onChange={(selected) =>
            updatePropertyList(selected, "conditionImmune")
          }
        />
      </div>
      <div id="damage-immunities-input">
        Damage Immunities
        <Typeahead
          multiple
          options={damageTypes}
          selected={stats.immune}
          onChange={(selected) => updatePropertyList(selected, "immune")}
        />
      </div>
      <div id="damage-resistances-input">
        Resistances
        <Typeahead
          multiple
          options={damageTypes}
          selected={stats.resists}
          onChange={(selected) => updatePropertyList(selected, "resists")}
        />
      </div>
      <div id="damage-vulnerabilities-input">
        Vulnerabilities
        <Typeahead
          multiple
          options={damageTypes}
          selected={stats.vulnerable}
          onChange={(selected) =>
            updatePropertyList(selected, "vulnerable")
          }
        />
      </div>
      <div id="languages-input">
        Languages
        <Typeahead
          multiple
          options={languages}
          selected={stats.langs}
          onChange={(selected) => updatePropertyList(selected, "langs")}
        />
      </div>
    </div>
  )
}
