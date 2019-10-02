import React from "react";

const ClassSelect = ({ show, closeFunction }) => {
  if (!show) return null;

  return (
    <div className="c-modal">
      <div className="c-modal__window">
        <h2 className="c-modal__header">Choose a Class</h2>
        Stuff
        <button className="c-modal__close" onClick={closeFunction}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default ClassSelect;