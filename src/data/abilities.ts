export enum Ability {
  STR = "Strength",
  DEX = "Dexterity",
  CON = "Constitution",
  INT = "Intelligence",
  WIS = "Wisdom",
  CHA = "Charisma",
  FREE = "Free",
}

export const FullAbilityNames = Object.keys(Ability) as Array<
  keyof typeof Ability
>
