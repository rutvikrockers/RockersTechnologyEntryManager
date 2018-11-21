
import camelize from 'camelcase-keys';
import { UPDATE_FEED } from '../actions/actionTypes';


export default function (state = {
  allVideos: [],
}, {type, payload}) {
  switch (type) {

    case UPDATE_FEED: {
      return {
        ...state,
        allVideos: payload.allVideos,
        videoPath: payload.full_video_path
      }
    }
    
    default: {
      return state;
    }
  }
}

