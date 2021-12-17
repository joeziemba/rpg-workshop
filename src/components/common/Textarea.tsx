import React from "react"

type TextareaProps = {
  fieldName: string
  hideLabel: boolean
  id: string
  label: string
  onChange: () => void
  placeholder: string
  rows: number
  supportText: string
  value: string
}

export const Textarea = ({
  fieldName,
  hideLabel,
  id,
  label,
  onChange,
  placeholder,
  rows,
  supportText,
  value,
}: TextareaProps) => {
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
