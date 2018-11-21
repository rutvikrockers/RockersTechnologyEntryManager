import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Signup } from '../signup';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Signup {...props} />
    </Provider>
);

describe('Signup', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(Signup).length).toBe(1);
    });
});