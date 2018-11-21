import { default as followingsReducer } from '../followings';
import { UPDATE_FEED_FOLLOW } from '../../actions/actionTypes';

describe('company reducer', () => {
    let action, state;

    it('returns initial state', () => {
        state = followingsReducer(undefined, {});
        expect(state).toEqual({ follow_list: [] });
    });

    it('sets state for UPDATE_FEED_FOLLOW action', () => {
        action = {
            type: UPDATE_FEED_FOLLOW,
            payload: {
                follow_list: ['follower1', 'follower2'],
                image_path: '/path/to/img'
            }
        };
        state = followingsReducer({}, action);
        expect(state).toEqual(action.payload);
    });
});