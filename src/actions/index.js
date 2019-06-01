// ACTION DEFINITION
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const LOGIN = "LOGIN";

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
  return (dispatch) => {
    let body = {id : param};
    return fetch(`/cards`, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => { // http response
      return response.json();
    })
    .then((body) => {
      return dispatch({
        type: REMOVE_CARD,
        payload: body
      })
    })
  }
}

export const editCard = (newValues) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'PUT',
      body: JSON.stringify(newValues),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => { // http response
      console.log('http response ', response);
      return response.json();
    })
    .then((body) => {
      return dispatch({
        type: EDIT_CARD,
        payload: body
      });
    });
  }
}

export const login = (credentials) => {
  return(dispatch) => {
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type' : 'application/json' }
    })
    .then((response) => {
      console.log('http response ', response);
      return response.json();
    })
    .then((body) => {
      return dispatch({
        type: LOGIN,
        payload: body
      });
    });
  }
}