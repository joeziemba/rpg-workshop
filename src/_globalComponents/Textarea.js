import React from "react"

const Textarea = ({
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
      {!hideLabel && <label htmlFor={fieldName}>{label}</label>}
      <textarea
        className="p-2 border rounded-md border-gray-300 block w-full"
        id={fieldName}
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

export default Textarea
