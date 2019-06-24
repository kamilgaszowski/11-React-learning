import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';



class Home extends React.Component {

    state = {
      list: this.props.list || [],
      
    }
    static propTypes = {
      list: PropTypes.node,
      title: PropTypes.node,
      subtitle: PropTypes.node,
      lists: PropTypes.array,
      addList: PropTypes.func,
      searchString: PropTypes.string,
      changeSearchString: PropTypes.func,
  
    }
    
    addList(title){
      this.setState(state => (
        {
          list: [
            ...state.list,
            {
              key: state.list.length,
              title,
              icon: 'list-alt',
              cards: [],
            },
          ],
        }
      ));
    }
    render() {
      const {title, subtitle, lists, addList} = this.props;
      return (
        <main className={styles.component}>
          <Container>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>        
            {lists.map(listData => (
              <ListLink key={listData.id} {...listData} />
            ))}
            <div className={styles.creator}>
              <Creator text={settings.listCreatorText} action={addList}/>
            </div>
          </Container>
        </main>
      );
    }
}

export default Home;