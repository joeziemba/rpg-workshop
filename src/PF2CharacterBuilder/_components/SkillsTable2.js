import React from "react";
import Statbox from "./Statbox";
import { Abilities } from "../../_data/abilities";
import { Skills } from "../../_data/skills";
import TEMLbuttons from "./TEMLbuttons";

const SkillsTable = ({ character, selectSkill }) => {

  let sources = character.skillBoosts
    .map(boost => boost.source)
    .filter(b => b.includes(character.background.name))
    .sort();

  sources = [...new Set(sources)];

  function freeSkillTraining(source, excludeSource = null) {
    let { skillBoosts } = character;
    let freebies = skillBoosts.filter(
      boost => boost.type === Skills.FREE && boost.source === source
    );

    return freebies.map((boost, i) => {
      let boostsFromSameSource = skillBoosts.filter(
        b =>
          (b.source === boost.source && b.id !== boost.id) ||
          b.source === excludeSource
      );
      let excludedSkills = boostsFromSameSource.map(b => b.skill.id);
      if (boost.exclude) excludedSkills.push(...boost.exclude);

      return (
        <div
          key={boost.id}
          className="col"
          style={{ minWidth: "25%", fontSize: "0.75rem" }}
        >
          <select
            key={i}
            onChange={selectSkill}
            name={boost.id}
            className="text-center float-left pf-select pf-select--float pf-select--center pf-select--small"
            aria-label={"Level 1 Skill Training " + (i + 1)}
            value={boost.skill.id}
          >
            <option value="FREE"></option>
            {Object.keys(Skills).map(skillId => {
              return excludedSkills.includes(skillId) ? null : (
                <option key={skillId} value={skillId}>
                  {Skills[skillId].name}
                </option>
              );
            })}
          </select>
        </div>
      );
    });
  }

  return (
    <div id="Skills" className="pf-section">
      <h2 className="pf-section__heading">Skills</h2>
      <div className="pf-section__body">
        <div className="pl-2 pr-2">
          {character.abilityMods.Intelligence > 0 && (
            <>
              <h3 className="c-gray-block-heading mt-2">Intellignece Skills</h3>
              <div className="row">
                {freeSkillTraining("int", character.class.name)}
              </div>
            </>
          )}
          {character.class.name && (
            <>
              <h3 className="c-gray-block-heading mt-2">
                Level 1 Class Skills
              </h3>
              <div className="row">
                {freeSkillTraining(character.class.name, "int")}
              </div>
            </>
          )}
          {character.level >= 3 && (
            <div className="row">
              <div className="col">
                <h3 className="c-gray-block-heading mt-2">Lv 3 Boost</h3>
                <div className="row">{freeSkillTraining("character_3")}</div>
              </div>
              {character.level >= 5 && (
                <div className="col">
                  <h3 className="c-gray-block-heading mt-2">Lv 5 Boost</h3>
                  <div className="row">{freeSkillTraining("character_5")}</div>
                </div>
              )}
              {character.level >= 7 && (
                <div className="col">
                  <h3 className="c-gray-block-heading mt-2">Lv 7 Boost</h3>
                  <div className="row">{freeSkillTraining("character_7")}</div>
                </div>
              )}
              {character.level >= 9 && (
                <div className="col">
                  <h3 className="c-gray-block-heading mt-2">Lv 9 Boost</h3>
                  <div className="row">{freeSkillTraining("character_9")}</div>
                </div>
              )}
            </div>
          )}
          {character.level >= 11 && (
            <div className="row">
              <div className="col">
                <h3 className="c-gray-block-heading mt-2">Lv 11 Boost</h3>
                <div className="row">{freeSkillTraining("character_11")}</div>
              </div>
              {character.level >= 13 && (
                <div className="col">
                  <h3 className="c-gray-block-heading mt-2">Lv 13 Boost</h3>
                  <div className="row">{freeSkillTraining("character_13")}</div>
                </div>
              )}
              {character.level >= 15 && (
                <div className="col">
                  <h3 className="c-gray-block-heading mt-2">Lv 15 Boost</h3>
                  <div className="row">{freeSkillTraining("character_15")}</div>
                </div>
              )}
              {character.level >= 17 && (
                <div className="col">
                  <h3 className="c-gray-block-heading mt-2">Lv 17 Boost</h3>
                  <div className="row">{freeSkillTraining("character_17")}</div>
                </div>
              )}
            </div>
          )}
        </div>
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
                <TEMLbuttons disabled onClick={selectSkill} skill={skill} />
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
