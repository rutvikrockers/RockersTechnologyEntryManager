import { default as feedReducer } from '../feed';
import { UPDATE_FEED } from '../../actions/actionTypes';

describe('feed reducer', () => {
    let action, payload, prevState;

    it('returns initial state', () => {
        prevState = feedReducer(undefined, {});
        expect(prevState).toEqual({ allVideos: [] });
    });

    it('sets state for UPDATE_FEED action', () => {
        payload = { allVideos: ['video1', 'video2'], full_video_path: '/path/to/videos' };
        action = { type: UPDATE_FEED, payload };
        expect(feedReducer({}, action)).toEqual({ allVideos: payload.allVideos, videoPath: payload.full_video_path });
    });
});