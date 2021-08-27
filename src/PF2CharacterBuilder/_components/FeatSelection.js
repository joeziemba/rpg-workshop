import React, { useState, useEffect, useCallback } from "react"
import _ from "lodash"
import FEATS from "../../_data/feats/allFeats.json"

const FeatSelection = ({ featKey, character, selectFeat }) => {
  const [query, setQuery] = useState("")
  const [feats, setFeats] = useState([])

  const filterFeatsBy = (feats, trait, level) => {
    return feats.filter((feat) => {
      let hasTrait =
        !trait ||
        feat.traits
          .map((t) => t.toLowerCase())
          .includes(trait.toLowerCase())

      let isLevel = Number(feat.level) <= Number(level)

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
        for (let trait of feat.traits)
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
    let [type, level] = featKey.split("_")
    // Filter to correct feat list
    filteredFeats = filterFeatsBy(filteredFeats, getFeatTag(type), level)

    // Additionally filter by query if present
    if (query) filteredFeats = filterFeatsByQuery()

    setFeats(
      filteredFeats.sort((a, b) =>
        Number(a.level) < Number(b.level) ? -1 : 1
      )
    )
  }, [
    query,
    character.ancestry.name,
    character.class.name,
    featKey,
    filterFeatsByQuery,
    getFeatTag,
  ])

  return (
    <div style={{ position: "relative" }}>
      <Search onChange={setQuery} query={query} />
      <div className="c-feat-selection__row">
        <div className="col col-2">Name</div>
        <div
          className="col col-1 text-center"
          style={{ maxWidth: "80px" }}
        >
          Level
        </div>
        <div className="col col-2">Traits</div>
        <div className="col col-6 pl-4">Description</div>
        <div className="col col-2">Source</div>
      </div>
      {feats.length > 0 &&
        feats.map((feat) => {
          return (
            <div className="c-feat-selection__row" key={feat.name}>
              <div className="col col-2" style={{ position: "relative" }}>
                <button
                  onClick={() => selectFeat(feat)}
                  className="c-feat-selection__add-button"
                  aria-label={"Select Feat " + feat.name}
                >
                  <i className="fas fa-plus fa"></i>
                </button>
                <span
                  style={{ display: "inline-block", marginLeft: "2rem" }}
                >
                  {feat.name}
                </span>
              </div>
              <div
                className="col col-1 text-center"
                style={{ maxWidth: "80px" }}
              >
                <small>{feat.level}</small>
              </div>
              <div
                className="col col-2"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {feat.traits.map((t) => (
                  <small className="c-feat-selection__tag" key={t}>
                    {t}
                  </small>
                ))}
              </div>
              <div className="col col-6 pl-4 pr-2">
                <small>
                  <p dangerouslySetInnerHTML={{ __html: feat.desc }}></p>
                  {feat.prerequisites.length > 1 && (
                    <p className="mt-1 u-color-n6">
                      <b>Prerequisites:</b> {feat.prerequisites}
                    </p>
                  )}
                </small>
              </div>
              <div className="col col-2">
                <small>{feat.source}</small>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default FeatSelection

const Search = ({ onChange, query }) => {
  return (
    <label
      className=""
      style={{
        position: "fixed",
        display: "block",
        right: "10rem",
        zIndex: "999",
        marginTop: "-3rem",
      }}
    >
      Search by name or tag
      <input
        style={{ marginLeft: ".5rem", fontSize: "1rem" }}
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
