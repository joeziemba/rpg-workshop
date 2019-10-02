import React from "react";
import { Link } from "react-router-dom";

const newFeatures = [
  "10/2/19 | Launched Pathfinder 2e Character Builder!",
  "10/2/19 | Improvements to Save and Open for Statblock Generator",
  "9/18/19 | Register/Sign in with Google account: create an account to save your stuff.",
  "9/18/19 | Save Statblocks: Save your statblocks to your account to access later.",
  "9/18/19 | Open Statblocks: Open any statblock you've saved before and edit to you're hearts content."
];

const upcoming = ["More features for PF2 Character Builder"];

const Home = props => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "#072864" }}>
        <div className="page__container">
          <div className="col col-12" style={{ margin: "5rem 0 4rem 0" }}>
            <h2
              style={{
                fontFamily: "Inknut Antiqua",
                textAlign: "center",
                color: "white"
              }}
            >
              The Tools
            </h2>
            <div className="row mt-3 mb-3">
              <div className="col-12 col-sm-6">
                <Link to="/dnd5e/statblock-generator" className="c-tool-button">
                  5e Statblock Generator
                </Link>
              </div>
              <div className="col-12 col-sm-6">
                <Link to="/pf2/character-builder" className="c-tool-button">
                  Pathfinder 2e Character Builder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page__container page general-content">
        <h1>TableTopTools: Digital tools for better gaming!</h1>
        <p>
          TableTopTools is built and maintained in the free time of a
          professional web developer who happens to be a huge fan of table top
          gaming. It's entirely a labor of love and I'm happy to make my tools
          available to the community. I plan to release new feature updates on
          an ongoing basis.
        </p>
        <h2>Newly Released!</h2>
        <ul>
          {newFeatures.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
        <h2>In the Works...</h2>
        <ul>
          {upcoming.map(feature => (
            <li>{feature}</li>
          ))}
        </ul>
        <h2>Contact & Support</h2>
        <p>
          If you have thoughts on how to improve these tools, ideas for new
          ones, or find a bug please let me know by, I'm always happy to hear
          feedback from others!
          <br />
          Send a message to{" "}
          <a href="mailto:joeziemba.dev@gmail.com?subject=[TableTopTools]">
            joeziemba.dev@gmail.com
          </a>{" "}
          with [TableTopTools] in the subject line.
        </p>
      </div>
    </div>
  );
};

export default Home;

// return (

//   );
