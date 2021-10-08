import React from "react"

export const SBG_Select = (props) => {
  let options = props.options.map((opt) => {
    return <option key={opt}>{opt}</option>
  })
  const fieldId = (props.fieldName.length * options.length) / Math.random()

  return (
    <div className={`form-group ${props.center ? "text-center" : ""}`}>
      <label className="" htmlFor={fieldId}>
        {props.label}
      </label>
      <select
        className={`py-1 px-2 border rounded-md text-sm block w-full border-gray-300 ${
          props.center ? "text-center" : ""
        }`}
        id={fieldId}
        value={props.value}
        onChange={props.onChange}
        name={props.fieldName}
      >
        {options}
      </select>
    </div>
  )
}
