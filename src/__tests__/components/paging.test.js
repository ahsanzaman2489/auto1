import React from 'react';
import PagingComponent from '../../components/paging';
import {shallow} from 'enzyme';


const setup = (props = {}, state = null) => {
    const defaultProps = {totalPageCount: 20, location: {search: "?color=black&manufacturer=Chrysler&page=1&sort=asc"}};
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<PagingComponent {...setUpProps}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps}
};


describe("Paging component", () => {
    it('should render 5 list items', () => {
        const {wrapper} = setup();
        expect(wrapper.find('li').length).toBe(5);
    });

    it('first two list have class disabled when current page is one', () => {
        const {wrapper} = setup();

        expect(wrapper.find('ul').childAt(0).find('NavLink').props().className).toBe("disabled");
        expect(wrapper.find('ul').childAt(1).find('NavLink').props().className).toBe("disabled");
    });

    it('third list should have text of total and current page', () => {
        const {wrapper,props} = setup();

        expect(wrapper.find('ul').childAt(2).text()).toBe(`page 1 of ${props.totalPageCount}`);
    });

    it('last two list have class disabled when current page is equal to total page count', () => {
        const {wrapper} = setup({location: {search: "?color=black&manufacturer=Chrysler&page=20"}});

        expect(wrapper.find('ul').childAt(3).find('NavLink').props().className).toBe("disabled");
        expect(wrapper.find('ul').childAt(4).find('NavLink').props().className).toBe("disabled");
    });

});


