import React from "react"

export const CheckboxButton = ({
  checked,
  fieldName,
  id,
  label,
  onClick,
}) => {
  return (
    <>
      <div className="form-group text-center">
        <label className="" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className={`dex-check ${checked ? "checked" : ""}`}
          name={fieldName}
          onChange={onClick}
          onClick={onClick}
        />
      </div>
    </>
  )
}
