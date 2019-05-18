import {LOAD_CARDS} from "../actions";
import {ADD_CARD} from "../actions";
import {REMOVE_CARD} from "../actions";

const initialState = {
  cards: []
};

function cardReducer(state = initialState, action){
  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, {cards: [...action.payload]});
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload]});
    case REMOVE_CARD:
      // get new array of cards without the deleted card
      let updatedCardArray = state.cards.filter((card)=> {
        return card.id !== parseInt(action.payload.id)
      })
      // take keys and values from right and apply to left.
      return Object.assign({}, {cards: updatedCardArray});
    default:
      return state;
  }
}

export default cardReducer;