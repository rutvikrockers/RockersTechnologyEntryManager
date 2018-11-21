import { NOW_PLAYING_VIDEO, IS_VIDEO_PLAYING } from '../actions/actionTypes';

export default function (state = {
  nowPlaying: 0,
  isPlaying: false
}, {type, payload}) {
  switch (type) {

    case NOW_PLAYING_VIDEO: {
      return {
        ...state,
        nowPlaying: payload
      }
    }

    case IS_VIDEO_PLAYING: {
      return {
        ...state,
        isPlaying: payload
      }
    }

    default: {
      return state;
    }
  }
}


