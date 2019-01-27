import React, { Component } from "react";
import './App.css';

import { Row, Column, StatBlockDisplay } from './_components/';

const props = {
  abilities: {
    str: 16,
    dex: 10,
    con: 14,
    int: 10,
    wis: 14,
    cha: 16
  },
  ac: {
    score: 18,
    support: 'natural armor'
  },
  hp: {
    hitDie: 8,
    dieNum: 2,
    manualHp: ''
  },
  proficiency: 3,
  speed: 25,
  skills: ['Perception +4'],
  immune: ['Poison', 'Fire'],
  resists: ['Cold'],
  vulnerable: ['Lightning'],
  senses: ['Darkvision 60ft'],
  langs: ['Common', 'Elvish'],
  challenge: '',
  xp: '',
  otherProperties: [
    {
      title: 'Tree Stride',
      content: 'Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger.'
    }
  ],
  actions: [
    {
      title: 'Club',
      attack: {
        type: 'Melee',
        prof: true,
        reach: 5,
        targets: 1,
        dmgDie: 4,
        dieNum: 1,
        dmgType: 'bludgeoning',
        finess: false
      }
    },
    {
      title: 'Longbow',
      attack: {
        type: 'Ranged',
        prof: true,
        reach: 120,
        targets: 1,
        dmgDie: 8,
        dieNum: 1,
        dmgType: 'piercing',
        finess: true
      }
    },
    {
      title: 'Fey Charm',
      content: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can."
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="flex-container App">
        <Row>
          <Column stackSize='med'>
            One of three columns
          </Column>
          <Column stackSize='med'>
            <StatBlockDisplay 
              stats={props}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;