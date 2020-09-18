import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('keg tracker actions', () => {

  test('should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  test('should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  test('should create ADD_KEG action', () => {
    expect(actions.addKeg({brand: 'Ninkasi', name: 'Red Dawn', price: '$6.00', alcoholContent: '6.7', pint: '124', id: 1})).toEqual({
      type: c.ADD_KEG,
      brand: 'Ninkasi',
      name: 'Red Dawn',
      price: '$6.00',
      alcoholContent: '6.7',
      pint: '124',
      id: 1
    });
  });

});