export default function (state = {
    follow_list: [],
  }, {type, payload}) {
    switch (type) {

      case 'UPDATE_FEED_FOLLOW': {
        return {
          ...state,
          follow_list: payload.follow_list,
          image_path: payload.image_path
        }
      }
  
      default: {
        return state;
      }
    }
  }
  