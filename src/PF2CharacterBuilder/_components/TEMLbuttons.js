import React from "react";
import Statbox from './Statbox';

const TEMLbuttons = ({skill, onClick, disabled}) => {
  return (
    <div className="">
      <Statbox title="T" secondary>
        <label className="c-check__container">
          <input
            type="checkbox"
            onClick={onClick}
            name={skill.id}
            disabled={
              skill.source !== undefined ||
              (disabled && skill.proficiency === 0)
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
            // onClick={onClick}
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
            // onClick={onClick}
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
            // onClick={onClick}
            name={skill.id}
            disabled={true}
            checked={skill.proficiency >= 8}
          />
          <span className="c-check"></span>
        </label>
      </Statbox>
    </div>
  );
};

TEMLbuttons.defaultProps = {
  skill: {
    id: '',
    proficiency: 0
  }
}

export default TEMLbuttons;