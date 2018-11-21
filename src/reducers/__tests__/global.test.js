import { default as globalReducer } from '../global';
import {
    ERROR,
    HIDE_ERROR,
    IS_LOADING,
    IS_NOT_LOADING,
    SET_LOADING_COMPONENT
} from '../../actions/actionTypes';

describe('global reducer', () => {
    let action, initialState, newState;

    beforeEach(() => {
        initialState = {
            status: false,
            message: null,
            isLoading: false,
            footerStyle: null,
            loadingComponent: null
        };
    });

    it('returns initial state', () => {
        expect(globalReducer(undefined, {})).toEqual(initialState);
    });

    it('sets state for ERROR action', () => {
        action = { type: ERROR, payload: 'errr' };
        newState = { ...initialState, status: true, message: action.payload };

        expect(globalReducer(initialState, action)).toEqual(newState);
    });

    it('sets state for HIDE_ERROR action', () => {
        action = { type: HIDE_ERROR };
        expect(globalReducer(initialState, action)).toEqual(initialState);
    });

    it('sets state for IS_LOADING action', () => {
       action = { type: IS_LOADING };
       expect(globalReducer(initialState, action)).toEqual({ ...initialState, isLoading: true });
    });

    it('sets state for IS_NOT_LOADING action', () => {
        action = { type: IS_NOT_LOADING };
        expect(globalReducer(initialState, action)).toEqual(initialState);
    });

    it('sets state for SET_LOADING_COMPONENT', () => {
       action = { type: SET_LOADING_COMPONENT, payload: 'derp' };
       expect(globalReducer(initialState, action)).toEqual({ ...initialState, loadingComponent: 'derp' });
    });
});