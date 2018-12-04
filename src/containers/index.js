import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

import CarListComponent from '../components/list';
import FormComponent from '../components/form/';
import {reduxForm} from 'redux-form';
import {stringify} from "query-string";

class CarListContainer extends Component {

    componentDidMount() {
        const {fetchColors, fetchManufacturers, fetchCars, history} = this.props;
        fetchColors();
        fetchManufacturers();
        fetchCars(history.location.search);
    }

    // mergreQuery = (query) => {
    //     const {location} = this.props;
    //     const currentParams = queryString.parse(location.search);
    //     const newParams = query;
    //
    //     for (const key in newParams) {
    //
    //         currentParams[key] = newParams[key];
    //
    //     }
    //     return stringify(currentParams, {encode: false});
    // };
    submitFilter = (values) => {
        const {history, reset, fetchCars} = this.props;
        var newQuery = stringify(values, {encode: false});
        history.push({
            pathname: '/cars/list',
            search: "?" + newQuery,
        });
        fetchCars("?" + newQuery);
        reset();
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState, nextContext);
        return true;
    }

    render() {
        const {handleSubmit, carlist, colorlist, manufacturerlist, location} = this.props;
        const colors = colorlist.colors;
        const manufacturers = manufacturerlist.manufacturers;

        return (
            <div>
                <aside>
                    {colors && manufacturers &&
                    <FormComponent handleSubmit={handleSubmit(this.submitFilter)} colors={colors}
                                   manufacturers={manufacturers}/>}
                </aside>
                <section>
                    {carlist.cars &&
                    <CarListComponent cars={carlist.cars} totalPageCount={carlist.totalPageCount} location={location}/>}
                </section>
            </div>
        )
    }
}

const mapStatToProps = state => {
    return {
        carlist: state.Cars,
        colorlist: state.Colors,
        manufacturerlist: state.Manufacturers,

    };
};

function validate(values) {
    const errors = {};
    if (!values.hasOwnProperty('color') && !values.hasOwnProperty('manufacturer')) {
        errors.color = 'Please, Select value to filter';
        errors.manufacturer = 'Please, Select value to filter';
    }
    return errors;
}

function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(Actions, dispatch)}
}

export default connect(mapStatToProps, mapDispatchToProps)(reduxForm({
    form: 'filter',
    validate
}, mapStatToProps, mapDispatchToProps)(CarListContainer));