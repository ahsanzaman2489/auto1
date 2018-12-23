import React from 'react';
import HeaderComponent from '../components/header';
import {shallow} from 'enzyme';




const setup = (props= {},state=null) => {
    const defaultProps = {src: "logo.png"};
    const setUpProps = {...defaultProps,...props};
    const wrapper = shallow(<HeaderComponent {...setUpProps}/>);
    if(state) wrapper.setState(state);
    return {wrapper, props:setUpProps}
};

describe("Header component", () => {
    it('Should contain logo source', () => {
        const {wrapper, props} = setup();
        expect(wrapper.find("img").prop('src')).toBe(props.src);
    });

    it('Should render navigation list', () => {
        const {wrapper} = setup();
        expect(wrapper.find("li").length).toBeGreaterThan(0);
    });
});


