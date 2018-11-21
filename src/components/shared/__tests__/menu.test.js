import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Menu } from '../menu';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Menu {...props} />
    </Provider>
);

describe('Menu', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(Menu).length).toBe(1);
    });
});