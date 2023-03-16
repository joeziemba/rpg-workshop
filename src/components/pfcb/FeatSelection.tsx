import React, { useState, useEffect, useCallback } from "react"
import _ from "lodash"
import FEATS from "data/feats/allFeats.json"
import { Modal } from "components"

export const FeatSelection = ({
  featType,
  featLevel,
  character,
  selectFeat,
  show,
  closeFunction,
}) => {
  const [query, setQuery] = useState("")
  const [feats, setFeats] = useState([] as any[])

  const filterFeatsBy = (feats, trait, level) => {
    return feats.filter((feat) => {
      const hasTrait =
        !trait ||
        feat.traits
          .map((t) => t.toLowerCase())
          .includes(trait.toLowerCase())

      const isLevel = +feat.reqLevel <= +level

      return hasTrait && isLevel
    })
  }

  const getFeatTag = useCallback(
    (featType) => {
      switch (featType) {
        case "ancestry":
          return character.ancestry.name
        case "class":
          return character.class.name
        case "skill":
          return "Skill"
        default:
          return ""
      }
    },
    [character.ancestry.name, character.class.name]
  )

  const filterFeatsByQuery = useCallback(
    (feats) => {
      // Filter by query in traits or name
      return feats.filter((feat) => {
        let hasMatchingTrait = false

        // Check traits for match
        for (const trait of feat.traits)
          if (trait.toLowerCase().includes(query.toLowerCase())) {
            hasMatchingTrait = true
            break
          }

        return (
          hasMatchingTrait ||
          feat.name.toLowerCase().includes(query.toLowerCase())
        )
      })
    },
    [query]
  )

  useEffect(() => {
    let filteredFeats = _.cloneDeep(FEATS)
    const [type] = featType.split("_")
    // Filter to correct feat list
    filteredFeats = filterFeatsBy(
      filteredFeats,
      getFeatTag(type),
      featLevel
    )

    // Additionally filter by query if present
    if (query)
      filteredFeats = filterFeatsByQuery(filteredFeats).sort(
        (a, b) => Number(a.reqLevel) - Number(b.reqLevel)
      )

    setFeats(filteredFeats)
  }, [
    query,
    character.ancestry.name,
    character.class.name,
    featType,
    filterFeatsByQuery,
    getFeatTag,
    featLevel,
  ])

  return (
    <Modal show={show} closeFunction={closeFunction} title="Feats" large>
      <Search onChange={setQuery} query={query} />

      {feats.length > 0 &&
        feats.map((feat) => {
          return (
            <div
              className="grid grid-cols-10 my-2 py-2 border-b"
              key={feat.name}
            >
              <div className="col-span-2 flex items-center group">
                <button
                  onClick={() => selectFeat(feat)}
                  className={
                    "h-full w-full text-5xl text-gray-300 text-center " +
                    "group-hover:text-blue-900 transition-colors"
                  }
                  aria-label={"Select Feat " + feat.name}
                >
                  <i className="fas fa-plus-circle" />
                </button>
              </div>

              <div className="col-span-8">
                <h4 className="text-xl mb-2">{feat.name}</h4>

                <div className="uppercase text-xs mb-2 text-blue-800">
                  <div className="mr-2 inline-block py-1 px-2 bg-blue-100 rounded-sm">
                    Level {feat.reqLevel}
                  </div>
                  {feat.traits.map((t) => (
                    <div
                      className="mr-2 inline-block py-1 px-2 bg-blue-100 rounded-sm"
                      key={t}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                {feat.prerequisites.length > 1 && (
                  <p className="mb-2">
                    <b>Prerequisites:</b> {feat.prerequisites}
                  </p>
                )}

                <p dangerouslySetInnerHTML={{ __html: feat.desc }}></p>
                <div className="mt-2 text-sm italic text-gray-700">
                  Source: {feat.source}
                </div>
              </div>
            </div>
          )
        })}
    </Modal>
  )
}

const Search = ({ onChange, query }) => {
  return (
    <div className="sticky top-0 w-full py-4 px-8 bg-white text-lg shadow-md">
      <label className="m-0">
        Search by name or tag
        <input
          className="border ml-4 border-gray-400 rounded-md py-2 px-4"
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {query && (
        <button
          className="text-sm uppercase text-gray-500 ml-2 hover:text-gray-800"
          onClick={() => onChange("")}
        >
          <i className="fa fa-close"></i> Clear Filter
        </button>
      )}
    </div>
  )
}
