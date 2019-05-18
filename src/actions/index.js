// ACTION DEFINITION
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

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
      return response.json();
    })
    .then((body) => {
      return dispatch({
        type: ADD_CARD,
        payload: body
      });
    });
  };
}

export const removeCard = (param) => {
  console.log('removeCard param ', param);
  console.log(JSON.stringify(param));
  return (dispatch) => {
    let body = {id : param};
    console.log('string body', body);
    return fetch(`/cards`, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
      console.log('delete response ', response);
      return response.json();
    })
    .then((body) => {
      console.log('removeCard ', body);
      return dispatch({
        type: REMOVE_CARD,
        payload: body
      })
    })
  }
}