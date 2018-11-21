import { default as chromeReducer } from '../chrome';
import { FOOTER_STYLE } from '../../actions/actionTypes';

describe('chrome reducer', () => {
   let action, state;

   it('returns initial state', () => {
      state = { footer: { style: null } };
      expect(chromeReducer(undefined, {})).toEqual(state);
   });

   it('set state for FOOTER_STYLE action', () => {
      action = { type: FOOTER_STYLE, payload: 'boop' };
      state = { footer: { style: 'boop' } };
      expect(chromeReducer({}, action)).toEqual(state);
   });
});