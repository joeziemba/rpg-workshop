const SOURCES = {
  CRB: "Core Rulebook",
  LOCG: "Lost Omens Character Guide",
  FPS: "Fall of Plaguestone"
};

export const ALCHEMIST_FEATS = [
  {
    name: "Alchemical Familiar",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood. This alchemical familiar appears to be a small creature of flesh and blood, though it might have some unusual or distinguishing aspects depending on your creative process. Like other familiars, your alchemical familiar assists you in your laboratory and on adventures. The familiar uses your Intelligence modifier to determine its Perception, Acrobatics, and Stealth modifiers (see Familiars for more information.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Alchemical Savant",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You can identify alchemical items quickly. When using the Crafting skill to Identify Alchemy on an alchemical item you hold, you can do so as a single action, which has the concentrate and manipulate traits, instead of spending 10 minutes. If you have the formula for the item you are attempting to identify, you gain a +2 circumstance bonus to your check, and if you roll a critical failure, you get a failure instead.",
    prerequisites: ["Crafting"],
    source: SOURCES.CRB
  },
  {
    name: "Far Lobber",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You’ve learned how to throw a longer distance. When you throw an alchemical bomb, it has a range increment of 30 feet instead of the usual 20 feet.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Quick Bomber [one-action]",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You keep your bombs in easy-to-reach pouches from which you draw without thinking. You Interact to draw a bomb, then Strike with it.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Poison Resistance",
    level: "2",
    traits: ["Alchemist", "Druid"],
    description:
      "Your body has become fortified against toxins. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Revivifying Mutagen",
    level: "2",
    traits: ["Alchemist"],
    description:
      "While under the effect of a mutagen, you can metabolize that mutagen’s power to heal yourself. This uses a single action, which has the concentrate and manipulate traits. Once the action is complete, you regain 1d6 Hit Points for every 2 item levels of the mutagen (minimum 1d6), but the mutagen’s duration immediately ends, even if you are under the effect of Persistent Mutagen.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Smoke Bomb [one action]",
    level: "2",
    traits: ["Alchemist", "Additive 1"],
    description:
      "You cause the bomb to create a cloud of thick smoke, in addition to its normal effects. When thrown, the bomb creates a cloud of smoke in a 10-foot-radius burst. You choose which corner of the target’s space (or the space in which the bomb lands) the cloud is centered on. Creatures within that area have the concealed condition, and all other creatures are concealed to them. The smoke lasts for 1 minute or until dissipated by a strong wind.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You use Quick Alchemy to craft an alchemical bomb with a level at least 1 lower than your advanced alchemy level.",
    frequency: "once per round"
  }
];

export const BARBARIAN_FEATS = [
  {
    name: "Acute Vision",
    level: "1",
    traits: ["Barbarian"],
    description:
      "When you are raging, your visual senses improve, granting you darkvision.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Moment of Clarity",
    level: "1",
    traits: ["Barbarian", "Concentrate", "Rage"],
    description:
      "You push back your rage for a moment in order to think clearly. Until the end of this turn, you can use actions with the concentrate trait even if those actions don’t have the rage trait.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Raging Intimidation",
    level: "1",
    traits: ["Barbarian"],
    description:
      "Your fury fills your foes with fear. While you are raging, your Demoralize and Scare to Death actions (from the Intimidation skill and an Intimidation skill feat, respectively) gain the rage trait, allowing you to use them while raging. As soon as you meet the prerequisites for the skill feats Intimidating Glare and Scare to Death, you gain these feats.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Raging Thrower",
    level: "1",
    traits: ["Barbarian"],
    description:
      "Thrown weapons become especially deadly in your fury. You apply the additional damage from Rage to your thrown weapon attacks. If you have the Brutal Critical feat or the devastator class feature, apply their benefits to thrown weapon attacks.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Sudden Charge",
    level: "1",
    traits: ["Barbarian", "Fighter", "Flourish", "Open"],
    description:
      "With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Accute Scent",
    level: "2",
    traits: ["Barbarian"],
    description:
      "When you Rage, your sense of smell improves. You gain imprecise scent with a range of 30 feet.",
    prerequisites: ["Acute Vision or darkvision"],
    source: SOURCES.CRB
  },
  {
    name: "Furious Finish",
    level: "2",
    traits: ["Barbarian", "Rage"],
    description:
      "Desperate to finish the fight, you pour all your rage into one final blow. Make a Strike. If it hits, you gain a circumstance bonus to damage equal to the number of rounds remaining in your Rage (maximum 10). After this Strike, your Rage immediately ends, and you are fatigued until you rest for at least 10 minutes.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "No Escape",
    level: "2",
    traits: ["Barbarian", "Rage"],
    description:
      "You keep pace with a retreating foe. Stride up to your Speed, following the foe and keeping it in reach throughout its movement until it stops moving or you’ve moved your full Speed. You can use No Escape to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "A foe within reach attempts to move away from you."
  },
  {
    name: "Second Wind",
    level: "2",
    traits: ["Barbarian"],
    description:
      "You can enter a second rage, but afterward you need to catch your breath. You can Rage without waiting for 1 minute after the previous Rage (or 1 round, with quick rage), but when you end this second Rage, you’re fatigued until you rest for 10 minutes.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Shake it Off",
    level: "2",
    traits: ["Barbarian", "Concentrate", "Rage"],
    description:
      "You concentrate on your rage, overcoming fear and fighting back sickness. Reduce your frightened condition value by 1, and attempt a Fortitude save to recover from the sickened condition as if you had spent an action retching; you reduce your sickened condition value by 1 on a failure (but not on a critical failure), by 2 on a success, or by 3 on a critical success.",
    prerequisites: [],
    source: SOURCES.CRB
  }
];

export const BARD_FEATS = [
  {
    name: "Bardic Lore",
    level: "1",
    traits: ["Bard"],
    description:
      "Your studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.",
    prerequisites: ["Enigma Muse"],
    source: SOURCES.CRB
  },
  {
    name: "Lingering Composition",
    level: "1",
    traits: ["Bard"],
    description:
      "By adding a flourish, you make your compositions last longer.\nYou learn the lingering composition focus spell.\nIncrease the number of Focus Points in your focus pool by 1.",
    prerequisites: ["maestro muse", "focus pool"],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Versatile Performance",
    level: "1",
    traits: ["Bard"],
    description:
      "You can rely on the grandeur of your performances rather than ordinary social skills.\nYou can use Performance instead of Diplomacy to Make an Impression and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate. You can use your proficiency rank in Performance to meet the requirements of skill feats that require a particular rank in Deception, Diplomacy, or Intimidation.",
    prerequisites: ["polymath muse"],
    source: SOURCES.CRB
  },
  {
    name: "Cantrip Expansion",
    level: "2",
    traits: ["Bard", "Cleric", "Sorcerer", "Wizard"],
    description:
      "A greater understanding of your magic broadens your range of simple spells.\nPrepared Caster (Cleric, Wizard, etc.): You can prepare two additional cantrips each day.\nSpontaneous Caster (Bard, Sorcerer, etc.): Add two additional cantrips from your spell list to your repertoire.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Esoteric Polymath",
    level: "2",
    traits: ["Bard"],
    description:
      "You keep a book of occult spells, similar to a wizard’s spellbook, and can use its spells to supplement your spell repertoire. Add all the spells in your repertoire to this book for free. You can use the Occultism skill to Learn Spells (page 238) and add them to your spellbook by paying the appropriate cost, similar to a wizard.\nDuring your daily preparations, choose any one spell from your book of occult spells. If that spell is already in your spell repertoire, you can treat it as an additional signature spell that day. If it isn’t in your repertoire, treat it as though it were until your next daily preparations.",
    prerequisites: ["polymath muse"],
    source: SOURCES.CRB
  },
  {
    name: "Inspire Competence",
    level: "2",
    traits: ["Bard"],
    description:
      "You learn the inspire competence composition cantrip, which aids your allies’ skills.",
    prerequisites: ["maestro muse"],
    source: SOURCES.CRB
  },
  {
    name: "Loremaster's Etude",
    level: "2",
    traits: ["Bard", "Fortune"],
    description:
      "You magically unlock memories, making them easier to recall. You learn the loremaster’s etude composition spell. Increase the number of Focus Points in your focus pool by 1.",
    prerequisites: ["enigma muse", "focus pool"],
    source: SOURCES.CRB
  },
  {
    name: "Multifarious Muse",
    level: "2",
    traits: ["Bard"],
    description:
      "Your muse doesn’t fall into a single label. Choose a type of muse other than that of your own. You gain a 1st-level feat that requires that muse, and your muse is now also a muse of that type, allowing you to take feats with the other muse as a prerequisite. You don’t gain any of the other effects of the muse you chose.",
    prerequisites: [],
    source: SOURCES.CRB,
    special:
      "You can take this feat multiple times. Each time you do, you must choose a different type of muse other than that of your own."
  }
];

export const CHAMPION_FEATS = [
  {
    name: "Deity's Domain",
    level: "1",
    traits: ["Champion"],
    description:
      "You embody an aspect of your deity. Choose one of your deity’s domains from those listed on page 441. You gain the domain’s initial domain spell as a devotion spell.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ranged Reprisal",
    level: "1",
    traits: ["Champion"],
    description:
      "You can use Retributive Strike with a ranged weapon. In addition, if the foe that triggered your reaction is within 5 feet of your reach but not in your reach, as part of your reaction you can Step to put the foe in your reach before making a melee Retributive Strike.",
    prerequisites: ["paladin cause"],
    source: SOURCES.CRB
  },
  {
    name: "Unimpeded Step",
    level: "1",
    traits: ["Champion"],
    description:
      "With a burst of divine liberation, your ally’s movement from your Liberating Step is unaffected by difficult terrain, greater difficult terrain, narrow surfaces, and uneven ground.",
    prerequisites: ["liberator cause"],
    source: SOURCES.CRB
  },
  {
    name: "Weight of Guilt",
    level: "1",
    traits: ["Champion"],
    description:
      "Guilt clouds the minds of those who ignore your Glimpse of Redemption. Instead of making the triggering creature enfeebled 2, you can make it stupefied 2 for the same duration.",
    prerequisites: ["redeemer cause"],
    source: SOURCES.CRB
  },
  {
    name: "Divine Grace [reaction]",
    actionType: "reaction",
    level: "2",
    traits: ["Champion"],
    description:
      "You call upon your deity’s grace, gaining a +2 circumstance bonus to the save.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "You attempt a save against a spell, before you roll."
  },
  {
    name: "Dragonslayer Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn to slay evil dragons. Add the following tenet to your code after the others: “You must slay evil dragons you encounter as long as you have a reasonable chance of success.”\nYour Retributive Strike gains a +4 circumstance bonus to damage against an evil dragon, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption’s resistance against damage from an evil dragon is 7 + your level. If you use Liberating Step triggered by an evil dragon, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.\nYou don’t consider evil dragons to be legitimate authorities, even in nations they rule.",
    prerequisites: ["tenets of good"],
    source: SOURCES.CRB
  },
  {
    name: "Fiendsbane Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn an oath to banish the corruption of fiends to the dark planes they call home. Add the following tenet to your champion’s code after the other tenets: “You must banish or slay fiends you come across as long as you have a reasonable chance of success; in the incredibly unlikely event you find a good fiend, you don’t have to banish or kill it.”\nYour Retributive Strike gains a +4 circumstance bonus to damage against a fiend, or a +6 circumstance bonus if you have master proficiency with the weapon you used. Your Glimpse of Redemption’s resistance against damage from a fiend is 7 + your level. If you use Liberating Step triggered by a fiend, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.\nYou don’t consider fiends to be legitimate authorities, even in nations ruled by fiends.",
    prerequisites: ["tenets of good"],
    source: SOURCES.CRB
  },
  {
    name: "Shining Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn an oath to put the undead to rest. Add the following tenet to your champion’s code after the other tenets: “You must end the existence of undead you encounter as long as you have a reasonable chance of success; in the unlikely event you find a good undead, you can try to work out a more peaceful way to help it recover from its undead state rather than destroying it in combat, such as helping it complete its unfinished business and find peace.”\nYour Retributive Strike gains a +4 circumstance bonus to damage against an undead, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption’s resistance against damage from an undead is 7 + your level. If you use Liberating Step triggered by an undead, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.\nYou don’t consider undead to be legitimate authorities, even in nations ruled by undead.",
    prerequisites: ["tenets of good"],
    source: SOURCES.CRB
  },
  {
    name: "Vengeful Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn an oath to hunt down wicked evildoers and bring them to judgment. Add the following tenet to your code after the others: “You must hunt down and exterminate evil creatures that have committed heinous atrocities as long as you have a reasonable chance of success and aren’t engaged in a mission that would prevent your doing so.”\nYou can use lay on hands to damage a creature you witness harming an innocent or a good ally as if it were undead; in this case, lay on hands deals good damage instead of positive damage and gains the good trait. This good damage can affect non-evil creatures. This doesn’t prevent you from healing such a creature with lay on hands; you choose whether to heal or harm.",
    prerequisites: ["paladin cause"],
    source: SOURCES.CRB
  }
];

export const CLERIC_FEATS = [
  {
    name: "Deadly Simplicity",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your deity’s weapon is especially powerful in your hands.\nWhen you are wielding your deity’s favored weapon, increase the damage die size of that weapon by one step.\nIf your deity’s favored weapon is an unarmed attack (such as a fist, if you worship The God of Enlightenment, Self-Perfection, Knowledge, Healing, and Inner Strength) and its damage die is smaller than d6, instead increase its damage die size to d6.",
    prerequisites: [
      "deity with a simple favored weapon",
      "trained with your deity’s favored weapon"
    ],
    source: SOURCES.CRB
  },
  {
    name: "Domain Initiate",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your deity bestows a special spell related to their powers.\nSelect one domain—a subject of particular interest to you within your religion—from your deity’s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics. Each domain’s theme and domain spells appear in Table 8–2: Domains.\nDomain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.\nFocus spells are automatically heightened to half your level rounded up. Focus spells don’t require spell slots, nor can you cast them using spell slots. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points.\nSpecial You can select this feat multiple times, selecting a different domain each time and gaining its domain spell.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Harming Hands",
    level: "1",
    traits: ["Cleric"],
    description:
      "The mordant power of your negative energy grows. When you cast harm, you roll d10s instead of d8s.",
    prerequisites: ["harmful font"],
    source: SOURCES.CRB
  },
  {
    name: "Healing Hands",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your Positive energy is even more vibrant and restorative.\nWhen you cast heal, you roll d10s instead of d8s.",
    prerequisites: ["Healing font"],
    source: SOURCES.CRB
  },
  {
    name: "Holy Castigation",
    level: "1",
    traits: ["Cleric"],
    description:
      "You combine holy energy with Positive energy to damage demons, devils, and their evil ilk. Heal spells you cast damage fiends as though they were undead.",
    prerequisites: ["good alignment"],
    source: SOURCES.CRB
  },
  {
    name: "Communal Healing",
    level: "2",
    traits: ["Cleric", "healing", "positive"],
    description:
      "You’re a conduit for positive energy, and as you cit through you, it heals some of your minor injuries. When you cast the heal spell to heal a single creature other than yourself, you regain Hit Points equal to the spell level of the heal spell.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Sap Life",
    level: "2",
    traits: ["Cleric"],
    description:
      "You draw the life force out of your enemies to heal your own wounds. When you cast a harm spell and damage at least one living creature, you regain Hit Points equal to the spell level of your harm spell. If you aren’t a living creature, you gain no benefit from this feat.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Emblazon Armament",
    level: "2",
    traits: ["Cleric", "exploration"],
    description:
      "Carefully etching a sacred image into a physical object, you steel yourself for battle. You can spend 10 minutes emblazoning a symbol of your deity upon a weapon or shield. The symbol doesn’t fade until 1 year has passed, but if you Emblazon an Armament, any symbol you previously emblazoned and any symbol already emblazoned on that item instantly disappears. The item becomes a religious symbol of your deity and can be used as a divine focus while emblazoned, and it gains another benefit determined by the type of item. This benefit applies only to followers of the deity the symbol represents.\nShield The shield gains a +1 status bonus to its Hardness. (This causes it to reduce more damage with the Shield Block reaction.)\nWeapon The wielder gains a +1 status bonus to damage rolls.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Turn Undead",
    level: "2",
    traits: ["Cleric"],
    description:
      "Undead harmed by your positive energy might flee, compelled by an innate aversion to the force opposite undeath. When you use a heal spell to damage undead, each undead of your level or lower that critically fails its save gains the fleeing condition for 1 round.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Versatile Font",
    level: "2",
    traits: ["Cleric"],
    description:
      "As you explore your deity’s aspects, you move beyond restrictions on healing or harming. You can prepare either harm or heal in the spell slots gained from the harmful font or healing font.",
    prerequisites: [
      "harmful font or healing font",
      "deity that allows clerics to have both fonts"
    ],
    source: SOURCES.CRB
  }
];

export const DRUID_FEATS = [
  {
    name: "Animal Companion",
    level: "1",
    traits: ["Druid", "Ranger"],
    description:
      "You gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions for more information.",
    prerequisites: ["animal order"],
    source: SOURCES.CRB
  },
  {
    name: "Leshy Familiar",
    level: "1",
    traits: ["Druid"],
    description:
      "You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars.",
    prerequisites: ["leaf order"],
    source: SOURCES.CRB
  },
  {
    name: "Storm Born",
    level: "1",
    traits: ["Druid"],
    description:
      "You are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or Perception checks caused by weather, and your targeted spells don’t require a flat check to succeed against a target concealed by weather (such as fog).",
    prerequisites: ["storm order"],
    source: SOURCES.CRB
  },
  {
    name: "Widen Spell",
    level: "1",
    traits: ["Druid", "Manipulate", "Metamagic", "Sorcerer", "Wizard"],
    description:
      "You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Wild Shape",
    level: "1",
    traits: ["Druid"],
    description:
      "You are one with the wild, always changing and adapting to meet any challenge. You gain the wild shape order spell, which lets you transform into a variety of forms that you can expand with druid feats.",
    prerequisites: ["wild order"],
    source: SOURCES.CRB
  },
  {
    name: "Enhanced Familiar",
    level: "2",
    traits: ["Druid", "Sorcerer", "Wizard"],
    description:
      "You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.\nSpecial (Wizard) If your arcane thesis is improved familiar attunement, your familiar’s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four.",
    prerequisites: ["a familiar"],
    source: SOURCES.CRB
  },
  {
    name: "Order Explorer",
    level: "2",
    traits: ["Druid"],
    description:
      "You have learned the secrets of another druidic order, passing whatever rites of initiation that order requires and gaining access to its secrets. Choose an order other than your own. You gain a 1st-level feat that lists that order as a prerequisite, and you are now a member of that order for the purpose of meeting feat prerequisites. If you commit acts anathema to your new order, you lose all feats and abilities requiring that order but retain your other druid feats and abilities. You don’t gain any of the other benefits of the order you chose.",
    prerequisites: [],
    source: SOURCES.CRB,
    special:
      "You can take this feat multiple times. Each time you do, you must choose a different order other than your own."
  },
  {
    name: "Call of the Wild",
    level: "2",
    traits: ["Druid"],
    description:
      "You call upon the creatures of nature to come to your aid. You can spend 10 minutes in concert with nature to replace one of the spells you’ve prepared in one of your druid spell slots with a summon animal or summon plants and fungi spell of the same level.",
    prerequisites: [],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Exacting Strike",
    level: "1",
    traits: ["Fighter", "Press"],
    description:
      "You make a controlled attack, fully accounting for your momentum. Make a Strike. The Strike gains the following failure effect.Failure This attack does not count toward your multiple attack penalty.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Point-Blank Shot",
    level: "1",
    traits: ["Fighter", "Open", "Stance"],
    requirements: "You are wielding a ranged weapon.",
    description:
      "You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait.\nWhen using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Power Attack",
    level: "1",
    traits: ["Fighter", "Flourish"],
    description:
      "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Reactive Shield",
    level: "1",
    traits: ["Fighter"],
    description:
      "You can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the Raise a Shield action and gain your shield’s bonus to AC. The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Snagging Strike",
    level: "1",
    traits: ["Fighter"],
    description:
      "You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a Strike while keeping one hand free. If this Strike hits, the target is flat-footed until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Aggressive Block [Free Action]",
    actionType: "free",
    level: "2",
    traits: ["Fighter"],
    description:
      "You push back as you block the attack, knocking your foe away or off balance. You use your shield to push the triggering creature, either automatically Shoving it 5 feet or causing it to become flat-footed until the start of your next turn. The triggering creature chooses whether to be moved or become flat-footed. If it chooses to be moved, you choose the direction. If the Shove would cause it to hit a solid object, enter a square of difficult terrain, or enter another creature’s space, it must become flat-footed instead of being moved.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You use the Shield Block reaction, and the opponent that triggered Shield Block is adjacent to you and is your size or smaller."
  },
  {
    name: "Assisting Shot [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter"],
    description:
      "With a quick shot, you interfere with a foe in combat. You can use the Aid action with a ranged weapon you wield. Instead of being within reach of the target, you must be within maximum range of the target. An Assisting Shot uses ammunition and incurs penalties just like any other attack.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Brutish Shove [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter", "Press"],
    description:
      "Throwing your weight behind your attack, you hit your opponent hard enough to make it stumble back. Make a Strike with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is flat-footed until the end of your current turn, and you can automatically Shove it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn’t trigger reactions.\nThis Strike has the following failure effect.\nFailure The target becomes flat-footed until the end of your current turn.",
    prerequisites: ["You are wielding a two-handed melee weapon."],
    source: SOURCES.CRB
  },
  {
    name: "Combat Grab [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter", "Press"],
    description:
      "You swipe at your opponent and grab at them. Make a melee Strike while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains grabbed until the end of your next turn or until it Escapes, whichever comes first.",
    prerequisites: [
      "You have one hand free",
      "your target is within reach of that hand"
    ],
    source: SOURCES.CRB
  },
  {
    name: "Dueling Parry [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter"],
    description:
      "You can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to AC until the start of your next turn as long as you continue to meet the requirements.",
    prerequisites: [
      "You are wielding only a single one-handed melee weapon and have your other hand or hands free."
    ],
    source: SOURCES.CRB
  },
  {
    name: "Intimidating Strike [Two Actions]",
    actionType: "double",
    level: "2",
    traits: ["Emotion", "Fear", "Fighter", "Mental"],
    description:
      "Your blow not only wounds creatures but also shatters their confidence. Make a melee Strike. If you hit and deal damage, the target is frightened 1, or frightened 2 on a critical hit.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Lunge Single [Action]",
    level: "2",
    traits: ["Fighter"],
    description:
      "Extending your body to its limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.",
    prerequisites: ["You are wielding a melee weapon"],
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
    prerequisites: ["Unarmored"],
    source: SOURCES.CRB
  },
  {
    name: "Dragon Stance",
    level: "1",
    traits: ["Monk"],
    description:
      "You enter the stance of a dragon and make powerful leg strikes like a lashing dragon’s tail. You can make dragon tail attacks that deal 1d10 bludgeoning damage. They are in the brawling group and have the backswing, nonlethal, and unarmed traits.\nWhile in Dragon Stance, you can ignore the first square of difficult terrain while Striding.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ki Rush",
    level: "1",
    traits: ["Monk"],
    description:
      "You can use ki to move with extraordinary speed and make yourself harder to hit. You gain the ki rush ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Ki Strike",
    level: "1",
    traits: ["Monk"],
    description:
      "Your study of the flow of mystical energy allows you to harness it into your physical strikes.\nYou gain the ki strike ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Monastic Weaponry",
    level: "1",
    traits: ["Monk"],
    description:
      "You have trained with the traditional weaponry of your monastery or school. You gain access to uncommon weapons that have the monk trait and become trained in simple and martial monk weapons. When your proficiency rank for unarmed attacks increases to expert or master, your proficiency rank for these weapons increases to expert or master as well.\nYou can use melee monk weapons with any of your monk feats or monk abilities that normally require unarmed attacks, though not if the feat or ability requires you to use a single specific type of attack, such as Crane Stance.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Mountain Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    trigger: "You are unarmored and touching the ground.",
    description:
      "You enter the stance of an implacable mountain—a technique first discovered by dwarven monks—allowing you to strike with the weight of an avalanche. The only Strikes you can make are falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the forceful, nonlethal, and unarmed traits.\nWhile in Mountain Stance, you gain a +4 status bonus to AC and a +2 circumstance bonus to any defenses against being Shoved or Tripped. However, you have a Dexterity modifier cap to your AC of +0, meaning you don’t add your Dexterity to your AC, and your Speeds are all reduced by 5 feet.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Tiger Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    description:
      "You enter the stance of a tiger and can make tiger claw attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits. On a critical success with your tiger claws, if you deal damage, the target takes 1d4 persistent bleed damage.\nAs long as your Speed is at least 20 feet while in Tiger Stance, you can Step 10 feet.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Wolf Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    description:
      "You enter the stance of a wolf, low to the ground with your hands held like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8 piercing damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits.\nIf you’re flanking a target while in Wolf Stance, your wolf jaw unarmed attacks also gain the trip trait.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Brawling Focus",
    level: "2",
    traits: ["Monk"],
    description:
      "You know how to make the most of your attacks when fighting hand-to-hand. You gain access to the critical specialization effects of unarmed strikes in the brawling group and weapons in the brawling group. If you have Monastic Weaponry, you also gain the critical specialization effects of all monk weapons in which you are trained.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Crushing Grab",
    level: "2",
    traits: ["Monk"],
    description:
      "Like a powerful constrictor, you crush targets in your unyielding grasp. When you successfully Grapple a creature, you can deal bludgeoning damage to that creature equal to your Strength modifier. You can make this attack nonlethal with no penalty.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Dancing Leaf",
    level: "2",
    traits: ["Monk"],
    description:
      "You are as light as a leaf whirling in the breeze. When you Leap or succeed at a High Jump or Long Jump, increase the distance you jump by 5 feet. When calculating the damage you take from falling, don’t count any distance fallen while you are adjacent to a wall.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Elemental Fist",
    level: "2",
    traits: ["Monk"],
    description:
      "You call upon the power of the elements, infusing your ki with elemental energy and allowing your attacks to deal energy damage. When you cast ki strike, in addition to the damage types normally available, you can deliver the extra damage in the form of a gust of storm-tossed wind (dealing electricity damage and gaining the air trait), a chunk of stone (dealing bludgeoning damage and gaining the earth trait), a flickering flame (dealing fire damage), or a crashing wave of frigid water (dealing cold damage and gaining the water trait).",
    prerequisites: ["Ki Strike"],
    source: SOURCES.CRB
  },
  {
    name: "Stunning Fist",
    level: "2",
    traits: ["Monk"],
    description:
      "The focused power of your flurry threatens to overwhelm your opponent. When you target the same creature with two Strikes from your Flurry of Blows, you can try to stun the creature. If either Strike hits and deals damage, the target must succeed at a Fortitude save against your class DC or be stunned 1 (or stunned 3 on a critical failure). This is an incapacitation effect.",
    prerequisites: ["Flurry of Blows"],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Hunted Shot",
    level: "1",
    traits: ["Ranger", "Flourish"],
    description:
      "You take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Monster Hunter",
    level: "1",
    traits: ["Ranger"],
    description:
      "You swiftly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to Recall Knowledge about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature’s defenses. You and allies you tell gain a +1 circumstance bonus to your next attack roll against that prey. You can give bonuses from Monster Hunter only once per day against a particular creature.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Twin Takedown",
    level: "1",
    traits: ["Ranger", "Flourish"],
    description:
      "You swiftly attack your hunted prey with both weapons. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Favored Terrain",
    level: "2",
    traits: ["Ranger"],
    description:
      "You have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore the effects of non-magical diffcult terrain. If you have the wild stride class feature, you gain a second benefit while in your favored terrain, depending on your choice.\nAquatic You gain a swim Speed equal to your Speed. If you already had a swim Speed, you gain a +10-foot status bonus to your swim Speed.\nArctic You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme cold, and you can walk across ice and snow at full Speed without needing to Balance.\nDesert You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme heat, and you can walk along sand at full Speed without needing to Balance.\nForest, Mountain, or Underground You gain a climb Speed equal to your Speed. If you already had a climb Speed, you gain a +10-foot status bonus to your climb Speed.\nPlains You gain a +10-foot status bonus to your land Speed.\nSky You gain a +10-foot status bonus to your fly Speed, if you have one.\nSwamp You can move across bogs at full Speed, even if they are deep enough to be greater difficult terrain or to normally require you to Swim.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Hunter's Aim [Two Actions]",
    actionType: "double",
    level: "2",
    traits: ["Ranger", "Concentrate"],
    description:
      "When you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey’s concealed condition.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Monster Warden",
    level: "2",
    traits: ["Ranger"],
    description:
      "You understand how to defend yourself and others against your prey. When you grant bonuses from Monster Hunter, you and your allies also each gain a +1 circumstance bonus to your next saving throw against that particular creature and to your AC against that creature’s next attack against you.",
    prerequisites: ["Monster Hunter"],
    source: SOURCES.CRB
  },
  {
    name: "Quick Draw [Single Action]",
    level: "2",
    traits: ["Ranger", "Rogue"],
    description:
      "You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Relentless Stalker [Reaction]",
    actionType: "reaction",
    level: "2",
    traits: ["Ranger", "Uncommon", "move"],
    description:
      "Your hunted prey cannot escape your relentless pursuit. Stride up to your Speed in tandem with the triggering creature, remaining adjacent to the foe throughout its movement until it stops moving or you run out of movement. You can ignore difficult terrain during this movement unless the difficult terrain is caused by a magical effect.",
    prerequisites: [],
    source: SOURCES.FPS,
    trigger:
      "An adjacent creature you are hunting attempts to move away from you using an action that has the move trait."
  },
  {
    name: "Wild Empathy",
    level: "2",
    traits: ["Ranger"],
    description:
      "You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.",
    prerequisites: [],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Trap Finder",
    level: "1",
    traits: ["Rogue"],
    description:
      "You have an intuitive sense that alerts you to the dangers and presence of traps. You gain a +1 circumstance bonus to Perception checks to find traps, to AC against attacks made by traps, and to saves against traps. Even if you aren’t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.\nYou can disable traps that require a proficiency rank of master in Thievery. If you have master proficiency in Thievery, you can disable traps that require a proficiency rank of legendary instead, and your circumstance bonuses against traps increase to +2.",
    prerequisites: [],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "You're Next",
    level: "1",
    traits: ["Rogue"],
    trigger: "You reduce an enemy to 0 hit points.",
    description:
      "After downing a foe, you menacingly remind another foe that you’re coming after them next. Attempt an Intimidation check with a +2 circumstance bonus to Demoralize a single creature that you can see and that can see you. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger.",
    prerequisites: ["trained in Intimidation"],
    source: SOURCES.CRB
  },
  {
    name: "Brutal Beating",
    level: "2",
    traits: ["Rogue"],
    description:
      "The brutality of your critical hits shakes your foes’ confidence. Whenever your Strike is a critical hit and deals damage, the target is frightened 1.",
    prerequisites: ["ruffian racket"],
    source: SOURCES.CRB
  },
  {
    name: "Distracting Feint",
    level: "2",
    traits: ["Rogue"],
    description:
      "Your Feints are far more distracting than normal, drawing your foes’ attention and allowing you and your allies to take greater advantage. While a creature is flat-footed by your Feint, it also takes a –2 circumstance penalty to Perception checks and Reflex saves.",
    prerequisites: ["scoundrel racket"],
    source: SOURCES.CRB
  },
  {
    name: "Minor Magic",
    level: "2",
    traits: ["Rogue"],
    description:
      "You’ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition. Choose arcane, divine, occult, or primal magic, and gain two cantrips from the common cantrips available to that tradition. Your key spellcasting ability is Charisma, and you're trained in spell attack rolls and DCs for the tradition of your chosen cantrips.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Mobility",
    level: "2",
    traits: ["Rogue"],
    description:
      "You move in a way that denies your enemies the opportunity to retaliate. When you take a Stride action to move half your Speed or less, that movement does not trigger reactions. You can use Mobility when Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Unbalancing Blow",
    level: "2",
    traits: ["Rogue"],
    description:
      "Interweaving your most powerful attacks in a graceful fiow, you temporarily unbalance your foes. Whenever your Strike is a critical hit and deals damage, the target is flat-footed against your attacks until the end of your next turn.",
    prerequisites: ["thief racket"],
    source: SOURCES.CRB
  }
];

export const SORCERER_FEATS = [
  {
    name: "Counterspell (Spontaneous)",
    level: "1",
    traits: ["Sorcerer"],
    prerequisites: [],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Familiar",
    level: "1",
    traits: ["Sorcerer", "Wizard"],
    description:
      "You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217).",
    prerequisites: [],
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
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Eschew Materials",
    level: "1",
    traits: ["Wizard"],
    description:
      "You can use clever workarounds to replicate the arcane essence of certain materials. When Casting a Spell that requires material components, you can provide these material components without a spell component pouch by drawing intricate replacement sigils in the air. Unlike when providing somatic components, you still must have a hand completely free. This doesn’t remove the need for any materials listed in the spell’s cost entry.",
    prerequisites: [],
    source: SOURCES.CRB
  },
  {
    name: "Hand of the Apprentice",
    level: "1",
    traits: ["Wizard"],
    description:
      "You can magically hurl your weapon at your foe. You gain the hand of the apprentice universalist spell. Universalist spells are a type of focus spell, much like school spells. You start with a focus pool of 1 Focus Point. See Arcane Schools for more information about focus spells.",
    prerequisites: ["Universalist Wizard"],
    source: SOURCES.CRB
  },
  {
    name: "Conceal Spell [Single Action]",
    level: "1",
    traits: ["Concentrate", "Manipulate", "Metamagic", "Wizard"],
    description:
      "Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are Casting a Spell. If the next action you use is to Cast a Spell, attempt a Stealth check against one or more observers’ Perception DCs; if the spell has verbal components, you must also attempt a Deception check against the observers’ Perception DC. If you succeed at your check (or checks) against an observer’s DC, that observer doesn’t notice you’re casting a spell, even though material, somatic, and verbal components are usually noticeable and spells normally have sensory manifestations that would make spellcasting obvious to those nearby.\nThis ability hides only the spell’s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.",
    prerequisites: [],
    source: SOURCES.CRB
  }
];
