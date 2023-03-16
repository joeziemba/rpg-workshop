import React, { useContext } from "react"
import { PF2CharacterContext } from "context"
import { Skills } from "data/skills"
import { Select } from "./Select"

export const FreeSkillBoosts = ({
  boostSource,
  boostLevel,
}: {
  boostSource: string
  boostLevel?: number
}) => {
  const {
    character: { skillBoosts, level },
    selectSkill,
  } = useContext(PF2CharacterContext)

  // Get skill boosts for the correct source and below character level
  const availableBoosts = skillBoosts.filter((boost) => {
    return (
      boost.source === boostSource &&
      (!boostLevel || (boost.level <= level && boost.level === boostLevel))
    )
  })

  // Map skill boosts into select fields
  return (
    <div className="flex flex-wrap">
      {availableBoosts.map((boost, i) => {
        return (
          <div
            key={boost.id.toString() + i}
            className="px-2 lg:px-2"
            style={
              availableBoosts.length > 1
                ? { flex: "0 1 25%" }
                : { flex: "0 0 100%" }
            }
          >
            <Select
              ariaLabel={"Skill Boost " + i}
              center
              id={boost.id.toString()}
              isDisabled={boost.isStatic}
              onChange={selectSkill}
              name={boost.id.toString()}
              value={boost.skill.id}
            >
              <option value="FREE">&nbsp;</option>
              {Object.keys(Skills).map((skillName) => {
                return (
                  <option key={skillName} value={skillName}>
                    {skillName}
                  </option>
                )
              })}
            </Select>
          </div>
        )
      })}
    </div>
  )
}
