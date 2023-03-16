import { Skill, Proficiencies } from "data/skills"
import { Guid } from "js-guid"

export interface ISkillBoost {
  id: Guid | string
  skill: Skill
  proficiency: number
  isStatic: boolean
  level: number
  source: string
  type?: string
}

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
