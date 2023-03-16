import React from "react"
import { SBG_Input, SBG_Select } from "components"
import { CheckboxButton } from "./CheckboxButton"
import { damageTypes } from "data/dnd5e-constants"

export const AttackForm = (props) => {
  return (
    <div
      className={
        "feature-block gap-2 grid grid-rows-2 grid-cols-6 text-sm"
      }
    >
      <div className="col-span-2">
        <SBG_Input
          id={"attack-title-input-" + props.index}
          type="text"
          label={"Title"}
          placeholder={""}
          value={props.action.title}
          fieldName={"title"}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-2">
        <SBG_Select
          id={"attack-type-select-" + props.index}
          label={"Attack"}
          fieldName={"type"}
          options={["Melee", "Ranged"]}
          value={props.action.type}
          onChange={(e) => {
            props.updateAction(e, props.action.id, props.legendary)
          }}
        />
      </div>
      <div className="col-span-1">
        <SBG_Input
          id={"attack-targets-input-" + props.index}
          label={"Targets"}
          fieldName={"targets"}
          type="number"
          value={props.action.targets}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <SBG_Input
          id={"attack-reach-input-" + props.index}
          label={props.action.type === "Ranged" ? "Range" : "Reach"}
          fieldName={"reach"}
          type="number"
          value={props.action.reach}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>

      <div className="col-span-1">
        <SBG_Input
          id={"attack-die-num-input-" + props.index}
          label={"# "}
          type="number"
          fieldName={"dieNum"}
          value={props.action.dieNum}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <SBG_Select
          id={"attack-dmg-die-select-" + props.index}
          label={"Dmg Die"}
          fieldName={"dmgDie"}
          options={["4", "6", "8", "10", "12"]}
          value={props.action.dmgDie}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-2">
        <SBG_Select
          id={"attack-dmg-type-select-" + props.index}
          label={"Dmg Type"}
          fieldName={"dmgType"}
          options={damageTypes}
          value={props.action.dmgType}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <CheckboxButton
          id={"attack-type-select-" + props.index}
          label="Dex?"
          fieldName="dex"
          checked={props.action.dex}
          onClick={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <button
          id={"delete-action-" + props.index}
          onClick={() =>
            props.deleteAction(props.action.id, props.legendary)
          }
          className="w-full text-sm text-center group hover:text-red-900"
        >
          <p className="pb-1">Delete</p>
          <i className="fas fa-minus-square text-xl text-gray-400 group-hover:text-red-900" />
        </button>
      </div>
    </div>
  )
}

export default AttackForm
