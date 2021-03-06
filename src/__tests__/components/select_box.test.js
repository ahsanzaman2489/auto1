import React from 'react';
import SelectBoxComponent from '../../components/form/selectbox';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";

const setup = (props = {}, state = null) => {
    const defaultProps = {
        options: ["red", "blue", "green", "black", "yellow", "white", "silver"],
        meta: {active: true, error: false, submitFailed: false},
        id: 'colors'
    };
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<SelectBoxComponent {...setUpProps}/>);
    const tree = () => renderer.create(<SelectBoxComponent {...setUpProps}/>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps, tree}
};

describe("Select box component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });

    it('Should render all option by to selectbox', () => {
        const {wrapper} = setup();
        expect(wrapper.find('option').length).toBe(8);
    });

});

