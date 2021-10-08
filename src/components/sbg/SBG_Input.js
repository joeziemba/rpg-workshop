import React from "react"

export const SBG_Input = (props) => {
  const fieldId = props.id ?? props.fieldName.length / Math.random()

  return (
    <div className={props.className}>
      {!props.hideLabel && <label htmlFor={fieldId}>{props.label}</label>}
      <input
        type={props.type}
        className={
          "py-1 px-2 border rounded-md text-sm block w-full border-gray-300 "
        }
        id={fieldId}
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
