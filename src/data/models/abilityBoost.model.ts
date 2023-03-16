import { Ability } from "data/abilities"
import { Guid } from "js-guid"

export interface IAbilityBoost {
  id: Guid | string
  type: Ability
  ability: Ability
  source: string
  level?: number
  exclude?: Ability[]
}

export class AbilityBoost implements IAbilityBoost {
  public readonly id = new Guid()
  public readonly type
  constructor(
    public ability = Ability.FREE,
    public source = "Level_1",
    public level = 1,
    public exclude = [] as Ability[]
  ) {
    this.type = ability
  }
}
