import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
      <p>
        <Link to="/dnd5e/statblock-generator">5e Statblock Generator</Link>
      </p>
      <p>
        <Link to="/pf2/character-builder">Pathfinder 2e Character Builder</Link>
      </p>
    </div>
  );
};

export default Home;
