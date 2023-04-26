import React, { useState, useContext } from "react"
import FeatEntry from "./FeatEntry"
import { FeatSelection } from "./FeatSelection"
import { Card } from "./Card"
import { SubHeading } from "./SubHeading"
import { PlaceholderText } from "./PlaceholderText"
import { PF2CharacterContext } from "context"
import { Guid } from "js-guid"
import { CharacterBuilder } from "routes/pf2/character-builder/CharacterBuilder"

export const FeatsSection = () => {
  const { character, selectFeat } = useContext(PF2CharacterContext)
  const [showFeatSelection, setShowFeatSelection] = useState(false)
  const [featType, setfeatType] = useState("")
  const [featLevel, setfeatLevel] = useState<string | number>()

  const openFeatSelection = (featType: string, feat?: Feat) => {
    setfeatType(featType)
    setfeatLevel(feat?.level?.toString())
    setShowFeatSelection(true)
  }

  const localSelectFeat = (feat: Feat) => {
    selectFeat(featType, feat)
    setShowFeatSelection(false)
  }

  const hasClass = !!character.class?.name,
    hasAncestry = !!character.ancestry?.name

  const classFeats: FeatSlot[] = [],
    ancestryFeats: FeatSlot[] = [],
    skillFeats: FeatSlot[] = [],
    generalFeats: FeatSlot[] = [],
    miscFeats: FeatSlot[] = []

  character.feats.forEach((feat) => {
    if (feat.level && feat.level > character.level) return
    const [type] = feat.type.split("_")
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
        featList={ancestryFeats}
        title="Ancestry Feats"
        noListMessage="choose an ancestry above"
        hideListIf={!hasAncestry}
      />

      <FeatList
        addFunc={openFeatSelection}
        featList={classFeats}
        title="Class Feats"
        noListMessage="choose a class above"
        hideListIf={!hasClass}
      />

      <FeatList
        addFunc={openFeatSelection}
        featList={skillFeats}
        title="Skill Feats"
        noListMessage="skill feats start at level 2"
        hideListIf={character.level === 1}
      />

      <FeatList
        addFunc={openFeatSelection}
        featList={miscFeats}
        title="Other Feats"
      />

      <FeatEntry
        featSlot={{ type: "misc_" + Guid.newGuid() }}
        addFeat={openFeatSelection}
      />

      <FeatSelection
        show={showFeatSelection}
        closeFunction={() => setShowFeatSelection(false)}
        selectFeat={localSelectFeat}
        featType={featType}
        featLevel={featLevel?.toString()}
        character={character}
      />
    </Card>
  )
}

type FeatListProps = {
  addFunc: (featType: string, feat?: Feat) => void
  featList: FeatSlot[]
  hideListIf?: boolean
  noListMessage?: string
  title: string
}
const FeatList = ({
  addFunc,
  featList,
  hideListIf,
  noListMessage,
  title,
}: FeatListProps) => {
  return (
    <>
      <SubHeading>{title}</SubHeading>
      <div>
        {hideListIf ? (
          <PlaceholderText>{noListMessage}</PlaceholderText>
        ) : (
          featList.map((feat, i) => {
            return <FeatEntry key={i} featSlot={feat} addFeat={addFunc} />
          })
        )}
      </div>
    </>
  )
}
