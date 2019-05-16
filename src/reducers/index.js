import {LOAD_CARDS} from "../actions";

const initialState = {
  cards: []
};

function cardReducer(state = initialState, action){
  switch(action.type){
    case LOAD_CARDS:
      return Object.assign({}, state, { cards: [...state.cards, action.payload]});
    default:
      return state;
  }
}

export default cardReducer;