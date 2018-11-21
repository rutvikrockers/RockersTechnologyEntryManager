import { default as headerReducer} from '../header';
import {
  SET_HEADER_CONTEXT,
  CLEAR_HEADER_CONTEXT,
  HEADER_DEFAULT,
  HEADER_HOME,
  HEADER_MENU,
} from '../../actions/actionTypes';

describe('header reducer', () => {
  let action, initialState, newState;

  beforeEach(() => {
    initialState = HEADER_DEFAULT;
  });

  it('should return the initial state', () => {
    expect(headerReducer(undefined, {})).toEqual(initialState);
  });

  it('sets the state', () => {
    const previousState = {HEADER_MENU};
    action = {type: SET_HEADER_CONTEXT, context: HEADER_HOME};
    newState = action.context;
    expect(headerReducer(previousState, action)).toEqual(newState);
  });

  it('sets the state to default when clearing', () => {
    const previousState = {HEADER_MENU};
    const action = {type: CLEAR_HEADER_CONTEXT}; // context is empty when clearing
    expect(headerReducer(previousState, action)).toEqual(HEADER_DEFAULT);
  });
});
