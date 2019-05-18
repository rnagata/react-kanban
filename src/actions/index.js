// ACTION DEFINITION
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = "ADD_CARD";

// ACTION CREATOR - Action is returned object
export const loadCards = () => {
  return(dispatch) => {
    return fetch('/cards')
    .then((response) => {
      return response.json();
    })
    .then((cards) => {
      console.log('cards ', cards);
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

export const addCard = (newCard) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'POST',
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => { //http response
      console.log('addCard.then response', response);
      return response.json();
    })
    .then((body) => {
      console.log('body', body);
      return dispatch({
        type: ADD_CARD,
        payload: body
      });
    });
  };
}