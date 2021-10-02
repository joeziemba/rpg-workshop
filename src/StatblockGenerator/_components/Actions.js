import React, { useContext } from "react"
import NavButton from "_globalComponents/NavButton"

import { StatblockContext } from "context"
import AttackForm from "./AttackForm"
import { FeatureBlock } from "./FeatureBlock"

export const Actions = ({ legendary }) => {
  const { stats, updateAction, deleteAction, addAction } =
    useContext(StatblockContext)
  return (
    <React.Fragment>
      {stats.actions.map((action, i) => {
        if (action.attack) {
          return (
            <AttackForm
              action={action}
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
          color="red"
          className="mr-2"
          onClick={() => addAction("General")}
        >
          <i className="fa fa-plus mr-2" />
          Action
        </NavButton>
        <NavButton
          color="red"
          className="mr-2"
          onClick={() => addAction("Melee")}
        >
          <i className="fa fa-plus mr-2" />
          Melee Attack
        </NavButton>
        <NavButton
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
