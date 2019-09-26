import React from "react";

const Statbox = ({ stat, title, large, className, children, secondary }) => {
  let classes = "c-statbox";
  if (large) classes += " c-statbox--large";
  if (secondary) classes += " c-statbox--secondary";
  classes += " " + className;

  return (
    <div className={classes}>
      {stat !== undefined ? (
        <span className="c-statbox__stat">{stat}</span>
      ) : (
        children
      )}

      <span className="c-statbox__title">{title}</span>
    </div>
  );
};

export default Statbox;
