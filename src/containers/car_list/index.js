import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/car_list';

import CarListComponent from '../../components/list';
import FormComponent from '../../components/form';
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
    submitFilter = values => {
        const {history} = this.props;

        for (let key in values) {
            if (values[key] === '' || key == "page") delete values[key];
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


    render() {
        const {handleSubmit, carlist, colorlist, manufacturerlist, location} = this.props;
        const colors = colorlist.colors;
        const manufacturers = manufacturerlist.manufacturers;


        return (
            <div>
                <aside>
                    {colors && manufacturers &&
                    <FormComponent handleSubmit={handleSubmit(this.submitFilter)} colors={colors}
                                   manufacturers={manufacturers} location={location}/>}
                </aside>
                <section>
                    {carlist.cars &&
                    <CarListComponent cars={carlist.cars} totalPageCount={carlist.totalPageCount}
                                      totalCount={carlist.count} location={location}/>}
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

function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(Actions, dispatch)}
}

export default connect(mapStatToProps, mapDispatchToProps)(reduxForm({
    form: 'filter',

}, mapStatToProps, mapDispatchToProps)(CarListContainer));