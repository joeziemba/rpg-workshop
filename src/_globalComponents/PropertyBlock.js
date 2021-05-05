import React from "react";

const PropertyBlock = (props) => {
  return (
    <div className="property property--block">
      <span className="property-name italic">{props.title}.</span>{" "}
      {props.content}
    </div>
  );
};

export default PropertyBlock;
