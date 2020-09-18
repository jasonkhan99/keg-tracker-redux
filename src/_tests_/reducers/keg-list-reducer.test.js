import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from './../../actions/ActionTypes';


describe('kegListReducer', () => {

  const currentState = {
    1: { brand: 'Ninkasi',
    name: 'Red Dawn',
    price: '$6.00',
    alcoholContent: '6.7',
    pint: '124',
    id: 1 },
    2: { brand: 'Pfriem',
    name: 'Pilsner',
    price: '$5.00',
    alcoholContent: '4.5',
    pint: '124',
    id: 2 },
  }

  let action;
  const kegData = {
    brand: 'Ninkasi',
    name: 'Red Dawn',
    price: '$6.00',
    alcoholContent: '6.7',
    pint: '124',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { brand, name, price, alcoholContent, pint, id } = kegData;
    action = {
      type: c.ADD_KEG,
      brand: brand,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      pint: pint,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        brand: brand,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        pint: pint,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: { brand: 'Pfriem',
        name: 'Pilsner',
        price: '$5.00',
        alcoholContent: '4.5',
        pint: '124',
        id: 2 },
    });
  });

});