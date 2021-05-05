import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      {!props.hideLabel && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type={props.type}
        className="form-control form-control-sm"
        id={props.id}
        aria-describedby={`${props.id}Help`}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.fieldName}
      />
      <small id={`${props.id}Help`} className="form-text text-muted">
        {props.supportText}
      </small>
    </div>
  );
};

export default Input;
