import React from "react"
import cn from "classnames"

export const NavButton = ({
  children,
  className,
  color = "",
  id,
  onClick,
}) => {
  const classes = cn("px-4 py-2 rounded-sm transition-colors text-white", {
    "bg-red-900": color === "red",
    "hover:bg-red-900": color === "red",
    "bg-navy-900": color === "navy",
    "hover:bg-navy-900": color === "navy",
    [className]: className,
  })
  return (
    <button id={id} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
