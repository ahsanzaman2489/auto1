import React from 'react';
import FavouriteComponent from '../../components/favourite';
import {NO_FAVOURITE, FAVOURITE} from '../../constants/app.js';
import {shallow} from 'enzyme';
import renderer from "react-test-renderer";

const setup = (props = {}, state = null) => {
    const defaultProps = {
        stockNumber: "10172",
        addToFavourite: jest.fn(),
        isFavourite: false,
        removeFromFavourite: jest.fn()
    };
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<FavouriteComponent {...setUpProps}/>);
    const tree = () => renderer.create(<FavouriteComponent {...setUpProps}/>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps,tree}
};

describe("Favourite component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });
    it('Should render correct text and button if component is not favourite', () => {
        const {wrapper, props} = setup();
        expect(wrapper.find("p").text()).toBe(NO_FAVOURITE);
        wrapper.find("button").simulate('click');
        expect(props.addToFavourite).toHaveBeenCalled();
        expect(props.addToFavourite).toHaveBeenCalledTimes(1);
    });

    it('Should render correct and button text if component is favourite', () => {
        const {wrapper, props} = setup({isFavourite: true});

        expect(wrapper.find("p").text()).toBe(FAVOURITE);
        wrapper.find("button").simulate('click');

        expect(props.removeFromFavourite).toHaveBeenCalled();
        expect(props.removeFromFavourite).toHaveBeenCalledTimes(1);
    });

});


