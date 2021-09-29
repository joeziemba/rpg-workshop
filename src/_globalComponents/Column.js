import React from "react"

const Column = (props) => {
  return (
    <div className={`flex-1 ${props.className}`}>{props.children}</div>
  )
}

export default Column
