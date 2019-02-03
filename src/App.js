import React, { Component } from "react";
import './App.css';

import { Row, Column, StatBlockDisplay, StatBlockForm } from './_components/';

const testState = {
  name: 'Monster Name',
  size: 'Medium',
  creatureType: 'Humanoid',
  abilities: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
  },
  ac: {
    score: 10,
    support: ''
  },
  hp: {
    hitDie: 4,
    dieNum: 1,
    manualHp: ''
  },
  proficiency: 1,
  speed: 30,
  flySpeed: 0,
  swimSpeed: 0,
  skills: [],
  conditionImmune: [],
  immune: [],
  resists: [],
  vulnerable: [],
  senses: [],
  langs: ['Common'],
  challenge: '',
  xp: '',
  features: [
    {
      id: '1',
      title: 'Sample',
      content: 'This is a sample feature, change my content!'
    }
  ],
  actions: [
    {
      id: 1,
      title: 'Longsword',
      attack: {
        type: 'Melee',
        prof: true,
        reach: 5,
        targets: 1,
        dmgDie: 8,
        dieNum: 1,
        dmgType: 'Slashing',
        dex: false
      }
    },
    {
      id: 2,
      title: 'Longbow',
      attack: {
        type: 'Ranged',
        prof: true,
        reach: 120,
        targets: 1,
        dmgDie: 8,
        dieNum: 1,
        dmgType: 'Piercing',
        dex: true
      }
    },
    // {
    //   id: 3,
    //   title: 'Fey Charm',
    //   content: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can."
    // }
  ]
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...testState
    }

    this.updateState = this.updateState.bind(this);
    this.updateAbility = this.updateAbility.bind(this);
    this.updateAC = this.updateAC.bind(this);
    this.updateHP = this.updateHP.bind(this);
    this.updatePropertyList = this.updatePropertyList.bind(this);
    this.addFeature = this.addFeature.bind(this);
    this.updateFeature = this.updateFeature.bind(this);
    this.addAction = this.addAction.bind(this);
    this.updateAction = this.updateAction.bind(this);
  }

  updateState(e) {
    let { name, value } = e.target;
    debugger;
    this.setState({
      [name]: value
    });
  }

  updateAbility(ability, value) {
    let newAbilities = Object.assign({}, this.state.abilities);

    newAbilities[ability] = value;

    this.setState({
      abilities: newAbilities
    });
  }

  updateAC(e) {
    let fieldName = e.target.name;
    let newAC = {
      ...this.state.ac,
      [fieldName]: e.target.value
    }
    this.setState({
      ac: newAC
    });
  }

  updateHP(e) {
    let fieldName = e.target.name;
    let newHP = {
      ...this.state.hp,
      [fieldName]: e.target.value
    }
    this.setState({
      hp: newHP
    });
  }

  updatePropertyList(selected, arrayToUpdate) {
    let sorted = selected.sort();
    debugger;
    this.setState({
      [arrayToUpdate]: sorted
    });
  }

  addFeature() {
    let newFeatures = [].concat(this.state.features);

    newFeatures.push({
      id: newFeatures.length + 1,
      title: '',
      content: ''
    });

    this.setState({
      features: newFeatures
    });
  }

  updateFeature(e, featureId) {
    let { name, value } = e.target;
    let newFeatures = this.state.features.map(feat => {
      if (feat.id === featureId) {
        feat[name] = value;
      }
      return feat;
    });

    this.setState({
      features: newFeatures
    })

  }

  addAction(actionType) {
    debugger;
    let newActions = [].concat(this.state.actions);

    let newAction;

    switch (actionType) {
      case ('General'):
        newAction = {
          id: newActions.length + 1,
          title: '',
          content: ''
        }
        break;
      case ('Melee'):
        newAction = {
          id: newActions.length + 1,
          title: '',
          attack: {
            type: 'Melee',
            prof: true,
            reach: 0,
            targets: 0,
            dmgDie: 4,
            dieNum: 0,
            dmgType: '',
            dex: false
          }
        }
        break;
      case ('Ranged'):
        newAction = {
          id: newActions.length + 1,
          title: '',
          attack: {
            type: 'Ranged',
            prof: true,
            reach: 0,
            targets: 0,
            dmgDie: 4,
            dieNum: 0,
            dmgType: '',
            dex: true
          }
        }
        break;
      default:
        break;
    }

    newActions.push(newAction);

    this.setState({
      actions: newActions
    });
  }

  updateAction(e, actionId) {
    let { name, value } = e.target;
    debugger;

    let newActions = this.state.actions.map((action, i) => {
      if (action.id === actionId) {
        if (name === 'content') {
          action[name] = value;
        } else if (name === 'title') {
          action[name] = value;
        } else {
          action.attack[name] = value;
        }
      }
      return action;
    });

    this.setState({
      actions: newActions
    });
  }

  render() {
    return (
      <div className="container App">
        <Row>
          <Column className="col-sm">
            <StatBlockForm
              stats={this.state}
              updateState={this.updateState}
              updateAbility={this.updateAbility}
              updateAC={this.updateAC}
              updateHP={this.updateHP}
              updatePropertyList={this.updatePropertyList}
              addFeature={this.addFeature}
              updateFeature={this.updateFeature}
              addAction={this.addAction}
              updateAction={this.updateAction}
            />
          </Column>
          <Column className="col-12 col-md-6">
            <StatBlockDisplay
              stats={this.state}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;