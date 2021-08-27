import React from "react"

const Property = (props) => {
  return (
    <div className="statblock__property">
      <span className="statblock__property-name">{props.title}</span>{" "}
      {props.content}
    </div>
  )
}

export default Property
