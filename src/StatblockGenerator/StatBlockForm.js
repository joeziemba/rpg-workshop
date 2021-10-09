import React from "react"
import { Accordion } from "components"
import { BasicsForm } from "./FormSections/BasicsForm"
import { AbilityScoresForm } from "./FormSections/AbilityScoresForm"
import { FeatureForm } from "./FormSections/FeatureForm"
import { ActionsForm } from "./FormSections/ActionsForm"
import { LegendaryActionsForm } from "./FormSections/LegendaryActionsForm"
import { PropertyForm } from "./FormSections/PropertiesForm"

export const StatBlockForm = () => {
  return (
    <div id="StatBlockForm" className="w-11/12 text-sm">
      <Accordion title="Basic Details" open>
        <BasicsForm />
      </Accordion>

      <Accordion title="Ability Scores">
        <AbilityScoresForm />
      </Accordion>

      <Accordion title="Properties">
        <PropertyForm />
      </Accordion>

      <Accordion title="Features">
        <FeatureForm />
      </Accordion>

      <Accordion title="Actions">
        <ActionsForm />
      </Accordion>

      <Accordion title="Legendary Actions">
        <LegendaryActionsForm />
      </Accordion>
    </div>
  )
}

export default StatBlockForm
