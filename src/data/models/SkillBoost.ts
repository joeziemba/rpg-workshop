import { Skill, Proficiencies } from "data/skills"
import { Guid } from "js-guid"

export interface ISkillBoost {
  id: string
  skill: Skill
  proficiency?: number
  isStatic?: boolean
  level: number
  source: string
  type?: string
}

class SkillBoost {
  public readonly id = new Guid().toString()
  public proficiency: number = 0
  public get isStatic() {
    return !!this.skill.name
  }

  constructor(
    public skill: Skill,
    public source: string,
    public level: number
  ) {}
}

export default SkillBoost

export const generateSkillBoosts = (boostConfig: SkillBoost[]) => {
  return boostConfig.map(({ skill, source, level }) => {
    return new SkillBoost(skill, source, level)
  })
}
