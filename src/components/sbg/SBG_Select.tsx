import React, { ChangeEvent } from "react"

type SBG_SelectProps = {
  center?: boolean
  fieldName: string
  id: string
  label: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  value: string
}

export const SBG_Select = ({
  center = false,
  fieldName,
  id,
  label,
  onChange,
  options,
  value,
}: SBG_SelectProps) => {
  return (
    <div className={`form-group ${center ? "text-center" : ""}`}>
      <label className="" htmlFor={id}>
        {label}
      </label>
      <select
        className={`bg-white py-1 px-2 border rounded-md text-sm block w-full border-gray-300 ${
          center ? "text-center" : ""
        }`}
        id={id}
        value={value}
        onChange={onChange}
        name={fieldName}
      >
        {options.map((opt, i) => {
          return <option key={opt + i}>{opt}</option>
        })}
      </select>
    </div>
  )
}
