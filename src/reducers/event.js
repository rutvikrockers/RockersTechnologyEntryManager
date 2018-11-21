import camelize from 'camelcase-keys';

import { UPDATE_EVENT_LIST } from '../actions/actionTypes';
export default function (state = {
    all_events: [],
  }, {type, payload}) {
    switch (type) {

      case UPDATE_EVENT_LIST: {
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