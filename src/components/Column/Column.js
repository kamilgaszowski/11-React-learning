import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon.js';



class Column extends React.Component {

  
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }



  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className = {styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>

       
        <div className ={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          
        </div>
        {/*
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          */}
      </section>
    );
  }
}

export default Column;
