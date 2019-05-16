// ACTION DEFINITION
// export const ADD_BOOK = "ADD_BOOK";
export const LOAD_CARDS = 'LOAD_CARDS';

// ACTION CREATOR - Action is returned object
export const loadCards = () => {
  return(dispatch) => {
    return fetch('/cards')
    .then((response) => {
      return response.json();
    })
    .then((cards) => {
      return dispatch({
        type: LOAD_CARDS,
        payload: cards
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
}