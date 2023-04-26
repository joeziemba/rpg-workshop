export interface IBaseBoost {
  id: string
  level: number
  proficiency: number
  source: string
  type: string
}

export type Save = "fortitude" | "will" | "reflex"

export interface ISaveBoost extends IBaseBoost {
  save: Save
}
