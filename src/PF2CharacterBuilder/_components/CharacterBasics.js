import React from "react";
import { PF2CharacterContext } from "../../context";
import Statbox from "./Statbox";
import TEMLbuttons from "./TEMLbuttons";
import _ from "lodash";

const CharacterBasics = ({ selectAncestry, selectBackground, selectClass }) => {
  function calculateAC(character) {
    let ac = 10;
    ac += character.abilityMods.Dexterity;
    return ac;
  }
  return (
    <PF2CharacterContext.Consumer>
      {({ character, Classes, Backgrounds, Ancestries }) => {
        return (
          <div id="CharacterBasics" className="row">
            {/* Dropdown Menus */}
            <div className="col-md-4 col-lg-4">
              <p>
                <input
                  value={character.name}
                  className="pf-input"
                  placeholder="Character Name"
                />
              </p>
              <p>
                <select
                  onChange={selectAncestry}
                  value={character.ancestry.name}
                  className="pf-select"
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
                  value={character.background.id}
                  className="pf-select"
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
                  value={character.class.name}
                  className="pf-select"
                >
                  <option value="">Choose Class</option>
                  {Object.keys(Classes).map(class_name => (
                    <option value={class_name} key={class_name}>
                      {class_name}
                    </option>
                  ))}
                </select>
              </p>
            </div>
            {/* Basic Stats */}
            <div className="col-sm-6 col-md-4">
              <div className="ml-lg-3 ml-md-0 ml-sm-4 mt-2 ml-xs-5">
                <div className="mb-2">
                  <Statbox stat={character.hitPoints} title="HP" large />
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
                </div>
                <div className="mb-2 clearfix">
                  <Statbox
                    className="float-left"
                    large
                    stat={
                      character.perceptionProficiency +
                      character.abilityMods.Wisdom
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
                    stat={character.perceptionProficiency}
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
              {!_.isEmpty(character.class) && (
                <div className="ml-lg-2 mt-2">
                  <div className="mb-2 clearfix">
                    <Statbox
                      className="float-left"
                      large
                      stat={
                        character.class.saves.reflex +
                        character.abilityMods.Dexterity
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
                      stat={character.class.saves.reflex}
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
                      stat={
                        character.class.saves.will +
                        character.abilityMods.Wisdom
                      }
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
              )}
            </div>
          </div>
        );
      }}
    </PF2CharacterContext.Consumer>
  );
};

export default CharacterBasics;
