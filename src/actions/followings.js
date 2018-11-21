import {doFetch} from './fetch';
import { UPDATE_FEED_FOLLOW, IS_NOT_LOADING, IS_LOADING } from './actionTypes';
import { isLoading, isNotLoading} from './feed';

function updateFollowings(t) {
  return {
    type: UPDATE_FEED_FOLLOW,
    payload: t,
  };
}

export function fetchFollowings(token) {
  return function(dispatch) {
    dispatch(isLoading());
    return doFetch('GET', `/pitch_video/dashboard`, null, token, function(
      err,
      res,
    ) {
      if (err || res.success === false) {
        dispatch(isNotLoading());
        var e = res.success.message;
        return dispatch(error(e));
      }
      dispatch(isNotLoading());
      return dispatch(updateFollowings(res.data));
    });
  };
}
