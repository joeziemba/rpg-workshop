import { ISaveBoost } from "types/pf2e/Boosts"

export default class SaveBoost implements ISaveBoost {
  public id: ISaveBoost["id"]
  public level: ISaveBoost["level"]
  public proficiency: ISaveBoost["proficiency"]
  public save: ISaveBoost["save"]
  public source: ISaveBoost["source"]
  public type: ISaveBoost["type"]

  constructor({ save, source, level, proficiency }: ISaveBoost) {
    this.id = `${source + save + level}`
    this.level = level
    this.proficiency = proficiency
    this.save = save
    this.source = source
    this.type = source + "_" + level
  }
}
