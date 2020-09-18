import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

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
    const { brand, name, price, alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      brand: brand,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        brand: brand,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });
});