import React from "react"
import { AppCard } from "components"
import butterflies_png from "_assets/img/butterflies.png"
import castle_png from "_assets/img/castle.png"

const Home = () => {
  return (
    <div
      className={"flex flex-wrap justify-around max-w-5xl mx-auto"}
      style={{ marginTop: "5%" }}
    >
      <AppCard
        buttonTextColor="text-red-900"
        borderColor="border-red-900"
        content="Homebrewing a monster or NPCs for a D&D game? Turn all those custom stats into a legit statblock! This generator will format everything to look like the statblocks from Dungeons &amp; Dragons fifth edition."
        title="Statblock Generator"
        linkURL="/dnd5e/statblock-generator"
        linkText="Make a Statblock"
        tag="Dungeons & Dragons 5e"
        image={castle_png}
      />

      <AppCard
        buttonTextColor="text-navy-900"
        borderColor="border-navy-900"
        content="Generate a character for the newly-released Pathfinder Second Edition ruleset! Assign your Ancestry, Background and Class, tinker with ability scores, train skills and choose feats!"
        title="Character Builder"
        linkURL="/pf2/character-builder"
        linkText="Create a Character"
        tag="Pathfinder Second Edition"
        image={butterflies_png}
      />
    </div>
  )
}

export default Home
