import fetchMock from 'fetch-mock';
import { API_HOST } from 'react-native-config';
import Base from '../base';

describe('actions:Base', ()=> {
   let base, expectedActions;

   beforeEach(() => {
       fetchMock.reset();
       fetchMock.restore();
   });

   it('handles base actions as a parent', () => {
       base = new Base('boop', '/boop/beep');
       expectedActions = {
           type: 'ERROR',
           payload: 'err'
       };
       expect(base.error('err')).toEqual(expectedActions);
   });
});