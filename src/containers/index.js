import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

import CarListComponent from '../components/list';
import {reduxForm} from "redux-form";

class CarListContainer extends Component {

    componentDidMount() {
        this.props.fetchCars();
    }

    render() {
        const {handleSubmit, validate, state} = this.props;
        const form = {handleSubmit, validate};
        return (
            <div>
                {state.cars && <CarListComponent cars={state.cars} form={form}
                                                 totalPageCount={state.totalPageCount}/>}
            </div>
        )
    }
}

const mapStatToProps = state => {
    return {state: state.Cars};
};

function validate(values) {
    const errors = {};

    if (!values.color && !values.manufacturers) {
        errors.color = 'Please, Select value to filter';
    }

    return errors;
}

function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(Actions, dispatch)}
}

export default connect(mapStatToProps, mapDispatchToProps)(reduxForm({
    form: 'Booking',
    validate
}, mapStatToProps, mapDispatchToProps)(CarListContainer));