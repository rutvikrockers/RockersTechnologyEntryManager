import fetchMock from 'fetch-mock';
import { API_HOST } from 'react-native-config';
import { mockStore } from '../../../config/setup';
import {
    fetchFeed
} from '../feed';

describe('actions: feed', () => {
   let expectedActions, store;

   beforeEach(() => {
       fetchMock.reset();
       fetchMock.restore();
   });

   it('handles UPDATE_FEED action', async () => {
        expectedActions = [
            { type: 'IS_LOADING' },
            { type: 'IS_NOT_LOADING' },
            { type: 'UPDATE_FEED', payload: 'beep' },
        ];

        await fetchMock.getOnce(`${API_HOST}/Pitch_video/getAllVideos`, () => Promise.resolve({ success: true, data: 'beep' }));
        store = mockStore({});

        return store.dispatch(fetchFeed('boop')).then(() => {
           expect(store.getActions()).toEqual(expectedActions);
        });
   });
});