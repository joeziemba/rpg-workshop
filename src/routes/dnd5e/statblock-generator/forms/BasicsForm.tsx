import React, { useContext } from "react"
import { SBG_Input, SBG_Select } from "components"
import { StatblockContext } from "context"

export const BasicsForm = () => {
  const { stats, updateState, updateAC, updateHP } =
    useContext(StatblockContext)
  return (
    <>
      <SBG_Input
        id="name-input"
        type="text"
        label={"Name"}
        placeholder={"Creature Name"}
        value={stats.name}
        fieldName="name"
        onChange={updateState}
      />

      <div className="flex mt-2">
        <div className="flex-1 mr-4">
          <SBG_Select
            id="size-select"
            label={"Size"}
            options={["Small", "Medium", "Large", "Huge", "Gargantuan"]}
            value={stats.size}
            fieldName="size"
            onChange={updateState}
          />
        </div>
        <div className="flex-1 mr-4">
          <SBG_Select
            id="type-select"
            label={"Creature Type"}
            options={global.creatureTypes}
            value={stats.creatureType}
            onChange={updateState}
            fieldName="creatureType"
          />
        </div>
        <div className="flex-1">
          <SBG_Input
            id="prof-input"
            type="number"
            label={"Proficiency"}
            placeholder={""}
            value={stats.proficiency}
            fieldName="proficiency"
            onChange={updateState}
          />
        </div>
      </div>

      <div className="flex mt-2">
        <div className="flex-1 mr-4">
          <h4 className="form-header mb-1 font-bold">Armor Class</h4>
          <SBG_Input
            id="ac-input"
            label={"Score"}
            placeholder={""}
            value={stats.ac.score}
            fieldName="score"
            onChange={updateAC}
            type="number"
          />
          <SBG_Input
            id="ac-support-input"
            type="text"
            label={"Support"}
            placeholder={""}
            value={stats.ac.support}
            fieldName="support"
            onChange={updateAC}
            className="mt-2"
          />
        </div>

        <div className="flex-1 mr-4">
          <h4 className="form-header mb-1">Hit Points</h4>

          <SBG_Select
            id="hit-die-select"
            label={"Hit Die"}
            options={["4", "6", "8", "10", "12", "20"]}
            value={stats.hp.hitDie}
            fieldName="hitDie"
            onChange={updateHP}
          />
          <SBG_Input
            id="number-hit-die-input"
            type="number"
            label={"Number of Dice"}
            placeholder={""}
            value={stats.hp.dieNum}
            fieldName="dieNum"
            onChange={updateHP}
            className="mt-2"
          />
        </div>
        <div className="flex-1 flex flex-wrap">
          <h4 className="form-header flex-full mb-1">Speed</h4>
          <SBG_Input
            id="base-speed"
            type="number"
            label={"Base Speed"}
            placeholder={""}
            value={stats.speed}
            fieldName="speed"
            onChange={updateState}
          />
          <div className="flex">
            <div className="flex-1 mr-4 mt-2">
              <SBG_Input
                id="fly-speed"
                type="number"
                label={"Fly"}
                placeholder={""}
                value={stats.flySpeed}
                fieldName="flySpeed"
                onChange={updateState}
              />
            </div>
            <div className="flex-1 mt-2">
              <SBG_Input
                id="swim-speed"
                type="number"
                label={"Swim"}
                placeholder={""}
                value={stats.swimSpeed}
                fieldName="swimSpeed"
                onChange={updateState}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
