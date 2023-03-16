import React from "react"
import "./teml.scss"

const TEMLbuttons = ({ skill }) => {
  const { proficiency } = skill
  return (
    <div className="c-teml">
      <div
        className={`c-teml__item ${
          proficiency > 1 ? " c-teml__item--checked" : ""
        }`}
      ></div>
      <div
        className={`c-teml__item ${
          proficiency > 3 ? " c-teml__item--checked" : ""
        }`}
      ></div>
      <div
        className={`c-teml__item ${
          proficiency > 5 ? " c-teml__item--checked" : ""
        }`}
      ></div>
      <div
        className={`c-teml__item ${
          proficiency > 7 ? " c-teml__item--checked" : ""
        }`}
      ></div>
    </div>
  )
}

export default TEMLbuttons