import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink} from 'react-router-dom';
import ExtraDataComponent from '../extraData';
import PagingComponent from '../paging';
import queryString, {stringify} from "query-string";


const CarListComponent = props => {
    const renderList = (cars) => {
        return cars.map((item, index) => {
            return (
                <div key={index}>
                    <div><img src={item.pictureUrl} alt=""/></div>
                    <div>
                        <h1>{item.manufacturerName}</h1>
                        <ExtraDataComponent item={item}/>
                        <NavLink to={`/cars/details/${item.stockNumber}`}>view details</NavLink>
                    </div>
                </div>
            );
        })
    };

    const renderKeywords = (searchParams) => {
        let searchKeywords = [];

        for (let key in searchParams) {
            searchKeywords.push(<p key={key}>{key + " : " + searchParams[key]}</p>);
        }
        return searchKeywords;
    };

    const renderPaginationLink = (url, currentParams, page) => {
        if (page === 0) page = 1;
        currentParams.page = page;
        const newQuery = stringify(currentParams, {encode: false});
        return (url + "?" + newQuery);
    };

    const {cars, totalPageCount, location} = props;
    const currentParams = queryString.parse(location.search);
    return (
        <div>
            <h2>Available cars</h2>
            {renderKeywords(currentParams)}
            <h3>Showing {cars.length} of {cars.length * totalPageCount} results</h3>
            {renderList(cars)}
            {<PagingComponent totalPageCount={totalPageCount} location={location}/>}
        </div>
    );
};

CarListComponent.propTypes = {
    cars: PropTypes.array.isRequired,
    totalPageCount: PropTypes.number.isRequired,

};

export default withRouter(CarListComponent);