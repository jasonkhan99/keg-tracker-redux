import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { brand, name, price, alcoholContent, pint, id } = keg;
  return {
    type: c.ADD_KEG,
    brand: brand,
    name: name,
    price: price,
    alcoholContent: alcoholContent,
    pint: pint,
    id: id
  }
}

export const sellPint = id => ({
  type: c.SELL_PINT,
  pint: pint -= 1,
  id
})