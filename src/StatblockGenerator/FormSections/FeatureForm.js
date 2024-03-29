import React, { useContext } from "react"
import { StatblockContext } from "context"
import { NavButton, FeatureBlock } from "components"

export const FeatureForm = () => {
  const { updateFeature, deleteFeature, addFeature, stats } =
    useContext(StatblockContext)
  return (
    <>
      {stats.features.map((feature, i) => {
        return (
          <FeatureBlock
            key={i}
            index={i}
            feature={feature}
            deleteFunc={deleteFeature}
            updateFunc={updateFeature}
          />
        )
      })}
      <NavButton id="add-feature" color="red" onClick={addFeature}>
        <i className="fa fa-plus mr-2" />
        Feature
      </NavButton>
    </>
  )
}
