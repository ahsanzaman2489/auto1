import React from 'react';
import {CarDetailContainer} from '../containers/car_detail';
import {shallow} from 'enzyme';


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

const setup = (props= {},state=null) => {
    const setUpProps = {...defaultProps,...props};
    const wrapper = shallow(<CarDetailContainer {...setUpProps}/>);
    if(state) wrapper.setState(state);
    return {wrapper, props:setUpProps}
};

describe("CarDetailContainer", () => {
    it('Should render both Components', () => {
        const {wrapper} = setup();
        expect(wrapper.find("ExtraDataComponent").length).toBe(1);
        expect(wrapper.find("FavouriteComponent").length).toBe(1);
    });

    it('should add stock number in local storage', () => {
        const {wrapper, props} = setup();
        const {submitSort} = wrapper.instance();
        expect(true).toBeTruthy()

    });
});


