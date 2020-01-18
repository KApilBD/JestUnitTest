import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from './CounterButton';

describe('<CounterButton />', () => {
    let wapper;
    beforeAll(() => {
        wapper = shallow(<CounterButton />);
    })

    it('expect to render card component', () => {
        const mockColor = 'red';
        wapper.setProps({
            color: mockColor,
        });
        expect(wapper).toMatchSnapshot();
    })

    it('correctly increment the counter', () => {
        wapper.find("[id='counter']").simulate('click')
        expect(wapper.state()).toEqual({ count: 1 })
        expect(wapper.props().color).toEqual( 'red')
    })
})



