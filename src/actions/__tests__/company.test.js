import fetchMock from 'fetch-mock';
import { API_HOST } from 'react-native-config';
import { mockStore } from '../../../config/setup';
import {
    fetchCompany,
    followCompany
} from '../company';

describe('actions: company', () => {
    let expectedActions, store;
    const [ token, id, detailEndpoint, followEndpoint ] = ['token', 'myId', `${API_HOST}/company/company_detail`, `${API_HOST}/company/follow`];

    beforeEach(() => {
        expectedActions = [];
        fetchMock.reset();
        fetchMock.restore();
    });

    it('handles FETCH_COMPANY action', async () => {
        expectedActions = [{
            type: 'FETCH_COMPANY',
            payload: { success: true },
        }];

        await fetchMock.postOnce(detailEndpoint, () => Promise.resolve({ success: true }));
        store = mockStore({});

        return store.dispatch(fetchCompany(token, id)).then(() => {
           expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('handles FOLLOW_COMPANY action', async () => {
        expectedActions = [{
            type: 'FOLLOW_COMPANY',
            payload: { success: true },
        }];

        await fetchMock.postOnce(followEndpoint, () => Promise.resolve({ success: true }));
        store = mockStore({});

        return store.dispatch(followCompany(token, id)).then(() => {
           expect(store.getActions()).toEqual(expectedActions);
        });
    });
});