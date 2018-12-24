import React from 'react';
import FooterComponent from '../components/footer';
import {FOOTER_TEXT} from '../constants/app';

import {shallow} from 'enzyme';

const setup = (props = {}, state = null) => {
    const defaultProps = {};
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<FooterComponent {...setUpProps}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps}
};

describe("Favourite component", () => {
    it('Should render correct text of footer', () => {
        const {wrapper} = setup();
        expect(wrapper.find("footer").text()).toBe(FOOTER_TEXT);
    });

});


