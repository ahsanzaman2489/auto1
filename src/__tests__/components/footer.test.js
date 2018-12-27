import React from 'react';
import FooterComponent from '../../components/footer';
import {FOOTER_TEXT} from '../../constants/app';

import {shallow} from 'enzyme';
import renderer from "react-test-renderer";

const setup = (props = {}, state = null) => {
    const defaultProps = {};
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<FooterComponent {...setUpProps}/>);
    const tree = () => renderer.create(<FooterComponent {...setUpProps}/>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps, tree}
};

describe("Favourite component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });
    it('Should render correct text of footer', () => {
        const {wrapper} = setup();
        expect(wrapper.find("footer").text()).toBe(FOOTER_TEXT);
    });

});


