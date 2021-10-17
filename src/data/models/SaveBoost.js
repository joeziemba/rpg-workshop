export default class SaveBoost {
  constructor({ save, source, level, proficiency }) {
    this.save = save
    this.source = source
    this.id = `${source + save + level}`
    this.type = source + "_" + level
    this.proficiency = proficiency
  }
}
