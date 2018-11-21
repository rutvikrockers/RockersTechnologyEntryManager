import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Button } from '../button';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Button {...props} />
    </Provider>
);

describe('Button', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(Button).length).toBe(1);
    });
});