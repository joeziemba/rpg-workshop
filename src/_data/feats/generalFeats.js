const SOURCES = {
  CRB: "Core Rulebook",
  LOCG: "Lost Omens Character Guide"
};

export const GENERAL_FEATS = [
  {
    name: "Adopted Ancestry",
    level: "1",
    traits: ["General"],
    description:
      "You’re fully immersed in another ancestry’s culture and traditions, whether born into them, earned through rite of passage, or bonded through a deep friendship or romance.\nChoose a common ancestry. You can select ancestry feats from the ancestry you chose, in addition to your character’s own ancestry, as long as the ancestry feats don’t require any physiological feature that you lack, as determined by the GM.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Armor Proficiency",
    level: "1",
    traits: ["General"],
    description:
      "You become trained in light armor. If you already were trained in light armor, you gain training in medium armor. If you were trained in both, you become trained in heavy armor.",
    prerequesites: [],
    source: SOURCES.CRB,
    special:
      "You can select this feat more than once. Each time, you become trained in the next type of armor above."
  },
  {
    name: "Breath Control",
    level: "1",
    traits: ["General"],
    description:
      "You have incredible breath control, which grants you advantages when air is hazardous or sparse. You can hold your breath for 25 times as long as usual before suffocating. You gain a +1 circumstance bonus to saving throws against inhaled threats, such as inhaled poisons, and if you roll a success on such a saving throw, you get a critical success instead.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Canny Acumen",
    level: "1",
    traits: ["General"],
    description:
      "Your avoidance or observation is beyond the ken of most in your profession. Choose Fortitude saves, Reflex saves, Will saves, or Perception. You become an expert in your choice. At 17th level, you become a master in your choice.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Diehard",
    level: "1",
    traits: ["General"],
    description:
      "It takes more to kill you than most. You die from the dying condition at dying 5, rather than dying 4.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Fast Recovery",
    level: "1",
    traits: ["General"],
    description:
      "Your body quickly bounces back from afflictions. You regain twice as many Hit Points from resting. Each time you succeed at a Fortitude save against an ongoing disease or poison, you reduce its stage by 2, or by 1 against a virulent disease or poison.\nEach critical success you achieve against an ongoing disease or poison reduces its stage by 3, or by 2 against a virulent disease or poison. In addition, you reduce the severity of your drained condition by 2 when you rest for a night instead of by 1.",
    prerequesites: ["Constitution 14"],
    source: SOURCES.CRB
  },
  {
    name: "Feather Step",
    level: "1",
    traits: ["General"],
    description:
      "You step carefully and quickly. You can Step into difficult terrain.",
    prerequesites: ["Dexterity 14"],
    source: SOURCES.CRB
  },
  {
    name: "Fleet",
    level: "1",
    traits: ["General"],
    description:
      "You move more quickly on foot. Your Speed increases by 5 feet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Incredible Initiative",
    level: "1",
    traits: ["General"],
    description:
      "You react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ride",
    level: "1",
    traits: ["General"],
    description:
      "When you Command an Animal you’re mounted on to take a move action (such as Stride), you automatically succeed instead of needing to attempt a check. Any animal you’re mounted on acts on your turn, like a minion. If you Mount an animal in the middle of an encounter, it skips its next turn and then acts on your next turn.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Shield Block",
    level: "1",
    traits: ["General"],
    trigger:
      "While you have your shield raised, you would take damage from a physical attack",
    description:
      "You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield’s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Toughness",
    level: "1",
    traits: ["General"],
    description:
      "You can withstand more punishment than most before succumbing. Increase your maximum Hit Points by your level.\nYou reduce the DC of recovery checks by 1.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Weapon Proficiency",
    level: "1",
    traits: ["General"],
    description:
      "You become trained in all simple weapons. If you were already trained in all simple weapons, you become trained in all martial weapons. If you were already trained in all martial weapons, you become trained in one advanced weapon of your choice.",
    prerequesites: [],
    source: SOURCES.CRB,
    special:
      "You can select this feat more than once. Each time you do, you become trained in additional weapons as appropriate, following the above progression."
  },
  {
    name: "Ancestral Paragon",
    level: "3",
    traits: ["General"],
    description:
      "Whether through instinct, study, or magic, you feel a deeper connection to your ancestry. You gain a 1st-level ancestry feat.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Untrained Improvisation",
    level: "3",
    traits: ["General"],
    description:
      "You’ve learned how to handle situations when you’re out of your depth. Your proficiency bonus to untrained skill checks is equal to half your level instead of +0. If you’re 7th level or higher, the bonus increases to your full level instead. This doesn’t allow you to use the skill’s trained actions.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Expeditious Search",
    level: "7",
    traits: ["General"],
    description:
      "You have a system that lets you search at great speed, finding details and secrets twice as quickly as others can. When Searching, you take half as long as usual to Search a given area. This means that while exploring, you double the Speed you can move while ensuring you’ve Searched an area before walking into it (up to half your Speed). If you’re legendary in Perception, you instead Search areas four times as quickly.",
    prerequesites: ["master in Perception"],
    source: SOURCES.CRB
  },
  {
    name: "Incredible Investiture",
    level: "11",
    traits: ["General"],
    description:
      "You have an incredible ability to invest more magic items. Increase your limit on invested items from 10 to 12.",
    prerequesites: ["Charisma 16"],
    source: SOURCES.CRB
  }
];

export const SKILL_FEATS = [
  {
    name: "Assurance",
    level: "1",
    traits: ["General", "Skill", "Fortune"],
    description:
      "Even in the worst circumstances, you can perform basic tasks.\nChoose a skill you’re trained in. You can forgo rolling a skill check for that skill to instead receive a result of 10 + your proficiency bonus (do not apply any other bonuses, penalties, or modifiers).",
    prerequesites: ["trained in at least one skill"],
    source: SOURCES.CRB,
    special:
      "You can select this feat multiple times. Each time, choose a different skill and gain the benefits for that skill."
  },
  {
    name: "Dubious Knowledge",
    level: "1",
    traits: ["General", "Skill"],
    description:
      "You’re a treasure trove of information, but not all of it comes from reputable sources. When you fail a Recall Knowledge check using any skill, you learn a bit of true knowledge and a bit of erroneous knowledge, but you don’t have any way to differentiate which is which.",
    prerequesites: ["trained in a skill with the Recall Knowledge action"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Identification",
    level: "1",
    traits: ["General", "Skill"],
    description:
      "You can Identify Magic swiftly. You take only 1 minute when using Identify Magic to determine the properties of an item, ongoing effect, or location, rather than 10 minutes. If you’re a master, it takes a 3-action activity, and if you’re legendary, it takes 1 action.",
    prerequesites: ["trained in Arcana, Nature, Occultism or Religion"],
    source: SOURCES.CRB
  },
  {
    name: "Recognize Spell",
    level: "1",
    traits: ["General", "Skill", "Secret"],
    description:
      "If you are trained in the appropriate skill for the spell’s tradition and it’s a common spell of 2nd level or lower, you automatically identify it (you still roll to attempt to get a critical success, but can’t get a worse result than success). The highest level of spell you automatically identify increases to 4 if you’re an expert, 6 if you’re a master, and 10 if you’re legendary. The GM rolls a secret Arcana, Nature, Occultism, or Religion check, whichever corresponds to the tradition of the spell being cast. If you’re not trained in the skill, you can’t get a result better than failure.\nCritical Success You correctly recognize the spell and gain a +1 circumstance bonus to your saving throw or your AC against it.\nSuccess You correctly recognize the spell.\nFailure You fail to recognize the spell.\nCritical Failure You misidentify the spell as another spell entirely, of the GM’s choice.",
    prerequesites: ["trained in Arcana, Nature, Occultism, or Religion"],
    source: SOURCES.CRB,
    trigger:
      "A creature within line of sight casts a spell that you don’t have prepared or in your spell repertoire, or a trap or similar object casts such a spell. You must be aware of the casting."
  },
  {
    name: "Skill Training",
    level: "1",
    traits: ["General", "Skill"],
    description: "You become trained in the skill of your choice.",
    prerequesites: ["Intelligence 12"],
    source: SOURCES.CRB,
    special:
      "You can select this feat multiple times, choosing a new skill to become trained in each time."
  },
  {
    name: "Trick Magic Item",
    level: "1",
    traits: ["General", "Skill", "Manipulate"],
    description:
      "You examine a magic item you normally couldn’t use in an effort to fool it and activate it temporarily. For example, this might allow a fighter to cast a spell from a wand or allow a wizard to cast a spell that’s not on the arcane list using a scroll. You must know what activating the item does, or you can’t attempt to trick it.\nAttempt a check using the skill matching the item’s magic tradition, or matching a tradition that has the spell on its list, if you’re trying to cast a spell from the item. The relevant skills are Arcana for arcane, Nature for primal, Occultism for occult, Religion for divine, or any of the four for an item that has the magical trait and not a tradition trait. The GM determines the DC based on the item’s level (possibly adjusted depending on the item or situation).\nIf you activate a magic item that requires a spell attack roll or spell DC and you don’t have the ability to cast spells of the relevant tradition, use your level as your proficiency bonus and the highest of your Intelligence, Wisdom, or Charisma modifiers.\nIf you’re a master in the appropriate skill for the item’s tradition, you instead use the trained proficiency bonus, and if you’re legendary, you instead use the expert proficiency bonus.\nSuccess For the rest of the current turn, you can spend actions to activate the item as if you could normally use it.\nFailure You can’t use the item or try to trick it again this turn, but you can try again on subsequent turns.\nCritical Failure You can’t use the item, and you can’t try to trick it again until your next daily preparations.",
    prerequesites: ["trained in Arcana, Nature, Occultism, or Religion"],
    source: SOURCES.CRB
  },
  {
    name: "Automatic Knowledge",
    level: "2",
    traits: ["General", "Skill"],
    description:
      "You know basic facts off the top of your head. Choose a skill you’re an expert in that has the Recall Knowledge action and for which you have the Assurance feat. You can use the Recall Knowledge action with that skill as a free action once per round.\nIf you do, you must use Assurance on the skill check.",
    prerequesites: [
      "expert in a skill with the Recall Knowledge action",
      "Assurance in that skill"
    ],
    source: SOURCES.CRB,
    special:
      "You can select this feat multiple times, choosing a different skill each time. You can use Automatic Knowledge with any skills you have chosen, but you can still use Automatic Knowledge only once per round."
  },
  {
    name: "Magical Shorthand",
    level: "2",
    traits: ["General", "Skill"],
    description:
      "Learning spells comes easily to you. If you’re an expert in a tradition’s associated skill, you take 10 minutes per spell level to learn a spell of that tradition, rather than 1 hour per spell level. If you fail to learn the spell, you can try again after 1 week or after you gain a level, whichever comes first. If you’re a master in the tradition’s associated skill, learning a spell takes 5 minutes per spell level, and if you’re legendary, it takes 1 minute per spell level.\nYou can use downtime to learn and inscribe new spells. This works as if you were using Earn Income with the tradition’s associated skill, but instead of gaining money, you choose a spell available to you to learn and gain a discount on learning it, learning it for free if your earned income equals or exceeds its cost.",
    prerequesites: ["expert in Arcana, Nature, Occultism, or Religion"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Recognition",
    level: "7",
    traits: ["General", "Skill"],
    description:
      "You Recognize Spells swiftly. Once per round, you can Recognize a Spell using a skill in which you’re a master as a free action.",
    prerequesites: [
      "master in Arcana, Nature, Occultism, or Religion",
      "Recognize Spell"
    ],
    source: SOURCES.CRB
  }
];

export const ACROBATICS_FEATS = [
  {
    name: "Cat Fall",
    level: "1",
    traits: ["General", "Skill", "Acrobatics"],
    description:
      "Your catlike aerial acrobatics allow you to cushion your falls. Treat falls as 10 feet shorter. If you’re an expert in Acrobatics, treat falls as 25 feet shorter. If you’re a master in Acrobatics, treat them as 50 feet shorter. If you’re legendary in Acrobatics, you always land on your feet and don’t take damage, regardless of the distance of the fall.",
    prerequesites: ["trained in Acrobatics"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Squeeze",
    level: "1",
    traits: ["General", "Skill", "Acrobatics"],
    description:
      "You Squeeze 5 feet per round (10 feet on a critical success).\nIf you’re legendary in Acrobatics, you Squeeze at full Speed.",
    prerequesites: ["trained in Acrobatics"],
    source: SOURCES.CRB
  },
  {
    name: "Steady Balance",
    level: "1",
    traits: ["General", "Skill", "Acrobatics"],
    description:
      "You can keep your balance easily, even in adverse conditions.\nWhenever you roll a success using the Balance action, you get a critical success instead. You’re not flat-footed while attempting to Balance on narrow surfaces and uneven ground. Thanks to your incredible balance, you can attempt an Acrobatics check instead of a Reflex save to Grab an Edge.",
    prerequesites: ["trained in Acrobatics"],
    source: SOURCES.CRB
  },
  {
    name: "Nimble Crawl",
    level: "2",
    traits: ["General", "Skill", "Acrobatics"],
    description:
      "You can Crawl incredibly swiftly—up to half your Speed, rather than 5 feet. If you’re a master in Acrobatics, you can Crawl at full Speed, and if you’re legendary, you aren’t flat-footed while prone.",
    prerequesites: ["expert in Acrobatics"],
    source: SOURCES.CRB
  },
  {
    name: "Kip Up",
    level: "7",
    traits: ["General", "Skill", "Acrobatics"],
    description: "You stand up. This movement doesn’t trigger reactions",
    prerequesites: ["master in Acrobatics"],
    source: SOURCES.CRB
  }
];

export const ARCANA_FEATS = [
  {
    name: "Arcane Sense",
    level: "1",
    traits: ["General", "Skill", "Arcana"],
    description:
      "Your study of magic allows you to instinctively sense its presence. You can cast 1st-level detect magic at will as an arcane innate spell. If you’re a master in Arcana, the spell is heightened to 3rd level; if you’re legendary, it is heightened to 4th level.",
    prerequesites: ["trained in Arcana"],
    source: SOURCES.CRB
  },
  {
    name: "Unified Theory",
    level: "1",
    traits: ["General", "Skill", "Arcana"],
    description:
      "You’ve started to make a meaningful connection about the common underpinnings of the four traditions of magic and magical essences, allowing you to understand them all through an arcane lens. Whenever you use an action or a skill feat that requires a Nature, Occultism, or Religion check, depending on the magic tradition, you can use Arcana instead. If you would normally take a penalty or have a higher DC for using Arcana on other magic (such as when using Identify Magic), you no longer do so.",
    prerequesites: ["legendary in Arcana"],
    source: SOURCES.CRB
  }
];
export const ATHLETICS_FEATS = [
  {
    name: "Combat Climber",
    level: "1",
    traits: ["General", "Skill", "Athletics"],
    description:
      "Your techniques allow you to fight as you climb. You’re not flat-footed while Climbing and can Climb with a hand occupied.\nYou must still use another hand and both legs to Climb.",
    prerequesites: ["trained in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Hefty Hauler",
    level: "1",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You can carry more than your frame implies. Increase your maximum and encumbered Bulk limits by 2.",
    prerequesites: ["trained in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Jump",
    level: "1",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You can use High Jump and Long Jump as a single action instead of 2 actions. If you do, you don’t perform the initial Stride (nor do you fail if you don’t Stride 10 feet).",
    prerequesites: ["trained in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Titan Wrestler",
    level: "1",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You can attempt to Disarm, Grapple, Shove, or Trip creatures up to two sizes larger than you, or up to three sizes larger than you if you’re legendary in Athletics.",
    prerequesites: ["trained in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Underwater Marauder",
    level: "1",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You’ve learned to fight underwater. You are not flat-footed while in water, and you don’t take the usual penalties for using a bludgeoning or slashing melee weapon in water.",
    prerequesites: ["trained in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Powerful Leap",
    level: "2",
    traits: ["General", "Skill", "Athletics"],
    description:
      "When you Leap, you can jump 5 feet up with a vertical Leap, and you increase the distance you can jump horizontally by 5 feet.",
    prerequesites: ["expert in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Rapid Mantel",
    level: "2",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You easily pull yourself onto ledges. When you Grab an Edge, you can pull yourself onto that surface and stand. You can use Athletics instead of a Reflex save to Grab an Edge.",
    prerequesites: ["expert in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Climb",
    level: "7",
    traits: ["General", "Skill", "Athletics"],
    description:
      "When Climbing, you move 5 more feet on a success and 10 more feet on a critical success, to a maximum of your Speed.\nIf you’re legendary in Athletics, you gain a climb Speed equal to your Speed",
    prerequesites: ["master in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Swim",
    level: "7",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You Swim 5 feet farther on a success and 10 feet farther on a critical success, to a maximum of your Speed. If you’re legendary in Athletics, you gain a swim Speed equal to your Speed",
    prerequesites: ["master in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Wall Jump",
    level: "7",
    traits: ["General", "Skill", "Athletics"],
    description:
      "You can use your momentum from a jump to propel yourself off a wall. If you’re adjacent to a wall at the end of a jump (whether performing a High Jump, Long Jump, or Leap), you don’t fall as long as your next action is another jump.\nFurthermore, since your previous jump gives you momentum, you can use High Jump or Long Jump as a single action, but you don’t get to Stride as part of the activity.\nYou can use Wall Jump only once in a turn, unless you’re legendary in Athletics, in which case you can use Wall Jump as many times as you can use consecutive jump actions in that turn.",
    prerequesites: ["master in Athletics"],
    source: SOURCES.CRB
  },
  {
    name: "Cloud Jump",
    level: "15",
    traits: ["General", "Skill", "Athletics"],
    description:
      "Your unparalleled athletic skill allows you to jump impossible distances. Triple the distance you Long Jump (so you could jump 60 feet on a successful DC 20 check). When you High Jump, use the calculation for a Long Jump but don’t triple the distance.\nWhen you Long Jump or High Jump, you can also increase the number of actions you use (up to the number of actions you have remaining in your turn) to jump even further. For each extra action, add your Speed to the maximum distance you jump.",
    prerequesites: ["legendary in Athletics"],
    source: SOURCES.CRB
  }
];

export const CRAFTING_FEATS = [
  {
    name: "Alchemical Crafting",
    level: "1",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You can use the Craft activity to create alchemical items. When you select this feat, you immediately add the formulas for four common 1st-level alchemical items to your formula book.",
    prerequesites: ["Trained in Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Repair",
    level: "1",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You take 1 minute to Repair an item. If you’re a master in Crafting, it takes 3 actions. If you’re legendary, it takes 1 action.",
    prerequesites: ["Trained in Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Snare Crafting",
    level: "1",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You can use the Craft activity to create snares. When you select this feat, you add the formulas for four common snares to your formula book",
    prerequesites: ["Trained in Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Specialty Crafting",
    level: "1",
    traits: ["General", "Skill", "Crafting"],
    description:
      "Your training focused on Crafting one particular kind of item.\nSelect one of the specialties; you gain a +1 circumstance bonus to Crafting checks to Craft items of that type. If you are a master in Crafting, this bonus increases to +2.\nIf it’s unclear whether the specialty applies, the GM decides.\nSome specialties might apply only partially. For example, if you were making a morningstar and had specialty in woodworking, the GM might give you half your bonus because the item requires both blacksmithing and woodworking",
    prerequesites: ["Trained in Crafting"],
    source: SOURCES.CRB,
    uri: "https://pf2.d20pfsrd.com/feat/Specialty-Crafting"
  },
  {
    name: "Magical Crafting",
    level: "2",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You can Craft magic items, though some have other requirements. When you select this feat, you gain formulas for four common magic items of 2nd level or lower.",
    prerequesites: ["Expert in Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Impeccable Crafting",
    level: "7",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You craft flawless creations with great efficiency. Whenever you roll a success at a Crafting check to make an item of the type you chose with SpecialtyCrafting, you get a critical success instead.",
    prerequesites: ["Master in Crafting", "Specialty Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Inventor",
    level: "7",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You are a genius at Crafting, easily able to determine how things are made and create new inventions. You can spend downtime to invent a common formula that you don’t know. This works just like the Craft activity: you spend half the Price of the formula up front, attempt a Crafting check, and on a success either finish the formula by paying the difference or work for longer to decrease the Price. The difference is that you spend the additional time in research, design, and development, rather than in creating an item. Once it’s complete, you add the new formula you invented to your formula book.",
    prerequesites: ["Master in Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Craft Anything",
    level: "15",
    traits: ["General", "Skill", "Crafting"],
    description:
      "You can find ways to craft just about anything, despite restrictions. As long as you have the appropriate Crafting skill feat (such as Magical Crafting for magic items) and meet the item’s level and proficiency requirement, you ignore just about any other requirement, such as being of a specific ancestry or providing spells. The only exceptions are requirements that add to the item’s cost, including castings of spells that themselves have a cost, and requirements of special items such as the philosopher’s stone that have exclusive means of access and Crafting. The GM decides whether you can ignore a requirement.",
    prerequesites: ["Legendary in Crafting"],
    source: SOURCES.CRB
  }
];

export const DECEPTION_FEATS = [
  {
    name: "Charming Liar",
    level: "1",
    traits: ["General", "Skill", "Deception"],
    description:
      "Your charm allows you to win over those you lie to. When you get a critical success using the Lie action, the target’s attitude toward you improves by one step, as though you’d succeeded at using Diplomacy to Make an Impression. This works only once per conversation, and if you critically succeed against multiple targets using the same result, you choose one creature’s attitude to improve. You must be lying to impart seemingly important information, inflate your status, or ingratiate yourself, which trivial or irrelevant lies can’t achieve.",
    prerequesites: ["Trained in Deception"],
    source: SOURCES.CRB
  },
  {
    name: "Lengthy Diversion",
    level: "1",
    traits: ["General", "Skill", "Deception"],
    description:
      "When you critically succeed to Create a Diversion, you continue to remain hidden after the end of your turn. This effect lasts for an amount of time that depends on the diversion and situation, as determined by the GM (minimum 1 additional round).",
    prerequesites: ["Trained in Deception"],
    source: SOURCES.CRB
  },
  {
    name: "Lie To Me",
    level: "1",
    traits: ["General", "Skill", "Deception"],
    description:
      "You can use Deception to weave traps to trip up anyone trying to deceive you. If you can engage in conversation with someone trying to Lie to you, use your Deception DC if it is higher than your Perception DC to determine whether they succeed. This doesn’t apply if you don’t have a back-and-forth dialog, such as when someone attempts to Lie during a long speech.",
    prerequesites: ["Trained in Deception"],
    source: SOURCES.CRB
  },
  {
    name: "Confabulator",
    level: "2",
    traits: ["General", "Skill", "Deception"],
    description:
      "Even when caught in falsehoods, you pile lie upon lie. Reduce the circumstance bonus a target gains for your previous attempts to Create a Diversion or Lie to it from +4 to +2. If you’re a master in Deception, reduce the bonus to +1, and if you’re legendary, your targets don’t get these bonuses at all.",
    prerequesites: ["Expert in Deception"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Disguise",
    level: "2",
    traits: ["General", "Skill", "Deception"],
    description:
      "You can set up a disguise in half the usual time (generally 5 minutes). If you’re a master, it takes one-tenth the usual time (usually 1 minute). If you’re legendary, you can create a full disguise and Impersonate as a 3-action activity.",
    prerequesites: ["Expert in Deception"],
    source: SOURCES.CRB
  },
  {
    name: "Slippery Secrets",
    level: "7",
    traits: ["General", "Skill", "Deception"],
    description:
      "You elude and evade attempts to uncover your true nature or intentions. When a spell or magical effect tries to read your mind, detect whether you are lying, or reveal your alignment, you can attempt a Deception check against the spell or effect’s DC. If you succeed, the effect reveals nothing.",
    prerequesites: ["Master in Deception"],
    source: SOURCES.CRB
  }
];

export const DIPLOMACY_FEATS = [
  {
    name: "Bargain Hunter",
    level: "1",
    traits: ["General", "Skill", "Diplomacy"],
    description:
      "You can Earn Income using Diplomacy, spending your days hunting for bargains and reselling at a profit. You can also spend time specifically sniffing out a great bargain on an item; this works as if you were using Earn Income with Diplomacy, except instead of gaining money, you purchase the item at a discount equal to the money you would have gained, gaining the item for free if your earned income equals or exceeds its cost. Finally, if you select Bargain Hunter during character creation at 1st level, you start play with an additional 2 gp.",
    prerequesites: ["Trained in Dilplomacy"],
    source: SOURCES.CRB
  },
  {
    name: "Group Impression",
    level: "1",
    traits: ["General", "Skill", "Diplomacy"],
    description:
      "When you Make an Impression, you can compare your Diplomacy check result to the Will DCs of two targets instead of one. It’s possible to get a different degree of success for each target. The number of targets increases to four if you’re an expert, 10 if you’re a master, and 25 if you’re legendary.",
    prerequesites: ["Trained in Dilplomacy"],
    source: SOURCES.CRB
  },
  {
    name: "Hobnobber",
    level: "1",
    traits: ["General", "Skill", "Diplomacy"],
    description:
      "You are skilled at learning information through conversation.\nThe Gather Information exploration activity takes you half as long as normal (typically reducing the time to 1 hour). If you’re a master in Diplomacy and you Gather Information at the normal speed, when you attempt to do so and roll a critical failure, you get a failure instead. There is still no guarantee that a rumor you learn with Gather Information is accurate.",
    prerequesites: ["Trained in Dilplomacy"],
    source: SOURCES.CRB
  },
  {
    name: "Glad-Hand",
    level: "2",
    traits: ["General", "Skill", "Diplomacy"],
    description:
      "First impressions are your strong suit. When you meet someone in a casual or social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a -5 penalty to the check. If you fail or critically fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result.\nYou have an incredible ability to invest more magic items.\nIncrease your limit on invested items from 10 to 12.",
    prerequesites: ["Expert in Dilplomacy"],
    source: SOURCES.CRB
  },
  {
    name: "Shameless Request",
    level: "7",
    traits: ["General", "Skill", "Diplomacy"],
    description:
      "You can downplay the consequences or outrageousness of your requests using sheer brazenness and charm. When you Request something, you reduce any DC increases for making an outrageous request by 2, and if you roll a critical failure for your Request, you get a failure instead. While this means you can never cause your target to reduce their attitude toward you by making a Request, they eventually tire of requests, even though they still have a Positive attitude toward you.",
    prerequesites: ["Master in Dilplomacy"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Negotiation",
    level: "15",
    traits: ["General", "Skill", "Diplomacy"],
    description:
      "You can negotiate incredibly quickly in adverse situations. You attempt to Make an Impression and then Request your opponent cease their current activity and engage in negotiations. You take a -5 penalty to your Diplomacy check. The GM sets the DC of the Request based on the circumstances—it’s generally at least a very hard DC of the creature’s level. Some creatures might simply refuse, and even those who agree to parley might ultimately find your arguments lacking and return to violence.",
    prerequesites: ["Legendary in Dilplomacy"],
    source: SOURCES.CRB
  }
];

export const INIMIDATION_FEATS = [
  {
    name: "Group Coercion",
    level: "1",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "When you Coerce, you can compare your Intimidation check result to the Will DCs of two targets instead of one. It’s possible to get a different degree of success for each target. The number of targets you can Coerce in a single action increases to four if you’re an expert, 10 if you’re a master, and 25 if you’re legendary.",
    prerequesites: ["Trained in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Intimidating Glare",
    level: "1",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "You can Demoralize with a mere glare. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don’t take a penalty if the creature doesn’t understand your language.",
    prerequesites: ["Trained in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Coercion",
    level: "1",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "You can bully others with just a few choice implications. You can Coerce a creature after 1 round of conversation instead of 1 minute. You still can’t Coerce a creature in the midst of combat, or without engaging in a conversation.",
    prerequesites: ["Trained in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Intimidating Prowess",
    level: "2",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "In situations where you can physically menace the target when you Coerce or Demoralize, you gain a +1 circumstance bonus to your Intimidation check and you ignore the penalty for not sharing a language. If your Strength score is 20 or higher and you are a master in Intimidation, this bonus increases to +2.",
    prerequesites: ["Expert in Intimidation", "Strength 16"],
    source: SOURCES.CRB
  },
  {
    name: "Lasting Coercion",
    level: "2",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "When you successfully Coerce someone, the maximum time they comply increases to a week, still determined by the GM.\nIf you’re legendary, the maximum increases to a month",
    prerequesites: ["Expert in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Battle Cry",
    level: "7",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "When you roll initiative, you can yell a mighty battle cry and Demoralize an observed foe as a free action. If you’re legendary in Intimidation, you can use a reaction to Demoralize your foe when you critically succeed at an attack roll.",
    prerequesites: ["Master in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Terrified Retreat",
    level: "7",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "When you critically succeed at the Demoralize action, if the target’s level is lower than yours, the target is fleeing for 1 round.",
    prerequesites: ["Master in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Scare To Death",
    level: "15",
    traits: ["General", "Skill", "Inimidation"],
    description:
      "You can frighten foes so much, they might die. Attempt an Intimidation check against the Will DC of a living creature within 30 feet of you that you sense or observe and who can sense or observe you. If the target can’t hear you or doesn’t understand the language you are speaking, you take a -4 circumstance penalty. The creature is temporarily immune for 1 minute.\nCritical Success The target must succeed at a Fortitude save against your Intimidation DC or die. If the target succeeds at its save, it becomes frightened 2 and is fleeing for 1 round; it suffers no effect on a critical success.\nSuccess The target becomes frightened 2.\nFailure The target becomes frightened 1.\nCritical Failure The target is unaffected",
    prerequesites: ["Legendary in Intimidation"],
    source: SOURCES.CRB
  }
];

export const LORE_FEATS = [
  {
    name: "Additional Lore",
    level: "1",
    traits: ["General", "Skill", "Lore"],
    description:
      "Your knowledge has expanded to encompass a new field. Choose an additional Lore skill subcategory. You become trained in it. At 3rd, 7th, and 15th levels, you gain an additional skill increase you can apply only to the chosen Lore subcategory.",
    prerequesites: ["Trained in Lore"],
    source: SOURCES.CRB,
    special:
      "You can select this feat more than once. Each time you must select a new subcategory of Lore and you gain the additional skill increases to that subcategory for the listed levels."
  },
  {
    name: "Experienced Professional",
    level: "1",
    traits: ["General", "Skill", "Lore"],
    description:
      "You carefully safeguard your professional endeavors to prevent disaster. When you use Lore to Earn Income, if you roll a critical failure, you instead get a failure. If you’re an expert in Lore, you gain twice as much income from a failed check to Earn Income, unless it was originally a critical failure.",
    prerequesites: ["Trained in Lore"],
    source: SOURCES.CRB
  },
  {
    name: "Unmistakable Lore",
    level: "2",
    traits: ["General", "Skill", "Lore"],
    description:
      "You never get information about your areas of expertise wrong.\nWhen you Recall Knowledge using any Lore subcategory in which you’re trained, if you roll a critical failure, you get a failure instead. If you’re a master in a Lore subcategory, on a critical success, you gain even more information or context than usual",
    prerequesites: ["Expert in Lore"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Professional",
    level: "15",
    traits: ["General", "Skill", "Lore"],
    description:
      "Your fame has spread throughout the lands (for instance, if you have Warfare Lore, you might be a legendary general or tactician). This works as Legendary Performer above, except you gain higher-level jobs when you Earn Income with Lore.",
    prerequesites: ["Legendary in Lore"],
    source: SOURCES.CRB
  }
];

export const MEDICINE_FEATS = [
  {
    name: "Battle Medicine",
    level: "1",
    traits: ["General", "Skill", "Medicine"],
    description:
      "You can patch up yourself or an adjacent ally, even in combat.\nAttempt a Medicine check with the same DC as for Treat Wounds and provide the corresponding amount of Healing.\nAs with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day.",
    prerequesites: ["Trained in Medicine"],
    source: SOURCES.CRB
  },
  {
    name: "Continual Recovery",
    level: "2",
    traits: ["General", "Skill", "Medicine"],
    description:
      "You zealously monitor a patient’s progress to administer treatment faster. When you Treat Wounds, your patient becomes immune for only 10 minutes.",
    prerequesites: ["Expert in Medicine"],
    source: SOURCES.CRB
  },
  {
    name: "Robust Recovery",
    level: "2",
    traits: ["General", "Skill", "Medicine"],
    description:
      "You learned folk medicine to help recover from diseases and poison, and using it diligently has made you especially Resilient.\nWhen you Treat a Disease or a Poison, or someone else uses one of these actions on you, increase the circumstance bonus granted on a success to +4, and if the result of the patient’s saving throw is a success, the patient gets a critical success.",
    prerequesites: ["Expert in Medicine"],
    source: SOURCES.CRB
  },
  {
    name: "Ward Medic",
    level: "2",
    traits: ["General", "Skill", "Medicine"],
    description:
      "You’ve studied in large medical wards, treating several patients at once and tending to all their needs. When you use Treat Disease or Treat Wounds, you can treat up to two targets. If you’re a master in Medicine, you can treat up to four targets, and if you’re legendary, you can treat up to eight targets.",
    prerequesites: ["Expert in Medicine"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Medic",
    level: "15",
    traits: ["General", "Skill", "Medicine"],
    description:
      "You’ve discovered medical breakthroughs or techniques that achieve miraculous results. Once per day for each target, you can spend 1 hour treating that target and attempt a Medicine check to remove a disease or the blinded, deafened, doomed, or drained condition. Use the DC of the disease or of the spell or effect that created the condition. If the effect’s source is an artifact, above 20th level, or similarly powerful, increase the DC by 10.",
    prerequesites: ["Legendary in Medicine"],
    source: SOURCES.CRB
  }
];

export const NATURE_FEATS = [
  {
    name: "Natural Medicine",
    level: "1",
    traits: ["General", "Skill", "Nature"],
    description:
      "You can apply natural cures to heal your allies. You can use Nature instead of Medicine to Treat Wounds. If you’re in the wilderness, you might have easier access to fresh ingredients, allowing you to gain a +2 circumstance bonus to your check to Treat Wounds using Nature, subject to the GM’s determination.",
    prerequesites: ["Trained in Nature"],
    source: SOURCES.CRB
  },
  {
    name: "Train Animal",
    level: "1",
    traits: ["General", "Skill", "Nature"],
    description:
      "You spend time teaching an animal to do a certain action. You can either select a basic action the animal already knows how to do (typically those listed in the Command an Animal action) or attempt to teach the animal a new basic action. The GM determines the DC of any check required and the amount of time the training takes (usually at least a week). It’s usually impossible to teach an animal a trick that uses critical thinking.\nIf you’re expert, master, or legendary in Nature, you might be able to train more unusual creatures, at the GM’s discretion.\nSuccess The animal learns the action. If it was an action the animal already knew, you can Command the Animal to take that action without attempting a Nature check. If it was a new basic action, add that action to the actions the animal can take when Commanded, but you must still roll.\nFailure The animal doesn’t learn the trick.",
    prerequesites: ["Trained in Nature"],
    source: SOURCES.CRB
  },
  {
    name: "Bonded Animal",
    level: "2",
    traits: ["General", "Skill", "Nature"],
    description:
      "You forge strong connections with animals. You can spend 7 days of downtime trying to bond with a normal animal (not a companion or other special animal). After this duration, attempt a DC 20 Nature check. If successful, you bond with the animal. The animal is permanently helpful to you, unless you do something egregious to break your bond. A helpful animal is easier to direct, as described under Command an Animal.\nBonding with a new animal ends any previous bond you had.\nYou can’t have both a bonded animal and an animal companion (though you can have both a bonded animal and a familiar).",
    prerequesites: ["Expert in Nature"],
    source: SOURCES.CRB
  }
];

export const OCCULT_FEATS = [
  {
    name: "Oddity Identification",
    level: "1",
    traits: ["General", "Skill", "Occultism"],
    description:
      "You have a sense for spells that twist minds or reveal secrets. You gain a +2 circumstance bonus to Occultism checks to Identify Magic with the mental, possession, prediction, or Scrying traits.",
    prerequesites: ["Trained in Occultism"],
    source: SOURCES.CRB
  },
  {
    name: "Bizarre Magic",
    level: "7",
    traits: ["General", "Skill", "Occultism"],
    description:
      "You can draw upon strange variations in your spellcasting, whether or not you can cast occult spells. The DCs to Recognize Spells you cast and Identify Magic you use increase by 5.",
    prerequesites: ["Master in Occultism"],
    source: SOURCES.CRB
  }
];

export const PERFORMANCE_FEATS = [
  {
    name: "Fascinating Performance",
    level: "1",
    traits: ["General", "Skill", "Performance"],
    description:
      "When you Perform, compare your result to the Will DC of one observer. If you succeed, the target is fascinated by you for 1 round. If the observer is in a situation that demands immediate attention, such as combat, you must critically succeed to fascinate it and the Performance action gains the incapacitation trait. You must choose which creature you’re trying to fascinate before you roll your check, and the target is then temporarily immune for 1 hour.\nIf you’re an expert in Performance, you can fascinate up to four observers; if you’re a master, you can fascinate up to 10 observers; and if you’re legendary, you can fascinate any number of observers at the same time.",
    prerequesites: ["Trained in Performance"],
    source: SOURCES.CRB
  },
  {
    name: "Impressive Performance",
    level: "1",
    traits: ["General", "Skill", "Performance"],
    description:
      "Your performances inspire admiration and win you fans. You can Make an Impression using Performance instead of Diplomacy.",
    prerequesites: ["Trained in Performance"],
    source: SOURCES.CRB
  },
  {
    name: "Virtuosic Performer",
    level: "1",
    traits: ["General", "Skill", "Performance"],
    description:
      "You have exceptional talent with one type of performance. You gain a +1 circumstance bonus when making a certain type of performance. If you are a master in Performance, this bonus increases to +2. Select one of the following specialties and apply the bonus when attempting Performance checks of that type. If it’s unclear whether the specialty applies, the GM decides.",
    prerequesites: ["Trained in Performance"],
    source: SOURCES.CRB,
    url: "https://pf2.d20pfsrd.com/feat/Virtuosic-Performer"
  },
  {
    name: "Legendary Performer",
    level: "15",
    traits: ["General", "Skill", "Performance"],
    description:
      "Your fame has spread throughout the lands. NPCs who succeed at a DC 10 Society check to Recall Knowledge have heard of you and usually have an attitude toward you one step better than normal, depending on your reputation and the NPC’s disposition.\nFor instance, if you’re well-known for cruel and demanding behavior, creatures might be intimidated by you, rather than be friendly toward you. When you Earn Income with Performance, you attract higher-level audiences than your location would allow, as audiences flock to see you. For instance, rulers and angels might travel to your small tower in the woods to hear you perform. Typically, this increases the audiences available by 2 levels or more, determined by the GM.",
    prerequesites: ["Legendary in Performance", "Virtuosic Performer"],
    source: SOURCES.CRB
  }
];

export const RELIGION_FEATS = [
  {
    name: "Student of the Canon",
    level: "1",
    traits: ["General", "Skill", "Religion"],
    description:
      "You’ve researched many faiths enough to recognize notions about them that are unlikely to be true. If you roll a critical failure at a Religion check to Decipher Writing of a religious nature or to Recall Knowledge about the tenets of faiths, you get a failure instead. When attempting to Recall Knowledge about the tenets of your own faith, if you roll a failure, you get a success instead, and if you roll a success, you get a critical success instead.",
    prerequesites: ["Trained in Religion"],
    source: SOURCES.CRB
  },
  {
    name: "Divine Guidance",
    level: "15",
    traits: ["General", "Skill", "Religion"],
    description:
      "You’re so immersed in divine scripture that you find meaning and guidance in your texts in any situation. Spend 10 minutes Deciphering Writing on religious scriptures of your deity or philosophy while thinking about a particular problem or conundrum you face, and then attempt a Religion check (DC determined by the GM). If you succeed, you unearth a relevant passage, parable, or aphorism that can help you move forward or change your thinking to help solve your conundrum. For example, the GM might provide you with a cryptic poem or hint that can guide you to the next step of solving your problem.",
    prerequesites: ["Legendary in Religion"],
    source: SOURCES.CRB
  }
];

export const SOCIETY_FEATS = [
  {
    name: "Courtly Graces",
    level: "1",
    traits: ["General", "Skill", "Society"],
    description:
      "You were raised among the nobility or have learned proper etiquette and bearing, allowing you to present yourself as a noble and play games of influence and politics. You can use Society to Make an Impression on a noble, as well as with Impersonate to pretend to be a noble if you aren’t one. If you want to impersonate a specific noble, you still need to use Deception to Impersonate normally, and to Lie when necessary.",
    prerequesites: ["Trained in Society"],
    source: SOURCES.CRB
  },
  {
    name: "Multilingual",
    level: "1",
    traits: ["General", "Skill", "Society"],
    description:
      "You easily pick up new languages. You learn two new languages, chosen from common languages, uncommon languages, and any others you have access to. You learn an additional language if you are or become a master in Society and again if you are or become legendary.",
    prerequesites: ["Trained in Society"],
    source: SOURCES.CRB,
    special:
      "You can select this feat multiple times. Each time, you learn additional languages."
  },
  {
    name: "Read Lips",
    level: "1",
    traits: ["General", "Skill", "Society"],
    description:
      "You can read lips of others nearby who you can clearly see. When you’re at your leisure, you can do this automatically. In encounter mode or when attempting a more difficult feat of lipreading, you’re fascinated and flat-footed during each round in which you focus on lip movements, and you must succeed at a Society check (DC determined by the GM) to successfully read someone’s lips. In either case, the language read must be one that you know.\nIf you are deaf or hard of hearing and have Read Lips, you recognize the lip movements for the spoken form of your languages. You can also speak the spoken form of your languages clearly enough for others to understand you.",
    prerequesites: ["Trained in Society"],
    source: SOURCES.CRB
  },
  {
    name: "Sign Language",
    level: "1",
    traits: ["General", "Skill", "Society"],
    description:
      "You learn the sign languages associated with the languages you know, allowing you to sign and understand signs. Sign languages typically require both hands to convey more complex concepts, and they are visual rather than auditory.\nSign language is difficult to understand during combat due to the level of attention needed, unlike basic gestures like pointing at a foe to suggest a target. Sign language is hard to use in areas of low visibility, just like speech is difficult in a noisy environment.",
    prerequesites: ["Trained in Society"],
    source: SOURCES.CRB
  },
  {
    name: "Streetwise",
    level: "1",
    traits: ["General", "Skill", "Society"],
    description:
      "You know about life on the streets and feel the pulse of your local settlement. You can use your Society modifier instead of your Diplomacy modifier to Gather Information. In any settlement you frequent regularly, you can use the Recall Knowledge action with Society to know the same sorts of information that you could discover with Diplomacy to Gather Information. The DC is usually significantly higher, but you know the information without spending time gathering it. If you fail to recall the information, you can still subsequently attempt to Gather Information normally.",
    prerequesites: ["Trained in Society"],
    source: SOURCES.CRB
  },
  {
    name: "Connections",
    level: "2",
    traits: ["General", "Skill", "Society"],
    description:
      "You have social connections you can leverage to trade favors or meet important people. When you’re in an area with connections (typically a settlement where you’ve spent downtime building connections, or possibly another area in the same nation), you can attempt a Society check to arrange a meeting with an important political figure or ask for a favor in exchange for a later favor of your contact’s choice. The GM decides the DC based on the difficulty of the favor and the figure’s prominence.",
    prerequesites: ["Expert in Society", "Courtly Graces"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Codebreaker",
    level: "15",
    traits: ["General", "Skill", "Society"],
    description:
      "Your skill with languages and codes is so great that you can decipher information with little more than a quick read through a text. You can Decipher Writing using Society while reading at normal speed. If you slow down and spend the full amount of time that’s ordinarily required and roll a success, you get a critical success; if you critically succeed while spending the normal amount of time, you gain a nearly word-for-word understanding of the document.",
    prerequesites: ["Legendary in Society"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Linguist",
    level: "1",
    traits: ["General", "Skill", "Society"],
    description:
      "You’re so skilled with languages you can create a pidgin instantly.\nYou can always talk to any creature that has a language—even a language you don’t know— by creating a new pidgin language that uses simplified terms and conveys basic concepts. To do so, you must first understand at least what medium of communication the creature uses (speech, sign language, and so on).",
    prerequesites: ["Legendary in Society", "Multilingual"],
    source: SOURCES.CRB
  }
];

export const STEALTH_FEATS = [
  {
    name: "Experienced Smuggler",
    level: "1",
    traits: ["General", "Skill", "Stealth"],
    description:
      "You often smuggle things past the authorities. When the GM rolls your Stealth check to see if a passive observer notices a small item you have concealed, the GM uses the number rolled or 10—whichever is higher—as the result of your die roll, adding it to your Stealth modifier to determine your Stealth check result.\nIf you’re a master in Stealth, the GM uses the number rolled or 15, and if you’re legendary in Stealth, you automatically succeed at hiding a small concealed item from passive observers. This provides no benefits when a creature attempts a Perception check while actively searching you for hidden items. Due to your smuggling skill, you’re more likely to find more lucrative smuggling jobs when using Underworld Lore to Earn Income.",
    prerequesites: ["Trained in Stealth"],
    source: SOURCES.CRB
  },
  {
    name: "Terrain Stalker",
    level: "1",
    traits: ["General", "Skill", "Stealth"],
    description:
      "Select one type of difficult terrain from the following list: rubble, snow, or underbrush. While undetected by all non-allies in that type of terrain, you can Sneak without attempting a Stealth check as long as you move no more than 5 feet and do not move within 10 feet of an enemy at any point during your movement. This also allows you to automatically approach creatures to within 15 feet while Avoiding Notice during exploration as long as they aren’t actively Searching or on guard.",
    prerequesites: ["Trained in Stealth"],
    source: SOURCES.CRB,
    special:
      "You can select this feat multiple times. Each time, choose a different type of terrain."
  },
  {
    name: "Quiet Allies",
    level: "2",
    traits: ["General", "Skill", "Stealth"],
    description:
      "You’re skilled at moving with a group. When you are Avoiding Notice and your allies Follow the Expert, you and those allies can roll a single Stealth check, using the lowest modifier, instead of rolling separately. This doesn’t apply for initiative rolls.",
    prerequesites: ["Expert in Stealth"],
    source: SOURCES.CRB
  },
  {
    name: "Foil Senses",
    level: "7",
    traits: ["General", "Skill", "Stealth"],
    description:
      "You are adept at foiling creatures’ special senses and cautious enough to safeguard against them at all times. Whenever you use the Avoid Notice, Hide, or Sneak actions, you are always considered to be taking precautions against special senses (see the Detecting with Other Senses sidebar).",
    prerequesites: ["Master in Stealth"],
    source: SOURCES.CRB
  },
  {
    name: "Swift Sneak",
    level: "7",
    traits: ["General", "Skill", "Stealth"],
    description:
      "You can move your full Speed when you Sneak. You can use Swift Sneak while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
    prerequesites: ["Master in Stealth"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Sneak",
    level: "15",
    traits: ["General", "Skill", "Stealth"],
    description:
      "You’re always sneaking unless you choose to be seen, even when there’s nowhere to hide. You can Hide and Sneak even without cover or being concealed. When you employ an exploration tactic other than Avoiding Notice, you also gain the benefits of Avoiding Notice unless you choose not to.",
    prerequesites: ["Legendary in Stealth", "Swift Sneak"],
    source: SOURCES.CRB
  }
];

export const SURVIVAL_FEATS = [
  {
    name: "Experienced Tracker",
    level: "1",
    traits: ["General", "Skill", "Survival"],
    description:
      "Tracking is second nature to you, and when necessary you can follow a trail without pause. You can Track while moving at full Speed by taking a -5 penalty to your Survival check.\nIf you’re a master in Survival, you don’t take the -5 penalty.\nIf you’re legendary in Survival, you no longer need to roll a new Survival check every hour when tracking, though you still need to roll whenever there are significant changes in the trail.",
    prerequesites: ["Trained in Survival"],
    source: SOURCES.CRB
  },
  {
    name: "Forager",
    level: "1",
    traits: ["General", "Skill", "Survival"],
    description:
      "While using Survival to Subsist, if you roll any result worse than a success, you get a success. On a success, you can provide subsistence living for yourself and four additional creatures, and on a critical success, you can take care of twice as many creatures as on a success.\nEach time your proficiency rank in Survival increases, double the number of additional creatures you can take care of on a success (to eight if you’re an expert, 16 if you’re a master, or 32 if you’re legendary). You can choose to care for half the number of additional creatures and provide a comfortable living instead of subsistence living.\nMultiple smaller creatures or creatures with significantly smaller appetites than a human are counted as a single creature for this feat, and larger creatures or those with significantly greater appetites each count as multiple creatures. The GM determines how much a non-human creature needs to eat.",
    prerequesites: ["Trained in Survival"],
    source: SOURCES.CRB
  },
  {
    name: "Survey Wildlife",
    level: "1",
    traits: ["General", "Skill", "Survival"],
    description:
      "You can study details in the wilderness to determine the presence of nearby creatures. You can spend 10 minutes assessing the area around you to find out what creatures are nearby, based on nests, scat, and marks on vegetation.\nAttempt a Survival check against a DC determined by the GM based on how obvious the signs are. On a success, you can attempt a Recall Knowledge check with a -2 penalty to learn more about the creatures just from these signs. If you’re a master in Survival, you don’t take the penalty.",
    prerequesites: ["Trained in Survival"],
    source: SOURCES.CRB
  },
  {
    name: "Terrain Expertise",
    level: "1",
    traits: ["General", "Skill", "Survival"],
    description:
      "Your experience in navigating a certain type of terrain makes you supremely confident while doing so. You gain a +1 circumstance bonus to Survival checks in one of the following types of terrain, chosen when you select this feat: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground.",
    prerequesites: ["Trained in Survival"],
    source: SOURCES.CRB,
    special:
      "You can select this feat more than once, choosing a different type of terrain each time."
  },
  {
    name: "Planar Survival",
    level: "7",
    traits: ["General", "Skill", "Survival"],
    description:
      "You can Subsist using Survival on different planes, even those without resources or natural phenomena you normally need.\nFor instance, you can forage for food even if the plane lacks food that could normally sustain you. A success on your check to Subsist can also reduce the damage dealt by the plane, at the GM’s discretion.",
    prerequesites: ["Master in Survival"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Survivalist",
    level: "1",
    traits: ["General", "Skill", "Survival"],
    description:
      "You can survive indefinitely without food or water and can endure severe, extreme, and incredible cold and heat without taking damage from doing so.",
    prerequesites: ["Legendary in Survival"],
    source: SOURCES.CRB
  }
];

export const THIEVERY_FEATS = [
  {
    name: "Pickpocket",
    level: "1",
    traits: ["General", "Skill", "Thievery"],
    description:
      "You can Steal or Palm an Object that’s closely guarded, such as in a pocket, without taking the -5 penalty. You can’t steal objects that would be extremely noticeable or time consuming to remove (like worn shoes or armor or actively wielded objects). If you’re a master in Thievery, you can attempt to Steal from a creature in combat or otherwise on guard. When doing so, Stealing requires 2 manipulate actions instead of 1, and you take a -5 penalty.",
    prerequesites: ["Trained in Thievery"],
    source: SOURCES.CRB
  },
  {
    name: "Subtle Theft",
    level: "1",
    traits: ["General", "Skill", "Thievery"],
    description:
      "When you successfully Steal something, observers (creatures other than the creature you stole from) take a -2 circumstance penalty to their Perception DCs to detect your theft.\nAdditionally, if you first Create a Diversion using Deception, taking a single Palm an Object or Steal action doesn’t end your undetected condition.",
    prerequesites: ["Trained in Thievery"],
    source: SOURCES.CRB
  },
  {
    name: "Wary Disarmament",
    level: "2",
    traits: ["General", "Skill", "Thievery"],
    description:
      "If you trigger a device or set off a trap while disarming it, you gain a +2 circumstance bonus to your AC or saving throw against the device or trap. This applies only to attacks or effects triggered by your failed attempt, not to any later ones, such as additional attacks from a complex trap.",
    prerequesites: ["Expert in Thievery"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Unlock",
    level: "7",
    traits: ["General", "Skill", "Thievery"],
    description: "You can Pick a Lock using 1 action instead of 2.",
    prerequesites: ["Master in Thievery"],
    source: SOURCES.CRB
  },
  {
    name: "Legendary Thief",
    level: "15",
    traits: ["General", "Skill", "Thievery"],
    description:
      "Your ability to Steal defies belief. You can attempt to Steal something that is actively wielded or that would be extremely noticeable or time consuming to remove (like worn shoes or armor). You must do so slowly and carefully, spending at least 1 minute (and significantly longer for items that are normally time consuming to remove, like armor). Throughout this duration you must have some means of staying hidden, such as the cover of darkness or a bustling crowd. You take a -5 penalty to your Thievery check. Even if you succeed, if the item is extremely prominent—like a suit of full plate armor—onlookers will quickly notice it’s gone after you steal it.",
    prerequesites: ["Legendary in Thievery", "Pickpocket"],
    source: SOURCES.CRB
  }
];

//   {
//     name: "",
//     level: "1",
//     traits: ["General", "Skill"],
//     description: "",
//     prerequesites: [],
//     source: SOURCES.CRB
//   }
