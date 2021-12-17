import React from "react"
import { Accordion } from "components"
import { BasicsForm } from "./BasicsForm"
import { AbilityScoresForm } from "./AbilityScoresForm"
import { FeatureForm } from "./FeatureForm"
import { ActionsForm } from "./ActionsForm"
import { LegendaryActionsForm } from "./LegendaryActionsForm"
import { PropertyForm } from "./PropertiesForm"

export const StatblockForms = () => {
  return (
    <div id="StatblockForms" className="w-11/12 text-sm">
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
