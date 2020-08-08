import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterButton from './FilterButton';

configure({ adapter: new Adapter() });

describe('<FilterButton />', () => {
    it('should should have class name `filter-selected` if selected is true', () => {
        const wrapper = shallow(<FilterButton selected />);
        expect(wrapper.hasClass("filter-selected")).toBe(true)
    })
});