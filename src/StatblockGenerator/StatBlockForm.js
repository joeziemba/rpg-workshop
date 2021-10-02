import React from "react"
import "react-bootstrap-typeahead/css/Typeahead.css"
import { Typeahead } from "react-bootstrap-typeahead"
import { Accordion } from "_globalComponents"
import { Actions } from "./_components/index"
import { FeatureForm } from "./FormSections/FeatureForm"
import { LegendaryActionsForm } from "./FormSections/LegendaryActionsForm"
import { AbilityScoresForm } from "./FormSections/AbilityScoresForm"
import { BasicsForm } from "./FormSections/BasicsForm"

const StatBlockForm = (props) => {
  return (
    <div id="StatBlockForm" className="w-11/12 text-sm">
      <Accordion title="Basic Details" open>
        <BasicsForm />
      </Accordion>
      <Accordion title="Ability Scores">
        <AbilityScoresForm />
      </Accordion>
      <Accordion title="Properties" className="text-md">
        <div className="text-sm">
          <label>Condition Immunities</label>
          <Typeahead
            multiple
            options={global.conditions}
            selected={props.stats.conditionImmune}
            onChange={(selected) =>
              props.updatePropertyList(selected, "conditionImmune")
            }
          />

          <label>Damage Immunities</label>
          <Typeahead
            multiple
            options={global.damageTypes}
            selected={props.stats.immune}
            onChange={(selected) =>
              props.updatePropertyList(selected, "immune")
            }
          />

          <label>Resistences</label>
          <Typeahead
            multiple
            options={global.damageTypes}
            selected={props.stats.resists}
            onChange={(selected) =>
              props.updatePropertyList(selected, "resists")
            }
          />

          <label>Vulnerabilities</label>
          <Typeahead
            multiple
            options={global.damageTypes}
            selected={props.stats.vulnerable}
            onChange={(selected) =>
              props.updatePropertyList(selected, "vulnerable")
            }
          />

          <label>Skill Proficiencies</label>
          <Typeahead
            multiple
            options={global.skills.map((skill) => skill.name)}
            selected={props.stats.skills}
            onChange={(selected) =>
              props.updatePropertyList(selected, "skills")
            }
          />

          <label>Languages</label>
          <Typeahead
            multiple
            options={global.languages}
            selected={props.stats.langs}
            onChange={(selected) =>
              props.updatePropertyList(selected, "langs")
            }
          />
        </div>
      </Accordion>

      <Accordion title="Features">
        <FeatureForm />
      </Accordion>

      <Accordion title="Actions">
        <Actions />
      </Accordion>

      <Accordion title="Legendary Actions">
        <LegendaryActionsForm />
      </Accordion>
    </div>
  )
}

export default StatBlockForm
