import React from "react"

type DisplayPropertyProps = {
  block?: boolean
  content: string
  id: string
  title: string
}

export const DisplayProperty = ({
  id,
  title,
  content,
  block,
}: DisplayPropertyProps) => {
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
