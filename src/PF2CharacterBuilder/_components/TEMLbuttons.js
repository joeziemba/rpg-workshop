import React from "react"
import "./teml.scss"

const TEMLbuttons = ({ skill }) => {
  let { id, proficiency } = skill
  if (id === "Lore") {
    id += "_" + skill.type
  }
  return (
    <div className="c-teml">
      <div
        className={`c-teml__item ${
          proficiency > 1 ? " c-teml__item--checked" : ""
        }`}
      ></div>
      <div
        className={`c-teml__item 
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

TEMLbuttons.defaultProps = {
  skill: {
    id: "",
    proficiency: 0,
  },
}

export default TEMLbuttons
