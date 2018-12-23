import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/car_list';
import {reduxForm} from 'redux-form';
import type {CarsType, ColorType, ManufacturersType} from '../../constanst/types';
import queryString, {stringify} from "query-string";
import LazyLoadingComponent from "../../components/lazy_loading";
import loading from "../../loading.PNG";

type Props = {
    fetchColors: Function,
    fetchManufacturers: Function,
    fetchCars: Function,
    history: Object,
    location: Object,
    initialize: Function,
    handleSubmit: Function,
    carList: CarsType | Object,
    colorList: ColorType | Object,
    manufacturerList: ManufacturersType | Object
}


export class CarListContainer extends Component<Props, null> {

    componentDidMount() {
        const {fetchColors, fetchManufacturers, fetchCars, location, initialize} = this.props;
        const currentParams = queryString.parse(location.search);
        initialize(currentParams);
        fetchColors();
        fetchManufacturers();
        fetchCars(location.search);
    }

    componentWillReceiveProps(nextProps) {
        const {fetchCars, location, initialize} = nextProps;
        const currentParams = queryString.parse(location.search);


        if (this.props.location.search !== location.search) {
            fetchCars(location.search);
            initialize(currentParams);
        }
    }

    submitFilter = (values: Object) => {
        const {history} = this.props;

        for (let key: string in values) {
            if (values[key] === '' || key === "page" || key === "sort") delete values[key];
        }

        let newQuery: string = stringify(values, {encode: false});

        history.push({
            pathname: '/cars/list',
            search: newQuery,
        });

    };

    submitSort = (values: Object) => {
        const sort: string = values.sort;
        const {history, location} = this.props;
        const currentParams: Object = queryString.parse(location.search);
        currentParams['sort'] = sort;
        for (let key: string in currentParams) {
            if (currentParams[key] === '') delete currentParams[key];
        }
        let newQuery: string = stringify(currentParams, {encode: false});
        history.push({
            pathname: '/cars/list',
            search: newQuery,
        });
    };


    render() {
        const {handleSubmit, carList, colorList, manufacturerList, location} = this.props;
        const cars: CarsType = carList;
        const colors: ?Array<string> = colorList.colors;


        const manufacturers: ?Array<Object> = manufacturerList.manufacturers;
        return (
            <div className="container pBtm80">
                <div className="mainRow">
                    <aside>
                        {colors && manufacturers &&
                        <LazyLoadingComponent load={() => import('../../components/form/filter_form')}>
                            {(Component) => Component === null ?
                                <div>...loading</div> :
                                <Component handleSubmit={handleSubmit(this.submitFilter)} colors={colors}
                                           manufacturers={manufacturers} location={location}/>}
                        </LazyLoadingComponent>}
                    </aside>
                    <section>
                        <LazyLoadingComponent load={() => import('../../components/list')}>
                            {(Component) => Component === null || cars.isLoading ?
                                <div><img src={loading} alt="loading"/></div> :
                                <Component cars={cars.cars} totalPageCount={cars.totalPageCount}
                                           totalCount={cars.count} location={location}
                                           submitSort={handleSubmit(this.submitSort)}/>}
                        </LazyLoadingComponent>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStatToProps = (state: Object): Object => {
    return {
        carList: state.Cars,
        colorList: state.Colors,
        manufacturerList: state.Manufacturers,
    };
};

function mapDispatchToProps(dispatch: Function): Object {
    return {...bindActionCreators(Actions, dispatch)}
}

export default connect(mapStatToProps, mapDispatchToProps)(reduxForm({
    form: 'filter',
}, mapStatToProps, mapDispatchToProps)(CarListContainer));