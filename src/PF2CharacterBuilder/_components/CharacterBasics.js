import React from "react";
import { PF2CharacterContext } from "../../context";
import Statbox from "./Statbox";
import TEMLbuttons from "./TEMLbuttons";
import ClassSelect from "../_modals/ClassSelect";
import { Abilities } from "../../_data/abilities";

class CharacterBasics extends React.Component {
  state = { showClassSelect: true };

  toggleClassSelect() {
    this.setState({ showClassSelect: !this.state.showClassSelect });
  }

  render() {
    let {
      selectAncestry,
      selectBackground,
      selectClass,
      character
    } = this.props;
    let { Classes, Backgrounds, Ancestries } = this.context;

    return (
      <React.Fragment>
        <div id="CharacterBasics" className="row">
          {/* Dropdown Menus */}
          <div className="col-12 col-lg-4">
            <div className="pf-section">
              <h2 className="pf-section__heading">Details</h2>
              <div className="pf-section__body pf-section__body--pad">
                <div>
                  <label className="pf-select__label">
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
                  <label className="pf-select__label">
                    Ancestry
                    <select
                      onChange={selectAncestry}
                      value={character.ancestry.name || ""}
                      className="pf-select"
                      aria-label="Ancestry"
                    >
                      <option value="">Choose Ancestry</option>
                      {Object.keys(Ancestries).map(ancestry => (
                        <option value={ancestry} key={ancestry}>
                          {ancestry}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <label className="pf-select__label">
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
                      {Object.keys(Backgrounds).map(background => (
                        <option value={background} key={background}>
                          {Backgrounds[background].name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <label className="pf-select__label" htmlFor="classSelect">
                    Class
                    <select
                      id="classSelect"
                      onChange={selectClass}
                      value={character.class.name || ""}
                      className="pf-select"
                      aria-label="Class"
                    >
                      <option value="">Choose Class</option>
                      {Object.keys(Classes).map(class_name => (
                        <option value={class_name} key={class_name}>
                          {class_name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Basic Stats */}
          <div className="col-md-6 col-lg-4">
            <div className="pf-section">
              <h2 className="pf-section__heading">Stats</h2>
              <div className="pf-section__body pf-section__body--pad">
                <div className="mb-3">
                  <Statbox stat={character.level} title="Level" large />
                  <Statbox
                    stat={character.hitPoints}
                    title="HP"
                    large
                    className="ml-4"
                  />
                  <Statbox
                    stat={character.speed}
                    title="Speed"
                    large
                    className="ml-4"
                  />
                </div>
                <div className="mb-3 clearfix">
                  <Statbox
                    className="float-left"
                    large
                    stat={
                      character.perceptionProficiency +
                      character.abilityMods.Wisdom +
                      character.level
                    }
                    title="PCPT"
                  />
                  <span className="float-left m-2">=</span>
                  <Statbox
                    className="float-left"
                    stat={character.abilityMods.Wisdom}
                    title="WIS"
                  />
                  <span className="float-left m-2">+</span>
                  <Statbox
                    className="float-left"
                    stat={character.perceptionProficiency + character.level}
                    title="PROF"
                  />
                  <div className="float-left ml-2">
                    <TEMLbuttons
                      skill={{
                        proficiency: character.perceptionProficiency,
                        id: "Perception",
                        name: "Perception"
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
                <Saves saveType="Fortitude" character={character} />
                <Saves saveType="Reflex" character={character} />
                <Saves saveType="Will" character={character} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CharacterBasics.contextType = PF2CharacterContext;

export default CharacterBasics;

const Saves = ({ character, saveType }) => {
  let abilityAbbreviation, modifier, saveName;

  switch (saveType) {
    case "Will": {
      abilityAbbreviation = "WIS";
      modifier = character.abilityMods.Wisdom;
      saveName = "WILL";
      break;
    }
    case "Fortitude": {
      abilityAbbreviation = "CON";
      modifier = character.abilityMods.Constitution;
      saveName = "FORT";
      break;
    }
    case "Reflex": {
      abilityAbbreviation = "DEX";
      modifier = character.abilityMods.Dexterity;
      saveName = "REF";
      break;
    }
    default:
      break;
  }

  let proficiencyBonus = 0;

  if (character.class.saves[saveType] > 0) {
    proficiencyBonus += character.class.saves[saveType] + character.level;
  }

  let totalBonus = proficiencyBonus + modifier;
  return (
    <div className="mb-3 clearfix">
      <Statbox
        className="float-left"
        large
        stat={totalBonus}
        title={saveName}
      />
      <span className="float-left m-2">=</span>
      <Statbox
        className="float-left"
        stat={modifier}
        title={abilityAbbreviation}
      />
      <span className="float-left m-2">+</span>
      <Statbox className="float-left" stat={proficiencyBonus} title="PROF" />
      <div className="float-left ml-2">
        <TEMLbuttons
          skill={{
            proficiency: character.class.saves[saveType],
            id: saveName,
            name: saveName
          }}
          disabled
        />
      </div>
    </div>
  );
};

const AC = ({ character }) => {
  function calculateAC(character) {
    let ac = 10;
    ac += character.abilityMods.Dexterity;
    // TODO this eWill: need to be refactored to enable proficiencies with armor
    if (character.class.defenses.unarmored > 0) {
      ac += character.class.defenses.unarmored;
      ac += character.level;
    }
    return ac;
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="mb-3 clearfix">
        <Statbox
          className="float-left"
          stat={calculateAC(character)}
          title="AC"
          large
        />
        <span className="float-left m-2">=</span>
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
            character.class.defenses.unarmored > 0
              ? character.class.defenses.unarmored + 1
              : 0
          }
          title={character.class.defenses.unarmored > 0 ? "Prof*" : "Prof"}
        />
      </div>
      {character.class.defenses.unarmored > 0 ? (
        <div
          style={{
            position: "absolute",
            left: "3.6rem",
            bottom: "-.4rem",
            fontSize: ".8rem",
            color: "#505050"
          }}
        >
          * Trained in Unarmored Defense
        </div>
      ) : null}
    </div>
  );
};
