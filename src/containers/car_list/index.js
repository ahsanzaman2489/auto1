import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/car_list';

import CarListComponent from '../../components/list';
import FormComponent from '../../components/form/filter_form';
import {reduxForm} from 'redux-form';
import queryString, {stringify} from "query-string";


class CarListContainer extends Component {

    componentDidMount() {
        const {fetchColors, fetchManufacturers, fetchCars, history, initialize} = this.props;
        const currentParams = queryString.parse(history.location.search);
        initialize(currentParams);
        fetchColors();
        fetchManufacturers();
        fetchCars(history.location.search);
    }

    componentWillReceiveProps(nextProps) {
        const {fetchCars, location, initialize} = nextProps;
        const currentParams = queryString.parse(location.search);


        if (this.props.location.search !== location.search) {
            fetchCars(location.search);
            initialize(currentParams);
        }
    }

    submitFilter = values => {
        const {history} = this.props;

        for (let key in values) {
            if (values[key] === '' || key === "page" || key === "sort") delete values[key];
        }

        let newQuery = stringify(values, {encode: false});
        if (Object.keys(values).length > 0) {
            newQuery = "?" + newQuery;
        }

        history.push({
            pathname: '/cars/list',
            search: newQuery,
        });

    };

    submitSort = values => {
        const sort = values.sort;
        const {history} = this.props;


        const currentParams = queryString.parse(history.location.search);
        currentParams['sort'] = sort;
        for (let key in currentParams) {
            if (currentParams[key] === '') delete currentParams[key];
        }
        let newQuery = stringify(currentParams, {encode: false});
        history.push({
            pathname: '/cars/list',
            search: newQuery,
        });
    };


    render() {
        const {handleSubmit, carList, colorList, manufacturerList, location} = this.props;
        const cars = carList;
        const colors = colorList.colors;
        const manufacturers = manufacturerList.manufacturers;

        return (
            <div>
                <aside>
                    {colors && manufacturers &&
                    <FormComponent handleSubmit={handleSubmit(this.submitFilter)} colors={colors}
                                   manufacturers={manufacturers} location={location}/>}
                </aside>
                <section>
                    {cars.cars &&
                    <CarListComponent cars={cars.cars} totalPageCount={cars.totalPageCount}
                                      totalCount={cars.count} location={location}
                                      submitSort={handleSubmit(this.submitSort)}/>}
                </section>
            </div>
        )
    }
}

const mapStatToProps = state => {
    return {
        carList: state.Cars,
        colorList: state.Colors,
        manufacturerList: state.Manufacturers,
    };
};

function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(Actions, dispatch)}
}

export default connect(mapStatToProps, mapDispatchToProps)(reduxForm({
    form: 'filter',

}, mapStatToProps, mapDispatchToProps)(CarListContainer));