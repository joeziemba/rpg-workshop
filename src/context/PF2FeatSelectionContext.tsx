import { FeatSelection } from "components"
import { createContext, useContext, useState } from "react"

export interface IPF2FeatSelectionContext {
  openFeatSelectionModal: (
    slotLevel: FeatSlot["level"],
    slotType: FeatSlot["type"]
  ) => void
}

export const PF2FeatSelectionContext = createContext(
  {} as IPF2FeatSelectionContext
)

export const usePF2FeatSelectionContext = () =>
  useContext(PF2FeatSelectionContext)

export const PF2FeatSelectionContextProvider: React.FC = ({
  children,
}) => {
  const [showFeatSelection, setShowFeatSelection] = useState(false)
  const [featSlotLevel, setFeatSlotLevel] = useState<FeatSlot["level"]>(0)
  const [featSlotType, setFeatSlotType] = useState("")

  const openFeatSelectionModal = (
    slotLevel: FeatSlot["level"],
    slotType: FeatSlot["type"]
  ) => {
    setFeatSlotLevel(slotLevel)
    setFeatSlotType(slotType)
    setShowFeatSelection(true)
  }

  const closeFeatSelectionModal = () => {
    setFeatSlotLevel(0)
    setFeatSlotType("")
    setShowFeatSelection(false)
  }

  return (
    <PF2FeatSelectionContext.Provider value={{ openFeatSelectionModal }}>
      {children}
      <FeatSelection
        show={showFeatSelection}
        closeFunction={closeFeatSelectionModal}
        featType={featSlotType}
        featLevel={featSlotLevel}
      />
    </PF2FeatSelectionContext.Provider>
  )
}
