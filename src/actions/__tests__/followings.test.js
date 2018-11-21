import fetchMock from 'fetch-mock';
import { API_HOST } from 'react-native-config';
import { mockStore } from '../../../config/setup';
import { fetchFollowings } from '../followings';

describe('actions: followings', () => {
   let expectedActions, store;

   beforeEach(() => {
      fetchMock.reset();
      fetchMock.restore();
   });

   it('handles UPDATE_FEED_FOLLOW action', async () => {
       expectedActions = [
           { type: 'UPDATE_FEED_FOLLOW', payload: 'boop' },
       ];

       fetchMock.getOnce(`${API_HOST}/pitch_video/dashboard`, () => Promise.resolve({ success: true, data: 'boop' }));
       store = mockStore({ data: '' });

       return store.dispatch(fetchFollowings('boop')).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
       });
   });
});