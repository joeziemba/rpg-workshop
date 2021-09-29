import React, { useContext } from "react"
import { Column, Input, Row, SelectField } from "src/_globalComponents"
import { StatblockContext } from "../StatblockGenerator"

export const BasicsForm = () => {
  const { stats, updateState, updateAC, updateHP } =
    useContext(StatblockContext)
  return (
    <>
      <Input
        type="text"
        label={"Name"}
        placeholder={"Creature Name"}
        value={stats.name}
        fieldName="name"
        onChange={updateState}
      />

      <Row className="mt-2">
        <Column className="mr-4">
          <SelectField
            label={"Size"}
            options={["Small", "Medium", "Large", "Huge", "Gargantuan"]}
            value={stats.size}
            fieldName="size"
            onChange={updateState}
          />
        </Column>
        <Column className="mr-4">
          <SelectField
            label={"Creature Type"}
            options={global.creatureTypes}
            value={stats.creatureType}
            onChange={updateState}
            fieldName="creatureType"
          />
        </Column>
        <Column>
          <Input
            type="number"
            label={"Proficiency"}
            placeholder={""}
            value={stats.proficiency}
            fieldName="proficiency"
            onChange={updateState}
          />
        </Column>
      </Row>

      <Row className="mt-2">
        <Column className="mr-4">
          <h4 className="form-header mb-1 font-bold">Armor Class</h4>
          <Input
            label={"Score"}
            placeholder={""}
            value={stats.ac.score}
            fieldName="score"
            onChange={updateAC}
            type="number"
          />
          <Input
            type="text"
            label={"Support"}
            placeholder={""}
            value={stats.ac.support}
            fieldName="support"
            onChange={updateAC}
            className="mt-2"
          />
        </Column>

        <Column className="mr-4">
          <h4 className="form-header mb-1">Hit Points</h4>

          <SelectField
            label={"Hit Die"}
            options={[4, 6, 8, 10, 12, 20]}
            value={stats.hp.hitDie}
            fieldName="hitDie"
            onChange={updateHP}
          />
          <Input
            type="number"
            label={"Number of Dice"}
            placeholder={""}
            value={stats.hp.dieNum}
            fieldName="dieNum"
            onChange={updateHP}
            className="mt-2"
          />
        </Column>
        <Column className=" flex flex-wrap">
          <h4 className="form-header flex-full mb-1">Speed</h4>
          <Input
            type="number"
            label={"Base Speed"}
            placeholder={""}
            value={stats.speed}
            fieldName="speed"
            onChange={updateState}
          />
          <Row>
            <Column className="mr-4 mt-2">
              <Input
                type="number"
                label={"Fly"}
                placeholder={""}
                value={stats.flySpeed}
                fieldName="flySpeed"
                onChange={updateState}
              />
            </Column>
            <Column className="mt-2">
              <Input
                type="number"
                label={"Swim"}
                placeholder={""}
                value={stats.swimSpeed}
                fieldName="swimSpeed"
                onChange={updateState}
              />
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  )
}
