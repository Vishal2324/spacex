import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';
import LaunchCard from './SubComponents/LaunchCard/LaunchCard';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
    it('should not render <LaunchCard /> if launch program data is empty', () => {
        const wrapper = shallow(<Home location={{}} />);
        expect(wrapper.find(LaunchCard)).toHaveLength(0);
    })
});