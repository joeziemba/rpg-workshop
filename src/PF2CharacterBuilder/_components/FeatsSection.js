import React, { useState, useEffect } from "react";
import FeatEntry from "./FeatEntry";
import FeatSelection from "./FeatSelection";
import { Modal } from "../../_globalComponents";

const FeatsSection = (props) => {
  const [showFeatSelection, setShowFeatSelection] = useState(false);

  const [featKey, setFeatKey] = useState("");

  const [numMiscFeats, setNumMiscFeats] = useState(0);

  useEffect(() => {
    let miscFeats = props.character.feats.filter((feat) =>
      feat.type.includes("misc")
    );

    setNumMiscFeats(miscFeats.length + 1);
  }, [props.character.feats]);

  const openFeatSelection = (featKey) => {
    setFeatKey(featKey);
    setShowFeatSelection(true);
  };

  const selectFeat = (feat) => {
    props.selectFeat(featKey, feat);
    setShowFeatSelection(false);
  };

  const removeFeat = (featKey) => {
    props.selectFeat(featKey, {});
  };

  return (
    <React.Fragment>
      <div className="pf-section">
        <h2 className="pf-section__heading">Feats*</h2>

        <div className="pf-section__body pf-section__body--pad">
          <p className="mb-2" style={{ fontSize: ".75rem" }}>
            Feats added here <b>do not</b> modify any stats on this
            character sheet. Modifiers and proficiencies have to be added
            manually for now.
          </p>
          <h3 className="c-gray-block-heading">Ancestry Feats</h3>

          {props.character.ancestry.name &&
            props.character.feats.map((feat, i) => {
              let [type, level] = feat.type.split("_");
              if (props.character.level >= level && type === "ancestry") {
                return (
                  <FeatEntry
                    key={i}
                    label={"Lv" + level}
                    feat={feat}
                    addFeat={() => openFeatSelection(feat.type)}
                    removeFeat={() => removeFeat(feat.type)}
                  />
                );
              } else {
                return null;
              }
            })}
          <h3 className="c-gray-block-heading mt-3">Class Feats</h3>
          {props.character.class.name &&
            props.character.feats.map((feat, i) => {
              let [type, level] = feat.type.split("_");
              if (props.character.level >= level && type === "class") {
                return (
                  <FeatEntry
                    key={i}
                    label={"Lv" + level}
                    feat={feat}
                    addFeat={() => openFeatSelection(feat.type)}
                    removeFeat={() => removeFeat(feat.type)}
                  />
                );
              } else {
                return null;
              }
            })}
          <h3 className="c-gray-block-heading mt-3">Skill Feats</h3>
          {props.character.feats.map((feat, i) => {
            let [type, level] = feat.type.split("_");
            if (props.character.level >= level && type === "skill") {
              return (
                <FeatEntry
                  key={i}
                  label={"Lv" + level}
                  feat={feat}
                  addFeat={() => openFeatSelection(feat.type)}
                  removeFeat={() => removeFeat(feat.type)}
                />
              );
            } else {
              return null;
            }
          })}
          <h3 className="c-gray-block-heading mt-3">Other Feats</h3>
          {props.character.feats.map((feat, i) => {
            if (feat.name && feat.type.includes("misc")) {
              return (
                <FeatEntry
                  key={i}
                  label=""
                  feat={feat}
                  addFeat={() => openFeatSelection(feat.type)}
                  removeFeat={() => removeFeat(feat.type)}
                />
              );
            } else {
              return null;
            }
          })}
          <FeatEntry
            label=""
            feat={{}}
            addFeat={() => openFeatSelection("misc" + numMiscFeats)}
          />
        </div>
      </div>
      <Modal
        show={showFeatSelection}
        large
        closeFunction={() => setShowFeatSelection(false)}
        title="Feats"
      >
        <FeatSelection
          selectFeat={selectFeat}
          featKey={featKey}
          character={props.character}
        />
      </Modal>
    </React.Fragment>
  );
};

export default FeatsSection;
