import React from "react";
import Statbox from "./Statbox";
import { Abilities } from "../../_data/abilities";
import TEMLbuttons from "./TEMLbuttons";

const SkillsTable = ({ character, selectSkill }) => {
  let { freeSkills } = character;
  if (freeSkills < 0) {
    freeSkills = 0;
  }
  let sources = character.skillBoosts
    .map(boost => boost.source)
    .filter(b => ![undefined, "Free"].includes(b))
    .sort();
  sources = [...new Set(sources)];
  debugger;
  return (
    <div id="Skills" className="pf-section">
      <h2 className="pf-section__heading">
        Skills{" "}
        <div className="float-right">
          Available Skill Training: {freeSkills}
        </div>
      </h2>
      <div className="pf-section__body">
        {Object.keys(character.skills).map((skill, i) => {
          skill = character.skills[skill];
          if (!skill.source) skill.source = "Free";
          let proficiencyBonus =
            skill.proficiency > 0 ? skill.proficiency + character.level : 0;
          let abilityMod = character.abilityMods[skill.modifier];
          let totalMod = proficiencyBonus + abilityMod;
          return (
            <div
              key={skill + i}
              className={`c-skillrow ${
                proficiencyBonus > 0 ? "c-skillrow--active" : ""
              }`}
            >
              <div className={`c-skillrow__name mt-2 ml-2`}>
                {skill.name === "Lore" ? `Lore (${skill.type})` : skill.name}
                {"*".repeat(sources.indexOf(skill.source) + 1)}
              </div>
              <Statbox stat={totalMod} title="Total" />
              <span className="float-left m-2">=</span>
              <Statbox stat={proficiencyBonus} title="Prof" />
              <span className="float-left m-2">+</span>
              <Statbox
                stat={`${abilityMod}`}
                title={Object.keys(Abilities).find(
                  a => Abilities[a] === skill.modifier
                )}
              />

              <div className="ml-lg-4 ml-2">
                <TEMLbuttons
                  disabled={
                    skill.source !== "Free" ||
                    (freeSkills === 0 && skill.proficiency === 0)
                  }
                  onClick={selectSkill}
                  skill={skill}
                />
              </div>
            </div>
          );
        })}
        {sources.map((source, i) => {
          return (
            <div key={source + i} className="p-2">
              {"*".repeat(i + 1)} {source}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsTable;
