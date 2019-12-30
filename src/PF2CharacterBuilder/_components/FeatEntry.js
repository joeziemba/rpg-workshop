import React from "react";

const FeatEntry = props => {
  return (
    <div className="feat-entry mt-1">
      <div>
        <span className="feat-entry__label">{props.label}</span>
        <span className="pf-font-family">{props.feat.name}</span>
        <div className="float-right">
          {!props.feat.name && (
            <button onClick={props.addFeat} className="pf-button">
              <i className="fas fa-plus"></i>
            </button>
          )}
          {props.feat.name && (
            <>
              <button onClick={props.removeFeat} className="pf-button mr-1">
                <i className="fas fa-times"></i>
              </button>
              <button onClick={props.addFeat} className="pf-button">
                <i className="far fa-edit"></i>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="ml-3" style={{ fontSize: "12px" }}>
        <p dangerouslySetInnerHTML={{ __html: props.feat.description }}></p>
      </div>
    </div>
  );
};

export default FeatEntry;
