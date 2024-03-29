import {connect} from 'react-redux';
import Column from './Column.js';
import {createAction_addCard, getCardsForColumn} from '../../redux/cardsRedux.js';



const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
  
  

});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);