import { Alchemist } from "./alchemist"
import { Barbarian } from "./barbarian"
import { Bard } from "./bard"
import { Champion } from "./champion"
import { Cleric } from "./cleric"
import { Druid } from "./druid"
import { Fighter } from "./fighter"
import { Investigator } from "./investigator"
import { Monk } from "./monk"
import { Oracle } from "./oracle"
import { Ranger } from "./ranger"
import { Rogue } from "./rogue"
import { Sorcerer } from "./sorcerer"
import { Swashbuckler } from "./swashbuckler"
import { Witch } from "./witch"
import Wizard from "./wizard"

const Classes = {
  Alchemist,
  Barbarian,
  Bard,
  Champion,
  Cleric,
  Druid,
  Fighter,
  Investigator,
  Monk,
  Oracle,
  Ranger,
  Rogue,
  Sorcerer,
  Swashbuckler,
  Witch,
  Wizard,
}
export default Classes

export { Saves } from "./saves"

export const ClassNames = {
  ALC: Alchemist.name,
  BARB: Barbarian.name,
  BARD: Bard.name,
  CHAMP: Champion.name,
  CLER: Cleric.name,
  DRUID: Druid.name,
  FIGHT: Fighter.name,
  MONK: Monk.name,
  RANGE: Ranger.name,
  ROGUE: Rogue.name,
  SORC: Sorcerer.name,
  WIZ: Wizard.name,
  INV: Investigator.name,
  // SWA: Swashbuckler.name,
  WIT: Witch.name,
  ORA: Oracle.name,
}
