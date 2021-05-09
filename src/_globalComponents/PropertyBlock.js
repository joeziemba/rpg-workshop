import React from "react";

const PropertyBlock = (props) => {
  return (
    <div className="statblock__property statblock__property--block">
      <span className="statblock__property-name italic">
        {props.title}.
      </span>{" "}
      {props.content}
    </div>
  );
};

export default PropertyBlock;
