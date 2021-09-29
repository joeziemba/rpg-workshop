import React from "react"
import { Input, SelectField } from "../../_globalComponents"

const AttackForm = (props) => {
  return (
    <div
      className={
        "feature-block gap-2 grid grid-rows-2 grid-cols-6 text-sm"
      }
    >
      {/* <button
        className="delete-btn"
        onClick={() =>
          props.deleteAction(props.action.id, props.legendary)
        }
      >
        <i className="fa fa-close" />
      </button> */}
      <div className="col-span-2">
        <Input
          type="text"
          label={"Title"}
          placeholder={""}
          value={props.action.title}
          fieldName={"title-" + props.action.id}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-2">
        <SelectField
          label={"Attack"}
          fieldName={"attack-type-" + props.action.id}
          options={["Melee", "Ranged"]}
          value={props.action.attack.type}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <Input
          label={"Targets"}
          fieldName={"targets-" + props.action.id}
          type="number"
          value={props.action.attack.targets}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <Input
          label={props.action.attack.type === "Ranged" ? "Range" : "Reach"}
          fieldName={"reach-" + props.action.id}
          type="number"
          value={props.action.attack.reach}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>

      <div className="col-span-1">
        <Input
          label={"#"}
          type="number"
          fieldName={"dieNum-" + props.action.id}
          value={props.action.attack.dieNum}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-1">
        <SelectField
          label={"Dmg Die"}
          fieldName={"dmgDie-" + props.action.id}
          options={[4, 6, 8, 10, 12]}
          value={props.action.attack.dmgDie}
          onChange={(e) =>
            props.updateAction(e, props.action.id, props.legendary)
          }
        />
      </div>
      <div className="col-span-2">
        <SelectField
          label={"Dmg Type"}
          fieldName={"dmgType-" + props.action.id}
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
