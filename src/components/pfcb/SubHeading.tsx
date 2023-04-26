import React from "react"

export const SubHeading: React.FC = ({ children }) => {
  return (
    <h3
      className={
        "text-navy-700 font-semibold mt-4 mb-2 pb-1 mx-4 tracking-wide " +
        " " +
        "text-sm uppercase border-b border-gray-300"
      }
    >
      {children}
    </h3>
  )
}
