import React from "react"
import cn from "classnames"

export const Select = ({
  children,
  onChange,
  value,
  name,
  isDefault,
  ariaLabel = "",
  center,
  isDisabled,
  id,
}) => {
  const selectClasses = cn({
    "bg-gray-200 rounded-md w-full cursor-pointer": true,
    "hover:bg-gray-300 transition-colors": true,
    "appearance-none py-1 px-3 text-lg leading-loose": true,
    "text-gray-400": isDefault,
    "text-gray-800 cursor-not-allowed": isDisabled,
    "text-center": center,
  })

  return (
    <select
      onChange={onChange}
      name={name}
      className={selectClasses}
      aria-label={ariaLabel}
      value={value}
      disabled={isDisabled}
      style={{ textAlignLast: "center" }}
      id={id}
    >
      {children}
    </select>
  )
}
