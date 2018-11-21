// create our store for testing redux components
import configureMockStore from 'redux-mock-store';
const thunk = require('redux-thunk');

// Setup adapter to work with enzyme 3.2.0
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

export const mockStore = configureMockStore([thunk.default]);

Enzyme.configure({ adapter: new Adapter() });