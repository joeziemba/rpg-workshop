import React from "react";
import Statbox from "./Statbox";

const TEMLbuttons = ({ skill, onClick, disabled }) => {
  let skillId = skill.id;
  if (skillId === "Lore") {
    skillId = skill.id + "_" + skill.type;
  }
  return (
    <div className="">
      <Statbox title="T" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            onClick={onClick}
            name={skillId + "-2"}
            disabled={disabled}
            checked={skill.proficiency >= 2}
            aria-label={skill.id + " Trained"}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
      <Statbox title="E" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            onClick={onClick}
            checked={skill.proficiency >= 4}
            name={skillId + "-4"}
            disabled={disabled || skill.proficiency < 2}
            aria-label={skill.id + " Expert"}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
      <Statbox title="M" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            onClick={onClick}
            checked={skill.proficiency >= 6}
            name={skillId + "-6"}
            disabled={disabled || skill.proficiency < 4}
            aria-label={skill.id + " Master"}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
      <Statbox title="L" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            onClick={onClick}
            checked={skill.proficiency >= 8}
            name={skillId + "-8"}
            disabled={disabled || skill.proficiency < 6}
            aria-label={skill.id + " Legend"}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
    </div>
  );
};

TEMLbuttons.defaultProps = {
  skill: {
    id: "",
    proficiency: 0,
  },
};

export default TEMLbuttons;
