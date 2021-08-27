const SkillBoost = ({ skill, source, id, level }) => ({
  id,
  skill,
  source: source,
  level,
  isStatic: !!skill.name,
})

export default SkillBoost

export const generateSkillBoosts = (boostConfig) => {
  return boostConfig.map(({ skill, source, level }, index) => {
    return SkillBoost({
      skill,
      source,
      level,
      id: source + (index + 1),
    })
  })
}
