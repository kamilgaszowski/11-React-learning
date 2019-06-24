import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon.js';
import Container from '../Container/Container';



class SearchResults extends React.Component {

  
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
   
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
 
  state = {
    value: this.props.searchString || '',
  }

 
  render() {
    const {title, icon, cards, addCard} = this.props;
   
    return (
      <Container>
        <section className = {styles.component}>
       
          <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>

       
          <div className ={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
       
        </section>
      </Container>
    );
  }
}

export default SearchResults;
