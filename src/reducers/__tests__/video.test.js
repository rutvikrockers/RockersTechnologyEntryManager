import { default as videoReducer } from '../video';
import { NOW_PLAYING_VIDEO, IS_VIDEO_PLAYING } from '../../actions/actionTypes';

describe('video reducer', () => {
    let action, initialState, newState;

    beforeEach(() => {
        initialState = {
            nowPlaying: 0,
            isPlaying: false
        };
    });

    it('returns initial state', () => {
        expect(videoReducer(undefined, {})).toEqual(initialState);
    });

    it('sets state for NOW_PLAYING_VIDEO action', () => {
        action = { type: NOW_PLAYING_VIDEO, payload: 'playing vid test' };
        newState = {
            ...initialState,
            nowPlaying: action.payload
        };
        expect(videoReducer(initialState, action)).toEqual(newState);
    });

    it('sets state for IS_VIDEO_ PLAYING action', () => {
        action = { type: IS_VIDEO_PLAYING, payload: true };
        newState = {
            ...initialState,
            isPlaying: true
        };
        expect(videoReducer(initialState, action)).toEqual(newState);
    });
});