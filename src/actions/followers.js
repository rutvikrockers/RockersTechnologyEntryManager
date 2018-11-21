import {doFetch} from './fetch';

const UPDATE_FEED_FOLLOW = 'UPDATE_FEED_FOLLOW';


function updateFollow(t) {
  return {
    type: UPDATE_FEED_FOLLOW,
    payload: t
  }
}

export function fetchFollow(token){
  return function (dispatch) {
    return doFetch('POST', `/pitch_video/dashboard`, null, token, function(err, res){
    
      if(err || res.success === false){ 
        var e = res.success.message;
        return dispatch(error(e))
      };
      return dispatch(updateFollow(res.data));
    })
  }
}
