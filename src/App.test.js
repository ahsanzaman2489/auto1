import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';
import Header from "./components/header";
import Footer from "./components/footer";


const setUp = () => {
    const props = {};
    const wrapper = shallow(<App {...props}/>);
    return {wrapper, props}
};

describe("App component", () => {
    it('Should contain Header', () => {
        const {wrapper} = setUp();
        expect(wrapper.find(Header).length).toBe(1);
    });

    it('Should contain one Footer', () => {
        const {wrapper} = setUp();
        expect(wrapper.find(Footer).length).toBe(1);
    });

    it('Should contain Two Routes', () => {
        const {wrapper} = setUp();
        expect(wrapper.find("Route").length).toBe(2);
    });

});

