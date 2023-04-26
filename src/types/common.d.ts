declare type IStringIndex = {
  [index: string]: any
}

declare type Feat = {
  name: string
  source: string
  rarity: string
  prerequisites: string
  desc: string
  traits: string[]
  reqLevel: string
  last_scrape: string
}

// TODO: refactor app to use FeatSlot format for all feats
declare type FeatSlot = {
  level: number
  type: string
  feat?: Feat
}

declare type AbilityKey = "str" | "dex" | "con" | "int" | "wis" | "cha"
