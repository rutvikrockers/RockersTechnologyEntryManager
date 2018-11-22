export default function (state = {
  loggedIn: false,
  email: null,
  _id: null,
  token: null
}, {type, payload}) {
  switch (type) {
    case 'LOGIN': {
      return {
        ...state,
        ...payload,
        loggedIn: true
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        email: null,
        token: null,
        _id: null,
        loggedIn: false
      }
    }

    case 'GUEST_TOKEN': {
      return {
        ...state,
        guestToken: payload
      }
    }

    default: {
      return state;
    }
  }
}
