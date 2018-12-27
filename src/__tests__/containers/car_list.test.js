import React from 'react';
import {CarListContainer} from '../../containers/car_list';
import {shallow} from 'enzyme';

const setup = (props = {}, state = null) => {
    const defaultProps = {
        colorList: {colors: []},
        carList: {cars: [], totalPageCount: 10, count: 100},
        manufacturerList: {manufacturers: []},
        handleSubmit: jest.fn(),
        location: {search: ""},
        history: {push: jest.fn()},
        initialize: jest.fn(),
        fetchColors: jest.fn(),
        fetchManufacturers: jest.fn(),
        fetchCars: jest.fn(),

    };
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<CarListContainer {...setUpProps}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps}
};


describe("CarListContainer", () => {
    it('should update URL when sorting called with sorting params', () => {
        const {wrapper, props} = setup();
        const {submitSort} = wrapper.instance();

        submitSort({sort: "asc"});
        expect(props.history.push).toHaveBeenCalledTimes(1);
        expect(props.history.push).toHaveBeenCalledWith({
            pathname: "/cars/list",
            search: "sort=asc"
        });

    });

    it('when component receive new props ', () => {
        const {wrapper,props} = setup();
        jest.clearAllMocks();

        wrapper.setProps({
            location: {search: "/car/list?color=red"},
        });

        expect(props.fetchCars).toBeCalled();
        expect(props.fetchCars).toHaveBeenCalledTimes(1);
        expect(props.fetchCars).toHaveBeenCalledWith("/car/list?color=red");
    });

    it('should update URL when Filter method called with filter params', () => {
        const {wrapper, props} = setup();
        const {submitFilter} = wrapper.instance();

        submitFilter({color: 'red'});
        expect(props.history.push).toHaveBeenCalledTimes(1);
        expect(props.history.push).toHaveBeenCalledWith({
            pathname: "/cars/list",
            search: "color=red"
        });


        submitFilter({color: 'red', manufacturer: "bmw", page: 1, sort: 'des'});
        expect(props.history.push).toHaveBeenCalledTimes(2);
        expect(props.history.push).toHaveBeenCalledWith({
            pathname: "/cars/list",
            search: "color=red&manufacturer=bmw"
        });

    });

});


