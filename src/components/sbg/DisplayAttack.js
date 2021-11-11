import { StatblockContext } from "context"
import React, { useContext } from "react"

export const DisplayAttack = ({ action, id }) => {
  const {
    stats: { abilities, proficiency },
  } = useContext(StatblockContext)
  let { dieNum, dmgDie, dex, reach, targets, dmgType } = action
  // Get hit mod
  const toHit =
    (dex ? Number(abilities.dexMod) : Number(abilities.strMod)) +
    Number(proficiency)

  // Get Damage Mod
  let avg = (dieNum * dmgDie) / 2 + toHit

  let operator = "+"
  let dmgMod = toHit
  if (toHit < 0) {
    operator = "-"
    dmgMod = toHit * -1
  }

  let damageString = `${avg} (${dieNum}d${dmgDie} ${operator} ${dmgMod}) ${dmgType.toLowerCase()}.`
  return (
    <div
      className="statblock__property statblock__property--block"
      id={id}
    >
      <span className="statblock__property-name italic">
        {action.title}.&ensp;
      </span>
      <span className="italic">{action.type} Weapon Attack. </span>
      {`${toHit >= 0 ? "+" : ""}${toHit}`} to hit,&ensp;
      {action.type === "Ranged" ? "Range" : "Reach"} {reach}
      ft.,&ensp;
      {targets} target{targets > 1 ? "s" : ""}.&ensp; Damage:&ensp;
      {damageString}
    </div>
  )
}
