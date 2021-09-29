import React from "react"

const SelectField = (props) => {
  let options = props.options.map((opt) => {
    return <option key={opt}>{opt}</option>
  })

  return (
    <div className={`form-group ${props.center ? "text-center" : ""}`}>
      <label className="" htmlFor={props.fieldName}>{props.label}</label>
      <select
        className={`py-1 px-2 border rounded-md text-sm block w-full border-gray-300 ${
          props.center ? "text-center" : ""
        }`}
        id={props.fieldName}
        value={props.value}
        onChange={props.onChange}
        name={props.fieldName}
      >
        {options}
      </select>
    </div>
  )
}

export default SelectField
