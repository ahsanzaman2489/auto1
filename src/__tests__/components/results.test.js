import React from 'react';
import ResultsComponent from '../../components/results';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";


const setup = (props = {}, state = null) => {
    const defaultProps = {totalItemCount: 20, currentPage: 2, currentItemCount: 10, itemPerPage: 10};
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<ResultsComponent {...setUpProps}/>);
    const tree = () => renderer.create(<ResultsComponent {...setUpProps}/>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps, tree}
};


describe("Results component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });

    it('should render results text with values', () => {
        const {wrapper, props} = setup();
        expect(wrapper.find('.searchResult').text()).toBe(`Showing ${(props.itemPerPage * (props.currentPage - 1)) + props.currentItemCount} of ${props.totalItemCount} results`);
    });
});


