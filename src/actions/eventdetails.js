import {doFetch} from './fetch';

const UPDATE_DETAIL_LIST_EVENT = 'UPDATE_DETAIL_LIST_EVENT';


function updateListEvent(t) {
  return {
    type: UPDATE_DETAIL_LIST_EVENT,
    payload: t
  }
}

export function fetchListEvents(UserId,event_id){ 
  
  return function (dispatch) {
      
      return doFetch('POST', `/mobile_logins/myevent_details`, {
        id: UserId,event_id:event_id
        },function(err,res){
      if(err || res.success === false){ 
        var e = res.success.message;
        return dispatch(error(e))
      };
      return dispatch(updateListEvent(res));
    })
  }
}