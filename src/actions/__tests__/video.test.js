import fetchMock from 'fetch-mock';
import { API_HOST } from 'react-native-config';
import { mockStore } from '../../../config/setup';
import { doVideoAction } from '../video';
import {
    ERROR,
    NOW_PLAYING_VIDEO,
    IS_LOADING,
    IS_VIDEO_PLAYING, IS_NOT_LOADING, UPDATE_FEED
} from '../actionTypes';

/* skipping for now, will come back to this. */
describe.skip('actions: video', () => {
   let expectedActions, payload, store;
   const [ getEndpoint, postEndpoint ] = [`${API_HOST}/Pitch_video/getAllVideos`, `${API_HOST}/pitch_video/pitch_video_action`];

   beforeEach(() => {
       fetchMock.reset();
       fetchMock.restore();
   });

   it('handles UPDATE_FEED action for videos', async () => {
       payload = {
           action: 'boop',
           video_id: 1,
           value: 'booooop'
       };
       expectedActions = [
           { type: IS_LOADING },
           { type: IS_LOADING },
           { type: IS_NOT_LOADING },
           { type: UPDATE_FEED, payload },
       ];

       await fetchMock.postOnce(postEndpoint, () => Promise.resolve({ data: payload, message: 'oops', success: true }));
       store = mockStore({ data: {} });
       const { action, video_id, value } = payload;
       return store.dispatch(doVideoAction(action, video_id, value, 'aToken')).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
       });
   });
});
