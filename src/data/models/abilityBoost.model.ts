import { Ability } from "../abilities"
import { Guid } from "js-guid"

export interface IAbilityBoost {
  id: string
  type: Ability
  ability: Ability
  source: string
  level: number
  exclude?: Ability[]
}

export class AbilityBoost implements IAbilityBoost {
  public readonly id = new Guid().toString()
  public readonly type
  constructor(
    public ability = Ability.FREE,
    public source = "Level_1",
    public level = 1,
    public exclude?: Ability[]
  ) {
    this.type = ability
  }
}
