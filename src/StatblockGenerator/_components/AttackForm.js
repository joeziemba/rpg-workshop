import React from "react"
import { Row, Column, Input, SelectField } from "../../_globalComponents"

const AttackForm = (props) => {
  return (
    <div className="feature-block">
      <Row>
        <button
          className="delete-btn"
          onClick={() =>
            props.deleteAction(props.action.id, props.legendary)
          }
        >
          <i className="fa fa-close" />
        </button>
        <Column className="col-4-md col-12-sm">
          <Input
            type="text"
            label={"Title"}
            placeholder={""}
            value={props.action.title}
            fieldName="title"
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-md-3 col-sm-12">
          <SelectField
            label={"Attack"}
            fieldName={"type"}
            options={["Melee", "Ranged"]}
            value={props.action.attack.type}
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-md-2 col-sm-12">
          <Input
            label={"Targets"}
            fieldName={"targets"}
            type="number"
            value={props.action.attack.targets}
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-md-2 col-sm-12">
          <Input
            label={
              props.action.attack.type === "Ranged" ? "Range" : "Reach"
            }
            fieldName={"reach"}
            type="number"
            value={props.action.attack.reach}
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-md-1 col-sm-12" />
      </Row>
      <Row>
        <Column className="col-md-2 col-sm-12">
          <Input
            label={"#"}
            type="number"
            fieldName={"dieNum"}
            value={props.action.attack.dieNum}
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-md-2 col-sm-12">
          <SelectField
            label={"Dmg Die"}
            fieldName={"dmgDie"}
            options={[4, 6, 8, 10, 12]}
            value={props.action.attack.dmgDie}
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-md-4 col-sm-12">
          <SelectField
            label={"Dmg Type"}
            fieldName={"dmgType"}
            options={global.damageTypes}
            value={props.action.attack.dmgType}
            onChange={(e) =>
              props.updateAction(e, props.action.id, props.legendary)
            }
          />
        </Column>
        <Column className="col-2 col-12-sm">
          <div className="form-group text-center">
            <label className="" htmlFor="dex">
              Dex?
            </label>
            <div
              className={`dex-check ${
                props.action.attack.dex ? "checked" : ""
              }`}
              name="dex"
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
        </Column>
        <Column className="col-2 col-12-sm"></Column>
      </Row>
    </div>
  )
}

export default AttackForm
