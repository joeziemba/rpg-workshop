import React from "react";
import { FirebaseContext } from "../../context";

const GeneratorNav = props => {
  return (
    <nav className="navbar navbar-expand secondary-nav fixed-top">
      <span className="navbar-brand mb-0 h1">Statblock Generator</span>
      <div className=" navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              className="btn btn-primary btn-sm mr-3 mt-1"
              onClick={props.reset}
            >
              Reset to Default
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-primary btn-sm mr-3 mt-1"
              onClick={props.toggleExportView}
            >
              {props.exportView ? "Generator" : "Export"} View
            </button>
          </li>

          <li className="nav-item">
            <FirebaseContext.Consumer>
              {context => (
                <button
                  className="btn btn-primary btn-sm mr-3 mt-1"
                  onClick={() => {context.saveCharacter(props.character)}}
                >
                  Save
                </button>
              )}
            </FirebaseContext.Consumer>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GeneratorNav;
