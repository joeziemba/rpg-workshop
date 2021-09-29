import React from "react"

const Input = (props) => {
  return (
    <div className={props.className}>
      {!props.hideLabel && (
        <label htmlFor={props.id ?? props.fieldName}>{props.label}</label>
      )}
      <input
        type={props.type}
        className={
          "py-1 px-2 border rounded-md text-sm block w-full border-gray-300 "
        }
        id={props.id ?? props.fieldName}
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
  )
}

export default Input
