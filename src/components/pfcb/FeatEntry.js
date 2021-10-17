import React from "react"

const FeatEntry = ({ addFeat, feat, deleteFeat }) => {
  const add = () => addFeat(feat.type)
  const remove = () => {
    deleteFeat(feat)
  }

  const isMisc = feat.type.includes("misc")
  return (
    <div className="mx-4 mb-2 last:mb-0 border-b border-gray-300 pb-2">
      {!feat.name ? (
        <button
          onClick={add}
          className={
            "w-full px-4 py-3 rounded-md  " +
            "bg-gray-200 text-gray-400 " +
            "hover:text-gray-500 hover:bg-gray-300 transition-colors"
          }
          aria-label="Choose Feat"
        >
          <i className="fas fa-plus text-sm mr-2" />
          Choose {!isMisc && "Lv." + feat.level} Feat
        </button>
      ) : (
        <div className="grid grid-cols-8 gap 2">
          <span className="text-lg col-span-1 text-gray-400 pl-2">
            {!isMisc && "Lv." + feat.level}
          </span>
          <span className="col-span-6">
            <p className="text-lg mb-1">{feat.name}</p>

            <p className="text-sm">{feat.desc}</p>
          </span>
          <button
            onClick={remove}
            className="col-span-1 text-gray-400 hover:text-red-700 rounded-md transition-colors"
            aria-label="Remove Feat"
            title="Delete"
          >
            <i className="fas fa-minus-square"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default FeatEntry
