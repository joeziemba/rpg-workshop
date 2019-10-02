import React from "react";
import { PF2CharacterContext } from "../../context";
import Statbox from "./Statbox";
import TEMLbuttons from "./TEMLbuttons";
import ClassSelect from "../_modals/ClassSelect";

class CharacterBasics extends React.Component {
  state = { showClassSelect: true };

  calculateAC(character) {
    let ac = 10;
    ac += character.abilityMods.Dexterity;
    return ac;
  }

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
      <div id="CharacterBasics" className="row">
        {/* <ClassSelect
          show={this.state.showClassSelect}
          selectClass={selectClass}
          closeFunction={this.toggleClassSelect.bind(this)}
        /> */}
        {/* Dropdown Menus */}
        <div className="col-md-4 col-lg-4">
          <p>
            <input
              aria-label="Character Name"
              id="character-name"
              value={character.name}
              className="pf-input"
              placeholder="Character Name"
              onChange={this.props.updateName}
            />
          </p>
          <p>
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
          </p>
          <p>
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
          </p>
          <p>
            <select
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
            {/* Choose Class{" "}
            <button onClick={this.toggleClassSelect.bind(this)}>+</button> */}
          </p>
        </div>
        {/* Basic Stats */}
        <div className="col-sm-6 col-md-4">
          <h2 className="c-gray-block-heading mb-3">Stats</h2>
          <div className="ml-4 ml-sm-0">
            <div className="mb-2">
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
            <div className="mb-2 clearfix">
              <Statbox
                className="float-left"
                stat={this.calculateAC(character)}
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
            </div>
            <div className="mb-2 clearfix">
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
          </div>
        </div>
        {/* Saves */}
        <div className="col-sm-6 col-md-4 col-lg-4">
          <h2 className="c-gray-block-heading mb-3">Saves</h2>
          <div className="ml-4 ml-sm-0">
            <div className="mb-2 clearfix">
              <Statbox
                className="float-left"
                large
                stat={
                  character.class.saves.reflex +
                  character.abilityMods.Dexterity +
                  character.level
                }
                title="REF"
              />
              <span className="float-left m-2">=</span>
              <Statbox
                className="float-left"
                stat={character.abilityMods.Dexterity}
                title="Dex"
              />
              <span className="float-left m-2">+</span>
              <Statbox
                className="float-left"
                stat={
                  character.class.saves.reflex > 0
                    ? character.class.saves.reflex + character.level
                    : 0
                }
                title="PROF"
              />
              <div className="float-left ml-2">
                <TEMLbuttons
                  skill={{
                    proficiency: character.class.saves.reflex,
                    id: "Reflex",
                    name: "Reflex"
                  }}
                  disabled
                />
              </div>
            </div>
            <div className="mb-2 clearfix">
              <Statbox
                className="float-left"
                large
                stat={
                  character.class.saves.fortitude +
                  character.abilityMods.Constitution
                }
                title="Fort"
              />
              <span className="float-left m-2">=</span>
              <Statbox
                className="float-left"
                stat={character.abilityMods.Constitution}
                title="Con"
              />
              <span className="float-left m-2">+</span>
              <Statbox
                className="float-left"
                stat={character.class.saves.fortitude}
                title="PROF"
              />
              <div className="float-left ml-2">
                <TEMLbuttons
                  skill={{
                    proficiency: character.class.saves.fortitude,
                    id: "Fortitude",
                    name: "Fortitude"
                  }}
                  disabled
                />
              </div>
            </div>
            <div className="mb-2 clearfix">
              <Statbox
                className="float-left"
                large
                stat={character.class.saves.will + character.abilityMods.Wisdom}
                title="Will"
              />
              <span className="float-left m-2">=</span>
              <Statbox
                className="float-left"
                stat={character.abilityMods.Wisdom}
                title="Wis"
              />
              <span className="float-left m-2">+</span>
              <Statbox
                className="float-left"
                stat={character.class.saves.will}
                title="PROF"
              />
              <div className="float-left ml-2">
                <TEMLbuttons
                  skill={{
                    proficiency: character.class.saves.will,
                    id: "Will",
                    name: "Will"
                  }}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CharacterBasics.contextType = PF2CharacterContext;

export default CharacterBasics;
