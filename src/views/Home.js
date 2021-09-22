import React from "react"
import AppCard from "../_globalComponents/AppCard/AppCard"
import butterflies_png from "../_assets/img/butterflies.png"
import castle_png from "../_assets/img/castle.png"

const Home = () => {
  return (
    <div className={"flex flex-wrap justify-evenly mt-10 pt-5 "}>
      <AppCard
        color="red-900"
        content="Homebrewing a monster or NPCs for a D&D game? Turn all those custom stats into a legit statblock! This generator will format everything to look like the statblocks from Dungeons &amp; Dragons fifth edition."
        title="Statblock Generator"
        linkURL="/dnd5e/statblock-generator"
        linkText="Make a Statblock"
        tag="Dungeons & Dragons 5e"
        image={castle_png}
      />

      <AppCard
        color="navy-600"
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
