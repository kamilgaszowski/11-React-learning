const test = 4222
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData } from '../../data/dataStore';

class App extends React.Component {

    state = {
		list: this.props.list || [],
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
		cards: []
		}
		]
		}
		));
	}
        render() {
                return ( <
                    main className = { styles.component } >
                    <h1 className = { styles.title } > { pageContents.title } < /h1>
                     <h2 className = { styles.subtitle } > { pageContents.subtitle } < /h2>
                      <List {...listData}/>
                  
                     </main>
                        )
                    }
                }

                export default App;