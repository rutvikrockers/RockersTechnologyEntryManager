import {doFetch} from './fetch';

const UPDATE_FEED = 'UPDATE_FEED';

function updateFeed(t) {
  return {
    type: UPDATE_FEED,
    payload: t
  }
}

export function fetchFeed(token){
  return function (dispatch) {
    return doFetch('GET', `/Pitch_video/getAllVideos`, null, token, function(err, res){
  
      if(err || res.success === false){ 
        var e = res.success.message;
        return dispatch(error(e))
      };
      return dispatch(updateFeed(res.data));
    })
  }
}
