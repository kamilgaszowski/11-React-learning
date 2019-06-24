import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForList} from '../../redux/cardsRedux.js';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

