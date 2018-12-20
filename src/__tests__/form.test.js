import React from 'react';
import FormComponent from '../components/form/filter_form';
import {shallow} from 'enzyme';


const defaultProps = {
    colors: [],
    manufacturers: [],
    handleSubmit: jest.fn(),
};

const setup = (props= {},state=null) => {
    const setUpProps = {...defaultProps,...props};
    const wrapper = shallow(<FormComponent {...setUpProps}/>);
    if(state) wrapper.setState(state);
    return {wrapper, props:setUpProps}
};

describe("Form component", () => {
    it('Should call handle submit on form submit', () => {
        const {wrapper, props} = setup();
        const form = wrapper.find('form');

        form.simulate('submit', {color: "red", manufacture: "bmw"});
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
        expect(props.handleSubmit).toHaveBeenCalledWith({color: "red", manufacture: "bmw"});
    });
});


