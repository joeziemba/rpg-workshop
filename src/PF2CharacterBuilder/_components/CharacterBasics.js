import React from "react"
import { PF2CharacterContext } from "../../context"
import Statbox from "./Statbox"
import TEMLbuttons from "./TEMLbuttons"

class CharacterBasics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showClassSelect: true,
    }
  }
  toggleClassSelect() {
    this.setState({ showClassSelect: !this.state.showClassSelect })
  }

  render() {
    let {
      selectAncestry,
      selectBackground,
      selectClass,
      character,
      setLevel,
    } = this.props
    let { Classes, Backgrounds, Ancestries } = this.context

    return (
      <React.Fragment>
        <div id="CharacterBasics" className="row">
          {/* Dropdown Menus */}
          <div className="col-12 col-lg-4">
            <div className="pf-section">
              <h2 className="pf-section__heading">Details</h2>
              <div className="pf-section__body pf-section__body--pad">
                <div>
                  <label className="pf-select__label  mb-2">
                    Name
                    <input
                      aria-label="Character Name"
                      id="character-name"
                      value={character.name}
                      className="pf-input"
                      placeholder="Character Name"
                      onChange={this.props.updateName}
                    />
                  </label>
                </div>
                <div>
                  <label className="pf-select__label mb-2">
                    Ancestry
                    <select
                      onChange={selectAncestry}
                      value={character.ancestry.name || ""}
                      className="pf-select"
                      aria-label="Ancestry"
                    >
                      <option value="">Choose Ancestry</option>
                      {Object.keys(Ancestries).map((ancestry) => (
                        <option value={ancestry} key={ancestry}>
                          {ancestry}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <label className="pf-select__label mb-2">
                    Background
                    <select
                      onChange={selectBackground}
                      value={character.background.id || ""}
                      className="pf-select"
                      aria-label="Background"
                    >
                      <option className="pf-select__default" value="">
                        Choose Background
                      </option>
                      {Object.keys(Backgrounds).map((background) => (
                        <option value={background} key={background}>
                          {Backgrounds[background].name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="row">
                  <div className="col-8">
                    <label
                      className="pf-select__label "
                      htmlFor="classSelect"
                    >
                      Class
                      <select
                        id="classSelect"
                        onChange={selectClass}
                        value={character.class.name || ""}
                        className="pf-select mb-0"
                        aria-label="Class"
                      >
                        <option value="">Choose Class</option>
                        {Object.keys(Classes).map((class_name) => (
                          <option value={class_name} key={class_name}>
                            {class_name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="col-4">
                    <label
                      className="pf-select__label"
                      htmlFor="levelSelect"
                    >
                      Level
                      <select
                        id="levelSelect"
                        onChange={setLevel}
                        value={character.level}
                        className="pf-select mb-0"
                        aria-label="Class"
                      >
                        {[...Array(21).keys()].slice(1).map((x, i) => (
                          <option value={i + 1} key={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Basic Stats */}
          <div className="col-md-6 col-lg-4">
            <div className="pf-section">
              <h2 className="pf-section__heading">Stats</h2>
              <div className="pf-section__body pf-section__body--pad">
                <div className="row mb-4">
                  <div className="col">
                    <Statbox stat={character.level} title="Level" large />
                  </div>
                  <div className="col">
                    <Statbox stat={character.hitPoints} title="HP" large />
                  </div>
                  <div className="col">
                    <Statbox stat={character.speed} title="Speed" large />
                  </div>
                </div>
                <div className="mb-4 row">
                  <div className="col">
                    <Statbox
                      large
                      stat={
                        character.perceptionProficiency +
                        character.abilityMods.Wisdom +
                        character.level
                      }
                      title="PCPT"
                    />
                  </div>
                  <div className="col">
                    <span className="float-left my-2 mr-2">=</span>
                    <Statbox
                      className="float-left"
                      stat={character.abilityMods.Wisdom}
                      title="WIS"
                    />
                    <span className="float-left m-2">+</span>
                    <Statbox
                      className="float-left"
                      stat={
                        character.perceptionProficiency + character.level
                      }
                      title="PROF"
                    />
                  </div>
                  <div className="col">
                    <TEMLbuttons
                      skill={{
                        proficiency: character.perceptionProficiency,
                        id: "Perception",
                        name: "Perception",
                      }}
                      disabled
                    />
                  </div>
                </div>
                <AC character={character} />
              </div>
            </div>
          </div>
          {/* Saves */}
          <div className="col-md-6 col-lg-4">
            <div className="pf-section">
              <h2 className="pf-section__heading">Saves</h2>
              <div className="pf-section__body pf-section__body--pad">
                <Saves saveType="fortitude" character={character} />
                <Saves saveType="reflex" character={character} />
                <Saves saveType="will" character={character} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

CharacterBasics.contextType = PF2CharacterContext

export default CharacterBasics

const Saves = ({ character, saveType }) => {
  let abilityAbbreviation, modifier, saveName

  switch (saveType) {
    case "will": {
      abilityAbbreviation = "WIS"
      modifier = character.abilityMods.Wisdom
      saveName = "WILL"
      break
    }
    case "fortitude": {
      abilityAbbreviation = "CON"
      modifier = character.abilityMods.Constitution
      saveName = "FORT"
      break
    }
    case "reflex": {
      abilityAbbreviation = "DEX"
      modifier = character.abilityMods.Dexterity
      saveName = "REF"
      break
    }
    default:
      break
  }

  let proficiencyBonus = 0

  if (character.saves[saveType] > 0) {
    proficiencyBonus += character.saves[saveType] + character.level
  }

  let totalBonus = proficiencyBonus + modifier
  return (
    <div className="mb-4 row">
      <div className="col col-4">
        <Statbox large stat={totalBonus} title={saveName} />
      </div>
      <div className="col-8">
        <span className="float-left my-2 mr-2">=</span>
        <Statbox
          className="float-left"
          stat={modifier}
          title={abilityAbbreviation}
        />
        <span className="float-left m-2">+</span>
        <Statbox
          className="float-left"
          stat={proficiencyBonus}
          title="PROF"
        />
        <div className="float-left ml-2">
          <TEMLbuttons
            skill={{
              proficiency: character.saves[saveType],
              id: saveName,
              name: saveName,
            }}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

const AC = ({ character }) => {
  function calculateAC(character) {
    let ac = 10
    ac += character.abilityMods.Dexterity
    // TODO this Will: need to be refactored to enable proficiencies with armor

    if (
      character.class.defenses &&
      character.class.defenses.unarmored > 0
    ) {
      ac += character.class.defenses.unarmored
      ac += character.level
    }
    return ac
  }
  let hasClass = !!character.class.name
  return (
    <div className="row">
      <div className="col col-4">
        <Statbox stat={calculateAC(character)} title="AC" large />
      </div>
      <div className="col col-8">
        <span className="float-left my-2 mr-2">=</span>
        <Statbox className="float-left" stat={10} title="Base" />
        <span className="float-left m-2">+</span>
        <Statbox
          className="float-left"
          stat={character.abilityMods.Dexterity}
          title="DEX"
        />
        <span className="float-left m-2">+</span>
        <Statbox className="float-left" stat={0} title="Item" />
        <span className="float-left m-2">+</span>
        <Statbox
          className="float-left"
          stat={
            hasClass && character.class.defenses.unarmored > 0
              ? character.class.defenses.unarmored + character.level
              : 0
          }
          title={
            hasClass && character.class.defenses.unarmored > 0
              ? "Prof*"
              : "Prof"
          }
        />

        {hasClass && character.class.defenses.unarmored > 0 ? (
          <div
            style={{
              position: "absolute",
              left: "1rem",
              bottom: "-1.25rem",
              fontSize: ".8rem",
              color: "#505050",
            }}
          >
            * Trained in Unarmored Defense
          </div>
        ) : null}
      </div>{" "}
    </div>
  )
}
