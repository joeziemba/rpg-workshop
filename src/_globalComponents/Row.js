import React from "react"

const Row = (props) => {
  return <div className={`flex ${props.className}`}>{props.children}</div>
}

export default Row
