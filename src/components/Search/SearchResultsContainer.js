import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForList} from '../../redux/cardsRedux.js';
import {
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.match.params.id),
  searchString: props.match.params.id,
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  
});

const mapDispatchToProps = (dispatch, props) => ({
  changeSearchString: () => dispatch(createAction_changeSearchString(props.match.params.id)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

