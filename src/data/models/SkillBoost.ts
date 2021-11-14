import { Guid } from "js-guid"

class SkillBoost {
  public readonly id = new Guid()
  public get isStatic() {
    return !!this.skill.name
  }
  constructor(public skill, public source, public level: number) {}
}

export default SkillBoost

export const generateSkillBoosts = (boostConfig) => {
  return boostConfig.map(({ skill, source, level }) => {
    return new SkillBoost(skill, source, level)
  })
}
