import React, { useContext } from "react"
import _ from "lodash"
import { Ability, AbilityKeys } from "data/abilities"
import { Card } from "./Card"
import { Select } from "./Select"
import { SubHeading } from "./SubHeading"
import { PlaceholderText } from "./PlaceholderText"
import { PF2CharacterContext } from "context"
import { Ancestry, AncestryKey } from "data/ancestries"

export const AbilityScoreSection = () => {
  const { boostAbility, character } = useContext(PF2CharacterContext)
  function freeAbilityOptions(source: AncestryKey | string) {
    const { abilityBoosts } = character
    const freebies = abilityBoosts.filter(
      (boost) => boost.type === Ability.FREE && boost.source === source
    )
    return freebies.map((boost, i) => {
      const boostsFromSameSource = abilityBoosts.filter(
        (b) => b.source === boost.source && b.id !== boost.id
      )
      const excludedAbilities = boostsFromSameSource.map((b) => b.ability)
      if (boost.exclude) excludedAbilities.push(...boost.exclude)

      return (
        <div key={boost.id} className="flex-1 mx-2 lg:mx-2">
          <Select
            ariaLabel={"Level 1 Ability Boost: " + i}
            id={"Level 1 Ability Boost " + i}
            center
            isDefault={boost.ability == "Free"}
            onChange={boostAbility}
            name={boost.id}
            value={boost.ability}
          >
            <option value="FREE"></option>
            {AbilityKeys.map((ability) => {
              if (ability !== "FREE") {
                return excludedAbilities.includes(
                  Ability[ability]
                ) ? null : (
                  <option key={ability} value={Ability[ability]}>
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
    return AbilityKeys.map((abilityKey) => {
      if (abilityKey !== "FREE") {
        const keyAbility = character.abilityBoosts.find(
          (b) => b.source === character.class?.name
        )
        const isKey =
          keyAbility && keyAbility.ability === Ability[abilityKey]
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
              {character.abilityMods[Ability[abilityKey]] < 0 ? "" : "+"}
              {character.abilityMods[Ability[abilityKey]]}
            </span>
            <span
              className="block text-lg"
              id={abilityKey.toLowerCase() + "-score"}
            >
              {character.abilities[Ability[abilityKey]]}
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
        {character.ancestry?.name && " - " + character.ancestry.name}
      </SubHeading>
      <div className="flex">
        {!character.ancestry || _.isEmpty(character.ancestry) ? (
          <PlaceholderText>choose an ancestry above</PlaceholderText>
        ) : (
          freeAbilityOptions(character.ancestry.name)
        )}
      </div>

      <SubHeading>
        Background Boosts
        {character.background?.name && " - " + character.background.name}
      </SubHeading>
      <div className="flex">
        {!character.background?.name ? (
          <PlaceholderText>choose a background above</PlaceholderText>
        ) : (
          freeAbilityOptions(character.background.id)
        )}
      </div>

      {character.class?.name &&
        character.class?.abilityBoosts[0].ability === Ability.FREE && (
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
