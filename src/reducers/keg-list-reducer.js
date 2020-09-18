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
    const newState1 = { ...state };
    delete newState1[id];
    return newState1;
  case c.SELL_PINT:
    const newState2 = { ...state };
    if (newState2[id].pint === 1 || newState2[id].pint === "Sold Out") {
      newState2[id].pint = "Sold Out"
    } else {
      newState2[id].pint -= 1;
    }
    return newState2;
  default:
    return state;
  }
};