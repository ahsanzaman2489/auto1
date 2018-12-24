import React from 'react';
import {CarDetailContainer} from '../containers/car_detail';
import {shallow} from 'enzyme';
import {NO_DATA} from '../constants/app';
import 'jest-localstorage-mock';


const setup = (setUpProps = {}, state = null) => {
    const defaultProps = {
        match: {params: {stockNumber: "25710"}},
        fetchCar: jest.fn(),
        car: {
            "stockNumber": 10172,
            "manufacturerName": "Dodge",
            "modelName": "Caliber",
            "color": "red",
            "mileage": {"number": 182124, "unit": "km"},
            "fuelType": "Petrol",
            "pictureUrl": "http://localhost:3001/car.svg"
        }
    };
    const props = {...defaultProps, ...setUpProps};
    const wrapper = shallow(<CarDetailContainer {...props}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props}
};

describe("CarDetailContainer", () => {

    describe("When there is not data", () => {
        let wrapper;
        beforeEach(() => {
            const setupWrapper = setup({car: {}});
            wrapper = setupWrapper.wrapper;
        });

        it('it should render no data div', () => {
            expect(wrapper.find(".noData").text()).toBe(NO_DATA);
        });
    });

    describe("when there is data", () => {
        let wrapper, props, KEY, VALUE;
        const state = {isFavourite: false};

        beforeEach(() => {
            const setupWrapper = setup({}, state);
            wrapper = setupWrapper.wrapper;
            props = setupWrapper.props;
            KEY = 'favourite_cars';
            VALUE = props.car.stockNumber;
        });

        it('add favourite method should add stock number in local storage', () => {
            const {addToFavourite} = wrapper.instance();

            expect(wrapper.state('isFavourite')).toBeFalsy();
            addToFavourite(VALUE);

            const array = [];
            array.push(VALUE);
            wrapper.update();


            expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(array));
            expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify(array));
            expect(Object.keys(localStorage.__STORE__).length).toBe(1);
            expect(wrapper.state('isFavourite')).toBeTruthy();
        });

        it('remove favourite method should remove stock number from local storage and delete key if empty array', () => {
            const {removeFromFavourite, addToFavourite} = wrapper.instance();

            localStorage.setItem.mockClear();
            removeFromFavourite(VALUE);

            expect(Object.keys(localStorage.__STORE__).length).toBe(0);
            expect(localStorage.__STORE__[KEY]).toBeUndefined();
            expect(wrapper.state('isFavourite')).toBeFalsy();

            addToFavourite('10044');
            addToFavourite('10019');

            expect(wrapper.state('isFavourite')).toBeTruthy();

            removeFromFavourite(VALUE);

            const favouriteArray = JSON.parse(localStorage.__STORE__[KEY]);
            expect(favouriteArray).not.toContain('10019');


        });

        it('is favourite method should update the state', () => {
            const {isFavourite} = wrapper.instance();
            localStorage.clear();
            localStorage.setItem.mockClear();
            
            const array = [];
            array.push(VALUE);

            expect(wrapper.state('isFavourite')).toBeFalsy();
            localStorage.setItem('favourite_cars', JSON.stringify(array));
            isFavourite(VALUE);
            expect(wrapper.state('isFavourite')).toBeTruthy();

        });

    })

});


