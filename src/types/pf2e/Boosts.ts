export interface IBaseBoost {
  id: string
  level: number
  proficiency: number
  source: string
  type: string
}

export interface ISaveBoost extends IBaseBoost {
  save: "fortitude" | "will" | "reflex"
}
