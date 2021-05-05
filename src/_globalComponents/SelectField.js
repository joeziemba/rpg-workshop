import React from "react";

const SelectField = (props) => {
  let options = props.options.map((opt) => {
    return <option key={opt}>{opt}</option>;
  });

  if (props.flat) {
    return (
      <div className={`form-group ${props.center ? "text-center" : ""}`}>
        <label htmlFor="exampleFormControlSelect1">{props.label}</label>
        <select
          className={`form-control form-control-sm ${
            props.center ? "text-center" : ""
          }`}
          id="exampleFormControlSelect1"
          value={props.value}
          onChange={props.onChange}
          name={props.fieldName}
        >
          {options}
        </select>
      </div>
    );
  }

  return (
    <div className={`form-group ${props.center ? "text-center" : ""}`}>
      <label htmlFor="exampleFormControlSelect1">{props.label}</label>
      <select
        className={`form-control form-control-sm ${
          props.center ? "text-center" : ""
        }`}
        id="exampleFormControlSelect1"
        value={props.value}
        onChange={props.onChange}
        name={props.fieldName}
      >
        {options}
      </select>
    </div>
  );
};

export default SelectField;
