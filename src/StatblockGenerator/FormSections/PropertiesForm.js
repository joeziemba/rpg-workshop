import { StatblockContext } from "context"
import React, { useContext } from "react"
import { Typeahead } from "react-bootstrap-typeahead"
import "react-bootstrap-typeahead/css/Typeahead.css"


export const PropertyForm = () => {
  const { stats, updatePropertyList } = useContext(StatblockContext)
  return (
    <div className="text-sm">
      <label>Condition Immunities</label>
      <Typeahead
        multiple
        options={global.conditions}
        selected={stats.conditionImmune}
        onChange={(selected) =>
          updatePropertyList(selected, "conditionImmune")
        }
      />

      <label>Damage Immunities</label>
      <Typeahead
        multiple
        options={global.damageTypes}
        selected={stats.immune}
        onChange={(selected) => updatePropertyList(selected, "immune")}
      />

      <label>Resistances</label>
      <Typeahead
        multiple
        options={global.damageTypes}
        selected={stats.resists}
        onChange={(selected) => updatePropertyList(selected, "resists")}
      />

      <label>Vulnerabilities</label>
      <Typeahead
        multiple
        options={global.damageTypes}
        selected={stats.vulnerable}
        onChange={(selected) => updatePropertyList(selected, "vulnerable")}
      />

      <label>Skill Proficiencies</label>
      <Typeahead
        multiple
        options={global.skills.map((skill) => skill.name)}
        selected={stats.skills}
        onChange={(selected) => updatePropertyList(selected, "skills")}
      />

      <label>Languages</label>
      <Typeahead
        multiple
        options={global.languages}
        selected={stats.langs}
        onChange={(selected) => updatePropertyList(selected, "langs")}
      />
    </div>
  )
}
