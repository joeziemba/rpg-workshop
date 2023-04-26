import { useContext } from "react"
import FeatEntry from "./FeatEntry"
import { Card } from "./Card"
import { SubHeading } from "./SubHeading"
import { PlaceholderText } from "./PlaceholderText"
import { PF2CharacterContext } from "context"
import { Guid } from "js-guid"

export const FeatsSection = () => {
  const { character } = useContext(PF2CharacterContext)

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
        featList={ancestryFeats}
        title="Ancestry Feats"
        noListMessage="choose an ancestry above"
        hideListIf={!hasAncestry}
      />

      <FeatList
        featList={classFeats}
        title="Class Feats"
        noListMessage="choose a class above"
        hideListIf={!hasClass}
      />

      <FeatList
        featList={skillFeats}
        title="Skill Feats"
        noListMessage="skill feats start at level 2"
        hideListIf={character.level === 1}
      />

      <FeatList featList={miscFeats} title="Other Feats" />

      <FeatEntry featSlot={{ type: "misc_" + Guid.newGuid(), level: 0 }} />
    </Card>
  )
}

type FeatListProps = {
  featList: FeatSlot[]
  hideListIf?: boolean
  noListMessage?: string
  title: string
}
const FeatList = ({
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
            return <FeatEntry key={i} featSlot={feat} />
          })
        )}
      </div>
    </>
  )
}
