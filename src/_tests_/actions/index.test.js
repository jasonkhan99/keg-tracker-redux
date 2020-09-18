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
  
});