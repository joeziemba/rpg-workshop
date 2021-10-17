import { StatblockAction } from "./StatblockAction"

export class StatblockAttack extends StatblockAction {
  constructor(title, content, type = "Melee") {
    super(title, content)
    this.type = type
    this.prof = true
    this.reach = 0
    this.targets = 0
    this.dmgDie = 4
    this.dieNum = 0
    this.dmgType = ""
    this.dex = false
  }
}
