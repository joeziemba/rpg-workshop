import React from "react";
import _ from "lodash";
import { Abilities } from "../../_data/abilities";

const AbilityScoreSection = ({ character, boostAbility }) => {
  function freeAbilityOptions(source) {
    let { abilityBoosts } = character;
    let freebies = abilityBoosts.filter(
      (boost) => boost.type === Abilities.FREE && boost.source === source
    );
    return freebies.map((boost, i) => {
      let boostsFromSameSource = abilityBoosts.filter(
        (b) => b.source === boost.source && b.id !== boost.id
      );
      let excludedAbilities = boostsFromSameSource.map((b) => b.ability);
      if (boost.exclude) excludedAbilities.push(...boost.exclude);

      return (
        <div key={boost.id} className="col">
          <select
            key={i}
            onChange={boostAbility}
            name={boost.id}
            className="text-center float-left pf-select pf-select--float pf-select--center"
            aria-label={"Level 1 Ability Boost: " + i}
            value={boost.ability}
          >
            <option value="FREE"></option>
            {Object.keys(Abilities).map((ability) => {
              if (ability !== "FREE") {
                return excludedAbilities.includes(
                  Abilities[ability]
                ) ? null : (
                  <option key={ability} value={Abilities[ability]}>
                    {ability}
                  </option>
                );
              }
              return null;
            })}
          </select>
        </div>
      );
    });
  }

  function renderAbilities() {
    return Object.keys(Abilities).map((abilityKey) => {
      if (abilityKey !== "FREE") {
        let keyAbility = character.abilityBoosts.find(
          (b) => b.source === character.class.name
        );
        let isKey =
          keyAbility && keyAbility.ability === Abilities[abilityKey];
        return (
          <div
            key={abilityKey}
            className={`pf-ability ${isKey ? "pf-ability--key" : ""}`}
          >
            <span className="pf-ability__name">{abilityKey}</span>
            <span className="pf-ability__score">
              {character.abilityMods[Abilities[abilityKey]] < 0
                ? " "
                : " +"}
              {character.abilityMods[Abilities[abilityKey]]}
            </span>
            <span className="pf-ability__mod">
              {character.abilities[Abilities[abilityKey]]}
            </span>
          </div>
        );
      }
      return null;
    });
  }

  return (
    <div className="pf-section">
      <h2 className="pf-section__heading">Ability Scores</h2>
      <div className="pf-section__body pf-section__body--pad">
        <div className="clearfix">{renderAbilities()}</div>

        <div className="row">
          <div className="col-12">
            <h3 className="c-gray-block-heading">Level 1 Boosts</h3>
            <div className="row">{freeAbilityOptions("Level_1")}</div>
            <React.Fragment>
              <h3 className="c-gray-block-heading mt-2">
                Ancestry Boosts{" "}
                {character.ancestry.name &&
                  " - " + character.ancestry.name}
              </h3>
              <div className="row">
                {_.isEmpty(character.ancestry) ? (
                  <p className="col u-placeholder-text">
                    choose an ancestry above
                  </p>
                ) : (
                  freeAbilityOptions(character.ancestry.name)
                )}
              </div>
            </React.Fragment>
            <React.Fragment>
              <h3 className="c-gray-block-heading mt-2">
                Background Boosts{" "}
                {character.background.name &&
                  " - " + character.background.name}
              </h3>
              <div className="row">
                {_.isEmpty(character.background) ? (
                  <div className="col u-placeholder-text mb-4">
                    choose a background above
                  </div>
                ) : (
                  freeAbilityOptions(character.background.id)
                )}
              </div>
            </React.Fragment>
            {character.class.name &&
              character.class.abilityBoosts[0].ability ===
                Abilities.FREE && (
                <React.Fragment>
                  <h3 className="c-gray-block-heading mt-2 mb-2">
                    Class Boost{" "}
                    {character.class.name && " - " + character.class.name}
                  </h3>
                  <div className="row mb-2">
                    {!character.class.name ? (
                      <div className="col u-placeholder-text mb-3">
                        choose a class above
                      </div>
                    ) : (
                      freeAbilityOptions(character.class.name)
                    )}
                  </div>
                </React.Fragment>
              )}
            {character.level >= 5 && (
              <>
                <h3 className="c-gray-block-heading mt-2 mb-2">
                  Level 5 Boosts
                </h3>
                <div className="row mb-2">
                  {freeAbilityOptions("Level_5")}
                </div>
              </>
            )}
            {character.level >= 10 && (
              <>
                <h3 className="c-gray-block-heading mt-2 mb-2">
                  Level 10 Boosts
                </h3>
                <div className="row mb-2">
                  {freeAbilityOptions("Level_10")}
                </div>
              </>
            )}
            {character.level >= 15 && (
              <>
                <h3 className="c-gray-block-heading mt-2 mb-2">
                  Level 15 Boosts
                </h3>
                <div className="row mb-2">
                  {freeAbilityOptions("Level_15")}
                </div>
              </>
            )}
            {character.level >= 20 && (
              <>
                <h3 className="c-gray-block-heading mt-2 mb-2">
                  Level 20 Boosts
                </h3>
                <div className="row mb-2">
                  {freeAbilityOptions("Level_20")}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbilityScoreSection;
