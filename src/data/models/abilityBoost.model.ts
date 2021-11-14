import { Ability } from "data/abilities"
import { Guid } from "js-guid"

export class abilityBoost {
  public readonly id = new Guid()
  constructor(
    public ability = Ability.FREE,
    public source = "Level_1",
    public level = 1,
    public type = Ability.FREE
  ) {}
}
