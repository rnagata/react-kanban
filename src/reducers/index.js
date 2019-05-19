import {LOAD_CARDS} from "../actions";
import {ADD_CARD} from "../actions";
import {REMOVE_CARD} from "../actions";
import {EDIT_CARD} from "../actions";

const initialState = {
  cards: []
};

function cardReducer(state = initialState, action){
  switch(action.type){
    case LOAD_CARDS:
      // assign cards key with array value populated with action.payload to new state
      return Object.assign({}, {cards: [...action.payload]});
    case ADD_CARD:
      // assign existing state keys and values to new state with updated cards key and values
      return Object.assign({}, state, { cards: [...state.cards, action.payload]});
    case REMOVE_CARD:
      // get new array of cards without the deleted card
      let updatedCardArray = state.cards.filter((card)=> {
        return card.id !== parseInt(action.payload.id)
      })
      return Object.assign({}, {cards: updatedCardArray});
    case EDIT_CARD:
      // get new array of cards without the edited card
      let filteredCards = state.cards.filter((card) => {
        return card.id !== parseInt(action.payload.id);
      });
      return Object.assign({}, state, {cards: [...filteredCards, action.payload]}); 
    default:
      return state;
  }
}

export default cardReducer;