import fetchMock from 'fetch-mock';
import { API_HOST } from 'react-native-config';
import { mockStore } from '../../../config/setup';
import {
    authenticate,
    getGuestToken,
    isLoading,
    isNotLoading,
    setLoadingComponent,
    hideError,
    destroySession,
} from '../index';

describe('actions: index', () => {
    let expectedActions, store;
    const [guestEndpoint, loginEndpoint] = [`${API_HOST}/login/guest`, `${API_HOST}/login/user_login`];

    beforeEach(() => {
        expectedActions = [];
        fetchMock.reset();
        fetchMock.restore();
    });

    it('handles HIDE_ERROR action', () => {
       expectedActions = {
           type: 'HIDE_ERROR',
       } ;

       expect(hideError()).toEqual(expectedActions);
    });

    it('handles IS_LOADING action', () => {
       expectedActions = {
           type: 'IS_LOADING',
       };

       expect(isLoading()).toEqual(expectedActions);
    });

    it('handles IS_NOT_LOADING action', () => {
       expectedActions = {
           type: 'IS_NOT_LOADING',
       };

       expect(isNotLoading()).toEqual(expectedActions);
    });

    it('handles SET_LOADING_COMPONENT action', () => {
       expectedActions = {
           type: 'SET_LOADING_COMPONENT',
           payload: 'component placeholder',
       };

       expect(setLoadingComponent('component placeholder')).toEqual(expectedActions);
    });

    it('handles LOGOUT action', async () => {
       expectedActions = [{
           type: 'LOGOUT',
       }];

       store = mockStore({});
       await store.dispatch(destroySession());
       expect(store.getActions()).toEqual(expectedActions);
    });

    it('handles GUEST_TOKEN successfully', async () => {
       expectedActions = [{
           type: 'GUEST_TOKEN',
           payload: 'boop',
       }];

       await fetchMock.getOnce(guestEndpoint, () => Promise.resolve({ data: { token: 'boop' } }));

       store = mockStore({ token: '' });
       return store.dispatch(getGuestToken()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
       });
    });

    it('handles ERROR for GUEST_TOKEN gracefully', async () => {
       expectedActions = [
           { type: 'ERROR', payload: 'error' },
       ];

       await fetchMock.getOnce(guestEndpoint, () => Promise.resolve({ success: false, message: 'error' }));
       store = mockStore({ error: '' });
       return store.dispatch(getGuestToken()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
       });
    });

    it('handles IS_LOADING, IS_NOT_LOADING, LOGIN when authentication is successful', async () => {
       const authSuccessUser = { email: 'test@email', password: '123', token: 'token' };
       expectedActions = [
           { type: 'IS_LOADING' },
           { type: 'IS_NOT_LOADING' },
           { type: 'LOGIN', payload: 'hi!' },
       ];

       await fetchMock.postOnce(loginEndpoint, () => Promise.resolve({ success: true, data: 'hi!' }));
       store = mockStore({ data: {} });
       return store.dispatch(authenticate(authSuccessUser)).then(() => {
           expect(store.getActions()).toEqual(expectedActions);
       })
    });

    it('handles IS_LOADING, IS_NOT_LOADING, ERROR when authentication fails', async () => {
        const authFailUser = { email: 'jdoe@thekrowd.us', password: 'bad', token: 'badToken' };
        expectedActions = [
            { type: 'IS_LOADING' },
            { type: 'IS_NOT_LOADING' },
            { type: 'ERROR', payload: 'error' },
        ];

        await fetchMock.postOnce(loginEndpoint, () => Promise.resolve({ success: false, message: 'error' }));
        store = mockStore({ data: {} });
        return store.dispatch(authenticate(authFailUser)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    });
});