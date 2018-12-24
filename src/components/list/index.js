import React from 'react';
import {NavLink} from 'react-router-dom';
import queryString from "query-string";
import {NO_DATA} from "../../constants/app";
import type {SingleCarType} from "../../constants/types";
import {Field} from 'redux-form';
import SelectBoxComponent from "../form/selectbox";
import LazyLoadingComponent from "../lazy_loading";

type Props = { cars: Array<SingleCarType>, totalPageCount: number, location: Object, totalCount: number, submitSort: Function }
const CarListComponent = (props: Props) => {
    const {cars, totalPageCount, location, totalCount, submitSort} = props;
    const sortingOptions = [
        {name: 'Mileage - Ascending', value: "asc"},
        {name: 'Mileage - Descending', value: "des"},
    ];


    const renderList = (cars) => {
        return cars.map((item, index) => {
            return (
                <div key={index} className="carRow">
                    <div className="thumbnail"><img src={item.pictureUrl} alt=""/></div>
                    <div className="carSpec">
                        <h1>{item.manufacturerName} {item.modelName}</h1>
                        <LazyLoadingComponent load={() => import('../../components/extraData')}>
                            {(Component) => Component === null ?
                                <div>...loading</div> :
                                <Component item={item}/>}
                        </LazyLoadingComponent>
                        <NavLink to={`/cars/detail/${item.stockNumber}`}>View details</NavLink>
                    </div>
                </div>
            );
        })
    };

    const renderCars = () => {
        return (
            <div>
                <div className="listingHead">
                    <div className="resultStats">
                        <h2>Available cars</h2>
                        <LazyLoadingComponent load={() => import('../results')}>
                            {(Component) => Component === null ?
                                <div>...loading</div> :
                                <Component currentItemCount={cars.length}
                                           totalItemCount={totalCount} currentPage={currentParams.page || 1}
                                           itemPerPage={itemPerPage}/>}
                        </LazyLoadingComponent>

                    </div>
                    <div className="sorting">
                        <form name="sorting-form">
                            <Field name="sort"
                                   id="sort"
                                   label="Sort by"
                                   component={SelectBoxComponent}
                                   placeholder={'none'}
                                   selected={currentParams.sort}
                                   options={sortingOptions}
                                   onChange={() => setTimeout(submitSort)}
                            />
                        </form>

                    </div>
                </div>
                {renderList(cars)}
                <LazyLoadingComponent load={() => import('../paging')}>
                    {(Component) => Component === null ?
                        <div>...loading</div> :
                        <Component totalPageCount={totalPageCount} location={location}/>}
                </LazyLoadingComponent>

            </div>)
    };

    const currentParams: Object = queryString.parse(location.search);
    const itemPerPage: number = 10;
    const isCars: boolean = cars.length > 0;

    return (
        <div>
            {isCars ? renderCars() : <p className="noData">{NO_DATA}</p>}
        </div>
    );
};


export default CarListComponent;