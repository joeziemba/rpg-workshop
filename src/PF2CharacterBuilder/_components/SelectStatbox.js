import React from "react";
import Statbox from "./Statbox";

const SelectStatbox = props => {
  const levels = [];
  for (let i = 1; i < 21; i++) {
    levels.push(i);
  }
  return (
    <Statbox title="Level" large>
      <select onChange={props.setLevel} className="c-statbox__select">
        {levels.map(level => {
          return <option value={level}>{level}</option>;
        })}
      </select>
    </Statbox>
  );
};

export default SelectStatbox;
