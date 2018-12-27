import React from 'react';
import MainRouterComponent from '../../components/main_router';
import {shallow} from 'enzyme';
import Header from "../../components/header";
import Footer from "../../components/footer";



const setup = (props= {},state=null) => {
    const defaultProps = {};
    const setUpProps = {...defaultProps,...props};
    const wrapper = shallow(<MainRouterComponent {...setUpProps}/>);
    if(state) wrapper.setState(state);
    return {wrapper, props:setUpProps}
};

describe("Main router component", () => {
    it('Should container header', () => {
        const {wrapper} = setup();
        expect(wrapper.find(Header).length).toBe(1);
    });

    it('Should contain Footer', () => {
        const {wrapper} = setup();
        expect(wrapper.find(Footer).length).toBe(1);
    });

    it('Should contain Routes', () => {
        const {wrapper} = setup();
        expect(wrapper.find("Route").length).toBeGreaterThan(0);
    });

});

