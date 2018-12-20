import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import Header from "../components/header";
import Footer from "../components/footer";

const defaultProps = {};

const setup = (props= {},state=null) => {
    const setUpProps = {...defaultProps,...props};
    const wrapper = shallow(<App {...setUpProps}/>);
    if(state) wrapper.setState(state);
    return {wrapper, props:setUpProps}
};

describe("App component", () => {
    it('Should contain Header', () => {
        const {wrapper} = setup();
        expect(wrapper.find(Header).length).toBe(1);
    });

    it('Should contain one Footer', () => {
        const {wrapper} = setup();
        expect(wrapper.find(Footer).length).toBe(1);
    });

    it('Should contain Two Routes', () => {
        const {wrapper} = setup();
        expect(wrapper.find("Route").length).toBe(2);
    });

});

