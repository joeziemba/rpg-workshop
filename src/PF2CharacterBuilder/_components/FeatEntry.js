import React from "react"

const FeatEntry = (props) => {
  return (
    <div className="mx-4 mb-2 last:mb-0 border-b border-gray-300 pb-2">
      {!props.feat.name ? (
        <button
          onClick={props.addFeat}
          className={
            "w-full px-4 py-3 rounded-md  " +
            "bg-gray-200 text-gray-400 " +
            "hover:text-gray-500 hover:bg-gray-300 transition-colors"
          }
          aria-label="Choose Feat"
        >
          <i className="fas fa-plus text-sm mr-2" />
          Choose {props.label} Feat
        </button>
      ) : (
        <div className="grid grid-cols-8 gap 2">
          <span className="col-span-1 text-gray-400 pl-2">
            {props.label}
          </span>
          <span className="col-span-6">
            <p className="text-lg mb-1">{props.feat.name}</p>

            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: props.feat.desc }}
            />
          </span>
          <button
            onClick={props.removeFeat}
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
