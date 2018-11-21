import { Thunk } from 'redux-testkit';
import {authenticate} from '../index';
import Fetch from '../fetch'
jest.mock('../fetch');

describe('authenticate', () => {
  let successfulAuthenticate = Promise.resolve({content: {user: {login: 'jdoe', api_key: 'api_key_here'}}});
  let unsuccessfulAuthenticate = Promise.resolve({content: {type: 'warn', message: 'Incorrect login information'}});

  beforeEach(() => {
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should set to loading while fetching', async () => {
    Fetch.doFetch.mockReturnValueOnce(successfulAuthenticate);
    const dispatches = await Thunk(authenticate).execute();
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({ type: 'LOGIN'});
  });


  it('should use the `whoami` endpoint to get user information', async () => {
    Fetch.doFetch.mockReturnValueOnce(successfulAuthenticate);
    let dispatches = await Thunk(authenticate).execute();
    expect(dispatches[1].getAction()).toEqual({type: 'LOGIN_SUCCESS', payload: {username: 'jdoe', token: 'api_key_here', name: undefined}});
  });

  it('should throw an error if request fails', async () => {
    Fetch.doFetch.mockReturnValueOnce(unsuccessfulAuthenticate);
    let dispatches = await Thunk(authenticate).execute();
    expect(dispatches[1].getAction()).toEqual({type: 'LOGIN_FAILURE', payload: {type: 'warn', message: 'Incorrect login information'}});
  });

});
