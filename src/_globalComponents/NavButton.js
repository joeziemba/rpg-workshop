import React from "react"

const NavButton = ({ children, onClick, color = "" }) => {
  return (
    <button
      className={`px-4 py-2 rounded-sm bg-${color} hover:bg-${
        color.split("-")[0]
      }-500 transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default NavButton
