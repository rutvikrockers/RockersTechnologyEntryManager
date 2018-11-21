import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Card } from '../card';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Card {...props} />
    </Provider>
);

describe('Card', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(Card).length).toBe(1);
    });
});