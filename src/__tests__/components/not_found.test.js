import React from 'react';
import NotFoundComponent from '../../components/404';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';


const setup = (props = {}, state = null) => {
    const defaultProps = {};
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<NotFoundComponent {...setUpProps}/>);
    const tree = () => renderer.create(<Router><NotFoundComponent {...setUpProps}/></Router>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps, tree}
};

describe("Not found component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });

    it('Should render not found component', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.pagenotfound').length).toBe(1);
        expect(wrapper.find('.logo').length).toBe(1);
        expect(wrapper.find('.content404').length).toBe(1);
        expect(wrapper.find('NavLink').length).toBe(1);
        expect(wrapper.find('.content404').childAt(0).text()).toBe('404 - Not Found')
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('h1').length).toBe(1);
    });

});

