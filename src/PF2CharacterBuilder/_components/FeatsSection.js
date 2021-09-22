import React, { useState, useEffect } from "react"
import FeatEntry from "./FeatEntry"
import FeatSelection from "./FeatSelection"
import { Modal } from "../../_globalComponents"
import { Card } from "./Card"

const FeatsSection = (props) => {
  const [showFeatSelection, setShowFeatSelection] = useState(false)

  const [featKey, setFeatKey] = useState("")

  const [numMiscFeats, setNumMiscFeats] = useState(0)

  useEffect(() => {
    let miscFeats = props.character.feats.filter((feat) =>
      feat.type.includes("misc")
    )

    setNumMiscFeats(miscFeats.length + 1)
  }, [props.character.feats])

  const openFeatSelection = (featKey) => {
    setFeatKey(featKey)
    setShowFeatSelection(true)
  }

  const selectFeat = (feat) => {
    props.selectFeat(featKey, feat)
    setShowFeatSelection(false)
  }

  return (
    <Card title="Feats">
      <div className="pf-section__body pf-section__body--pad">
        <p className="mb-2" style={{ fontSize: ".75rem" }}>
          Feats added here <b>do not</b> modify any stats on this character
          sheet. Modifiers and proficiencies have to be added manually for
          now.
        </p>
        <h3 className="c-boost-group__heading">Ancestry Feats</h3>
        {!props.character.ancestry.name ? (
          <p className="col u-placeholder-text">
            choose an ancestry above
          </p>
        ) : (
          props.character.feats.map((feat, i) => {
            let [type, level] = feat.type.split("_")
            if (props.character.level >= level && type === "ancestry") {
              return (
                <FeatEntry
                  key={i}
                  label={"Lv" + level}
                  feat={feat}
                  addFeat={() => openFeatSelection(feat.type)}
                  removeFeat={() => props.deleteFeat(feat.type)}
                />
              )
            } else {
              return null
            }
          })
        )}
        <h3 className="c-boost-group__heading mt-3">Class Feats</h3>
        {!props.character.class.name ? (
          <p className="col u-placeholder-text">choose a class above</p>
        ) : (
          props.character.feats.map((feat, i) => {
            let [type, level] = feat.type.split("_")
            if (props.character.level >= level && type === "class") {
              return (
                <FeatEntry
                  key={i}
                  label={"Lv" + level}
                  feat={feat}
                  addFeat={() => openFeatSelection(feat.type)}
                  removeFeat={() => props.deleteFeat(feat.type)}
                />
              )
            } else {
              return null
            }
          })
        )}
        <h3 className="c-boost-group__heading mt-3">Skill Feats</h3>
        {!props.character.class.name ? (
          <p className="col u-placeholder-text">choose a class above</p>
        ) : props.character.level === 1 ? (
          <p className="col u-placeholder-text">
            skill feats start at level 2
          </p>
        ) : (
          props.character.feats.map((feat, i) => {
            let [type, level] = feat.type.split("_")
            if (props.character.level >= level && type === "skill") {
              return (
                <FeatEntry
                  key={i}
                  label={"Lv" + level}
                  feat={feat}
                  addFeat={() => openFeatSelection(feat.type)}
                  removeFeat={() => props.deleteFeat(feat.type)}
                />
              )
            } else {
              return null
            }
          })
        )}
        <h3 className="c-boost-group__heading mt-3">Other Feats</h3>
        {props.character.feats.map((feat, i) => {
          if (feat.name && feat.type.includes("misc")) {
            return (
              <FeatEntry
                key={i}
                label=""
                feat={feat}
                addFeat={() => openFeatSelection(feat.type)}
                removeFeat={() => props.deleteFeat(feat.type)}
              />
            )
          } else {
            return null
          }
        })}
        <FeatEntry
          label=""
          feat={{}}
          addFeat={() => openFeatSelection("misc_" + numMiscFeats)}
        />
      </div>
      <Modal
        show={showFeatSelection}
        large
        closeFunction={() => setShowFeatSelection(false)}
        title="Feats"
      >
        <FeatSelection
          selectFeat={selectFeat}
          featKey={featKey}
          character={props.character}
        />
      </Modal>
    </Card>
  )
}

export default FeatsSection
