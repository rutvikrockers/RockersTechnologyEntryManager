/*
 * import action types
 */

import { SET_HEADER_CONTEXT, CLEAR_HEADER_CONTEXT } from '../actionTypes';

/*
 * import other constants
 */

import {
  HEADER_MENU,
  HEADER_HOME,
  HEADER_PROFILE,
  HEADER_FOLLOWING,
  HEADER_COMPANY,
  HEADER_COMPANIES,
  HEADER_COMPANY_CHAT,
  HEADER_DEFAULT,
} from '../header';

/*
 * import action creators
 */

import {setHeaderContext, clearHeaderContext} from '../header';

/*
 * testing action creators
 */
/* NOTE: this will change in a following commit */
describe.skip('actions', () => {
  describe('setting', () => {
    it('creates an action to set the header context to menu', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_MENU,
      };
      expect(setHeaderContext(HEADER_MENU)).toEqual(expectedAction);
    });

    it('creates an action to set the header context to home', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_HOME,
      };
      expect(setHeaderContext(HEADER_HOME)).toEqual(expectedAction);
    });
    
    it('creates an action to set the header context to profile', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_PROFILE,
      };
      expect(setHeaderContext(HEADER_PROFILE)).toEqual(expectedAction);
    });
    
    it('creates an action to set the header context to following', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_FOLLOWING,
      };
      expect(setHeaderContext(HEADER_FOLLOWING)).toEqual(expectedAction);
    });

    it('creates an action to set the header context to companies', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_COMPANIES,
      };
      expect(setHeaderContext(HEADER_COMPANIES)).toEqual(expectedAction);
    });

    it('creates an action to set the header context to company', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_COMPANY,
      };
      expect(setHeaderContext(HEADER_COMPANY)).toEqual(expectedAction);
    });

    it('creates an action to set the header context to company chat', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_COMPANY_CHAT,
      };
      expect(setHeaderContext(HEADER_COMPANY_CHAT)).toEqual(expectedAction);
    });

    it('creates an action to set the header context to the default', () => {
      const expectedAction = {
        type: SET_HEADER_CONTEXT,
        context: HEADER_DEFAULT,
      };
      expect(setHeaderContext(HEADER_DEFAULT)).toEqual(expectedAction);
    });
  });

  describe('clearing', () => {
    it('creates an action to clear the header context', () => {
      const expectedAction = {
        type: CLEAR_HEADER_CONTEXT,
      };
      expect(clearHeaderContext()).toEqual(expectedAction);
    });
  });
});
