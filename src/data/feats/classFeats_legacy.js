const SOURCES = {
  CRB: "Core Rulebook",
  LOCG: "Lost Omens Character Guide",
  FPS: "Fall of Plaguestone",
  APG: "Advanced Player's Guide",
}

export const ALCHEMIST_FEATS = [
  {
    name: "Alchemical Familiar",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You have used alchemy to create life, a simple creature formed from alchemical materials, reagents, and a bit of your own blood. This alchemical familiar appears to be a small creature of flesh and blood, though it might have some unusual or distinguishing aspects depending on your creative process. Like other familiars, your alchemical familiar assists you in your laboratory and on adventures. The familiar uses your Intelligence modifier to determine its Perception, Acrobatics, and Stealth modifiers (see Familiars for more information.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Alchemical Savant",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You can identify alchemical items quickly. When using the Crafting skill to Identify Alchemy on an alchemical item you hold, you can do so as a single action, which has the concentrate and manipulate traits, instead of spending 10 minutes. If you have the formula for the item you are attempting to identify, you gain a +2 circumstance bonus to your check, and if you roll a critical failure, you get a failure instead.",
    prerequisites: ["Crafting"],
    source: SOURCES.CRB,
  },
  {
    name: "Far Lobber",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You’ve learned how to throw a longer distance. When you throw an alchemical bomb, it has a range increment of 30 feet instead of the usual 20 feet.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Quick Bomber",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You keep your bombs in easy-to-reach pouches from which you draw without thinking. You Interact to draw a bomb, then Strike with it.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Subtle Delivery",
    level: "1",
    traits: ["Alchemist"],
    description:
      "You can capably deliver toxins with a blowgun. Your blowgun Strikes can apply injury poisons even if they deal no damage due to a creature's resistance. If you critically succeed at an attack roll using a blowgun loaded with a dart you've poisoned and the target rolls a failure on the poison's initial save, the target critically fails instead.",
    prerequisites: [],
    source: SOURCES.APG,
  },
  {
    name: "Demolition Charge",
    level: "2",
    traits: ["Alchemist", "Druid"],
    description:
      "You can rig your bombs to inanimate objects in order to cause destruction to the surrounding area. As an activity that takes 1 minute, you attach between one and four bombs to an inanimate object within your reach, such as a chest, door, wall, or column. This creates a hazard in one square occupied by or adjacent to the inanimate object, and the hazard's Stealth DC to detect it and Thievery DC to disable it are equal to your class DC. The hazard has the following reaction, which you can also trigger as a single action so long as you are within 30 feet of the hazard. The hazard retains its potency until it's triggered, until the inanimate object moves from its space, or until you make your next daily preparations, whichever comes first. \n Activate [Reaction] Fire in the Hole; Trigger A creature moves into the hazard's space; Effect The hazard explodes, dealing the bombs' damage and splash damage to the inanimate object. Combine this damage for the purpose of resistances and weaknesses, and this damage ignores an amount of the object's Hardness equal to your level. Any creatures adjacent to the hazard take the bombs' splash damage, similarly combined for the purpose of resistances and weaknesses. As a reminder, since you didn't throw the bombs, Calculated Splash and similar effects don't apply.",
    prerequisites: [],
    source: SOURCES.APG,
  },
  {
    name: "Poison Resistance",
    level: "2",
    traits: ["Alchemist", "Druid"],
    description:
      "Your body has become fortified against toxins. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Revivifying Mutagen",
    level: "2",
    traits: ["Alchemist"],
    description:
      "While under the effect of a mutagen, you can metabolize that mutagen’s power to heal yourself. This uses a single action, which has the concentrate and manipulate traits. Once the action is complete, you regain 1d6 Hit Points for every 2 item levels of the mutagen (minimum 1d6), but the mutagen’s duration immediately ends, even if you are under the effect of Persistent Mutagen.",
    prerequisites: [],
    source: SOURCES.CRB,
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
    frequency: "once per round",
  },
  {
    name: "Calculated Splash",
    level: "4",
    traits: ["Alchemist"],
    description:
      "You have calculated all the angles to maximize a bomb’s splash. When you throw an alchemical bomb with the splash trait, you can cause the bomb to deal splash damage equal to your Intelligence modifier (minimum 0) instead of the normal amount.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Efficient Alchemy",
    level: "4",
    traits: ["Alchemist"],
    description:
      "Thanks to the time you’ve spent studying and experimenting, you know how to scale your formulas into larger batches that don’t require any additional attention. When spending downtime to Craft alchemical items, you can produce twice as many alchemical items in a single batch without spending additional preparatory time. For instance, if you are creating elixirs of life, you can craft up to eight elixirs in a single batch using downtime, rather than four. This does not reduce the amount of alchemical reagents required or other ingredients needed to craft each item, nor does it increase your rate of progress for days past the base downtime spent. This also does not change the number of items you can create in a batch using advanced alchemy.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Enduring Alchemy",
    level: "4",
    traits: ["Alchemist"],
    description:
      "You’ve learned how to make your personal energy last just a little bit longer when quickly brewing ad hoc concoctions. When using Quick Alchemy to create an alchemical tool or elixir, that tool or elixir remains potent until the end of your next turn, instead of losing its potency at the start of your next turn.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Healing Bomb [free action]",
    level: "4",
    traits: ["Alchemist", "Additive 2"],
    description:
      "By adding a special catalyst, you transform a healing elixir into a topical projectile. You grant the elixir the bomb trait. If you throw an elixir of life bomb at a willing target, you hit even on a failure, though not on a critical failure. If your Strike with this elixir bomb hits a living target, the target regains Hit Points as if it had consumed the elixir. On a critical success, the target also gains the elixir's item bonus to saving throws against diseases and poisons for 1 minute.",
    prerequisites: [],
    source: SOURCES.APG,
    trigger:
      "You craft an elixir of life using Quick Alchemy, and that elixir is at least 2 levels lower than your advanced alchemy level.",
    frequency: "once per round",
  },
  {
    name: "Tenacious Toxins",
    level: "4",
    traits: ["Alchemist", "Additive 2"],
    description:
      "Your victims tend to expire long before your poisons, since the latter have been specifically formulated to last longer. The maximum duration of any poison you create increases by an amount equal to the poison's stage 1 interval, to a maximum of twice the poison's maximum duration.",
    prerequisites: [],
    source: SOURCES.APG,
    trigger: "",
    frequency: "",
  },
  {
    name: "Combine Elixirs",
    level: "6",
    traits: ["Alchemist", "Additive 2"],
    description:
      "You’ve discovered how to mix two elixirs into a single hybrid concoction. You can spend 2 additional batches of infused reagents to add a second elixir to the one you’re crafting. The second elixir must also be at least 2 levels lower than your advanced alchemy level, and the combination elixir is an alchemical item two levels higher than the higher of the two elixirs’ levels. When this combination elixir is consumed, both the constituent elixirs take effect. For example, you can combine two elixirs of life to create a combined elixir that heals twice the normal amount, or you can combine a lesser darkvision elixir with a lesser eagle-eye elixir to both gain darkvision and find secret doors.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You use Quick Alchemy to craft an alchemical item that has the elixir trait and is at least 2 levels lower than your advanced alchemy level.",
    frequency: "once per round",
  },
  {
    name: "Debilitating Bomb",
    level: "6",
    traits: ["Alchemist", "Additive 2"],
    description:
      "Your bombs impose additional effects on your enemies. You mix a substance into the bomb that causes one of the following: dazzled, deafened, flat-footed, or a –5-foot status penalty to Speeds. If the attack with that bomb hits, the target must succeed at a Fortitude saving throw or suffer that effect until the start of your next turn. Use your class DC for this saving throw (even if someone else throws the bomb).",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You use Quick Alchemy to craft an alchemical bomb that is at least 2 levels lower than your advanced alchemy level.",
    frequency: "once per round",
  },
  {
    name: "Directional Bombs",
    level: "6",
    traits: ["Alchemist"],
    description:
      "You can lob bombs with great force and a precise trajectory to angle the splash in a cone spraying in a single direction. When throwing an alchemical bomb with the splash trait, instead of splashing all squares adjacent to the target, you can treat the target’s space as the first affected square of a 15-foot cone directed away from you, potentially allowing you to avoid allies and splash deeper into enemy lines. If the target takes up more than a single square, the target’s square closest to you is the first affected square of the cone.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Sticky Poison",
    level: "6",
    traits: ["Alchemist"],
    description:
      "A combination of additional viscosity and careful application keeps your weapons poisoned even when suffering significant wear and tear. If your Strike with a poisoned weapon would expend its poison without your target attempting an initial save (due to resistance or your Strike being a critical failure, for example), attempt a DC 5 flat check. On a success, your weapon remains poisoned. If your Strike with a poisoned weapon succeeds, attempt a DC 17 flat check. On a success, your weapon remains poisoned until the end of your next turn.",
    prerequisites: [],
    source: SOURCES.APG,
    trigger: "",
    frequency: "",
  },
  {
    name: "Feral Mutagen",
    level: "8",
    traits: ["Alchemist"],
    description:
      "Your bestial mutagen brings out the beast lurking within you, granting you especially sharp claws and teeth as well as a ferocious appearance. Whenever you’re affected by a bestial mutagen, you gain the mutagen’s item bonus to your Intimidation checks. In addition, your claws and jaws are increasingly vicious, and they gain the deadly d10 trait. Finally, you can increase the mutagen’s penalty to AC from –1 to –2 and, in exchange, increase the damage die size of your claws and jaws by one step.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Perpetual Breadth",
    level: "8",
    traits: ["Alchemist"],
    description:
      "You have expanded your supply of near-infinite items. Choose a research field. Add one item from the list of options available to that field from perpetual infusions, or two items if you choose your own field. If you have perpetual potency or perpetual perfection, you gain an additional item (or items if you chose your own field) appropriate to the field you chose, for instance a higher-level version of the bomb you chose or a new poison.",
    prerequisites: ["perpetual infusions"],
    source: SOURCES.APG,
    trigger: "",
    frequency: "",
  },
  {
    name: "Pinpoint Poisoner",
    level: "8",
    traits: ["Alchemist"],
    description:
      "Unsuspecting targets are especially vulnerable to your poisons. When you successfully Strike a flat-footed creature with a poisoned weapon or expose a flat-footed creature to an inhaled poison, the flat-footed condition also gives that creature a –2 circumstance penalty to its initial save against that poison.",
    prerequisites: [],
    source: SOURCES.APG,
    trigger: "",
    frequency: "",
  },
  {
    name: "Sticky Bomb",
    level: "8",
    traits: ["Alchemist", "Additive 2"],
    description:
      "You mix in an additive to make your bomb’s contents adhere to the target and continue to deal damage. A creature that takes a direct hit from one of your sticky bombs also takes persistent damage equal to and of the same type as the bomb’s splash damage. If the bomb already deals persistent damage, combine the two amounts.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You use Quick Alchemy to craft an alchemical bomb, and that bomb’s level is at least 2 levels lower than your advanced alchemy level.",
    frequency: "once per round",
  },
  {
    name: "Elastic Mutagen",
    level: "10",
    traits: ["Alchemist"],
    description:
      "You can cause your body to twist and flow like the quicksilver within your mutagens. Whenever you are under the effects of a quicksilver mutagen, you can stretch your legs and Step up to 10 feet, and you can squish and compress your body, allowing you to make it through tight spaces as if you were one size smaller, in addition to any effect from Squeezing.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Expanded Splash",
    level: "10",
    traits: ["Alchemist"],
    description:
      "The particularly volatile compounds that you brew into your bombs result in them creating especially large and powerful explosions. When you throw an alchemical bomb that has the splash trait, you can add your Intelligence modifier to the bomb’s usual splash damage, and it deals splash damage to every creature within 10 feet of the target.",
    prerequisites: ["Calculated Splash"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Greater Debilitating Bomb",
    level: "10",
    traits: ["Alchemist"],
    description:
      "You have learned enhanced techniques and alchemical secrets that allow you to expand the range of effects you can impose with your bombs. When you use Debilitating Bomb, add the following to the list you can choose from: clumsy 1, enfeebled 1, stupefied 1, or –10-foot status penalty to Speeds.",
    prerequisites: ["Debilitating Bomb"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Merciful Elixir",
    level: "10",
    traits: ["Alchemist", "Additive 2"],
    description:
      "You mix a special additive into your elixir that calms the drinker's body and mind. The elixir of life attempts to counteract one fear effect or one effect imposing the paralyzed condition on the drinker, using the item's level and a counteract modifier equal to your class DC – 10.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You craft an elixir of life using Quick Alchemy, and that elixir is at least 2 levels lower than your advanced alchemy level.",
    frequency: "once per round",
  },
  {
    name: "Potent Poisoner",
    level: "10",
    traits: ["Alchemist"],
    description:
      "By concentrating your poisons’ toxic components, you make them harder for victims to resist. When you craft an alchemical item with the poison trait by any means, the DC is increased by up to 4, to a maximum of your class DC.",
    prerequisites: ["powerful alchemy"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Unstable Concoction",
    level: "10",
    traits: ["Alchemist"],
    description:
      "You can create extraordinary—albeit volatile—alchemical wonders, though they have an unfortunate tendency to violently explode when you use them. When you use Quick Alchemy, you can create an alchemical item from your formula book whose level is up to 2 higher than your advanced alchemy level. You can spend up to 3 additional batches of infused reagents when creating this item to stabilize it. Upon activating the item, attempt a DC 10 flat check; for every additional batch of infused reagents you spent to create the item, reduce this DC by 2. On a success, the item functions normally. On a failure, the item explodes, dealing force damage to the user equal to twice the item's level (doubled on a critical failure).",
    prerequisites: [],
    source: SOURCES.APG,
    trigger: "",
    frequency: "",
  },
  {
    name: "Extend Elixir",
    level: "12",
    traits: ["Alchemist"],
    description:
      "Integrating your own personal energy into the elixirs you create causes them to affect you for longer. When you consume one of your alchemical items that has the elixir and infused traits and a duration of 1 minute or longer, that elixir’s duration is doubled.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Invincible Mutagen",
    level: "12",
    traits: ["Alchemist"],
    description:
      "The fortifying additives you brew into your mutagens make your juggernaut form impervious. Whenever you’re affected by a juggernaut mutagen, you gain resistance to all physical damage equal to your Intelligence modifier (minimum 0).",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Uncanny Bombs",
    level: "12",
    traits: ["Alchemist"],
    description:
      "You lob bombs unerringly, despite obstructions or distance. When you throw an alchemical item with the bomb trait, its range increment increases to 60 feet, you reduce any circumstance bonus to the target’s AC from cover by 1, and you automatically succeed at the flat check when targeting a concealed creature.",
    prerequisites: ["Far Lobber"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Glib Mutagen",
    level: "14",
    traits: ["Alchemist"],
    description:
      "Your silvertongue mutagen transcends languages and plausibility. When affected by a silvertongue mutagen you have created, you ignore circumstance penalties to Deception, Diplomacy, Intimidation, and Performance checks. In addition, your words transcend linguistic barriers; everyone listening to you speak hears your words as if you were speaking in their own language (though you do not actually speak that language, nor does this ability allow you to understand any additional languages).",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Greater Merciful Elixir",
    level: "14",
    traits: ["Alchemist"],
    description:
      "Your additives contain panaceas that can remedy a plethora of maladies. When you use Merciful Elixir, your elixir can instead attempt to counteract the blinded, deafened, sickened, or slowed condition.",
    prerequisites: ["Merciful Elixir"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "True Debilitating Bomb",
    level: "14",
    traits: ["Alchemist"],
    description:
      "Ever inventive, you have discovered increasingly devastating ways for your bombs to impede and hamper your foes. When you use Debilitating Bomb, add the following to the list of effects you can choose from: enfeebled 2, stupefied 2, or a –15-foot status penalty to Speeds. If you instead apply one of the effects listed in Debilitating Bomb, the target avoids the effect only if the result of its saving throw is a critical success.",
    prerequisites: ["Greater Debilitating Bomb"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Chemical Contagion [Reaction]",
    level: "16",
    traits: ["Alchemist"],
    description:
      "With carefully engineered enzymes, you coax some of your poison to infect another target, using the original victim as a carrier. A creature adjacent to the triggering creature is exposed to the triggering poison.",
    prerequisites: ["Extend Elixir"],
    source: SOURCES.APG,
    trigger:
      "A creature within 30 feet critically fails its initial saving throw against a poison you created.",
    frequency: "",
  },
  {
    name: "Eternal Elixir",
    level: "16",
    traits: ["Alchemist"],
    description:
      "Your body readily accepts and retains minor changes. When you drink one of your alchemical items that has the elixir and infused traits and a duration of 1 minute or more, you can make the elixir’s duration indefinite. You can do so only if the elixir’s level is half your level or lower. If you later consume a different elixir and make it indefinite, the effect of the previous indefinite elixir ends.",
    prerequisites: ["Extend Elixir"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Exploitive Bomb",
    level: "16",
    traits: ["Alchemist", "Additive 2"],
    description:
      "You mix a substance into the bomb to foil resistances. The bomb reduces any resistance the enemy has to its damage type by an amount equal to your level, but only for that attack.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger:
      "You craft an alchemical bomb using Quick Alchemy that’s at least 2 levels lower than your advanced alchemy level.",
    frequency: "once per round",
  },
  {
    name: "Genius Mutagen",
    level: "16",
    traits: ["Alchemist"],
    description:
      "Specialized tweaks to your formula that supplements your genius considerably broaden the benefits you gain from cognitive mutagens. When you’re affected by a cognitive mutagen, you also gain the mutagen’s item bonus to Deception, Diplomacy, Intimidation, Medicine, Nature, Performance, Religion, and Survival checks. In addition, you can communicate telepathically with creatures within 60 feet with whom you share a language. The communication is two-way once you establish it, so a creature you contact can also communicate with you.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Persistent Mutagen",
    level: "16",
    traits: ["Alchemist"],
    description:
      "You've trained your physical form to remain stable within a given altered state. Once per day, when you consume an alchemical item with the infused and mutagen traits, you can retain its effects until the next time you make your daily preparations instead of its normal duration.",
    prerequisites: ["Extend Elixir"],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Improbable Elixirs",
    level: "18",
    traits: ["Alchemist"],
    description:
      "Your mastery of alchemical secrets enables you to replicate effects most believe can be achieved only via magic. Select a number of potions equal to your Intelligence modifier (minimum 1); these potions must be of 9th level or lower. You gain formulas to create these potions as alchemical items with the elixir trait. When making these alchemical elixirs, you can substitute alchemical reagents for an equal value of magical components, and you can use alchemist's tools (for Quick Alchemy) or an alchemist's lab (for the Craft activity) instead of any other required tool kits. Other than that, the formula does not change. Once you've chosen the potion formulas, they can't be changed.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Mindblank Mutagen",
    level: "18",
    traits: ["Alchemist"],
    description:
      "With a minor adjustment of ratios in the formula for your serene mutagen, you gain mental protections. When you’re affected by a serene mutagen, detection, revelation, and scrying effects of 9th level or lower detect nothing from you or your possessions and auras. For instance, detect magic would still detect other magic in the area, but not any magic on you.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Miracle Worker",
    level: "18",
    traits: ["Alchemist"],
    description:
      "Your alchemical mastery can resuscitate the recently slain. You can administer a true elixir of life to a creature who has been dead for no more than 2 rounds. When you do, that creature is immediately returned to life with 1 Hit Point and becomes wounded 1.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "once every 10 minutes",
  },
  {
    name: "Perfect Debilitation",
    level: "18",
    traits: ["Alchemist"],
    description:
      "You have perfected the formulas for bombs that impede your enemies. When you use Debilitating Bomb, your target avoids the condition the bomb imposes only if it critically succeeds at its saving throw.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Craft Philosopher's Stone",
    level: "20",
    traits: ["Alchemist"],
    description:
      "Your research has paid off, culminating in the legendary philosopher’s stone. You learn the formula for the philosopher’s stone and can add it to your formula book.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
  {
    name: "Mega Bomb",
    level: "20",
    traits: ["Alchemist", "Additive 3"],
    description:
      "You add an incredibly powerful additive to a held bomb to create a mega bomb, greatly increasing its area and power. You use an Interact action to throw the mega bomb, rather than Strike, and you don’t make an attack roll. The mega bomb affects creatures in a 30-foot-radius burst, centered within 60 feet of you. The bomb deals damage as if each creature were the primary target, with a basic Reflex save. On a failed save, a creature also takes any extra effects that affect a primary target (such as flat-footed from bottled lightning). While all targets in the area take splash damage as primary targets, there is no further splash beyond that area. If your next action after creating a mega bomb isn’t an Interact action to throw it, the mega bomb denatures and loses all effects.",
    prerequisites: ["Expanded Splash"],
    source: SOURCES.CRB,
    trigger:
      "You are holding an infused alchemical bomb you crafted, with a level at least 3 lower than your advanced alchemy level.",
    frequency: "",
  },
  {
    name: "Perfect Mutagen",
    level: "20",
    traits: ["Alchemist"],
    description:
      "You have enhanced the formulas for your mutagens, aligning them perfectly to your physiology. When under the effect of a mutagen you crafted, you do not suffer its drawback.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "",
    frequency: "",
  },
]

export const BARBARIAN_FEATS = [
  {
    name: "Acute Vision",
    level: "1",
    traits: ["Barbarian"],
    description:
      "When you are raging, your visual senses improve, granting you darkvision.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Adrenaline Rush",
    level: "1",
    traits: ["Barbarian", "Rage"],
    description:
      "In the heat of battle, you are capable of amazing feats of strength. While you are raging, increase your encumbered and maximum Bulk limits by 2; you also gain a +1 status bonus to Athletics checks to lift heavy objects, Escape, and Force Open.",
    prerequisites: [],
    source: SOURCES.APG,
  },
  {
    name: "Draconic Arrogance",
    level: "1",
    traits: ["Barbarian", "Rage"],
    description:
      "Few can sway you from your goals while the fury of combat fills you. While raging, you gain a +2 status bonus to saving throws against emotion effects.",
    prerequisites: ["dragon instinct"],
    source: SOURCES.APG,
  },
  {
    name: "Moment of Clarity",
    level: "1",
    traits: ["Barbarian", "Concentrate", "Rage"],
    description:
      "You push back your rage for a moment in order to think clearly. Until the end of this turn, you can use actions with the concentrate trait even if those actions don’t have the rage trait.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Raging Intimidation",
    level: "1",
    traits: ["Barbarian"],
    description:
      "Your fury fills your foes with fear. While you are raging, your Demoralize and Scare to Death actions (from the Intimidation skill and an Intimidation skill feat, respectively) gain the rage trait, allowing you to use them while raging. As soon as you meet the prerequisites for the skill feats Intimidating Glare and Scare to Death, you gain these feats.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Raging Thrower",
    level: "1",
    traits: ["Barbarian"],
    description:
      "Thrown weapons become especially deadly in your fury. You apply the additional damage from Rage to your thrown weapon attacks. If you have the Brutal Critical feat or the devastator class feature, apply their benefits to thrown weapon attacks.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Sudden Charge",
    level: "1",
    traits: ["Barbarian", "Fighter", "Flourish", "Open"],
    description:
      "With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy. You can use Sudden Charge while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Accute Scent",
    level: "2",
    traits: ["Barbarian"],
    description:
      "When you Rage, your sense of smell improves. You gain imprecise scent with a range of 30 feet.",
    prerequisites: ["Acute Vision or darkvision"],
    source: SOURCES.CRB,
  },
  {
    name: "Bashing Charge [Two Actions]",
    level: "2",
    traits: ["Barbarian", "Flourish"],
    description:
      "You smash, bust, and charge through solid obstacles without hesitation. Stride twice. Once during your movement, if your movement passes through or ends adjacent to a door, window, fence, wall, or similar obstacle, you can attempt an Athletics check to Force Open the obstacle with a +1 circumstance bonus to the roll; on a failure, your movement ends at that obstacle.",
    prerequisites: ["Trained in Athletics"],
    source: SOURCES.APG,
  },
  {
    name: "Furious Finish",
    level: "2",
    traits: ["Barbarian", "Rage"],
    description:
      "Desperate to finish the fight, you pour all your rage into one final blow. Make a Strike. If it hits, you gain a circumstance bonus to damage equal to the number of rounds remaining in your Rage (maximum 10). After this Strike, your Rage immediately ends, and you are fatigued until you rest for at least 10 minutes.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "No Escape",
    level: "2",
    traits: ["Barbarian", "Rage"],
    description:
      "You keep pace with a retreating foe. Stride up to your Speed, following the foe and keeping it in reach throughout its movement until it stops moving or you’ve moved your full Speed. You can use No Escape to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "A foe within reach attempts to move away from you.",
  },
  {
    name: "Second Wind",
    level: "2",
    traits: ["Barbarian"],
    description:
      "You can enter a second rage, but afterward you need to catch your breath. You can Rage without waiting for 1 minute after the previous Rage (or 1 round, with quick rage), but when you end this second Rage, you’re fatigued until you rest for 10 minutes.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Shake it Off",
    level: "2",
    traits: ["Barbarian", "Concentrate", "Rage"],
    description:
      "You concentrate on your rage, overcoming fear and fighting back sickness. Reduce your frightened condition value by 1, and attempt a Fortitude save to recover from the sickened condition as if you had spent an action retching; you reduce your sickened condition value by 1 on a failure (but not on a critical failure), by 2 on a success, or by 3 on a critical success.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Barreling Charge [Two Actions]",
    level: "4",
    traits: ["Barbarian", "Fighter", "Flourish"],
    description:
      "You rush forward, moving enemies aside to reach your foe. You Stride, attempting to move through your enemies' spaces and make a melee Strike. Roll an Athletics check and compare the result to the Fortitude DC of each creature whose space you attempt to move through during your Stride, moving through its space on a success but ending your movement before entering its space on a failure. You can use Barreling Charge to Burrow, Climb, Fly, or Swim instead of Stride, as long as you have the corresponding movement type.",
    prerequisites: ["Trained in Athletics"],
    source: SOURCES.APG,
  },
  {
    name: "Fast Movement",
    level: "4",
    traits: ["Barbarian"],
    description:
      "Your rage is a frenzy of rapid movements. While you are raging, you gain a +10-foot status bonus to your Speed.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Oversized Throw [Two Actions]",
    level: "4",
    traits: ["Barbarian", "Rage"],
    description:
      "You have one or more hands free. With a great heave, you seize a piece of your surroundings, such as a boulder, log, table, wagon, or chunk of earth, and hurl it at your foes. The object must be your size or one size smaller than you, and it must not have too much Bulk for you to lift it in the first place. Make a ranged Strike with the object; regardless of the result, the object takes the same amount of damage it would deal on a success. The object is a simple ranged weapon that deals 1d10 bludgeoning damage, has a range increment of 20 feet, and has the thrown weapon trait. The damage increases to 2d10 if you have weapon specialization in simple weapons, or 3d10 if you have greater weapon specialization.",
    prerequisites: [],
    source: SOURCES.APG,
  },
  {
    name: "Raging Athlete",
    level: "4",
    traits: ["Barbarian"],
    description:
      "Physical obstacles can't hold back your fury. While you are raging, you gain a climb Speed and swim Speed equal to your land Speed and the DC of High Jumps and Long Jumps decreases by 10. Your distance for a vertical Leap increases to 5 feet vertically, and your distance for a horizontal Leap increases to 15 feet if your Speed is at least 15 feet and to 20 feet if your Speed is at least 30 feet.",
    prerequisites: ["Expert in Athletics"],
    source: SOURCES.CRB,
  },
  {
    name: "Spiritual Guides",
    level: "4",
    traits: ["Barbarian", "Concentrate", "Fortune"],
    description:
      "Though no one sees them and only you can hear them, the spirits around you constantly chatter, save when you are raging. Sometimes they're even helpful. You can heed the spirits' guidance to reroll the triggering check, using the second result even if it's worse.",
    prerequisites: ["Spirit Instinct"],
    source: SOURCES.APG,
  },
  {
    name: "Supernatural Senses",
    level: "4",
    traits: ["Barbarian", "Rage"],
    description:
      "Your scent is preternaturally sharp, and you can always rely on your sense of smell to help guide you when your vision is compromised. When you target a concealed or hidden opponent while you are raging, you reduce the DC of the flat check to 3 for a concealed target or to 9 for a hidden one.",
    prerequisites: ["Acute Scent"],
    source: SOURCES.APG,
  },
  {
    name: "Swipe",
    level: "4",
    traits: ["Barbarian", "Fighter", "Flourish"],
    description:
      "You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the ACs of up to two foes, each of whom must be within your melee reach and adjacent to the other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty. If you’re using a weapon with the sweep trait, its modifier applies to all your Swipe attacks.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Wounded Rage [Reaction]",
    level: "4",
    traits: ["Barbarian"],
    description:
      "You roar in pain, awakening the rage within you. You Rage.",
    prerequisites: [],
    source: SOURCES.CRB,
    trigger: "You take damage and are capable of entering a rage.",
  },
  {
    name: "",
    level: "",
    traits: ["Barbarian"],
    description:
      "You roar in pain, awakening the rage within you. You Rage.",
    prerequisites: [],
    source: "",
  },
  {
    name: "",
    level: "",
    traits: ["Barbarian"],
    description: "",
    prerequisites: [],
    source: "",
  },
  {
    name: "",
    level: "",
    traits: ["Barbarian"],
    description: "",
    prerequisites: [],
    source: "",
  },
  {
    name: "",
    level: "",
    traits: ["Barbarian"],
    description: "",
    prerequisites: [],
    source: "",
  },
  {
    name: "",
    level: "",
    traits: ["Barbarian"],
    description: "",
    prerequisites: [],
    source: "",
  },
  {
    name: "",
    level: "",
    traits: ["Barbarian"],
    description: "",
    prerequisites: [],
    source: "",
  },
]

export const BARD_FEATS = [
  {
    name: "Bardic Lore",
    level: "1",
    traits: ["Bard"],
    description:
      "Your studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.",
    prerequisites: ["Enigma Muse"],
    source: SOURCES.CRB,
  },
  {
    name: "Lingering Composition",
    level: "1",
    traits: ["Bard"],
    description:
      "By adding a flourish, you make your compositions last longer.\nYou learn the lingering composition focus spell.\nIncrease the number of Focus Points in your focus pool by 1.",
    prerequisites: ["maestro muse", "focus pool"],
    source: SOURCES.CRB,
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
      "Wizard",
    ],
    description:
      "You can extend your spells’ range. If the next action you use is to Cast a Spell that has a range, increase that spell’s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Versatile Performance",
    level: "1",
    traits: ["Bard"],
    description:
      "You can rely on the grandeur of your performances rather than ordinary social skills.\nYou can use Performance instead of Diplomacy to Make an Impression and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate. You can use your proficiency rank in Performance to meet the requirements of skill feats that require a particular rank in Deception, Diplomacy, or Intimidation.",
    prerequisites: ["polymath muse"],
    source: SOURCES.CRB,
  },
  {
    name: "Cantrip Expansion",
    level: "2",
    traits: ["Bard", "Cleric", "Sorcerer", "Wizard"],
    description:
      "A greater understanding of your magic broadens your range of simple spells.\nPrepared Caster (Cleric, Wizard, etc.): You can prepare two additional cantrips each day.\nSpontaneous Caster (Bard, Sorcerer, etc.): Add two additional cantrips from your spell list to your repertoire.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Esoteric Polymath",
    level: "2",
    traits: ["Bard"],
    description:
      "You keep a book of occult spells, similar to a wizard’s spellbook, and can use its spells to supplement your spell repertoire. Add all the spells in your repertoire to this book for free. You can use the Occultism skill to Learn Spells (page 238) and add them to your spellbook by paying the appropriate cost, similar to a wizard.\nDuring your daily preparations, choose any one spell from your book of occult spells. If that spell is already in your spell repertoire, you can treat it as an additional signature spell that day. If it isn’t in your repertoire, treat it as though it were until your next daily preparations.",
    prerequisites: ["polymath muse"],
    source: SOURCES.CRB,
  },
  {
    name: "Inspire Competence",
    level: "2",
    traits: ["Bard"],
    description:
      "You learn the inspire competence composition cantrip, which aids your allies’ skills.",
    prerequisites: ["maestro muse"],
    source: SOURCES.CRB,
  },
  {
    name: "Loremaster's Etude",
    level: "2",
    traits: ["Bard", "Fortune"],
    description:
      "You magically unlock memories, making them easier to recall. You learn the loremaster’s etude composition spell. Increase the number of Focus Points in your focus pool by 1.",
    prerequisites: ["enigma muse", "focus pool"],
    source: SOURCES.CRB,
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
      "You can take this feat multiple times. Each time you do, you must choose a different type of muse other than that of your own.",
  },
]

export const CHAMPION_FEATS = [
  {
    name: "Deity's Domain",
    level: "1",
    traits: ["Champion"],
    description:
      "You embody an aspect of your deity. Choose one of your deity’s domains from those listed on page 441. You gain the domain’s initial domain spell as a devotion spell.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Ranged Reprisal",
    level: "1",
    traits: ["Champion"],
    description:
      "You can use Retributive Strike with a ranged weapon. In addition, if the foe that triggered your reaction is within 5 feet of your reach but not in your reach, as part of your reaction you can Step to put the foe in your reach before making a melee Retributive Strike.",
    prerequisites: ["paladin cause"],
    source: SOURCES.CRB,
  },
  {
    name: "Unimpeded Step",
    level: "1",
    traits: ["Champion"],
    description:
      "With a burst of divine liberation, your ally’s movement from your Liberating Step is unaffected by difficult terrain, greater difficult terrain, narrow surfaces, and uneven ground.",
    prerequisites: ["liberator cause"],
    source: SOURCES.CRB,
  },
  {
    name: "Weight of Guilt",
    level: "1",
    traits: ["Champion"],
    description:
      "Guilt clouds the minds of those who ignore your Glimpse of Redemption. Instead of making the triggering creature enfeebled 2, you can make it stupefied 2 for the same duration.",
    prerequisites: ["redeemer cause"],
    source: SOURCES.CRB,
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
    trigger: "You attempt a save against a spell, before you roll.",
  },
  {
    name: "Dragonslayer Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn to slay evil dragons. Add the following tenet to your code after the others: “You must slay evil dragons you encounter as long as you have a reasonable chance of success.”\nYour Retributive Strike gains a +4 circumstance bonus to damage against an evil dragon, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption’s resistance against damage from an evil dragon is 7 + your level. If you use Liberating Step triggered by an evil dragon, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.\nYou don’t consider evil dragons to be legitimate authorities, even in nations they rule.",
    prerequisites: ["tenets of good"],
    source: SOURCES.CRB,
  },
  {
    name: "Fiendsbane Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn an oath to banish the corruption of fiends to the dark planes they call home. Add the following tenet to your champion’s code after the other tenets: “You must banish or slay fiends you come across as long as you have a reasonable chance of success; in the incredibly unlikely event you find a good fiend, you don’t have to banish or kill it.”\nYour Retributive Strike gains a +4 circumstance bonus to damage against a fiend, or a +6 circumstance bonus if you have master proficiency with the weapon you used. Your Glimpse of Redemption’s resistance against damage from a fiend is 7 + your level. If you use Liberating Step triggered by a fiend, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.\nYou don’t consider fiends to be legitimate authorities, even in nations ruled by fiends.",
    prerequisites: ["tenets of good"],
    source: SOURCES.CRB,
  },
  {
    name: "Shining Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn an oath to put the undead to rest. Add the following tenet to your champion’s code after the other tenets: “You must end the existence of undead you encounter as long as you have a reasonable chance of success; in the unlikely event you find a good undead, you can try to work out a more peaceful way to help it recover from its undead state rather than destroying it in combat, such as helping it complete its unfinished business and find peace.”\nYour Retributive Strike gains a +4 circumstance bonus to damage against an undead, or +6 if you have master proficiency with the weapon you used. Your Glimpse of Redemption’s resistance against damage from an undead is 7 + your level. If you use Liberating Step triggered by an undead, your ally gains a +4 circumstance bonus to checks granted by your Liberating Step, and the ally can Step twice afterward.\nYou don’t consider undead to be legitimate authorities, even in nations ruled by undead.",
    prerequisites: ["tenets of good"],
    source: SOURCES.CRB,
  },
  {
    name: "Vengeful Oath",
    level: "2",
    traits: ["Champion", "Oath"],
    description:
      "You’ve sworn an oath to hunt down wicked evildoers and bring them to judgment. Add the following tenet to your code after the others: “You must hunt down and exterminate evil creatures that have committed heinous atrocities as long as you have a reasonable chance of success and aren’t engaged in a mission that would prevent your doing so.”\nYou can use lay on hands to damage a creature you witness harming an innocent or a good ally as if it were undead; in this case, lay on hands deals good damage instead of positive damage and gains the good trait. This good damage can affect non-evil creatures. This doesn’t prevent you from healing such a creature with lay on hands; you choose whether to heal or harm.",
    prerequisites: ["paladin cause"],
    source: SOURCES.CRB,
  },
]

export const CLERIC_FEATS = [
  {
    name: "Deadly Simplicity",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your deity’s weapon is especially powerful in your hands.\nWhen you are wielding your deity’s favored weapon, increase the damage die size of that weapon by one step.\nIf your deity’s favored weapon is an unarmed attack (such as a fist, if you worship The God of Enlightenment, Self-Perfection, Knowledge, Healing, and Inner Strength) and its damage die is smaller than d6, instead increase its damage die size to d6.",
    prerequisites: [
      "deity with a simple favored weapon",
      "trained with your deity’s favored weapon",
    ],
    source: SOURCES.CRB,
  },
  {
    name: "Domain Initiate",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your deity bestows a special spell related to their powers.\nSelect one domain—a subject of particular interest to you within your religion—from your deity’s list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics. Each domain’s theme and domain spells appear in Table 8–2: Domains.\nDomain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.\nFocus spells are automatically heightened to half your level rounded up. Focus spells don’t require spell slots, nor can you cast them using spell slots. Certain feats can give you more focus spells and increase the size of your focus pool, though your focus pool can never hold more than 3 Focus Points.\nSpecial You can select this feat multiple times, selecting a different domain each time and gaining its domain spell.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Harming Hands",
    level: "1",
    traits: ["Cleric"],
    description:
      "The mordant power of your negative energy grows. When you cast harm, you roll d10s instead of d8s.",
    prerequisites: ["harmful font"],
    source: SOURCES.CRB,
  },
  {
    name: "Healing Hands",
    level: "1",
    traits: ["Cleric"],
    description:
      "Your Positive energy is even more vibrant and restorative.\nWhen you cast heal, you roll d10s instead of d8s.",
    prerequisites: ["Healing font"],
    source: SOURCES.CRB,
  },
  {
    name: "Holy Castigation",
    level: "1",
    traits: ["Cleric"],
    description:
      "You combine holy energy with Positive energy to damage demons, devils, and their evil ilk. Heal spells you cast damage fiends as though they were undead.",
    prerequisites: ["good alignment"],
    source: SOURCES.CRB,
  },
  {
    name: "Communal Healing",
    level: "2",
    traits: ["Cleric", "healing", "positive"],
    description:
      "You’re a conduit for positive energy, and as you cit through you, it heals some of your minor injuries. When you cast the heal spell to heal a single creature other than yourself, you regain Hit Points equal to the spell level of the heal spell.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Sap Life",
    level: "2",
    traits: ["Cleric"],
    description:
      "You draw the life force out of your enemies to heal your own wounds. When you cast a harm spell and damage at least one living creature, you regain Hit Points equal to the spell level of your harm spell. If you aren’t a living creature, you gain no benefit from this feat.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Emblazon Armament",
    level: "2",
    traits: ["Cleric", "exploration"],
    description:
      "Carefully etching a sacred image into a physical object, you steel yourself for battle. You can spend 10 minutes emblazoning a symbol of your deity upon a weapon or shield. The symbol doesn’t fade until 1 year has passed, but if you Emblazon an Armament, any symbol you previously emblazoned and any symbol already emblazoned on that item instantly disappears. The item becomes a religious symbol of your deity and can be used as a divine focus while emblazoned, and it gains another benefit determined by the type of item. This benefit applies only to followers of the deity the symbol represents.\nShield The shield gains a +1 status bonus to its Hardness. (This causes it to reduce more damage with the Shield Block reaction.)\nWeapon The wielder gains a +1 status bonus to damage rolls.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Turn Undead",
    level: "2",
    traits: ["Cleric"],
    description:
      "Undead harmed by your positive energy might flee, compelled by an innate aversion to the force opposite undeath. When you use a heal spell to damage undead, each undead of your level or lower that critically fails its save gains the fleeing condition for 1 round.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Versatile Font",
    level: "2",
    traits: ["Cleric"],
    description:
      "As you explore your deity’s aspects, you move beyond restrictions on healing or harming. You can prepare either harm or heal in the spell slots gained from the harmful font or healing font.",
    prerequisites: [
      "harmful font or healing font",
      "deity that allows clerics to have both fonts",
    ],
    source: SOURCES.CRB,
  },
]

export const DRUID_FEATS = [
  {
    name: "Animal Companion",
    level: "1",
    traits: ["Druid", "Ranger"],
    description:
      "You gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See Animal Companions for more information.",
    prerequisites: ["animal order"],
    source: SOURCES.CRB,
  },
  {
    name: "Leshy Familiar",
    level: "1",
    traits: ["Druid"],
    description:
      "You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars.",
    prerequisites: ["leaf order"],
    source: SOURCES.CRB,
  },
  {
    name: "Storm Born",
    level: "1",
    traits: ["Druid"],
    description:
      "You are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or Perception checks caused by weather, and your targeted spells don’t require a flat check to succeed against a target concealed by weather (such as fog).",
    prerequisites: ["storm order"],
    source: SOURCES.CRB,
  },
  {
    name: "Widen Spell",
    level: "1",
    traits: ["Druid", "Manipulate", "Metamagic", "Sorcerer", "Wizard"],
    description:
      "You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Wild Shape",
    level: "1",
    traits: ["Druid"],
    description:
      "You are one with the wild, always changing and adapting to meet any challenge. You gain the wild shape order spell, which lets you transform into a variety of forms that you can expand with druid feats.",
    prerequisites: ["wild order"],
    source: SOURCES.CRB,
  },
  {
    name: "Enhanced Familiar",
    level: "2",
    traits: ["Druid", "Sorcerer", "Wizard"],
    description:
      "You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.\nSpecial (Wizard) If your arcane thesis is improved familiar attunement, your familiar’s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four.",
    prerequisites: ["a familiar"],
    source: SOURCES.CRB,
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
      "You can take this feat multiple times. Each time you do, you must choose a different order other than your own.",
  },
  {
    name: "Call of the Wild",
    level: "2",
    traits: ["Druid"],
    description:
      "You call upon the creatures of nature to come to your aid. You can spend 10 minutes in concert with nature to replace one of the spells you’ve prepared in one of your druid spell slots with a summon animal or summon plants and fungi spell of the same level.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
]

export const FIGHTER_FEATS = [
  {
    name: "Double Slice",
    level: "1",
    traits: ["Fighter"],
    description:
      "You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that doesn’t have the agile trait, it takes a –2 penalty.\nIf both attacks hit, combine their damage, and then add any other applicable effects from both weapons. You add any precision damage only once, to the attack of your choice. Combine the damage from both Strikes and apply resistances and weaknesses only once. This counts as two attacks when calculating your multiple attack penalty.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Exacting Strike",
    level: "1",
    traits: ["Fighter", "Press"],
    description:
      "You make a controlled attack, fully accounting for your momentum. Make a Strike. The Strike gains the following failure effect.Failure This attack does not count toward your multiple attack penalty.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Point-Blank Shot",
    level: "1",
    traits: ["Fighter", "Open", "Stance"],
    requirements: "You are wielding a ranged weapon.",
    description:
      "You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don’t take the penalty to your attack rolls from the volley trait.\nWhen using a ranged weapon that doesn’t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon’s first range increment.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Power Attack",
    level: "1",
    traits: ["Fighter", "Flourish"],
    description:
      "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Reactive Shield",
    level: "1",
    traits: ["Fighter"],
    description:
      "You can snap your shield into place just as you would take a blow, avoiding the hit at the last second. You immediately use the Raise a Shield action and gain your shield’s bonus to AC. The circumstance bonus from the shield applies to your AC when you’re determining the outcome of the triggering attack.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Snagging Strike",
    level: "1",
    traits: ["Fighter"],
    description:
      "You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a Strike while keeping one hand free. If this Strike hits, the target is flat-footed until the start of your next turn or until it’s no longer within the reach of your hand, whichever comes first.",
    prerequisites: [],
    source: SOURCES.CRB,
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
      "You use the Shield Block reaction, and the opponent that triggered Shield Block is adjacent to you and is your size or smaller.",
  },
  {
    name: "Assisting Shot [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter"],
    description:
      "With a quick shot, you interfere with a foe in combat. You can use the Aid action with a ranged weapon you wield. Instead of being within reach of the target, you must be within maximum range of the target. An Assisting Shot uses ammunition and incurs penalties just like any other attack.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Brutish Shove [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter", "Press"],
    description:
      "Throwing your weight behind your attack, you hit your opponent hard enough to make it stumble back. Make a Strike with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is flat-footed until the end of your current turn, and you can automatically Shove it, with the same benefits as the Shove action (including the critical success effect, if your Strike was a critical hit). If you move to follow the target, your movement doesn’t trigger reactions.\nThis Strike has the following failure effect.\nFailure The target becomes flat-footed until the end of your current turn.",
    prerequisites: ["You are wielding a two-handed melee weapon."],
    source: SOURCES.CRB,
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
      "your target is within reach of that hand",
    ],
    source: SOURCES.CRB,
  },
  {
    name: "Dueling Parry [Single Action]",
    actionType: "single",
    level: "2",
    traits: ["Fighter"],
    description:
      "You can parry attacks against you with your one-handed weapon. You gain a +2 circumstance bonus to AC until the start of your next turn as long as you continue to meet the requirements.",
    prerequisites: [
      "You are wielding only a single one-handed melee weapon and have your other hand or hands free.",
    ],
    source: SOURCES.CRB,
  },
  {
    name: "Intimidating Strike [Two Actions]",
    actionType: "double",
    level: "2",
    traits: ["Emotion", "Fear", "Fighter", "Mental"],
    description:
      "Your blow not only wounds creatures but also shatters their confidence. Make a melee Strike. If you hit and deal damage, the target is frightened 1, or frightened 2 on a critical hit.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Lunge Single [Action]",
    level: "2",
    traits: ["Fighter"],
    description:
      "Extending your body to its limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon has the disarm, shove, or trip trait, you can use the corresponding action instead of a Strike.",
    prerequisites: ["You are wielding a melee weapon"],
    source: SOURCES.CRB,
  },
]

export const MONK_FEATS = [
  {
    name: "Crane Stance",
    level: "1",
    traits: ["Monk"],
    description:
      "You enter the stance of a crane, holding your arms in an imitation of a crane’s wings and using flowing, defensive motions. You gain a +1 circumstance bonus to AC, but the only Strikes you can make are crane wing attacks. These deal 1d6 bludgeoning damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits.\nWhile in Crane Stance, reduce the DC for High Jump and Long Jump by 5, and when you Leap, you can move an additional 5 feet horizontally or 2 feet vertically.",
    prerequisites: ["Unarmored"],
    source: SOURCES.CRB,
  },
  {
    name: "Dragon Stance",
    level: "1",
    traits: ["Monk"],
    description:
      "You enter the stance of a dragon and make powerful leg strikes like a lashing dragon’s tail. You can make dragon tail attacks that deal 1d10 bludgeoning damage. They are in the brawling group and have the backswing, nonlethal, and unarmed traits.\nWhile in Dragon Stance, you can ignore the first square of difficult terrain while Striding.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Ki Rush",
    level: "1",
    traits: ["Monk"],
    description:
      "You can use ki to move with extraordinary speed and make yourself harder to hit. You gain the ki rush ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Ki Strike",
    level: "1",
    traits: ["Monk"],
    description:
      "Your study of the flow of mystical energy allows you to harness it into your physical strikes.\nYou gain the ki strike ki spell and a focus pool of 1 Focus Point. The rules for ki spells are summarized in the sidebar.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Monastic Weaponry",
    level: "1",
    traits: ["Monk"],
    description:
      "You have trained with the traditional weaponry of your monastery or school. You gain access to uncommon weapons that have the monk trait and become trained in simple and martial monk weapons. When your proficiency rank for unarmed attacks increases to expert or master, your proficiency rank for these weapons increases to expert or master as well.\nYou can use melee monk weapons with any of your monk feats or monk abilities that normally require unarmed attacks, though not if the feat or ability requires you to use a single specific type of attack, such as Crane Stance.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Mountain Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    trigger: "You are unarmored and touching the ground.",
    description:
      "You enter the stance of an implacable mountain—a technique first discovered by dwarven monks—allowing you to strike with the weight of an avalanche. The only Strikes you can make are falling stone unarmed attacks. These deal 1d8 bludgeoning damage; are in the brawling group; and have the forceful, nonlethal, and unarmed traits.\nWhile in Mountain Stance, you gain a +4 status bonus to AC and a +2 circumstance bonus to any defenses against being Shoved or Tripped. However, you have a Dexterity modifier cap to your AC of +0, meaning you don’t add your Dexterity to your AC, and your Speeds are all reduced by 5 feet.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Tiger Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    description:
      "You enter the stance of a tiger and can make tiger claw attacks. These deal 1d8 slashing damage; are in the brawling group; and have the agile, finesse, nonlethal, and unarmed traits. On a critical success with your tiger claws, if you deal damage, the target takes 1d4 persistent bleed damage.\nAs long as your Speed is at least 20 feet while in Tiger Stance, you can Step 10 feet.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Wolf Stance",
    level: "1",
    traits: ["Monk", "Stance"],
    description:
      "You enter the stance of a wolf, low to the ground with your hands held like fanged teeth. You can make wolf jaw unarmed attacks. These deal 1d8 piercing damage; are in the brawling group; and have the agile, backstabber, finesse, nonlethal, and unarmed traits.\nIf you’re flanking a target while in Wolf Stance, your wolf jaw unarmed attacks also gain the trip trait.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Brawling Focus",
    level: "2",
    traits: ["Monk"],
    description:
      "You know how to make the most of your attacks when fighting hand-to-hand. You gain access to the critical specialization effects of unarmed strikes in the brawling group and weapons in the brawling group. If you have Monastic Weaponry, you also gain the critical specialization effects of all monk weapons in which you are trained.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Crushing Grab",
    level: "2",
    traits: ["Monk"],
    description:
      "Like a powerful constrictor, you crush targets in your unyielding grasp. When you successfully Grapple a creature, you can deal bludgeoning damage to that creature equal to your Strength modifier. You can make this attack nonlethal with no penalty.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Dancing Leaf",
    level: "2",
    traits: ["Monk"],
    description:
      "You are as light as a leaf whirling in the breeze. When you Leap or succeed at a High Jump or Long Jump, increase the distance you jump by 5 feet. When calculating the damage you take from falling, don’t count any distance fallen while you are adjacent to a wall.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Elemental Fist",
    level: "2",
    traits: ["Monk"],
    description:
      "You call upon the power of the elements, infusing your ki with elemental energy and allowing your attacks to deal energy damage. When you cast ki strike, in addition to the damage types normally available, you can deliver the extra damage in the form of a gust of storm-tossed wind (dealing electricity damage and gaining the air trait), a chunk of stone (dealing bludgeoning damage and gaining the earth trait), a flickering flame (dealing fire damage), or a crashing wave of frigid water (dealing cold damage and gaining the water trait).",
    prerequisites: ["Ki Strike"],
    source: SOURCES.CRB,
  },
  {
    name: "Stunning Fist",
    level: "2",
    traits: ["Monk"],
    description:
      "The focused power of your flurry threatens to overwhelm your opponent. When you target the same creature with two Strikes from your Flurry of Blows, you can try to stun the creature. If either Strike hits and deals damage, the target must succeed at a Fortitude save against your class DC or be stunned 1 (or stunned 3 on a critical failure). This is an incapacitation effect.",
    prerequisites: ["Flurry of Blows"],
    source: SOURCES.CRB,
  },
]

export const RANGER_FEATS = [
  {
    name: "Crossbow Ace",
    level: "1",
    traits: ["Ranger"],
    description:
      "You have a deep understanding of the crossbow. When you’re wielding a crossbow and use Hunt Prey or use Interact to reload your crossbow, you gain a +2 circumstance bonus to the damage roll on your next Strike with that crossbow. If the crossbow is a simple crossbow, also increase the damage die size for that attack by one step (page 279). You must make the attack before the end of your next turn or these benefits are lost.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Hunted Shot",
    level: "1",
    traits: ["Ranger", "Flourish"],
    description:
      "You take two quick shots against the one you hunt. Make two Strikes against your prey with the required weapon. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Monster Hunter",
    level: "1",
    traits: ["Ranger"],
    description:
      "You swiftly assess your prey and apply what you know. As part of the action used to Hunt your Prey, you can attempt a check to Recall Knowledge about your prey. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in the creature’s defenses. You and allies you tell gain a +1 circumstance bonus to your next attack roll against that prey. You can give bonuses from Monster Hunter only once per day against a particular creature.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Twin Takedown",
    level: "1",
    traits: ["Ranger", "Flourish"],
    description:
      "You swiftly attack your hunted prey with both weapons. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the same hunted prey, combine their damage for the purpose of its resistances and weaknesses. Apply your multiple attack penalty to each Strike normally.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Favored Terrain",
    level: "2",
    traits: ["Ranger"],
    description:
      "You have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore the effects of non-magical diffcult terrain. If you have the wild stride class feature, you gain a second benefit while in your favored terrain, depending on your choice.\nAquatic You gain a swim Speed equal to your Speed. If you already had a swim Speed, you gain a +10-foot status bonus to your swim Speed.\nArctic You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme cold, and you can walk across ice and snow at full Speed without needing to Balance.\nDesert You need to eat and drink only one-tenth as much as usual, you aren’t affected by severe or extreme heat, and you can walk along sand at full Speed without needing to Balance.\nForest, Mountain, or Underground You gain a climb Speed equal to your Speed. If you already had a climb Speed, you gain a +10-foot status bonus to your climb Speed.\nPlains You gain a +10-foot status bonus to your land Speed.\nSky You gain a +10-foot status bonus to your fly Speed, if you have one.\nSwamp You can move across bogs at full Speed, even if they are deep enough to be greater difficult terrain or to normally require you to Swim.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Hunter's Aim [Two Actions]",
    actionType: "double",
    level: "2",
    traits: ["Ranger", "Concentrate"],
    description:
      "When you focus on aiming, your attack becomes particularly accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore your prey’s concealed condition.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Monster Warden",
    level: "2",
    traits: ["Ranger"],
    description:
      "You understand how to defend yourself and others against your prey. When you grant bonuses from Monster Hunter, you and your allies also each gain a +1 circumstance bonus to your next saving throw against that particular creature and to your AC against that creature’s next attack against you.",
    prerequisites: ["Monster Hunter"],
    source: SOURCES.CRB,
  },
  {
    name: "Quick Draw [Single Action]",
    level: "2",
    traits: ["Ranger", "Rogue"],
    description:
      "You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon.",
    prerequisites: [],
    source: SOURCES.CRB,
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
      "An adjacent creature you are hunting attempts to move away from you using an action that has the move trait.",
  },
  {
    name: "Wild Empathy",
    level: "2",
    traits: ["Ranger"],
    description:
      "You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
]

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
    source: SOURCES.CRB,
  },
  {
    name: "Trap Finder",
    level: "1",
    traits: ["Rogue"],
    description:
      "You have an intuitive sense that alerts you to the dangers and presence of traps. You gain a +1 circumstance bonus to Perception checks to find traps, to AC against attacks made by traps, and to saves against traps. Even if you aren’t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.\nYou can disable traps that require a proficiency rank of master in Thievery. If you have master proficiency in Thievery, you can disable traps that require a proficiency rank of legendary instead, and your circumstance bonuses against traps increase to +2.",
    prerequisites: [],
    source: SOURCES.CRB,
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
    source: SOURCES.CRB,
  },
  {
    name: "You're Next",
    level: "1",
    traits: ["Rogue"],
    trigger: "You reduce an enemy to 0 hit points.",
    description:
      "After downing a foe, you menacingly remind another foe that you’re coming after them next. Attempt an Intimidation check with a +2 circumstance bonus to Demoralize a single creature that you can see and that can see you. If you have legendary proficiency in Intimidation, you can use this as a free action with the same trigger.",
    prerequisites: ["trained in Intimidation"],
    source: SOURCES.CRB,
  },
  {
    name: "Brutal Beating",
    level: "2",
    traits: ["Rogue"],
    description:
      "The brutality of your critical hits shakes your foes’ confidence. Whenever your Strike is a critical hit and deals damage, the target is frightened 1.",
    prerequisites: ["ruffian racket"],
    source: SOURCES.CRB,
  },
  {
    name: "Distracting Feint",
    level: "2",
    traits: ["Rogue"],
    description:
      "Your Feints are far more distracting than normal, drawing your foes’ attention and allowing you and your allies to take greater advantage. While a creature is flat-footed by your Feint, it also takes a –2 circumstance penalty to Perception checks and Reflex saves.",
    prerequisites: ["scoundrel racket"],
    source: SOURCES.CRB,
  },
  {
    name: "Minor Magic",
    level: "2",
    traits: ["Rogue"],
    description:
      "You’ve dabbled in a variety of tricks, gaining minor magical abilities from a particular tradition. Choose arcane, divine, occult, or primal magic, and gain two cantrips from the common cantrips available to that tradition. Your key spellcasting ability is Charisma, and you're trained in spell attack rolls and DCs for the tradition of your chosen cantrips.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Mobility",
    level: "2",
    traits: ["Rogue"],
    description:
      "You move in a way that denies your enemies the opportunity to retaliate. When you take a Stride action to move half your Speed or less, that movement does not trigger reactions. You can use Mobility when Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Unbalancing Blow",
    level: "2",
    traits: ["Rogue"],
    description:
      "Interweaving your most powerful attacks in a graceful fiow, you temporarily unbalance your foes. Whenever your Strike is a critical hit and deals damage, the target is flat-footed against your attacks until the end of your next turn.",
    prerequisites: ["thief racket"],
    source: SOURCES.CRB,
  },
]

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
      "When a foe Casts a Spell you know and you can see its manifestations, you can use your own magic to disrupt it.\nYou expend one of your spell slots to counter the triggering creature’s casting of a spell that you have in your repertoire.\nYou lose your spell slot as if you had cast the triggering spell.\nYou then attempt to counteract the triggering spell.",
  },
  {
    name: "Dangerous Sorcery",
    level: "1",
    traits: ["Sorcerer"],
    description:
      "Your legacy grants you great destructive power. When you Cast a Spell from your spell slots, if the spell deals damage and doesn’t have a duration, you gain a status bonus to that spell’s damage equal to the spell’s level.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Familiar",
    level: "1",
    traits: ["Sorcerer", "Wizard"],
    description:
      "You make a pact with creature that serves you and assists your spellcasting. You gain a familiar (page 217).",
    prerequisites: [],
    source: SOURCES.CRB,
  },
]

export const WIZARD_FEAS = [
  {
    name: "Counterspell (Prepared)",
    level: "1",
    traits: ["Wizard", "Abjuration", "Arcane"],
    trigger: "A creature Casts a Spell that you have prepared.",
    description:
      "When a foe Casts a Spell and you can see its manifestations, you can use your own magic to disrupt it. You expend a prepared spell to counter the triggering creature’s casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Eschew Materials",
    level: "1",
    traits: ["Wizard"],
    description:
      "You can use clever workarounds to replicate the arcane essence of certain materials. When Casting a Spell that requires material components, you can provide these material components without a spell component pouch by drawing intricate replacement sigils in the air. Unlike when providing somatic components, you still must have a hand completely free. This doesn’t remove the need for any materials listed in the spell’s cost entry.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
  {
    name: "Hand of the Apprentice",
    level: "1",
    traits: ["Wizard"],
    description:
      "You can magically hurl your weapon at your foe. You gain the hand of the apprentice universalist spell. Universalist spells are a type of focus spell, much like school spells. You start with a focus pool of 1 Focus Point. See Arcane Schools for more information about focus spells.",
    prerequisites: ["Universalist Wizard"],
    source: SOURCES.CRB,
  },
  {
    name: "Conceal Spell [Single Action]",
    level: "1",
    traits: ["Concentrate", "Manipulate", "Metamagic", "Wizard"],
    description:
      "Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are Casting a Spell. If the next action you use is to Cast a Spell, attempt a Stealth check against one or more observers’ Perception DCs; if the spell has verbal components, you must also attempt a Deception check against the observers’ Perception DC. If you succeed at your check (or checks) against an observer’s DC, that observer doesn’t notice you’re casting a spell, even though material, somatic, and verbal components are usually noticeable and spells normally have sensory manifestations that would make spellcasting obvious to those nearby.\nThis ability hides only the spell’s spellcasting actions and manifestations, not its effects, so an observer might still see a ray streak out from you or see you vanish into thin air.",
    prerequisites: [],
    source: SOURCES.CRB,
  },
]
