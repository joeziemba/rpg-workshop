import React from "react";
import Statbox from "./Statbox";

const TEMLbuttons = ({ skill, onClick, disabled }) => {
  return (
    <div className="">
      <Statbox title="T" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            onClick={onClick}
            name={skill.id + "-trained"}
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
            // onClick={onClick}
            checked={skill.proficiency >= 4}
            readOnly
            name={skill.id + "-expert"}
            disabled={true}
            aria-label={skill.id + " Expert"}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
      <Statbox title="M" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            // onClick={onClick}
            checked={skill.proficiency >= 6}
            readOnly
            name={skill.id + "-master"}
            disabled={true}
            aria-label={skill.id + " Master"}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
      <Statbox title="L" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            // onClick={onClick}
            checked={skill.proficiency >= 8}
            readOnly
            name={skill.id + "-legend"}
            disabled={true}
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
    proficiency: 0
  }
};

export default TEMLbuttons;
