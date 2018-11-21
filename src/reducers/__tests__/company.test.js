import { default as companyReducer } from '../company';
import { FETCH_COMPANY, FOLLOW_COMPANY } from '../../actions/actionTypes';

describe('company reducer', () => {
    let action, payload, prevState;

    beforeEach(() => {
        payload = {
            company_logo_path: '/path/to/img',
            data: {
                company_detail: {
                    company_name: 'boop',
                    company_logo: 'booooop.png',
                    title: 'title',
                    address: 'address',
                    description: 'blah blah blah',
                    equity_currency_symbol: '¥',
                    Stage_of_Developement: 'wut',
                },
                follower: {
                    followers: [],
                },
            },
        };
    });

    it('returns initial state', () => {
       prevState = companyReducer(undefined, {});
       expect(prevState).toEqual({ stageOfDevelopment: '' });
    });

    it('sets state for FETCH_COMPANY action', () => {
        const { company_logo_path, data: {
            company_detail: {
                company_name,
                company_logo,
                title,
                address,
                description,
                equity_currency_symbol,
                Stage_of_Developement,
            },
            follower: { followers }}} = payload;
        action = { type: FETCH_COMPANY, payload };
        expect(companyReducer({}, action)).toEqual({
            companyName: company_name,
            companyLogo: company_logo,
            companyLogoPath: company_logo_path,
            title,
            followers,
            address,
            description,
            equityCurrencySymbol: equity_currency_symbol,
            stageOfDevelopment: Stage_of_Developement
        });
    });

    it('sets state for FOLLOW_COMPANY action', () => {
        payload = { message: 'follow this company' };
        const { message } = payload;
        action = { type: FOLLOW_COMPANY, payload };
        expect(companyReducer({}, action)).toEqual({ message });
    });
});