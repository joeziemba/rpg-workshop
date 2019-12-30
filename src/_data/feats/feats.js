import * as ClassFeats from "./classFeats";
import * as GeneralFeats from "./generalFeats";

export const featTypes = {
  ANCESTRY: "ancestry",
  CLASS: "class",
  GENERAL: "general",
  SKILL: "skill"
};

const SOURCES = {
  CRB: "Core Rulebook",
  LOCG: "Lost Omens Character Guide"
};

const GNOME_FEATS = [
  {
    name: "Animal Accomplice",
    level: "1",
    traits: ["Gnome"],
    description:
      "You build a rapport with an animal, which becomes magically bonded to you. You gain a familiar using the rules on page 217. The type of animal is up to you, but most gnomes choose animals with a burrow Speed.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Burrow Elocutionist",
    level: "1",
    traits: ["Gnome"],
    description:
      "You recognize the chittering of ground creatures as its own peculiar language. You can ask questions of, receive answers from, and use the Diplomacy skill with animals that have a burrow Speed, such as badgers, ground squirrels, moles, and prairie dogs. The GM determines which animals count for this ability.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Fey Fellowship",
    level: "1",
    traits: ["Gnome"],
    description:
      "Your enhanced fey connection affords you a warmer reception from creatures of the First World as well as tools to foil their tricks. You gain a +2 circumstance bonus to both Perception checks and saving throws against fey.\nIn addition, whenever you meet a fey creature in a social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a –5 penalty to the check.\nIf you fail, you can engage in 1 minute of conversation and attempt a new check at the end of that time rather than accepting the failure or critical failure result.\n<b>Special</b> If you have the Glad-Hand skill feat, you don’t take the penalty on your immediate Diplomacy check if the target is a fey.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "First World Magic",
    level: "1",
    traits: ["Gnome"],
    description:
      "Your connection to the First World grants you a primal innate spell, much like those of the fey. Choose one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Gnome Obsession",
    level: "1",
    traits: ["Gnome"],
    description:
      "You might have a flighty nature, but when a topic captures your attention, you dive into it headfirst. Pick a Lore skill. You gain the trained proficiency rank in that skill. At 2nd level, you gain expert proficiency in the chosen Lore as well as the Lore granted by your background, if any. At 7th level you gain master proficiency in these Lore skills, and at 15th level you gain legendary proficiency in them.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Gnome Polyglot",
    level: "1",
    traits: ["Gnome"],
    description:
      "Your extensive travels, curiosity, and love of learning help you to learn languages quickly. You learn three new languages, chosen from common languages and uncommon languages you have access to. These languages take the same form (signed or spoken) as your other languages. When you select the Multilingual feat, you learn three new languages instead of two.",
    prerequesites: [],
    source: SOURCES.LOCG
  },
  {
    name: "Gnome Weapon Familiarity",
    level: "1",
    traits: ["Gnome"],
    description:
      "You favor unusual weapons tied to your people, such as blades with curved and peculiar shapes. You are trained with the glaive and kukri.\nIn addition, you gain access to kukris and all uncommon gnome weapons. For the purpose of determining your proficiency, martial gnome weapons are simple weapons and advanced gnome weapons are martial weapons.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Illusion Sense",
    level: "1",
    traits: ["Gnome"],
    description:
      "Your ancestors spent their days cloaked and cradled in illusions, and as a result, sensing illusion magic is second nature to you. You gain a +1 circumstance bonus to both Perception checks and Will saves against illusions. When you come within 10 feet of an illusion that can be disbelieved, the GM rolls a secret check for you to disbelieve it, even if you didn’t spend an action to Interact with the illusion.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

const DWARF_FEATS = [
  {
    name: "Dwarven Lore",
    level: "1",
    traits: ["Dwarf"],
    description:
      "You eagerly absorbed the old stories and traditions of your ancestors, your gods, and your people, studying in subjects and techniques passed down for generation upon generation.\nYou gain the trained proficiency rank in Crafting and Religion. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Dwarven Lore.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Dwarven Weapon FamiliarityFeat",
    level: "1",
    traits: ["Dwarf"],
    description:
      "Your kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms.\nYou are trained with the battle axe, pick, and warhammer.\nYou also gain access to all uncommon dwarf weapons. For the purpose of determining your proficiency, martial dwarf weapons are simple weapons and advanced dwarf weapons are martial weapons.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Rock Runner",
    level: "1",
    traits: ["Dwarf"],
    description:
      "Your innate connection to stone makes you adept at moving across uneven surfaces. You can ignore difficult terrain caused by rubble and uneven ground made of stone and earth.\nIn addition, when you use the Acrobatics skill to Balance on narrow surfaces or uneven ground made of stone or earth, you aren’t flat-footed, and when you roll a success at one of these Acrobatics checks, you get a critical success instead.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Stonecunning",
    level: "1",
    traits: ["Dwarf"],
    description:
      "You have a knack for noticing even small inconsistencies and craftsmanship techniques in the stonework around you. You gain a +2 circumstance bonus to Perception checks to notice unusual stonework. This bonus applies to checks to discover mechanical traps made of stone or hidden within stone.\nIf you aren’t using the Seek action or searching, the GM automatically rolls a secret check for you to notice unusual stonework anyway. This check doesn’t gain the circumstance bonus, and it takes a –2 circumstance penalty.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Unburdened Iron",
    level: "1",
    traits: ["Dwarf"],
    description:
      "You’ve learned techniques first devised by your ancestors during their ancient wars, allowing you to comfortably wear massive suits of armor. Ignore the reduction to your Speed from any armor you wear.\nIn addition, any time you’re taking a penalty to your Speed from some other reason (such as from the encumbered condition or from a spell), deduct 5 feet from the penalty.\nFor example, the encumbered condition normally gives a –10-foot penalty to Speed, but it gives you only a –5-foot penalty. If your Speed is taking multiple penalties, pick only one penalty to reduce.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Vengeful Hatred",
    level: "1",
    traits: ["Dwarf"],
    description:
      "You heart aches for vengeance against those who have wronged your people. Choose one of the following dwarven ancestral foes when you gain Vengeful Hatred: drow, duergar, giant, or orc. You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against creatures with that trait. If your attack would deal more than one weapon die of damage (as is common at higher levels than 1st), the bonus is equal to the number of weapon dice or unarmed attack dice.\nIn addition, if a creature critically succeeds at an attack against you and deals damage to you, you gain your bonus to damage against that creature for 1 minute regardless of whether it has the chosen trait.\n<b>Special</b> Your GM can add appropriate creature traits to the ancestral foes list if your character is from a community that commonly fights other types of enemies.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

const ELF_FEATS = [
  {
    name: "Ancestral Longevity",
    level: "1",
    traits: ["Elf"],
    description:
      "You have accumulated a vast array of lived knowledge over the years. During your daily preparations, you can reflect upon your life experiences to gain the trained proficiency rank in one skill of your choice. This proficiency lasts until you prepare again. Since this proficiency is temporary, you can’t use it as a prerequisite for a skill increase or a permanent character option like a feat.",
    prerequesites: ["100 years old"],
    source: SOURCES.CRB
  },
  {
    name: "Elven Lore",
    level: "1",
    traits: ["Elf"],
    description:
      "You’ve studied in traditional elven arts, learning about arcane magic and the world around you. You gain the trained proficiency rank in Arcana and Nature. If you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Elven Lore.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Elven Weapon Familiarity",
    level: "1",
    traits: ["Elf"],
    description:
      "You favor bows and other elegant weapons. You are trained with longbows, composite longbows, longswords, rapiers, shortbows, and composite shortbows.\nIn addition, you gain access to all uncommon elf weapons.\nFor the purpose of determining your proficiency, martial elf weapons are simple weapons and advanced elf weapons are martial weapons.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Forlorn",
    level: "1",
    traits: ["Elf"],
    description:
      "Watching your friends age and die fills you with moroseness that protects you against harmful emotions. You gain a +1 circumstance bonus to saving throws against emotion effects.\nIf you roll a success on a saving throw against an emotion effect, you get a critical success instead.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Nimble Elf",
    level: "1",
    traits: ["Elf"],
    description:
      "Your muscles are tightly honed. Your Speed increases by 5 feet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Otherworldly Magic",
    level: "1",
    traits: ["Elf"],
    description:
      "Your elven magic manifests as a simple arcane spell, even if you aren’t formally trained in magic. Choose one cantrip from the arcane spell list. You can cast this cantrip as an arcane innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Unwavering Mien",
    level: "1",
    traits: ["Elf"],
    description:
      "Your mystic control and meditations allow you to resist external influences upon your consciousness. Whenever you are affected by a mental effect that lasts at least 2 rounds, you can reduce the duration by 1 round.\nYou still require natural sleep, but you treat your saving throws against effects that would cause you to fall asleep as one degree of success better. This protects only against sleep effects, not against other forms of falling unconscious.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

const GOBLIN_FEATS = [
  {
    name: "Burn It!",
    level: "1",
    traits: ["Goblin"],
    description:
      "Fire fascinates you. Your spells and alchemical items that deal fire damage gain a status bonus to damage equal to half the spell’s level or one-quarter the item’s level (minimum 1). You also gain a +1 status bonus to any persistent fire damage you deal.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "City Scavenger",
    level: "1",
    traits: ["Goblin"],
    description:
      "You know that the greatest treasures often look like refuse, and you scoff at those who throw away perfectly good scraps. You gain a +1 circumstance bonus to checks to Subsist, and you can use Society or Survival when you Subsist in a settlement.\nWhen you Subsist in a city, you also gather valuable junk that silly longshanks threw away. You can Earn Income using Society or Survival in the same time as you Subsist, without spending any additional days of downtime. You also gain a +1 circumstance bonus to this check.\n<b>Special</b> If you have the irongut goblin heritage, increase the bonuses to +2",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Goblin Lore",
    level: "1",
    traits: ["Goblin"],
    description:
      "You’ve picked up skills and tales from your goblin community.\nYou gain the trained proficiency rank in Nature and Stealth.\nIf you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Goblin Lore.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Goblin Scuttle [reaction]",
    level: "1",
    traits: ["Goblin"],
    trigger: "An ally ends a move action adjacent to you.",
    description:
      "You take advantage of your ally’s movement to adjust your position. You Step.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Goblin Song [one-action]",
    level: "1",
    traits: ["Goblin"],
    description:
      "You sing annoying goblin songs, distracting your foes with silly and repetitive lyrics. Attempt a Performance check against the Will DC of a single enemy within 30 feet. This has all the usual traits and restrictions of a Performance check.\nYou can affect up to two targets within range if you have expert proficiency in Performance, four if you have master proficiency, and eight if you have legendary proficiency.\nCritical Success The target takes a –1 status penalty to Perception checks and Will saves for 1 minute.\nSuccess The target takes a –1 status penalty to Perception checks and Will saves for 1 round.\nCritical Failure The target is temporarily immune to attempts to use Goblin Song for 1 hour.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Goblin Weapon Familiarity",
    level: "1",
    traits: ["Goblin"],
    description:
      "Others might look upon them with disdain, but you know that the weapons of your people are as effective as they are sharp.\nYou are trained with the dogslicer and horsechopper.\nIn addition, you gain access to all uncommon goblin weapons.\nFor the purpose of determining your proficiency, martial goblin weapons are simple weapons and advanced goblin weapons are martial weapons.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Junk Tinker",
    level: "1",
    traits: ["Goblin"],
    description:
      "You can make useful tools out of even twisted or rusted scraps.\nWhen using the Crafting skill to Craft, you can make level 0 items, including weapons but not armor, out of junk. This reduces the Price to one-quarter the usual amount but always results in a shoddy item. Shoddy items normally give a penalty, but you don’t take this penalty when using shoddy items you made.\nYou can also incorporate junk to save money while you Craft any item. This grants you a discount on the item as if you had spent 1 additional day working to reduce the cost, but the item is obviously made of junk. At the GM’s discretion, this might affect the item’s resale value depending on the buyer’s tastes.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Rough Rider",
    level: "1",
    traits: ["Goblin"],
    description:
      "You are especially good at riding traditional goblin mounts. You gain the Ride feat, even if you don’t meet the prerequisites.\nYou gain a +1 circumstance bonus to Nature checks to use Command an Animal on a goblin dog or wolf mount. You can always select a wolf as your animal companion, even if you would usually select an animal companion with the mount special ability, such as for a champion’s steed ally.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Very Sneaky",
    level: "1",
    traits: ["Goblin"],
    description:
      "Taller folk rarely pay attention to the shadows at their feet, and you take full advantage of this. You can move 5 feet farther when you take the Sneak action, up to your Speed.\nIn addition, as long as you continue to use Sneak actions and succeed at your Stealth check, you don’t become observed if you don’t have cover or greater cover and aren’t concealed at the end of the Sneak action, as long as you have cover or greater cover or are concealed at the end of your turn.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

const HALFLING_FEATS = [
  {
    name: "Distracting Shadows",
    level: "1",
    traits: ["Halfling"],
    description:
      "<p>You have learned to remain hidden by using larger folk as a distraction to avoid drawing attention to yourself. You can use creatures that are at least one size larger than you (usually Medium or larger) as cover for the Hide and Sneak actions, though you still can’t use such creatures as cover for other uses, such as the Take Cover action.</p>",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Halfling Lore",
    level: "1",
    traits: ["Halfling"],
    description:
      "<p>You’ve dutifully learned how to keep your balance and how to stick to the shadows where it’s safe, important skills passed down through generations of halfling tradition. You gain the trained proficiency rank in Acrobatics and Stealth.\nIf you would automatically become trained in one of those skills (from your background or class, for example), you instead become trained in a skill of your choice. You also become trained in Halfling Lore.</p>",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Halfling Luck [free-action]",
    level: "1",
    traits: ["Halfling"],
    trigger: "You fail a skill check or saving throw.",
    description:
      "Frequency once per day\nYour happy-go-lucky nature makes it seem like misfortune avoids you, and to an extent, that might even be true. You can reroll the triggering check, but you must use the new result, even if it’s worse than your first roll.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Halfling Weapon Familiarity",
    level: "1",
    traits: ["Halfling"],
    description:
      "You favor traditional halfling weapons, so you’ve learned how to use them more effectively. You have the trained proficiency with the sling, halfling sling staff, and shortsword.\nIn addition, you gain access to all uncommon halfling weapons. For you, martial halfling weapons are simple weapons, and advanced halfling weapons are martial weapons.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Sure Feet",
    level: "1",
    traits: ["Halfling"],
    description:
      "<p>Whether keeping your balance or scrambling up a tricky climb, your hairy, calloused feet easily find purchase. If you roll a success on an Acrobatics check to Balance or an Athletics check to Climb, you get a critical success instead.</p>\n<p>You’re not flat-footed when you attempt to Balance or Climb.</p>",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Titan Slinger",
    level: "1",
    traits: ["Halfling"],
    description:
      "<p>You have learned how to use your sling to fell enormous creatures. When you hit on an attack with a sling against a Large or larger creature, increase the size of the weapon damage die by one step.<p>",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Unfettered Halfling",
    level: "1",
    traits: ["Halfling"],
    description:
      "<p>You were forced into service as a laborer, either pressed into indentured servitude or shackled by the evils of slavery, but you’ve since escaped and have trained to ensure you’ll never be caught again. Whenever you roll a success on a check to Escape or a saving throw against an effect that would impose the grabbed or restrained condition on you, you get a critical success instead. Whenever a creature rolls a failure on a check to Grapple you, they get a critical failure instead. If a creature uses the Grab ability on you, it must succeed at an Athletics check to grab you instead of automatically grabbing you.<p>",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Watchful Halfling",
    level: "1",
    traits: ["Halfling"],
    description:
      "<p>Your communal lifestyle causes you to pay close attention to the people around you, allowing you to more easily notice when they act out of character. You gain a +2 circumstance bonus to Perception checks when using the Sense Motive basic action to notice enchanted or possessed characters. If you aren’t actively using Sense Motive on an enchanted or possessed character, the GM rolls a secret check, without the usual circumstance and with a –2 circumstance penalty, for you to potentially notice the enchantment or possession anyway.</p>\n<p>In addition to using it for skill checks, you can use the Aid basic action to grant a bonus to another creature’s saving throw or other check to overcome enchantment or possession.</p>\n<p>As usual for Aid, you need to prepare by using an action on your turn to encourage the creature to fight against the effect.</p>",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

const HUMAN_FEATS = [
  {
    name: "Adapted Cantrip",
    level: "1",
    traits: ["Human"],
    description:
      "Through study of multiple magical traditions, you’ve altered a spell to suit your spellcasting style. Choose one cantrip from a magical tradition other than your own. If you have a spell repertoire or a spellbook, replace one of the cantrips you know or have in your spellbook with the chosen spell. If you prepare spells without a spellbook (if you’re a cleric or druid, for example), one of your cantrips must always be the chosen spell, and you prepare the rest normally. You can cast this cantrip as a spell of your class’s tradition.\nIf you swap or retrain this cantrip later, you can choose its replacement from the same alternate tradition or a different one.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Cooperative Nature",
    level: "1",
    traits: ["Human"],
    description:
      "The short human life span lends perspective and has taught you from a young age to set aside differences and work with others to achieve greatness. You gain a +4 circumstance bonus on checks to Aid.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "General Training",
    level: "1",
    traits: ["Human"],
    description:
      "Your adaptability manifests in your mastery of a range of useful abilities. You gain a 1st-level general feat. You must meet the feat’s prerequisites, but if you select this feat during character creation, you can select the feat later in the process in order to determine which prerequisites you meet.\n<b>Special</b> You can select this feat multiple times, choosing a different feat each time.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Haughty Obstinacy",
    level: "1",
    traits: ["Human"],
    description:
      "Your powerful ego makes it harder for others to order you around. If you roll a success on a saving throw against a mental effect that attempts to directly control your actions, you critically succeed instead. If a creature rolls a failure on a check to Coerce you using Intimidation, it gets a critical failure instead (so it can’t try to Coerce you again for 1 week).",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Natural Ambition",
    level: "1",
    traits: ["Human"],
    description:
      "You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Natural Skill",
    level: "1",
    traits: ["Human"],
    description:
      "Your ingenuity allows you to learn a wide variety of skills. You gain the trained proficiency rank in two skills of your choice.",
    prerequesites: [],
    source: SOURCES.CRB
  },
  {
    name: "Unconventional Weaponry",
    level: "1",
    traits: ["Human"],
    description:
      "You’ve familiarized yourself with a particular weapon, potentially from another ancestry or culture. Choose an uncommon simple or martial weapon with a trait corresponding to an ancestry (such as dwarf, goblin, or orc) or that is common in another culture. You gain access to that weapon, and for the purpose of determining your proficiency, that weapon is a simple weapon.\nIf you are trained in all martial weapons, you can choose an uncommon advanced weapon with such a trait. You gain access to that weapon, and for the purpose of determining your proficiency, that weapon is a martial weapon.",
    prerequesites: [],
    source: SOURCES.CRB
  }
];

export const FEATS = [].concat(
  GNOME_FEATS,
  DWARF_FEATS,
  ELF_FEATS,
  GOBLIN_FEATS,
  HALFLING_FEATS,
  HUMAN_FEATS,
  ClassFeats.ALCHEMIST_FEATS,
  ClassFeats.BARBARIAN_FEATS,
  ClassFeats.BARD_FEATS,
  ClassFeats.CHAMPION_FEATS,
  ClassFeats.CLERIC_FEATS,
  ClassFeats.DRUID_FEATS,
  ClassFeats.FIGHTER_FEATS,
  ClassFeats.MONK_FEATS,
  ClassFeats.RANGER_FEATS,
  ClassFeats.ROGUE_FEATS,
  ClassFeats.SORCERER_FEATS,
  ClassFeats.WIZARD_FEAS,
  GeneralFeats.GENERAL_FEATS,
  GeneralFeats.ACROBATICS_FEATS,
  GeneralFeats.ATHLETICS_FEATS,
  GeneralFeats.ARCANA_FEATS,
  GeneralFeats.CRAFTING_FEATS,
  GeneralFeats.DECEPTION_FEATS,
  GeneralFeats.DIPLOMACY_FEATS,
  GeneralFeats.INIMIDATION_FEATS,
  GeneralFeats.LORE_FEATS,
  GeneralFeats.MEDICINE_FEATS,
  GeneralFeats.NATURE_FEATS,
  GeneralFeats.OCCULT_FEATS,
  GeneralFeats.PERFORMANCE_FEATS,
  GeneralFeats.RELIGION_FEATS,
  GeneralFeats.SOCIETY_FEATS,
  GeneralFeats.STEALTH_FEATS,
  GeneralFeats.SURVIVAL_FEATS,
  GeneralFeats.THIEVERY_FEATS
);

export default FEATS;
