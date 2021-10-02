import React, { useState, useEffect, useContext } from "react"
import FeatEntry from "./FeatEntry"
import FeatSelection from "./FeatSelection"
import { Modal } from "_globalComponents"
import { Card } from "./Card"
import { SubHeading } from "./SubHeading"
import { PlaceholderText } from "./PlaceholderText"
import { PF2CharacterContext } from "context"

const FeatsSection = () => {
  const { character, selectFeat, deleteFeat } = useContext(
    PF2CharacterContext
  )
  const [showFeatSelection, setShowFeatSelection] = useState(false)
  const [featKey, setFeatKey] = useState("")
  const [numMiscFeats, setNumMiscFeats] = useState(0)

  useEffect(() => {
    let miscFeats = character.feats.filter((feat) =>
      feat.type.includes("misc")
    )
    setNumMiscFeats(miscFeats.length + 1)
  }, [character.feats])

  const openFeatSelection = (featKey) => {
    setFeatKey(featKey)
    setShowFeatSelection(true)
  }

  const localSelectFeat = (feat) => {
    selectFeat(featKey, feat)
    setShowFeatSelection(false)
  }

  const hasClass = !!character.class.name,
    hasAncestry = !!character.ancestry.name

  const classFeats = [],
    ancestryFeats = [],
    skillFeats = [],
    miscFeats = []

  character.feats.forEach((feat) => {
    let [type, level] = feat.type.split("_")
    if (level > character.level) return
    switch (type) {
      case "class":
        classFeats.push(feat)
        break
      case "ancestry":
        ancestryFeats.push(feat)
        break
      case "skill":
        skillFeats.push(feat)
        break
      default:
        miscFeats.push(feat)
        break
    }
  })

  return (
    <Card title="Feats" className="pb-4">
      <PlaceholderText>
        <span className="block pt-2">
          Feats added here <b>do not</b> modify any stats on this character
          sheet. Modifiers and proficiencies have to be added manually for
          now.
        </span>
      </PlaceholderText>

      <SubHeading>Ancestry Feats</SubHeading>
      <div>
        {!hasAncestry ? (
          <PlaceholderText>choose an ancestry above</PlaceholderText>
        ) : (
          ancestryFeats.map((feat, i) => {
            return (
              <FeatEntry
                key={i}
                label={"Lv" + feat.type.split("_")[1]}
                feat={feat}
                addFeat={() => openFeatSelection(feat.type)}
                removeFeat={() => deleteFeat(feat.type)}
              />
            )
          })
        )}
      </div>

      <SubHeading>Class Feats</SubHeading>
      <div>
        {!hasClass ? (
          <PlaceholderText>choose a class above</PlaceholderText>
        ) : (
          classFeats.map((feat, i) => {
            return (
              <FeatEntry
                key={i}
                label={"Lv" + feat.type.split("_")[1]}
                feat={feat}
                addFeat={() => openFeatSelection(feat.type)}
                removeFeat={() => deleteFeat(feat.type)}
              />
            )
          })
        )}
      </div>

      <SubHeading>Skill Feats</SubHeading>
      <div>
        {!hasClass ? (
          <PlaceholderText>choose a class above</PlaceholderText>
        ) : character.level === 1 ? (
          <PlaceholderText>skill feats start at level 2</PlaceholderText>
        ) : (
          skillFeats.map((feat, i) => {
            return (
              <FeatEntry
                key={i}
                label={"Lv" + feat.type.split("_")[1]}
                feat={feat}
                addFeat={() => openFeatSelection(feat.type)}
                removeFeat={() => deleteFeat(feat.type)}
              />
            )
          })
        )}
      </div>

      <SubHeading className="c-boost-group__heading mt-3">
        Other Feats
      </SubHeading>
      <div>
        {miscFeats.map((feat, i) => {
          return (
            <FeatEntry
              key={i}
              label=""
              feat={feat}
              addFeat={() => openFeatSelection(feat.type)}
              removeFeat={() => deleteFeat(feat.type)}
            />
          )
        })}
        <FeatEntry
          label=""
          feat={{}}
          addFeat={() => openFeatSelection("misc_" + numMiscFeats)}
        />{" "}
      </div>
      <Modal
        show={showFeatSelection}
        closeFunction={() => setShowFeatSelection(false)}
        title="Feats"
        large
      >
        <FeatSelection
          selectFeat={localSelectFeat}
          featKey={featKey}
          character={character}
        />
      </Modal>
    </Card>
  )
}

export default FeatsSection
