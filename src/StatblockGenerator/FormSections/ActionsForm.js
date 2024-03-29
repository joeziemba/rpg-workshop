import React, { useContext } from "react"
import { NavButton } from "components"

import { StatblockContext } from "context"
import AttackForm from "../../components/sbg/AttackForm"
import { FeatureBlock } from "../../components/sbg/FeatureBlock"

export const ActionsForm = ({ legendary }) => {
  const { stats, updateAction, deleteAction, addAction } =
    useContext(StatblockContext)
  return (
    <React.Fragment>
      {stats.actions.map((action, i) => {
        if (["Melee", "Ranged"].includes(action.type)) {
          return (
            <AttackForm
              action={action}
              index={i}
              key={i}
              updateAction={updateAction}
              deleteAction={deleteAction}
              legendary={legendary}
            />
          )
        }
        return (
          <FeatureBlock
            key={i}
            typeText="Action"
            updateFunc={(e) => updateAction(e, action.id, legendary)}
            deleteFunc={() => deleteAction(action.id, legendary)}
            feature={action}
          />
        )
      })}
      <div className="mt-4">
        <NavButton
          id="add-action"
          color="red"
          className="mr-2"
          onClick={() => addAction("General")}
        >
          <i className="fa fa-plus mr-2" />
          Action
        </NavButton>
        <NavButton
          id="add-melee-attack"
          color="red"
          className="mr-2"
          onClick={() => addAction("Melee")}
        >
          <i className="fa fa-plus mr-2" />
          Melee Attack
        </NavButton>
        <NavButton
          id="add-ranged-attack"
          color="red"
          className=""
          onClick={() => addAction("Ranged")}
        >
          <i className="fa fa-plus mr-2" />
          Ranged Attack
        </NavButton>
      </div>
    </React.Fragment>
  )
}
