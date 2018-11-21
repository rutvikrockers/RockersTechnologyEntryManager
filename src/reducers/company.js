import camelize from 'camelcase-keys';
import {FETCH_COMPANY, FOLLOW_COMPANY} from '../actions/actionTypes';

export default function(state = {}, {type, payload}) {
  switch (type) {
    case FETCH_COMPANY: {
      let company = camelize(payload.data.company_detail);
      company = {...company, companyLogoPath: payload.company_logo_path};
      return {
        company: company
      };
    }

    case FOLLOW_COMPANY: {
      return {
        message: payload.message
      };
    }

    default: {
      return state;
    }
  }
}
