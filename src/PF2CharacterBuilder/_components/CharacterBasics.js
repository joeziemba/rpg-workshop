import React from "react"
import { PF2CharacterContext } from "../../context"
import { SaveRow } from "./SaveRow"
import Statbox from "./Statbox"
import TEMLbuttons from "./TEMLbuttons"
import { Card } from "./Card"
import { Select } from "./Select"

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
        <div
          id="CharacterBasics"
          className="flex flex-wrap justify-between"
        >
          <div className="flex-full md:flex-1">
            <Card title="Details">
              <label className="px-4">
                <input
                  aria-label="Character Name"
                  id="character-name"
                  value={character.name}
                  className={`bg-gray-200 p-2 border-gray-500 w-full rounded-md text-lg 
                    ${!character.name && " text-center"}`}
                  placeholder="Character Name"
                  onChange={this.props.updateName}
                />
              </label>

              <label className="px-4">
                <Select
                  id="ancestry-select"
                  onChange={selectAncestry}
                  value={character.ancestry.name || ""}
                  aria-label="Ancestry"
                  isDefault={!character.ancestry.name}
                >
                  <option value="">Choose Ancestry</option>
                  {Object.keys(Ancestries).map((ancestry) => (
                    <option value={ancestry} key={ancestry}>
                      {ancestry}
                    </option>
                  ))}
                </Select>
              </label>

              <label className="px-4">
                <Select
                  onChange={selectBackground}
                  value={character.background.id || ""}
                  aria-label="Background"
                  isDefault={!character.background.name}
                >
                  <option value="">Choose Background</option>
                  {Object.keys(Backgrounds).map((background) => (
                    <option value={background} key={background}>
                      {Backgrounds[background].name}
                    </option>
                  ))}
                </Select>
              </label>

              <div className="flex">
                <label className="flex-1 flex-grow-2 pl-4 pr-2">
                  <Select
                    id="classSelect"
                    onChange={selectClass}
                    value={character.class.name || ""}
                    aria-label="Class"
                    isDefault={!character.class.name}
                  >
                    <option value="FREE">Choose Class</option>
                    {Object.keys(Classes).map((class_name) => (
                      <option value={class_name} key={class_name}>
                        {class_name}
                      </option>
                    ))}
                  </Select>
                </label>

                <label className="flex-1 pr-4 pl-2">
                  <Select
                    id="levelSelect"
                    onChange={setLevel}
                    value={character.level}
                    aria-label="Level"
                  >
                    {[...Array(21).keys()].slice(1).map((x, i) => (
                      <option value={i + 1} key={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>
            </Card>
          </div>
          <div className="flex-full md:flex-1">
            {/* Basic Stats */}
            <Card title="Stats">
              <div className="flex-1 flex items-center">
                <div className="flex-1">
                  <Statbox stat={character.level} title="Level" large />
                </div>
                <div className="flex-1">
                  <Statbox stat={character.hitPoints} title="HP" large />
                </div>
                <div className="flex-1">
                  <Statbox stat={character.speed} title="Speed" large />
                </div>
              </div>

              <div className="flex-1 flex items-center">
                <div className="flex-1">
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
                <div className="flex-1 flex items-center">
                  <span className="flex-none mr-2">=</span>
                  <Statbox
                    className="flex-1"
                    stat={character.abilityMods.Wisdom}
                    title="WIS"
                  />
                  <span className="flex-none text-center mx-2">+</span>
                  <Statbox
                    className="flex-1"
                    stat={
                      character.perceptionProficiency + character.level
                    }
                    title="PROF"
                  />
                </div>
                <div className="flex-1 flex justify-around">
                  <TEMLbuttons
                    skill={{
                      proficiency: character.perceptionProficiency,
                      id: "Perception",
                      name: "Perception",
                    }}
                  />
                </div>
              </div>

              <AC character={character} />
            </Card>
          </div>
          {/* Saves */}
          <div className="flex-full md:flex-1">
            <Card title="Saves">
              <SaveRow saveType="fortitude" character={character} />
              <SaveRow saveType="reflex" character={character} />
              <SaveRow saveType="will" character={character} />
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

CharacterBasics.contextType = PF2CharacterContext

export default CharacterBasics

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
    <div className="flex-1 flex items-center">
      <div className="flex-1">
        <Statbox stat={calculateAC(character)} title="AC" large />
      </div>
      <div className="flex-1 flex-grow-2 flex items-center relative mr-4">
        <span className="mr-2">=</span>
        <Statbox className="flex-1" stat={10} title="Base" />
        <span className="mx-2">+</span>
        <Statbox
          className="flex-1"
          stat={character.abilityMods.Dexterity}
          title="DEX"
        />
        <span className="mx-2">+</span>
        <Statbox className="flex-1" stat={0} title="Item" />
        <span className="mx-2">+</span>
        <Statbox
          className="flex-1"
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
