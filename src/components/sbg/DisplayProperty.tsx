import React from "react"

export const DisplayProperty = ({ id, title, content, block }) => {
  if (block) {
    return (
      <div
        id={id}
        className="statblock__property statblock__property--block"
      >
        <span className="statblock__property-name italic">{title}.</span>{" "}
        {content}
      </div>
    )
  }

  return (
    <div id={id} className="statblock__property">
      <span className="statblock__property-name">{title}</span> {content}
    </div>
  )
}
