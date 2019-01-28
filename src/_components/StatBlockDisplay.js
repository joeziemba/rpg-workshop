import React from 'react';

import { Property, PropertyBlock } from './index';

class StatBlockDisplay extends React.Component {
  constructor(props) {
    super(props)


  }

  renderAbilities() {
    let { abilities } = this.props.stats;
    return Object.keys(abilities).map(ability => {
      let score = abilities[ability];
      let mod = this.getAbilityMod(score);

      return (
        <div className='ability' key={ability}>
          <h4>{ability}</h4>
          <span>{score} ({mod < 0 ? '-' : '+'}{mod})</span>
        </div>
      );
    });
  }

  renderFeatures() {
    let { features } = this.props.stats;

    return features.map(feature => {
      return (
        <PropertyBlock
          key={feature.title}
          title={feature.title}
          content={feature.content}
        />
      )
    });
  }

  getAbilityMod(score) {
    return Math.floor((score - 10) / 2);
  }

  renderActions() {
    let { actions } = this.props.stats;

    return actions.map((action, i) => {
      if (action.attack) {
        let { dieNum, dmgDie, prof, dex, reach, targets, dmgType } = action.attack;
        debugger;
        // Get hit mod
        let toHit;
        if (dex) {
          toHit = this.getAbilityMod(this.props.stats.abilities.dex);
        } else {
          toHit = this.getAbilityMod(this.props.stats.abilities.str);
        }

        // Get Damage Mod

        let avg = ((dieNum * dmgDie) / 2) + toHit;
        let damage = `${avg} (${dieNum}d${dmgDie} + ${toHit}) ${dmgType} damage.`

        if (prof) toHit += parseInt(this.props.stats.proficiency);

        return (
          <div className='property property--block' key={i}>
            <span className="property-name italic">{action.title}. </span>
            <span className='italic'>{action.attack.type} Weapon Attack.  </span>
            {`${toHit >= 0 ? '+' : ''}${toHit}`} to Hit&nbsp;&nbsp;|&nbsp;&nbsp;
            {action.attack.type === 'Ranged' ? 'Range' : 'Reach'} {reach}ft&nbsp;&nbsp;|&nbsp;&nbsp;
            {targets} target{targets > 1 ? 's' : ''}&nbsp;&nbsp;|&nbsp;&nbsp;
            {damage}
          </div>
        )
      }

      if (!action.attack) {
        return (
          <PropertyBlock
            key={i}
            title={action.title}
            content={action.content}
          />
        )
      }
    });
  }

  render() {
    let { stats } = this.props;
    let { abilities } = stats;
    let { hitDie, dieNum, manualHp } = stats.hp;

    let conMod = Math.floor((abilities.con - 10) / 2);

    let totalHp = ((hitDie * dieNum) / 2) + conMod;

    let hitPoints = `${totalHp} (${dieNum}d${hitDie} + ${conMod})`;

    return (
      <div id="StatBlockDisplay" className="statBlock">
        <div id="creatureHeading" className="creature-heading">
          <h1 id="monsterName">{this.props.stats.name}</h1>
          <h2 id="monsterDetails">{this.props.stats.size} {this.props.stats.creatureType}</h2>
        </div>

        <div className='section red'>
          <div className='property'>
            <span className="property-name">Armor Class</span>
            {stats.ac.score}
            {stats.ac.support &&
              ` (${stats.ac.support})`
            }
          </div>
          <div className='property'>
            <span className="property-name">Hit Points</span> {manualHp ? manualHp : hitPoints}
          </div>
          <div className='property'>
            <span className="property-name">Speed</span>
            {stats.speed}ft
            {stats.flySpeed > 0 ? `, ${stats.flySpeed}ft (Fly)` : ''}
            {stats.swimSpeed > 0 ? `, ${stats.swimSpeed}ft (Swim)` : ''}
          </div>
        </div>

        <div className='section red'>
          {this.renderAbilities()}
        </div>

        <div className='section red'>
          {stats.immune.length > 0 &&
            <Property
              title='Damage Immunities'
              content={stats.immune.join(', ')}
            />
          }
          {stats.resists.length > 0 &&
            <Property
              title='Damage Resistances'
              content={stats.resists.join(', ')}
            />
          }
          {stats.vulnerable.length > 0 &&
            <Property
              title='Damage Vulnerabilities'
              content={stats.vulnerable.join(', ')}
            />
          }
          {stats.skills.length > 0 &&
            <Property
              title='Skills'
              content={stats.skills.join(', ')}
            />
          }
          {stats.senses.length > 0 &&
            <Property
              title='Senses'
              content={stats.senses.join(', ')}
            />
          }
          {stats.langs.length > 0 &&
            <Property
              title='Languages'
              content={stats.langs.join(', ')}
            />
          }
        </div>

        <div className='section'>
          {this.renderFeatures()}
        </div>

        <div className='section section--with-heading'>
          <h3>Actions</h3>
          {this.renderActions()}
        </div>


      </div >
    )
  }
}

export default StatBlockDisplay;