import React, { ChangeEvent } from "react"

type SBG_InputProps = {
  className?: string
  fieldName: string
  hideLabel?: boolean
  id: string
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  supportText?: string
  type: string
  value: string
}

export const SBG_Input = ({
  className,
  fieldName,
  hideLabel,
  id,
  label,
  onChange,
  placeholder,
  supportText,
  type,
  value,
}: SBG_InputProps) => {
  const fieldId = id ?? fieldName.length / Math.random()

  return (
    <div className={className}>
      {!hideLabel && <label htmlFor={fieldId}>{label}</label>}
      <input
        type={type}
        className={
          "py-1 px-2 border rounded-md text-sm block w-full border-gray-300 "
        }
        id={fieldId}
        aria-describedby={`${id}Help`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={fieldName}
      />
      <small id={`${id}Help`} className="form-text text-muted">
        {supportText}
      </small>
    </div>
  )
}
