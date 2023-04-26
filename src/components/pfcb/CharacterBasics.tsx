import React, { useContext } from "react"
import { PF2CharacterContext, useCharacterBuilderContext } from "context"
import { SaveRow } from "./SaveRow"
import Statbox from "./Statbox"
import TEMLbuttons from "./TEMLbuttons"
import { Card } from "./Card"
import { Select } from "./Select"
import { AncestryKey } from "data/ancestries"
import { character } from "data/character"

export const CharacterBasics = () => {
  const {
    Classes,
    Backgrounds,
    Ancestries,
    selectAncestry,
    selectBackground,
    selectClass,
    character,
    setLevel,
    updateName,
  } = useCharacterBuilderContext()

  return (
    <React.Fragment>
      <div id="CharacterBasics" className="flex flex-wrap justify-between">
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
                onChange={updateName}
              />
            </label>

            <label className="px-4">
              <Select
                ariaLabel="Ancestry"
                id="ancestry-select"
                isDefault={!character.ancestry?.name}
                name="ancestry-select"
                onChange={(e) =>
                  selectAncestry(e.target.value as AncestryKey)
                }
                value={character.ancestry?.name || ""}
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
                ariaLabel="Background"
                isDefault={!character.background?.name}
                id="background-select"
                name="background-select"
                onChange={selectBackground}
                value={character.background?.id || ""}
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
                  ariaLabel="Class"
                  id="class-select"
                  isDefault={!character.class?.name}
                  name="class-select"
                  onChange={selectClass}
                  value={character.class?.name || ""}
                >
                  <option value="">Choose Class</option>
                  {Object.keys(Classes).map((class_name) => (
                    <option value={class_name} key={class_name}>
                      {class_name}
                    </option>
                  ))}
                </Select>
              </label>

              <label className="flex-1 pr-4 pl-2">
                <Select
                  ariaLabel="Level"
                  id="level-select"
                  name="level-select"
                  onChange={setLevel}
                  value={character.level.toString()}
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
          <Card title="Stats">
            <div className="flex-initial flex items-center">
              <div className="flex-1">
                <Statbox
                  stat={character.level.toString()}
                  title="Level"
                  large
                />
              </div>
              <div className="flex-1">
                <Statbox
                  stat={character.hitPoints.toString()}
                  title="HP"
                  large
                />
              </div>
              <div className="flex-1">
                <Statbox
                  stat={character.speed.toString()}
                  title="Speed"
                  large
                />
              </div>
            </div>

            <div className="flex-initial flex items-center">
              <div className="flex-1">
                <Statbox
                  large
                  stat={(
                    character.perceptionProficiency +
                    character.abilityMods.Wisdom +
                    character.level
                  ).toString()}
                  title="PCPT"
                />
              </div>
              <div className="flex-1 flex items-center">
                <span className="flex-none mr-2">=</span>
                <Statbox
                  className="flex-1"
                  stat={character.abilityMods.Wisdom.toString()}
                  title="WIS"
                />
                <span className="flex-none text-center mx-2">+</span>
                <Statbox
                  className="flex-1"
                  stat={character.perceptionProficiency + character.level}
                  title="PROF"
                />
              </div>
              <div className="flex-1 flex justify-around">
                <TEMLbuttons
                  proficiency={character.perceptionProficiency}
                />
              </div>
            </div>

            <AC />
          </Card>
        </div>
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

const AC = () => {
  const { character } = useCharacterBuilderContext()
  function calculateAC(character: character) {
    let ac = 10
    ac += character.abilityMods.Dexterity
    // TODO this will need to be refactored to enable proficiencies with armor

    if (
      character.class?.defenses &&
      character.class.defenses.unarmored > 0
    ) {
      ac += character.class.defenses.unarmored
      ac += character.level
    }
    return ac
  }
  const hasClass = !!character.class?.name
  return (
    <div className="flex-initial flex items-center">
      <div className="flex-1">
        <Statbox
          stat={calculateAC(character).toString()}
          title="AC"
          large
        />
      </div>
      <div className="flex-1 flex-grow-2 flex items-center relative mr-2">
        <span className="mr-2">=</span>
        <Statbox className="flex-1" stat={"10"} title="Base" />
        <span className="mx-2">+</span>
        <Statbox
          className="flex-1"
          stat={character.abilityMods.Dexterity}
          title="DEX"
        />
        <span className="mx-2">+</span>
        <Statbox className="flex-1" stat={"0"} title="Item" />
        <span className="mx-2">+</span>
        <Statbox
          className="flex-1"
          stat={
            character.class?.defenses.unarmored &&
            character.class?.defenses.unarmored > 0
              ? character.class?.defenses.unarmored + character.level
              : "0"
          }
          title={
            character.class?.defenses.unarmored &&
            character.class.defenses.unarmored > 0
              ? "Prof*"
              : "Prof"
          }
        />

        {character.class?.defenses.unarmored &&
        character.class.defenses.unarmored > 0 ? (
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
      </div>
    </div>
  )
}
