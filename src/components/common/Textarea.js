import React from "react"

export const Textarea = ({
  id,
  label,
  hideLabel,
  placeholder,
  onChange,
  value,
  fieldName,
  rows,
  supportText,
}) => {
  return (
    <div className="form-group">
      {!hideLabel && <label htmlFor={id}>{label}</label>}
      <textarea
        className="p-2 border rounded-md border-gray-300 block w-full"
        id={id}
        aria-describedby={`${id}Help`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={fieldName}
        rows={rows}
      />
      <small id={`${id}Help`} className="form-text text-muted">
        {supportText}
      </small>
    </div>
  )
}
