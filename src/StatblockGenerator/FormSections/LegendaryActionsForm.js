import React, { useContext } from "react"
import NavButton from "src/_globalComponents/NavButton"
import { Input } from "src/_globalComponents"
import { InputFlat } from "../../_globalComponents"
import { StatblockContext } from "../StatblockGenerator"
import { FeatureBlock } from "src/StatblockGenerator/_components/FeatureBlock"

export const LegendaryActionsForm = () => {
  const { stats, updateAction, deleteAction, updateState, addAction } =
    useContext(StatblockContext)

  return (
    <>
      <div className="mb-4">
        <label className="col-span-2 mb-0 mr-4" htmlFor="legendaryActPerRound">
          Legendary Actions Per Round:
        </label>
        <Input
          hideLabel
          type="number"
          className="inline-block w-2/12"
          id="legendaryActPerRound"
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
            typeText="Action"
            updateFunc={(e) => updateAction(e, action.id, true)}
            deleteFunc={() => deleteAction(action.id, true)}
            feature={action}
          />
        )
      })}

      <NavButton
        color="red-900"
        className="mr-2 mt-2"
        onClick={() => addAction("General")}
      >
        <i className="fa fa-plus mr-2" />
        Action
      </NavButton>
    </>
  )
}