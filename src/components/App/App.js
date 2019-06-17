import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
//import { settings } from '../../data/dataStore';

class App extends React.Component {

    state = {
      list: this.props.list || [],
      
    }
    static propTypes = {
      list: PropTypes.node,
      title: PropTypes.node,
      subtitle: PropTypes.node,
      lists: PropTypes.array,
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
      const {title, subtitle, lists, changeSearchString} = this.props;
      return (
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search action={changeSearchString}/>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
          
        </main>
      );
    }
}

export default App;