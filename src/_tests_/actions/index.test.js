import * as actions from './../../actions';

describe('keg tracker actions', () => {

  test('should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  test('should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  test('should create ADD_KEG action', () => {
    expect(actions.addKeg({brand: 'Ninkasi', name: 'Red Dawn', price: '$6.00', alcoholContent: '6.7', id: 1})).toEqual({
      type: 'ADD_KEG',
      brand: 'Ninkasi',
      name: 'Red Dawn',
      price: '$6.00',
      alcoholContent: '6.7',
      id: 1
    });
  });

});