import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as Spinner } from '../spinner';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <Spinner {...props} />
    </Provider>
);

describe('Spinner', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(Spinner).length).toBe(1);
    });
});