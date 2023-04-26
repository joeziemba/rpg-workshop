import { useCharacterBuilderContext } from "context"
import { usePF2FeatSelectionContext } from "context/PF2FeatSelectionContext"

export interface FeatEntryProps {
  featSlot: FeatSlot
}

const FeatEntry = ({ featSlot }: FeatEntryProps) => {
  const { clearFeatSlot } = useCharacterBuilderContext()
  const { openFeatSelectionModal } = usePF2FeatSelectionContext()
  const { feat } = featSlot

  const clearSlot = () => {
    clearFeatSlot?.(featSlot)
  }

  const isMisc = featSlot.type.includes("misc")

  return (
    <div className="mx-4 mb-2 last:mb-0 border-b border-gray-300 pb-2">
      {!feat?.name ? (
        <button
          onClick={() =>
            openFeatSelectionModal(featSlot.level, featSlot.type)
          }
          className={
            "w-full px-4 py-3 rounded-md  " +
            "bg-gray-200 text-gray-400 " +
            "hover:text-gray-500 hover:bg-gray-300 transition-colors"
          }
          aria-label="Choose Feat"
        >
          <i className="fas fa-plus text-sm mr-2" />
          Choose {!isMisc && "Lv." + featSlot.level} Feat
        </button>
      ) : (
        <div className="grid grid-cols-8 gap 2">
          <span className="text-lg col-span-1 text-gray-400 pl-2">
            {!isMisc && "Lv." + featSlot.level}
          </span>
          <span className="col-span-6">
            <p className="text-lg mb-1">{feat.name}</p>

            <p className="text-sm">{feat.desc}</p>
          </span>
          <button
            onClick={clearSlot}
            className="col-span-1 text-gray-400 hover:text-red-700 rounded-md transition-colors"
            aria-label="Remove Feat"
            title="Remove Feat"
          >
            <i className="fas fa-minus-square"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default FeatEntry
