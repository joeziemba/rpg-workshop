import React from "react"

export const Card = ({ children, title }) => {
  return (
    <div className={"mb-6 "}>
      <div className="bg-white shadow-md mx-3">
        <h2 className="bg-navy-600 text-white text-lg px-4 py-2">
          {title}
        </h2>
        <div
          className="flex flex-col justify-around"
          style={{ minHeight: "260px" }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
