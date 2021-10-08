import React from "react"

export const NavButton = ({
  className,
  children,
  onClick,
  color = "",
}) => {
  let bg, bgHover
  if (color === "red") {
    bg = "bg-red-900"
    bgHover = "hover:bg-red-500"
  }
  if (color === "navy") {
    bg = "bg-navy-700"
    bgHover = "hover:bg-navy-500"
  }
  return (
    <button
      className={
        `px-4 py-2 rounded-sm ${bg} ${bgHover} transition-colors text-white ` +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}
