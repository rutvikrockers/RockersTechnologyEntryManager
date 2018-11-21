import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Login } from '../login';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Login {...props} />
    </Provider>
);

describe('Login', () => {
    let component;
    beforeEach(() => {
       component = render({});
    });

    it('matches its snapshot', () => {
       expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
       expect(component.find(Login).length).toBe(1);
    });
});