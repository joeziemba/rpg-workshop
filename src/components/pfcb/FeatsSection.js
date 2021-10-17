import React, { useState, useEffect, useContext } from "react"
import FeatEntry from "./FeatEntry"
import { FeatSelection } from "./FeatSelection"
import { Card } from "./Card"
import { SubHeading } from "./SubHeading"
import { PlaceholderText } from "./PlaceholderText"
import { PF2CharacterContext } from "context"
import { Guid } from "js-guid"

export const FeatsSection = () => {
  const { character, selectFeat, deleteFeat } = useContext(
    PF2CharacterContext
  )
  const [showFeatSelection, setShowFeatSelection] = useState(false)
  const [featType, setfeatType] = useState("")
  const [featLevel, setfeatLevel] = useState("")

  const openFeatSelection = (featType, featLevel) => {
    setfeatType(featType)
    setfeatLevel(featLevel)
    setShowFeatSelection(true)
  }

  const localSelectFeat = (feat) => {
    selectFeat(featType, feat)
    setShowFeatSelection(false)
  }

  const hasClass = !!character.class.name,
    hasAncestry = !!character.ancestry.name

  const classFeats = [],
    ancestryFeats = [],
    skillFeats = [],
    generalFeats = [],
    miscFeats = []

  character.feats.forEach((feat) => {
    if (feat.level > character.level) return
    let [type] = feat.type.split("_")
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
      case "general":
        generalFeats.push(feat)
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

      <FeatList
        addFunc={openFeatSelection}
        deleteFeat={deleteFeat}
        featKey="ancestry"
        featList={ancestryFeats}
        title="Ancestry Feats"
        noListMessage="choose an ancestry above"
        hideListIf={!hasAncestry}
      />

      <FeatList
        addFunc={openFeatSelection}
        deleteFeat={deleteFeat}
        featKey="class"
        featList={classFeats}
        title="Class Feats"
        noListMessage="choose a class above"
        hideListIf={!hasClass}
      />

      <FeatList
        addFunc={openFeatSelection}
        deleteFeat={deleteFeat}
        featKey="skill"
        featList={skillFeats}
        title="Skill Feats"
        noListMessage="skill feats start at level 2"
        hideListIf={character.level === 1}
      />

      <FeatList
        addFunc={openFeatSelection}
        deleteFeat={deleteFeat}
        featKey="misc"
        featList={miscFeats}
        title="Other Feats"
      />

      <FeatEntry
        label=""
        feat={{ type: "misc_" + Guid.newGuid() }}
        addFeat={openFeatSelection}
      />

      <FeatSelection
        show={showFeatSelection}
        closeFunction={() => setShowFeatSelection(false)}
        selectFeat={localSelectFeat}
        featType={featType}
        featLevel={featLevel}
        character={character}
      />
    </Card>
  )
}

const FeatList = ({
  hideListIf,
  noListMessage,
  featList,
  addFunc,
  deleteFeat,
  title,
}) => {
  return (
    <>
      <SubHeading>{title}</SubHeading>
      <div>
        {hideListIf ? (
          <PlaceholderText>{noListMessage}</PlaceholderText>
        ) : (
          featList.map((feat, i) => {
            return (
              <FeatEntry
                key={i}
                label={"Lv" + feat.level}
                feat={feat}
                addFeat={addFunc}
                deleteFeat={deleteFeat}
              />
            )
          })
        )}
      </div>
    </>
  )
}
