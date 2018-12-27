import React from 'react';
import CarListComponent from '../../components/list';
import {shallow} from 'enzyme';


const setup = (props = {}, state = null) => {
    const defaultProps = {
        cars: [{
            "stockNumber": 10172,
            "manufacturerName": "Dodge",
            "modelName": "Caliber",
            "color": "red",
            "mileage": {"number": 182124, "unit": "km"},
            "fuelType": "Petrol",
            "pictureUrl": "http://localhost:3001/car.svg"
        }], totalPageCount: 20, location: {}, totalCount: 200, submitSort: jest.fn()
    };
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<CarListComponent {...setUpProps}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps}
};


describe("List component", () => {
    describe('if no cars', () => {
        it('should render no data text if no data', () => {
            const {wrapper} = setup({cars:[]});
            expect(wrapper.find('.noData').length).toBe(1);
        });
    });

    describe('if cars data is available', () => {
        it('should render car list element with given data', () => {
            const {wrapper} = setup();
            expect(wrapper.find('.listingHead').length).toBe(1);
            expect(wrapper.find('.carRow').length).toBeGreaterThan(0);
        });
    });

});


