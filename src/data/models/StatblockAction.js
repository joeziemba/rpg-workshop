import { Guid } from "js-guid"

export class StatblockAction {
  constructor(title = "", content = "") {
    this.id = Guid.newGuid()
    this.title = title
    this.content = content
    this.type = "General"
  }
}
