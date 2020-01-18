import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';


it('expect to render card component', () => {

    const mockRobots = [
        {
            id: 1,
            name: 'Jackson',
            username: 'Jackson Jack',
            email: 'jacky@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})


