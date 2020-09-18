import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, brand, name, price, alcoholContent, pint } = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
        id: id,
        brand: brand,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        pint: pint,
      }
    });
  case c.DELETE_KEG:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};