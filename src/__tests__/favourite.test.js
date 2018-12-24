import React from 'react';
import FavouriteComponent from '../components/favourite';
import {NO_FAVOURITE,FAVOURITE} from '../constants/app.js';
import {shallow} from 'enzyme';

const setup = (props = {}, state = null) => {
    const defaultProps = {
        stockNumber: "10172",
        addToFavourite: jest.fn(),
        isFavourite: false,
        removeFromFavourite: jest.fn()
    };
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<FavouriteComponent {...setUpProps}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps}
};

describe("Favourite component", () => {
    it('Should render correct text and button if component is not favourite', () => {
        const {wrapper,props} = setup();
        expect(wrapper.find("p").text()).toBe(NO_FAVOURITE);
        wrapper.find("button").simulate('click');
        expect(props.addToFavourite).toHaveBeenCalled();
        expect(props.addToFavourite).toHaveBeenCalledTimes(1);
    });

    it('Should render correct and button text if component is favourite', () => {
        const {wrapper,props} = setup({isFavourite: true});

        expect(wrapper.find("p").text()).toBe(FAVOURITE);
        wrapper.find("button").simulate('click');

        expect(props.removeFromFavourite).toHaveBeenCalled();
        expect(props.removeFromFavourite).toHaveBeenCalledTimes(1);
    });

});


