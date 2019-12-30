const SOURCES = {
  CRB: "Core Rulebook",
  LOCG: "Lost Omens Character Guide"
};

export const ALCHEMIST_FEATS = [
  {
    name: "Alchemical Familiar",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood. This alchemical familiar appears to be a small creature of flesh and blood, though it might have some unusual or distinguishing aspects depending on your creative process. Like other familiars, your alchemical familiar assists you in your laboratory and on adventures. The familiar uses your Intelligence modifier to determine its Perception, Acrobatics, and Stealth modifiers (see Familiars for more information.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Alchemical Savant",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You can identify alchemical items quickly. When using the Crafting skill to Identify Alchemy on an alchemical item you hold, you can do so as a single action, which has the concentrate and manipulate traits, instead of spending 10 minutes. If you have the formula for the item you are attempting to identify, you gain a +2 circumstance bonus to your check, and if you roll a critical failure, you get a failure instead.",
    prerequesites: ["Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Far Lobber",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You’ve learned how to throw a longer distance. When you throw an alchemical bomb, it has a range increment of 30 feet instead of the usual 20 feet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Quick Bomber [one-action]",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You keep your bombs in easy-to-reach pouches from which you draw without thinking. You Interact to draw a bomb, then Strike with it.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const BARBARIAN_FEATS = [
  {
    name: "Acute Vision",
    level: "1",
    traits: ["Barbarian"],
    description:
      "When you are raging, your visual senses improve, granting you darkvision.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Moment of Clarity",
    level: "1",
    traits: ["Barbarian", "Concentrate", "Rage"],
    description:
      "You push back your rage for a moment in order to think clearly. Until the end of this turn, you can use actions with the concentrate trait even if those actions don’t have the rage trait.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Raging Intimidation",
    level: "1",
    traits: ["Barbarian"],
    description:
      "Your fury fills your foes with fear. While you are raging, your Demoralize and Scare to Death actions (from the Intimidation skill and an Intimidation skill feat, respectively) gain the rage trait, allowing you to use them while raging. As soon as you meet the prerequisites for the skill feats Intimidating Glare and Scare to Death, you gain these feats.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Raging Thrower",
    level: "1",
    traits: ["Barbarian"],
    description:
      "Thrown weapons become especially deadly in your fury. You apply the additional damage from Rage to your thrown weapon attacks. If you have the Brutal Critical feat or the devastator class feature, apply their benefits to thrown weapon attacks.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Sudden Charge",
    level: "1",
    traits: ["Barbarian", "Fighter", "Flourish", "Open"],
    description:
      "With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const BARD_FEATS = [
  {
    name: "Bardic Lore",
    level: "1",
    traits: ["Bard"],
    description:
      "Prerequisite(s) enigma muse\nYour studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.",
    prerequesites: ["Enigma Muse"],
    source: SOURCES.CRB
  },
  {
    name: "Lingering Composition",
    level: "1",
    traits: ["Bard"],
    description:
      "Prerequisite(s) maestro muse, focus pool\nBy adding a flourish, you make your compositions last longer.\nYou learn the lingering composition focus spell.\nIncrease the number of Focus Points in your focus pool by 1.",
    prerequesites: ["maestro muse", "focus pool"],
    source: SOURCES.CRB
  },
  {
    name: "Reach Spell",
    level: "1",
    traits: [
      "Bard",
      "Cleric",
      "Concentrate",
      "Druid",
      "Metamagic",
      "Sorcerer",
      "Wizard"
    ],
    description:
      "You can extend your spells’ range. If the next action you use is to Cast a Spell that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Versatile Performance",
    level: "1",
    traits: ["Bard"],
    description:
      "Prerequisite(s) polymath muse\nYou can rely on the grandeur of your performances rather than ordinary social skills.\nYou can use Performance instead of Diplomacy to Make an Impression and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate. You can use your proficiency rank in Performance to meet the requirements of skill feats that require a particular rank in Deception, Diplomacy, or Intimidation.",
    prerequesites: ["polymath muse"],
    source: SOURCES.CRB
  }
];

export const CHAMPION_FEATS = [
  {
    name: "Deity's Domain",
    level: "1",
    traits: ["Champion"],
    description:
      "You embody an aspect of your deity. Choose one of your deity’s domains from those listed on page 441. You gain the domain’s initial domain spell as a devotion spell.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ranged Reprisal",
    level: "1",
    traits: ["Champion"],
    description:
      "You can use Retributive Strike with a ranged weapon. In addition, if the foe that triggered your reaction is within 5 feet of your reach but not in your reach, as part of your reaction you can Step to put the foe in your reach before making a melee Retributive Strike.",
    prerequesites: ["paladin cause"],
    source: SOURCES.CRB
  },
  {
    name: "Unimpeded Step",
    level: "1",
    traits: ["Champion"],
    description:
      "With a burst of divine liberation, your ally’s movement from your Liberating Step is unaffected by difficult terrain, greater difficult terrain, narrow surfaces, and uneven ground.",
    prerequesites: ["liberator cause"],
    source: SOURCES.CRB
  },
  {
    name: "Weight of Guilt",
    level: "1",
    traits: ["Champion"],
    description:
      "Guilt clouds the minds of those who ignore your Glimpse of Redemption. Instead of making the triggering creature enfeebled 2, you can make it stupefied 2 for the same duration.",
    prerequesites: ["redeemer cause"],
    source: SOURCES.CRB
  }
];

export const CLERIC_FEATS = [
  {
    name: "Deadly Simplicity",
    level: "1",
    traits: ["Cleric"],
    description:
      "Prerequisite(s) deity with a simple favored weapon, trained with your deity’s favored weapon\nYour deity’s weapon is especially powerful in your hands.\nWhen you are wielding your deity’s favored weapon, increase the damage die size of that weapon by one step.\nIf your deity’s favored weapon is an unarmed attack (such as a fist, if you worship The God of Enlightenment, Self-Perfection, Knowledge, Healing, and Inner Strength) and its damage die is smaller than d6, instead increase its damage die size to d6.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Domain Initiate",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your deity bestows a special spell related to their powers.\nSelect one domain—a subject of particular interest to you within your religion—from your deity’s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics. Each domain’s theme and domain spells appear in Table 8–2: Domains.\nDomain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.\nFocus spells are automatically heightened to half your level rounded up. Focus spells don’t require spell slots, nor can you cast them using spell slots. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points.\nSpecial You can select this feat multiple times, selecting a different domain each time and gaining its domain spell.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Harming Hands",
    level: "1",
    traits: ["Cleric"],
    description:
      "Prerequisite(s) harmful font\nThe mordant power of your negative energy grows. When you cast harm, you roll d10s instead of d8s.",
    prerequesites: ["harmful font"],
    source: SOURCES.CRB
  },
  {
    name: "Healing Hands",
    level: "1",
    traits: ["Cleric"],
    description:
      "Prerequisite(s) Healing font\nYour Positive energy is even more vibrant and restorative.\nWhen you cast heal, you roll d10s instead of d8s.",
    prerequesites: ["Healing font"],
    source: SOURCES.CRB
  },
  {
    name: "Holy Castigation",
    level: "1",
    traits: ["Cleric"],
    description:
      "Prerequisite(s) good alignment\nYou combine holy energy with Positive energy to damage demons, devils, and their evil ilk. Heal spells you cast damage fiends as though they were undead.",
    prerequesites: ["good alignment"],
    source: SOURCES.CRB
  }
];

export const DRUID_FEATS = [
  {
    name: "Animal Companion",
    level: "1",
    traits: ["Druid", "Ranger"],
    description:
      "Prerequisite(s) animal order\nYou gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions for more information.",
    prerequesites: ["animal order"],
    source: SOURCES.CRB
  },
  {
    name: "Leshy Familiar",
    level: "1",
    traits: ["Druid"],
    description:
      "Prerequisite(s) leaf order\nYou gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars.",
    prerequesites: ["leaf order"],
    source: SOURCES.CRB
  },
  {
    name: "Storm Born",
    level: "1",
    traits: ["Druid"],
    description:
      "Prerequisite(s) storm order\nYou are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or Perception checks caused by weather, and your targeted spells don’t require a flat check to succeed against a target concealed by weather (such as fog).",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Widen Spell",
    level: "1",
    traits: ["Druid", "Manipulate", "Metamagic", "Sorcerer", "Wizard"],
    description:
      "You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Wild Shape",
    level: "1",
    traits: ["Druid"],
    description:
      "Prerequisite(s) wild order\nYou are one with the wild, always changing and adapting to meet any challenge. You gain the wild shape order spell, which lets you transform into a variety of forms that you can expand with druid feats.",
    prerequesites: ["wild order"],
    source: SOURCES.CRB
  }
];

export const FIGHTER_FEATS = [
  {
    name: "Double Slice",
    level: "1",
    traits: ["Fighter"],
    description:
      "You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty.\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Exacting Strike",
    level: "1",
    traits: ["Fighter", "Press"],
    description:
      "You make a controlled attack, fully accounting for your momentum. Make a Strike. The Strike gains the following failure effect.Failure This attack does not count toward your multiple attack penalty.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Point-Blank Shot",
    level: "1",
    traits: ["Fighter", "Open", "Stance"],
    requirements: "You are wielding a ranged weapon.",
    description:
      "You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait.\nWhen using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Power Attack",
    level: "1",
    traits: ["Fighter", "Flourish"],
    description:
      "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Reactive Shield",
    level: "1",
    traits: ["Fighter"],
    description:
      "You can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the Raise a Shield action and gain your shield’s bonus to AC. The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Snagging Strike",
    level: "1",
    traits: ["Fighter"],
    description:
      "You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a Strike while keeping one hand free. If this Strike hits, the target is flat-footed until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const MONK_FEATS = [
  {
    name: "Crane Stance",
    level: "1",
    traits: ["Monk"],
    description:
      "You enter the stance of a crane, holding your arms in an imitation of a crane’s wings and using flowing, defensive motions. You gain a +1 circumstance bonus to AC, but the only Strikes you can make are crane wing attacks. These deal 1d6 bludgeoning damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.\nWhile in Crane Stance, reduce the DC for High Jump and Long Jump by 5, and when you Leap, you can move an additional 5 feet horizontally or 2 feet vertically.",
    prerequesites: ["Unarmored"],
    source: SOURCES.CRB
  },
  {
    name: "Dragon Stance",
    level: "1",
    traits: ["Monk"],
    description:
      "You enter the stance of a dragon and make powerful leg strikes like a lashing dragon’s tail. You can make dragon tail attacks that deal 1d10 bludgeoning damage. They are in the brawling group and have the backswing, nonlethal, and unarmed traits.\nWhile in Dragon Stance, you can ignore the first square of difficult terrain while Striding.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ki Rush",
    level: "1",
    traits: ["Monk"],
    description:
      "You can use ki to move with extraordinary speed and make yourself harder to hit. You gain the ki rush ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ki Strike",
    level: "1",
    traits: ["Monk"],
    description:
      "Your study of the flow of mystical energy allows you to harness it into your physical strikes.\nYou gain the ki strike ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Monastic Weaponry",
    level: "1",
    traits: ["Monk"],
    description:
      "You have trained with the traditional weaponry of your monastery or school. You gain access to uncommon weapons that have the monk trait and become trained in simple and martial monk weapons. When your proficiency rank for unarmed attacks increases to expert or master, your proficiency rank for these weapons increases to expert or master as well.\nYou can use melee monk weapons with any of your monk feats or monk abilities that normally require unarmed attacks, though not if the feat or ability requires you to use a single specific type of attack, such as Crane Stance.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Mountain Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    trigger: "You are unarmored and touching the ground.",
    description:
      "You enter the stance of an implacable mountain—a technique first discovered by dwarven monks—allowing you to strike with the weight of an avalanche. The only Strikes you can make are falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the forceful, nonlethal, and unarmed traits.\nWhile in Mountain Stance, you gain a +4 status bonus to AC and a +2 circumstance bonus to any defenses against being Shoved or Tripped. However, you have a Dexterity modifier cap to your AC of +0, meaning you don’t add your Dexterity to your AC, and your Speeds are all reduced by 5 feet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Tiger Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    description:
      "You enter the stance of a tiger and can make tiger claw attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits. On a critical success with your tiger claws, if you deal damage, the target takes 1d4 persistent bleed damage.\nAs long as your Speed is at least 20 feet while in Tiger Stance, you can Step 10 feet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Wolf Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    description:
      "You enter the stance of a wolf, low to the ground with your hands held like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8 piercing damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits.\nIf you’re flanking a target while in Wolf Stance, your wolf jaw unarmed attacks also gain the trip trait.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const RANGER_FEATS = [
  {
    name: "Crossbow Ace",
    level: "1",
    traits: ["Ranger"],
    description:
      "You have a deep understanding of the crossbow. When you’re wielding a crossbow and use Hunt Prey or use Interact to reload your crossbow, you gain a +2 circumstance bonus to the damage roll on your next Strike with that crossbow. If the crossbow is a simple crossbow, also increase the damage die size for that attack by one step (page 279). You must make the attack before the end of your next turn or these benefits are lost.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Hunted Shot",
    level: "1",
    traits: ["Ranger", "Flourish"],
    description:
      "You take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Monster Hunter",
    level: "1",
    traits: ["Ranger"],
    description:
      "You swiftly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to Recall Knowledge about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature’s defenses. You and allies you tell gain a +1 circumstance bonus to your next attack roll against that prey. You can give bonuses from Monster Hunter only once per day against a particular creature.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Twin Takedown",
    level: "1",
    traits: ["Ranger", "Flourish"],
    description:
      "You swiftly attack your hunted prey with both weapons. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const ROGUE_FEATS = [
  {
    name: "Nimble Dodge",
    level: "1",
    traits: ["Rogue"],
    trigger:
      "A creature targets you with an attack and you can see the attacker.",
    requirements: "You are not encumbered.",
    description:
      "You deftly dodge out of the way, gaining a +2 circumstance bonus to AC against the triggering attack.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Trap Finder",
    level: "1",
    traits: ["Rogue"],
    description:
      "You have an intuitive sense that alerts you to the dangers and presence of traps. You gain a +1 circumstance bonus to Perception checks to find traps, to AC against attacks made by traps, and to saves against traps. Even if you aren’t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.\nYou can disable traps that require a proficiency rank of master in Thievery. If you have master proficiency in Thievery, you can disable traps that require a proficiency rank of legendary instead, and your circumstance bonuses against traps increase to +2.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Twin Feint",
    level: "1",
    traits: ["Rogue"],
    requirements:
      "You are wielding two melee weapons, each in a different hand.",
    description:
      "You make a dazzling series of attacks with both weapons, using the first attack to throw your foe off guard against a second attack at a different angle. Make one Strike with each of your two melee weapons, both against the same target. The target is automatically flat?footed against the second attack. Apply your multiple attack penalty to the Strikes normally.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "You're Next",
    level: "1",
    traits: ["Rogue"],
    trigger: "You reduce an enemy to 0 hit points.",
    description:
      "After downing a foe, you menacingly remind another foe that you’re coming after them next. Attempt an Intimidation check with a +2 circumstance bonus to Demoralize a single creature that you can see and that can see you. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger.",
    prerequesites: ["trained in Intimidation"],
    source: SOURCES.CRB
  }
];

export const SORCERER_FEATS = [
  {
    name: "Counterspell (Spontaneous)",
    level: "1",
    traits: ["Sorcerer"],
    prerequesites: [],
    source: SOURCES.CRB,
    trigger: "A creature casts a spell that you have in your repertoire.",
    requirements:
      "You have an unexpended spell slot you could use to cast the triggering spell",
    description:
      "When a foe Casts a Spell you know and you can see its manifestations, you can use your own magic to disrupt it.\nYou expend one of your spell slots to counter the triggering creature’s casting of a spell that you have in your repertoire.\nYou lose your spell slot as if you had cast the triggering spell.\nYou then attempt to counteract the triggering spell."
  },
  {
    name: "Dangerous Sorcery",
    level: "1",
    traits: ["Sorcerer"],
    description:
      "Your legacy grants you great destructive power. When you Cast a Spell from your spell slots, if the spell deals damage and doesn’t have a duration, you gain a status bonus to that spell’s damage equal to the spell’s level.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Familiar",
    level: "1",
    traits: ["Sorcerer", "Wizard"],
    description:
      "You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217).",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const WIZARD_FEAS = [
  {
    name: "Counterspell (Prepared)",
    level: "1",
    traits: ["Wizard", "Abjuration", "Arcane"],
    trigger: "A creature Casts a Spell that you have prepared.",
    description:
      "When a foe Casts a Spell and you can see its manifestations, you can use your own magic to disrupt it. You expend a prepared spell to counter the triggering creature’s casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Eschew Materials",
    level: "1",
    traits: ["Wizard"],
    description:
      "You can use clever workarounds to replicate the arcane essence of certain materials. When Casting a Spell that requires material components, you can provide these material components without a spell component pouch by drawing intricate replacement sigils in the air. Unlike when providing somatic components, you still must have a hand completely free. This doesn’t remove the need for any materials listed in the spell’s cost entry.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Hand of the Apprentice",
    level: "1",
    traits: ["Wizard"],
    description:
      "You can magically hurl your weapon at your foe. You gain the hand of the apprentice universalist spell. Universalist spells are a type of focus spell, much like school spells. You start with a focus pool of 1 Focus Point. See Arcane Schools for more information about focus spells.",
    prerequesites: ["Universalist Wizard"],
    source: SOURCES.CRB
  }
];
