import React, { useContext } from "react"
import { StatblockContext } from "../StatblockGenerator"
import { FeatureBlock } from "../_components/FeatureBlock"
import NavButton from "src/_globalComponents/NavButton"

export const FeatureForm = () => {
  const { updateFeature, deleteFeature, addFeature, stats } =
    useContext(StatblockContext)
  return (
    <>
      {stats.features.map((feature, i) => {
        return (
          <FeatureBlock
            key={i}
            feature={feature}
            deleteFunc={deleteFeature}
            updateFunc={updateFeature}
          />
        )
      })}
      <NavButton color="red-900 mt-2" onClick={addFeature}>
        <i className="fa fa-plus mr-2" />
        Feature
      </NavButton>
    </>
  )
}
