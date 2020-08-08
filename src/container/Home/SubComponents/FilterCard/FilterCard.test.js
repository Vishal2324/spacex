import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterCard from './FilterCard';
import FilterButton from '../FilterButton/FilterButton';

configure({adapter: new Adapter()});

describe('<FilterCard />', () => {
    it('should render 19 <FilterButton /> inside <FilterCard />', () => {
        const wrapper = shallow(<FilterCard filterParam={{}}/>);
        expect(wrapper.find(FilterButton)).toHaveLength(19)
    })
});