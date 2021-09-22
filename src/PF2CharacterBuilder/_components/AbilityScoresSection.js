import React from "react"
import _ from "lodash"
import { Abilities } from "../../_data/abilities"
import { Card } from "./Card"
import { Select } from "./Select"
import { SubHeading } from "./SubHeading"

const AbilityScoreSection = ({ character, boostAbility }) => {
  function freeAbilityOptions(source) {
    let { abilityBoosts } = character
    let freebies = abilityBoosts.filter(
      (boost) => boost.type === Abilities.FREE && boost.source === source
    )
    return freebies.map((boost, i) => {
      let boostsFromSameSource = abilityBoosts.filter(
        (b) => b.source === boost.source && b.id !== boost.id
      )
      let excludedAbilities = boostsFromSameSource.map((b) => b.ability)
      if (boost.exclude) excludedAbilities.push(...boost.exclude)

      return (
        <div key={boost.id} className="flex-1 mx-2 lg:mx-4">
          <Select
            onChange={boostAbility}
            name={boost.id}
            aria-label={"Level 1 Ability Boost: " + i}
            value={boost.ability}
            isDefault={boost.ability == "Free"}
            center
          >
            <option value="FREE">Free</option>
            {Object.keys(Abilities).map((ability) => {
              if (ability !== "FREE") {
                return excludedAbilities.includes(
                  Abilities[ability]
                ) ? null : (
                  <option key={ability} value={Abilities[ability]}>
                    {" "}
                    {ability}
                  </option>
                )
              }
              return null
            })}
          </Select>
        </div>
      )
    })
  }

  function renderAbilities() {
    return Object.keys(Abilities).map((abilityKey) => {
      if (abilityKey !== "FREE") {
        let keyAbility = character.abilityBoosts.find(
          (b) => b.source === character.class.name
        )
        let isKey =
          keyAbility && keyAbility.ability === Abilities[abilityKey]
        return (
          <div
            key={abilityKey}
            className={`flex-1 pf-ability ${
              isKey ? "pf-ability--key" : ""
            }`}
          >
            <span className="pf-ability__name">{abilityKey}</span>
            <span
              className="pf-ability__score"
              id={abilityKey.toLowerCase() + "-mod"}
            >
              {character.abilityMods[Abilities[abilityKey]] < 0 ? "" : "+"}
              {character.abilityMods[Abilities[abilityKey]]}
            </span>
            <span
              className="pf-ability__mod"
              id={abilityKey.toLowerCase() + "-score"}
            >
              {character.abilities[Abilities[abilityKey]]}
            </span>
          </div>
        )
      }
      return null
    })
  }

  return (
    <Card title="Abilities">
      <div className="flex-1 w-full flex p-4">{renderAbilities()}</div>

      <div className="">
        <SubHeading>Level 1 Boosts</SubHeading>
        <div className="flex">{freeAbilityOptions("Level_1")}</div>
      </div>
      <div className="">
        <SubHeading>
          Ancestry Boosts{" "}
          {character.ancestry.name && " - " + character.ancestry.name}
        </SubHeading>
        <div className="flex">
          {_.isEmpty(character.ancestry) ? (
            <p className="flex-1 u-placeholder-text my-2">
              choose an ancestry above
            </p>
          ) : (
            freeAbilityOptions(character.ancestry.name)
          )}
        </div>
      </div>
      <div className="">
        <SubHeading>
          Background Boosts{" "}
          {character.background.name && " - " + character.background.name}
        </SubHeading>
        <div className="flex">
          {!character.background.name ? (
            <div className="flex-1 u-placeholder-text my-2">
              choose a background above
            </div>
          ) : (
            freeAbilityOptions(character.background.id)
          )}
        </div>
      </div>
      {character.class.name &&
        character.class.abilityBoosts[0].ability === Abilities.FREE && (
          <div>
            <SubHeading>
              Class Boost{" "}
              {character.class.name && " - " + character.class.name}
            </SubHeading>
            <div className="flex">
              {!character.class.name ? (
                <div className="flex-1 u-placeholder-text my-2">
                  choose a class above
                </div>
              ) : (
                freeAbilityOptions(character.class.name)
              )}
            </div>
          </div>
        )}
      {character.level >= 5 && (
        <div>
          <SubHeading>Level 5 Boosts</SubHeading>
          <div className="row mb-2">{freeAbilityOptions("Level_5")}</div>
        </div>
      )}
      {character.level >= 10 && (
        <div>
          <SubHeading>Level 10 Boosts</SubHeading>
          <div className="row mb-2">{freeAbilityOptions("Level_10")}</div>
        </div>
      )}
      {character.level >= 15 && (
        <div>
          <SubHeading>Level 15 Boosts</SubHeading>
          <div className="row mb-2">{freeAbilityOptions("Level_15")}</div>
        </div>
      )}
      {character.level >= 20 && (
        <div>
          <SubHeading>Level 20 Boosts</SubHeading>
          <div className="row mb-2">{freeAbilityOptions("Level_20")}</div>
        </div>
      )}
    </Card>
  )
}

export default AbilityScoreSection
