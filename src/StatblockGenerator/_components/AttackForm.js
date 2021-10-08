import React from "react"
import { SBG_Input, SBG_Select } from "components"

const AttackForm = (props) => {
  return (
    <div
      className={
        "feature-block gap-2 grid grid-rows-2 grid-cols-6 text-sm"
      }
    >
      <div className="col-span-2">
        <SBG_Input
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
          label={"Attack"}
          id={"attack-type"}
          fieldName={"type"}
          options={["Melee", "Ranged"]}
          value={props.action.attack.type}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <SBG_Input
          label={"Targets"}
          fieldName={"targets"}
          type="number"
          value={props.action.attack.targets}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <SBG_Input
          label={props.action.attack.type === "Ranged" ? "Range" : "Reach"}
          fieldName={"reach"}
          type="number"
          value={props.action.attack.reach}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>

      <div className="col-span-1">
        <SBG_Input
          label={"#"}
          type="number"
          fieldName={"dieNum"}
          value={props.action.attack.dieNum}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <SBG_Select
          label={"Dmg Die"}
          fieldName={"dmgDie"}
          options={[4, 6, 8, 10, 12]}
          value={props.action.attack.dmgDie}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-2">
        <SBG_Select
          label={"Dmg Type"}
          fieldName={"dmgType"}
          options={global.damageTypes}
          value={props.action.attack.dmgType}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <div className="form-group text-center">
          <label className="" htmlFor="dex">
            Dex?
          </label>
          <div
            className={`dex-check ${
              props.action.attack.dex ? "checked" : ""
            }`}
            name={"dex-" + props.action.id}
            value={!props.action.attack.dex}
            onClick={() =>
              props.updateAction(
                {
                  target: {
                    name: "dex",
                    value: !props.action.attack.dex,
                  },
                },
                props.action.id,
                props.legendary
              )
            }
          ></div>
        </div>
      </div>
      <div className="col-span-1">
        <button
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
