import React from "react"
import { SBG_Input, Textarea } from "components"
import "./FeatureBlock.scss"

export const FeatureBlock = ({
  deleteFunc,
  feature,
  typeText = "Feature",
  updateFunc,
  index,
}) => {
  return (
    <div className="feature-block relative grid grid-rows-1 grid-cols-12 gap-2 mx-1 mb-2">
      <div className="col-span-4">
        <SBG_Input
          id={"feature-title-" + index}
          type="text"
          label={typeText}
          value={feature.title}
          fieldName={"title"}
          onChange={(e) => updateFunc(e, feature.id)}
        />
      </div>
      <div className="col-span-7">
        <Textarea
          id={"feature-content-" + index}
          type="text"
          label={"Description"}
          value={feature.content}
          fieldName={"content"}
          rows={2}
          onChange={(e) => updateFunc(e, feature.id)}
        />
      </div>
      <button
        className="col-span-1 group text-right"
        onClick={() => deleteFunc(feature.id)}
        title="delete"
      >
        <span style={{ visibility: "hidden", fontSize: "0px" }}>
          Delete
        </span>
        <i className="fas fa-minus-square text-xl text-gray-400 group-hover:text-red-900 transition-colors" />
      </button>
    </div>
  )
}
