export const attacks = [
  {
    id: 1,
    title: 'Longsword',
    attack: {
      type: 'Melee',
      prof: true,
      reach: 5,
      targets: 1,
      dmgDie: 8,
      dieNum: 1,
      dmgType: 'Slashing',
      dex: false
    }
  },
  {
    id: 2,
    title: 'Longbow',
    attack: {
      type: 'Ranged',
      prof: true,
      reach: 120,
      targets: 1,
      dmgDie: 8,
      dieNum: 1,
      dmgType: 'Piercing',
      dex: true
    }
  },
  {
    id: 'clawAtk',
    title: 'Claw',
    attack: {
      type: 'Melee',
      prof: true,
      reach: 5,
      targets: 1,
      dmgDie: 4,
      dieNum: 1,
      dmgType: 'Slashing',
      dex: false
    }
  },
  {
    id: 4,
    title: 'Bite',
    attack: {
      type: 'Melee',
      prof: true,
      reach: 5,
      targets: 1,
      dmgDie: 6,
      dieNum: 1,
      dmgType: 'Piercing',
      dex: false
    }
  },
]