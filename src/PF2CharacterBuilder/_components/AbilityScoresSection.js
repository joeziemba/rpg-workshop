import React from "react"
import _ from "lodash"
import { Abilities } from "_data/abilities"
import { Card } from "./Card"
import { Select } from "./Select"
import { SubHeading } from "./SubHeading"
import { PlaceholderText } from "./PlaceholderText"

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
        <div key={boost.id} className="flex-1 mx-2 lg:mx-2">
          <Select
            onChange={boostAbility}
            name={boost.id}
            aria-label={"Level 1 Ability Boost: " + i}
            value={boost.ability}
            isDefault={boost.ability == "Free"}
            center
          >
            <option value="FREE"></option>
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
            className={`rounded-md flex-1 text-center fancy-font leading-none py-2 mx-1 ${
              isKey ? "bg-blue-100" : ""
            }`}
          >
            <span className="text-sm">{abilityKey}</span>
            <span
              className="block text-3xl"
              id={abilityKey.toLowerCase() + "-mod"}
            >
              {character.abilityMods[Abilities[abilityKey]] < 0 ? "" : "+"}
              {character.abilityMods[Abilities[abilityKey]]}
            </span>
            <span
              className="block text-lg"
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
    <Card title="Abilities" className="pb-4">
      <div className="flex-1 w-full flex p-2 border-b border-gray-300 bg-gray-100">
        {renderAbilities()}
      </div>

      <SubHeading>Level 1 Boosts</SubHeading>
      <div className="flex">{freeAbilityOptions("Level_1")}</div>

      <SubHeading>
        Ancestry Boosts{" "}
        {character.ancestry.name && " - " + character.ancestry.name}
      </SubHeading>
      <div className="flex">
        {_.isEmpty(character.ancestry) ? (
          <PlaceholderText>choose an ancestry above</PlaceholderText>
        ) : (
          freeAbilityOptions(character.ancestry.name)
        )}
      </div>

      <SubHeading>
        Background Boosts
        {character.background.name && " - " + character.background.name}
      </SubHeading>
      <div className="flex">
        {!character.background.name ? (
          <PlaceholderText>choose a background above</PlaceholderText>
        ) : (
          freeAbilityOptions(character.background.id)
        )}
      </div>

      {character.class.name &&
        character.class.abilityBoosts[0].ability === Abilities.FREE && (
          <>
            <SubHeading>
              Class Boost
              {character.class.name && " - " + character.class.name}
            </SubHeading>
            <div className="flex">
              {!character.class.name ? (
                <PlaceholderText>choose a class above</PlaceholderText>
              ) : (
                freeAbilityOptions(character.class.name)
              )}
            </div>
          </>
        )}

      {character.level >= 5 && (
        <>
          <SubHeading>Level 5 Boosts</SubHeading>
          <div className="flex">{freeAbilityOptions("Level_5")}</div>
        </>
      )}

      {character.level >= 10 && (
        <>
          <SubHeading>Level 10 Boosts</SubHeading>
          <div className="flex">{freeAbilityOptions("Level_10")}</div>
        </>
      )}

      {character.level >= 15 && (
        <>
          <SubHeading>Level 15 Boosts</SubHeading>
          <div className="flex">{freeAbilityOptions("Level_15")}</div>
        </>
      )}

      {character.level >= 20 && (
        <>
          <SubHeading>Level 20 Boosts</SubHeading>
          <div className="flex">{freeAbilityOptions("Level_20")}</div>
        </>
      )}
    </Card>
  )
}

export default AbilityScoreSection
