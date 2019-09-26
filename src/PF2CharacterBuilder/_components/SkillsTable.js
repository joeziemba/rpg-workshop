import React from "react";
import Statbox from "./Statbox";
import { Abilities } from "../../_data/abilities";

const SkillsTable = ({ character, selectSkill }) => {
  let { freeSkills } = character;
  let sources = character.skillBoosts
    .map(boost => boost.source)
    .filter(b => b !== undefined)
    .sort();
  sources = [...new Set(sources)];
  return (
    <div id="Skills" className="pf-section">
      <h2 className="pf-section__heading">
        Skills{" "}
        <div className="float-right">
          Available Skill Training: {freeSkills}
        </div>
      </h2>
      <div className="pf-section__body">
        {Object.keys(character.skills).map(skill => {
          skill = character.skills[skill];

          let proficiencyBonus =
            skill.proficiency > 0 ? +skill.proficiency + character.level : 0;
          let abilityMod = character.abilityMods[skill.modifier];
          let totalMod = proficiencyBonus + abilityMod;
          return (
            <div
              className={`c-skillrow ${
                proficiencyBonus > 0 ? "c-skillrow--active" : ""
              }`}
            >
              <div className={`c-skillrow__name m-2 `}>
                {skill.name}
                {"*".repeat(sources.indexOf(skill.source) + 1)}
              </div>
              <Statbox stat={totalMod} title="Total" />
              <span className="float-left m-2">=</span>
              <Statbox stat={skill.proficiency} title="Prof" />
              <span className="float-left m-2">+</span>
              <Statbox
                stat={`${abilityMod}`}
                title={Object.keys(Abilities).find(
                  a => Abilities[a] === skill.modifier
                )}
              />
              <div className="ml-lg-4 ml-2">
                <Statbox title="T" secondary>
                  <label className="c-check__container">
                    <input
                      type="checkbox"
                      onClick={selectSkill}
                      name={skill.id}
                      disabled={
                        skill.source !== undefined ||
                        (freeSkills === 0 && skill.proficiency === 0)
                      }
                      checked={skill.proficiency >= 2}
                    />
                    <span className="c-check"></span>
                  </label>
                </Statbox>
                <Statbox title="E" secondary>
                  <label className="c-check__container">
                    <input
                      type="checkbox"
                      // onClick={selectSkill}
                      name={skill.id}
                      disabled={true}
                      checked={skill.proficiency >= 4}
                    />
                    <span className="c-check"></span>
                  </label>
                </Statbox>
                <Statbox title="M" secondary>
                  <label className="c-check__container">
                    <input
                      type="checkbox"
                      // onClick={selectSkill}
                      name={skill.id}
                      disabled={true}
                      checked={skill.proficiency >= 6}
                    />
                    <span className="c-check"></span>
                  </label>
                </Statbox>
                <Statbox title="L" secondary>
                  <label className="c-check__container">
                    <input
                      type="checkbox"
                      // onClick={selectSkill}
                      name={skill.id}
                      disabled={true}
                      checked={skill.proficiency >= 8}
                    />
                    <span className="c-check"></span>
                  </label>
                </Statbox>
              </div>
            </div>
          );
        })}
        {sources.map((source, i) => {
          return (
            <div>
              {"*".repeat(i + 1)} {source}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsTable;