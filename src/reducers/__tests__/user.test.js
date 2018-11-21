import { default as userReducer } from '../user';
import { LOGIN, LOGOUT, GUEST_TOKEN } from '../../actions/actionTypes';

describe('user reducer', () => {
    let action, initialState, newState;

    beforeEach(() => {
        initialState = {
            loggedIn: false,
            email: null,
            _id: null,
            token: null
        };
    });

    it('returns initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('sets state for LOGIN action', () => {
        action = { type: LOGIN, payload: 'boop' };
        newState = {
            ...initialState,
            ...action.payload,
            loggedIn: true
        };
        expect(userReducer(initialState, action)).toEqual(newState);
    });

    it('sets state for LOGOUT action', () => {
        action = { type: LOGOUT };
        expect(userReducer(initialState, action)).toEqual(initialState);
    });

    it('sets state for GUEST_TOKEN action', () => {
       action = { type: GUEST_TOKEN, payload: 'aToken' };
       newState = { ...initialState, guestToken: action.payload };
       expect(userReducer(initialState, action)).toEqual(newState);
    });
});