import React from 'react';
import ExtraDataComponent from '../components/extraData';
import {shallow} from 'enzyme';


const setup = (props = {}, state = null) => {
    const defaultProps = {
        item: {
            stockNumber: 10172,
            color: "red",
            mileage: {"number": 182124, "unit": "km"},
            fuelType: "Petrol",
        }
    };
    const setUpProps = {...defaultProps, ...props};
    const wrapper = shallow(<ExtraDataComponent {...setUpProps}/>);
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps}
};


describe("Extra data component", () => {
    it('should render no data text if no data', () => {
        const {wrapper, props} = setup();
        expect(wrapper.find('li').length).toBe(4);
        expect(wrapper.find('ul').childAt(0).text()).toBe(`Stock # ${props.item.stockNumber}`);
        expect(wrapper.find('ul').childAt(1).text()).toBe(`${props.item.mileage.number} ${props.item.mileage.unit}`);
        expect(wrapper.find('ul').childAt(2).text()).toBe(props.item.fuelType);
        expect(wrapper.find('ul').childAt(3).text()).toBe(props.item.color);
    });
});


