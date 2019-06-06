import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon.js';


class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    
  }

  addCard(title){
		this.setState(state => (
		{
		cards: [
		...state.cards,
		{
		key: state.cards.lenght,
		title,
		}
		]
		}
		));
	}

  render() {
    return (
      <section className = {styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span>{this.props.title}</h3>
    
       <div className ={styles.columns}>
       {this.state.cards.map(({key, ...cardProps}) =>(
         <Card key={key} {...cardProps} />
       ))}
     </div>
     <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
     </section>
    )
  }
}

export default Column;
