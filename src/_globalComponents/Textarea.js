import React from 'react';

const Textarea = (props) => {
  return (
    <div className="form-group">
      {!props.hideLabel &&
        <label htmlFor={props.id}>{props.label}</label>
      }
      <textarea
        type={props.type}
        className="form-control form-control-sm"
        id={props.id}
        aria-describedby={`${props.id}Help`}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        name={props.fieldName}
        rows={props.rows}
      />
      <small id={`${props.id}Help`} className="form-text text-muted">{props.supportText}</small>
    </div>
  )
}

export default Textarea;