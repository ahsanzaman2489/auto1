import React from 'react';
import ExtraDataComponent from '../../components/extraData';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';


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
    const tree = () => renderer.create(<ExtraDataComponent {...setUpProps}/>).toJSON();
    if (state) wrapper.setState(state);
    return {wrapper, props: setUpProps, tree};
};


describe("Extra data component", () => {
    it('should match with snapshot', () => {
        const {tree} = setup();
        expect(tree()).toMatchSnapshot();
    });
    it('should render no data text if no data', () => {
        const {wrapper, props} = setup();
        expect(wrapper.find('li').length).toBe(4);
        expect(wrapper.find('ul').childAt(0).text()).toBe(`Stock # ${props.item.stockNumber}`);
        expect(wrapper.find('ul').childAt(1).text()).toBe(`${props.item.mileage.number} ${props.item.mileage.unit}`);
        expect(wrapper.find('ul').childAt(2).text()).toBe(props.item.fuelType);
        expect(wrapper.find('ul').childAt(3).text()).toBe(props.item.color);
    });
});


