import React from 'react';
import HeaderComponent from '../../components/header';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';

const setup = (props = {}, state = null) => {
    const defaultProps = {src: "logo.png"};
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<HeaderComponent {...setUpProps}/>);
    const tree = () => renderer.create(<Router><HeaderComponent {...setUpProps}/></Router>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps, tree};
};

describe("Header component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });

    it('Should contain logo source', () => {
        const {wrapper, props} = setup();
        expect(wrapper.find("img").prop('src')).toBe(props.src);
    });

    it('Should render navigation list', () => {
        const {wrapper} = setup();
        expect(wrapper.find("li").length).toBeGreaterThan(0);
    });
});


