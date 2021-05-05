import React from "react";

const Property = (props) => {
  return (
    <div className="property">
      <span className="property-name">{props.title}</span> {props.content}
    </div>
  );
};

export default Property;
