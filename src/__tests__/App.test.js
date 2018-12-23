import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';



const setup = (props= {},state=null) => {
    const defaultProps = {};
    const setUpProps = {...defaultProps,...props};
    const wrapper = shallow(<App {...setUpProps}/>);
    if(state) wrapper.setState(state);
    return {wrapper, props:setUpProps}
};

describe("App component", () => {
    it('Should render main route component', () => {
        const {wrapper} = setup();
        expect(wrapper.find("MainRouterComponent").length).toBe(1);
    });

});

