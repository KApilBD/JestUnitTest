import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('<MainPage />', () => {
    let wapper;
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        }
        wapper = shallow(<MainPage {...mockProps} />);
    })

    it('expect to render MainPage component', () => {
        expect(wapper).toMatchSnapshot();
    })

    it('filters robots correctly', () => {
        expect(wapper.instance().filterRobots()).toEqual([]);
    })

    it('filters robots with props correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id:3,
                name: 'Jone',
                email:'jone@gamil.com'
            }],
            searchField: 'Jone',
            isPending: false
        }
        const wapper2 = shallow(<MainPage {...mockProps2} />);
        expect(wapper2.instance().filterRobots()).toEqual([{
            id:3,
            name: 'Jone',
            email:'jone@gamil.com'
        }]);
    })
})



