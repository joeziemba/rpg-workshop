import React from "react"

export const SBG_Select = (props) => {
  let options = props.options.map((opt) => {
    return <option key={opt}>{opt}</option>
  })

  return (
    <div className={`form-group ${props.center ? "text-center" : ""}`}>
      <label className="" htmlFor={props.id}>
        {props.label}
      </label>
      <select
        className={`py-1 px-2 border rounded-md text-sm block w-full border-gray-300 ${
          props.center ? "text-center" : ""
        }`}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        name={props.fieldName}
      >
        {options}
      </select>
    </div>
  )
}
