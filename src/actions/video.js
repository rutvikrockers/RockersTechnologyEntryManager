import {doFetch} from './fetch';
export const ERROR = 'ERROR';

const NOW_PLAYING_VIDEO = 'NOW_PLAYING_VIDEO';
const IS_VIDEO_PLAYING = 'IS_VIDEO_PLAYING';

export function playVideo(t) {
  return {
    type: NOW_PLAYING_VIDEO,
    payload: t
  }
}

export function isVideoPlaying(t) {
  return {
    type: IS_VIDEO_PLAYING,
    payload: t
  }
}

function error(e) {
  return {
    type: ERROR,
    payload: e
  }
}

export function doVideoAction(action, id, value, token) {
  return function (dispatch) {
    return doFetch('POST', `/pitch_video/pitch_video_action`, {
      action: action,
      video_id: id,
      value: value
    }, token, function(err, res){
      if(err || res.success === false){ 
  
        var e = res.message;
        return dispatch(error(e))
      };
      
      
    })
  }
}
