import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Footer } from '../footer';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Footer {...props} />
    </Provider>
);

describe('Footer', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(Footer).length).toBe(1);
    });
});