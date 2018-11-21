import camelize from 'camelcase-keys';

import { UPDATE_DETAIL_LIST_EVENT } from '../actions/actionTypes';
export default function (state = {
    all_events: [],
  }, {type, payload}) {
    switch (type) {

      case UPDATE_DETAIL_LIST_EVENT: {
        return {
          ...state,
          all_events: payload.all_events,
          
        }
      }
  
      default: {
        return state;
      }
    }
  }