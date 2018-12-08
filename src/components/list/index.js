import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import ExtraDataComponent from '../extraData';
import PagingComponent from '../paging';
import ResultsComponent from '../results';
import queryString from "query-string";
import {NO_DATA} from "../../constanst/app";
import {Field} from 'redux-form';
import SelectBoxComponent from "../form/selectbox";


const CarListComponent = props => {
    const {cars, totalPageCount, location, totalCount, submitSort} = props;
    const sortingOptions = [
        {name: 'Mileage - Ascending', value: "asc"},
        {name: 'Mileage - Descending', value: "des"},
    ];
    const renderList = cars => {
        return cars.map((item, index) => {
            return (
                <div key={index}>
                    <div><img src={item.pictureUrl} alt=""/></div>
                    <div>
                        <h1>{item.manufacturerName} {item.modelName}</h1>
                        <ExtraDataComponent item={item}/>
                        <NavLink to={`/cars/detail/${item.stockNumber}`}>view details</NavLink>
                    </div>
                </div>
            );
        })
    };
    const renderKeywords = searchParams => {
        let searchKeywords = [];

        for (let key in searchParams) {
            searchKeywords.push(<p key={key}>{key + " : " + searchParams[key]}</p>);
        }
        return searchKeywords;
    };

    const renderCars = () => {
        return (
            <div>
                <div>
                    <div>
                        <h2>Available cars</h2>
                        {renderKeywords(currentParams)}
                        <ResultsComponent currentItemCount={cars.length}
                                          totalItemCount={totalCount} currentPage={currentParams.page || 1}
                                          itemPerPage={itemPerPage}
                        />
                    </div>
                    <div>
                        <form name="sorting-form">
                            <Field name="sort"
                                   id="sort"
                                   label="sort by"
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
                {<PagingComponent totalPageCount={totalPageCount} location={location}/>}
            </div>)
    };

    const currentParams = queryString.parse(location.search);
    const itemPerPage = 10;
    const isCars = cars.length > 0;
    return (
        <div>
            {isCars ? renderCars() : NO_DATA}
        </div>
    );
};

CarListComponent.propTypes = {
    cars: PropTypes.array.isRequired,
    totalPageCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,

};

export default CarListComponent;