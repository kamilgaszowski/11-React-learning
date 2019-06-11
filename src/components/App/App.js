const test = 1
import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import PropTypes from 'prop-types';

class App extends React.Component {

    state = {
      list: this.props.list || [],
      
    }
    static propTypes = {
      list: PropTypes.node,
      title: PropTypes.node,
      subtitle: PropTypes.node,
      lists: PropTypes.array,
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
      const {title, subtitle, lists} = this.props;
      return (
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
          
        </main>
      );
    }
}

export default App;