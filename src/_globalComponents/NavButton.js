import React from "react"

const NavButton = ({
  className,
  children,
  onClick,
  color = "",
  hoverColor = "",
}) => {
  return (
    <button
      className={
        `px-4 py-2 rounded-sm bg-${color} hover:bg-${
          hoverColor || color.split("-")[0]
        }-500 transition-colors text-white ` + className
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default NavButton
