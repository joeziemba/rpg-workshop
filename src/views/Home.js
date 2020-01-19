import React from "react";
import { Link } from "react-router-dom";

const newFeatures = [
  "1/12/20 | Released PF2e Builder v1.0.0 supporting characters level 1-20",
  "1/1/20 | Added Feats to PF2e Character Builder. Inlcudes all general and skill feats and Level 1 class/ancestry feats.",
  "10/2/19 | Launched Pathfinder 2e Character Builder!",
  "10/2/19 | Improvements to Save and Open for Statblock Generator",
  "9/18/19 | Register/Sign in with Google account: create an account to save your stuff.",
  "9/18/19 | Save Statblocks: Save your statblocks to your account to access later.",
  "9/18/19 | Open Statblocks: Open any statblock you've saved before and edit to you're hearts content."
];

const Home = props => {
  return (
    <div className="container-fluid">
      <div
        className="row c-title-section"
        style={{ backgroundColor: "#741b1b", color: "white" }}
      >
        <div className="col-12 col-md-6">
          <div className="ml-ms-4 py-md-5 pt-5">
            <h2
              className="text-center text-md-left p-4"
              style={{
                fontFamily: "Inknut Antiqua"
              }}
            >
              5e Statblock Generator
            </h2>
            <p
              className="text-center text-sm-left pl-4 pr-4"
              style={{ fontSize: "1.2rem" }}
            >
              Homebrewing a monster or NPCs for a D&D game? Turn all those
              custom stats into a legit statblock! This generator will format
              everything to look like the statblocks from Dungeons & Dragons
              fifth edition.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 my-5 pb-5 pb-md-0">
          <div className="my-md-5 py-md-5" style={{ color: "#741b1b" }}>
            <Link
              to="/dnd5e/statblock-generator"
              className="mx-auto c-tool-button"
            >
              Make a Statblock
            </Link>
          </div>
        </div>
      </div>
      <div
        className="row c-title-section"
        style={{ backgroundColor: "#203863", color: "white" }}
      >
        <div className="col-12 col-md-6">
          <div className="ml-ms-4 py-md-5 pt-5">
            <h2
              className="text-center text-md-left p-4"
              style={{
                fontFamily: "Inknut Antiqua"
              }}
            >
              PF2e Character Builder
            </h2>
            <p
              className="text-center text-md-left pl-4 pr-4"
              style={{ fontSize: "1.2rem" }}
            >
              Generate a character for the newly-released Pathfinder Second
              Edition ruleset! Assign your Ancestry, Background and Class,
              tinker with ability scores, train skills and choose feats!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 my-5 pb-5 pb-md-0">
          <div className="my-md-5 py-md-5" style={{ color: "#203863" }}>
            <Link to="/pf2/character-builder" className="mx-auto c-tool-button">
              Create a Character
            </Link>
          </div>
        </div>
      </div>
      <div className="row c-title-section" style={{ backgroundColor: "white" }}>
        <div className="col-12">
          <div className="ml-ms-4 py-md-5 pt-5">
            <h3
              className="p-4"
              style={{
                fontFamily: "Inknut Antiqua"
              }}
            >
              About
            </h3>
            <p className="text-md-left px-4">
              RPG Workshop is a set of random apps that you might use for table
              top gaming. These are early and ongoing projects so there'll be
              more features to come.
            </p>
            <p className="text-md-left px-4">
              I want these to be the best they can be, so if you have
              suggestions, comments, ideas, or just find a bug somewhere please
              let me know! Send a message to{" "}
              <a href="mailto:joeziemba.dev@gmail.com?subject=[TableTopTools]">
                joeziemba.dev@gmail.com
              </a>{" "}
              with [RPG Workshop] in the subject line.
            </p>
            <h3
              className="p-4"
              style={{
                fontFamily: "Inknut Antiqua"
              }}
            >
              Changelog:
            </h3>
            <ul>
              {newFeatures.map((feature, i) => (
                <li key={i} className="mb-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
