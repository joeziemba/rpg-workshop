import React, { useContext } from "react"
import { SBG_Input, NavButton, FeatureBlock } from "components"
import { StatblockContext } from "context"

export const LegendaryActionsForm = () => {
  const {
    stats,
    updateAction,
    deleteAction,
    updateState,
    addLegendaryAction,
  } = useContext(StatblockContext)

  return (
    <>
      <div className="mb-4">
        <label
          className="col-span-2 mb-0 mr-4"
          htmlFor="legendaryActPerRound"
        >
          Legendary Actions Per Round:
        </label>
        <SBG_Input
          hideLabel
          type="number"
          className="inline-block w-2/12"
          id="legendaryActPerRound"
          fieldName="legendaryActPerRound"
          onChange={updateState}
          value={stats.legendaryActPerRound}
          name="legendaryActPerRound"
        />
        <input />
      </div>
      {stats.legendaryActions.map((action, i) => {
        return (
          <FeatureBlock
            key={i}
            index={i}
            typeText="Action"
            updateFunc={(e) => updateAction(e, action.id, true)}
            deleteFunc={() => deleteAction(action.id, true)}
            feature={action}
          />
        )
      })}

      <NavButton
        id="add-legendary-action"
        color="red"
        className="mr-2 mt-2"
        onClick={() => addLegendaryAction("General")}
      >
        <i className="fa fa-plus mr-2" />
        Action
      </NavButton>
    </>
  )
}
