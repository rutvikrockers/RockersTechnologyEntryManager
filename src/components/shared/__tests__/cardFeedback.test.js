import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../config/setup';
import toJson from 'enzyme-to-json';
import { default as CardFeedback } from '../cardFeedback';

const render = (props) => shallow(
    <Provider store={mockStore({})}>
        <CardFeedback {...props} />
    </Provider>
);

describe('Feedback', () => {
    let component;
    beforeEach(() => {
        component = render({});
    });

    it('matches its snapshot', () => {
        expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    });

    it('renders', () => {
        expect(component.find(CardFeedback).length).toBe(1);
    });
});