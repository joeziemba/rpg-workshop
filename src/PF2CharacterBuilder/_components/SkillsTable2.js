import React from "react"
import Statbox from "./Statbox"
import { Abilities } from "../../_data/abilities"
import { Skills } from "../../_data/skills"
import TEMLbuttons from "./TEMLbuttons"

const SkillsTable = ({ character, selectSkill }) => {
  function freeSkillTraining(source, level) {
    let { skillBoosts } = character

    // Get skill boosts for the correct source and below character level
    let availableBoosts = skillBoosts.filter((boost) => {
      return (
        boost.source === source &&
        boost.level === level &&
        (!level || boost.level <= character.level)
      )
    })

    // Map skill boosts into select fields
    return availableBoosts.map((boost, i) => {
      return (
        <div
          key={boost.id}
          className="col"
          style={{ fontSize: "0.75rem" }}
        >
          <select
            key={i}
            disabled={boost.isStatic}
            onChange={selectSkill}
            name={boost.id}
            className="pf-select pf-select--center pf-select--small"
            aria-label={"Level 1 Skill Training " + (i + 1)}
            value={boost.skill.id}
          >
            <option value="FREE"></option>
            {Object.keys(Skills).map((skillName) => {
              return (
                <option key={skillName} value={skillName}>
                  {skillName}
                </option>
              )
            })}
          </select>
        </div>
      )
    })
  }

  let upperLevelBoosts = character.skillBoosts
    .filter((boost) => Number(boost.level > 1))
    .sort((a, b) => a.level - b.level)

  return (
    <div id="Skills" className="pf-section">
      <h2 className="pf-section__heading">Skills</h2>
      <div className="pf-section__body ">
        {(character.background.name ||
          character.abilityMods.Intelligence > 0 ||
          character.class.name) && (
          <div className="row pf-section__body--pad">
            {character.background.name && (
              <div className="c-boost-group col col-12">
                <h3 className="c-boost-group__heading">
                  Background Skills: {character.background.name}
                </h3>
                <div className="row">
                  {freeSkillTraining(character.background.id, 1)}
                </div>
              </div>
            )}
            {character.abilityMods.Intelligence > 0 && (
              <div className="c-boost-group col col-12">
                <h3 className="c-boost-group__heading">
                  Intelligence Skills
                </h3>
                <div className="row">{freeSkillTraining("int")}</div>
              </div>
            )}
            {character.class.name && (
              <div className="c-boost-group col col-12">
                <h3 className="c-boost-group__heading">
                  Level 1 Class Skills
                </h3>
                <div className="row">
                  {freeSkillTraining(character.class.name, 1)}
                </div>
              </div>
            )}
            {upperLevelBoosts.map((boost, i) => {
              if (boost.level > character.level) return null
              return (
                <div
                  key={boost.id + i}
                  className="c-boost-group col col-3"
                >
                  <h3 className="c-boost-group__heading">
                    Lv {boost.level} Boost
                  </h3>
                  {freeSkillTraining(boost.source, boost.level)}
                </div>
              )
            })}
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
              className={`c-skillrow ${
                proficiencyBonus > 0 ? "c-skillrow--active" : ""
              }`}
            >
              <div className={"c-skillrow__name mt-2 ml-2"}>
                {skill.name === "Lore"
                  ? `Lore (${skill.type})`
                  : skill.name}
              </div>
              <Statbox stat={totalMod} title="Total" />
              <span className="float-left m-2">=</span>
              <Statbox stat={proficiencyBonus} title="Prof" />
              <span className="float-left m-2">+</span>
              <Statbox
                stat={`${abilityMod}`}
                title={Object.keys(Abilities).find(
                  (a) => Abilities[a] === skill.modifier
                )}
              />

              <div className="ml-lg-4 ml-2">
                <TEMLbuttons disabled skill={skill} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsTable
