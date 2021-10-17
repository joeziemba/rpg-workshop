import React, { useContext } from "react"
import Statbox from "./Statbox"
import { Abilities } from "data/abilities"
import TEMLbuttons from "./TEMLbuttons"
import { Card } from "./Card"
import { FreeSkillBoosts } from "./FreeSkillBoosts"
import { SubHeading } from "./SubHeading"
import { PF2CharacterContext } from "context"

export const SkillsTable = () => {
  const { character } = useContext(PF2CharacterContext)
  let upperLevelBoosts = character.skillBoosts
    .filter((boost) => Number(boost.level > 1))
    .sort((a, b) => a.level - b.level)

  return (
    <Card title="Skills">
      {(character.background.name ||
        character.abilityMods.Intelligence > 0 ||
        character.class.name) && (
        <div className="">
          {character.background.name && (
            <>
              <SubHeading>
                Background Skills: {character.background.name}
              </SubHeading>
              <FreeSkillBoosts
                boostSource={character.background.id}
                boostLevel={1}
              />
            </>
          )}
          {character.abilityMods.Intelligence > 0 && (
            <>
              <SubHeading>Intelligence Skills</SubHeading>
              <FreeSkillBoosts boostSource="int" />
            </>
          )}
          {character.class.name && (
            <>
              <SubHeading>Level 1 Class Skills</SubHeading>
              <FreeSkillBoosts
                boostSource={character.class.name}
                boostLevel={1}
              />
            </>
          )}
          <div className="flex flex-wrap">
            {upperLevelBoosts.map((boost, i) => {
              if (boost.level > character.level) return null
              return (
                <div key={i} style={{ flex: "0 0 25%" }}>
                  <SubHeading>Lv {boost.level} Boost</SubHeading>
                  <FreeSkillBoosts
                    boostSource={boost.source}
                    boostLevel={boost.level}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {Object.values(character.skills).map((skill, i) => {
        if (!skill.source) skill.source = "Free"
        let proficiencyBonus =
          skill.proficiency > 0 ? skill.proficiency + character.level : 0
        let abilityMod = character.abilityMods[skill.modifier]
        let totalMod = proficiencyBonus + abilityMod
        return (
          <div
            key={skill + i}
            className={`flex items-center ${
              proficiencyBonus > 0 ? "font-bold" : ""
            } ${i % 2 !== 0 ? "bg-gray-200" : ""}`}
          >
            <div className={"flex-1 pl-4"}>
              {skill.name === "Lore" ? `Lore (${skill.type})` : skill.name}
            </div>
            <div className="flex-1 flex justify-between">
              <Statbox stat={totalMod} title="Total" />
              <span className="m-2">=</span>
              <Statbox stat={proficiencyBonus} title="Prof" />
              <span className="m-2">+</span>
              <Statbox
                stat={`${abilityMod}`}
                title={Object.keys(Abilities).find(
                  (a) => Abilities[a] === skill.modifier
                )}
              />
            </div>

            <div className="flex-1 flex justify-center">
              <TEMLbuttons disabled skill={skill} />
            </div>
          </div>
        )
      })}
    </Card>
  )
}
