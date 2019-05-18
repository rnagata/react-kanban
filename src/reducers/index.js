import {LOAD_CARDS} from "../actions";
import {ADD_CARD} from "../actions";

const initialState = {
  cards: []
};

function cardReducer(state = initialState, action){
  console.log('cardReducer function', action);
  switch(action.type){
    case LOAD_CARDS:
      console.log('action.payload load ', action.payload);
      return Object.assign({}, {cards: [...action.payload]});
    case ADD_CARD:
      console.log('state.cards add', state.cards);
      console.log('action.payload add ', action.payload);
      return Object.assign({}, state, { cards: [...state.cards, action.payload]});
    default:
      return state;
  }
}

export default cardReducer;