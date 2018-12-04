import React from 'react';
import {NavLink} from 'react-router-dom';
import queryString, {stringify} from "query-string";


const PagingComponent = props => {

    const renderPaginationLink = (url, currentParams, page) => {
        if (page === 0) page = 1;
        currentParams.page = page;
        const newQuery = stringify(currentParams, {encode: false});
        return (url + "?" + newQuery);
    };

    const {totalPageCount, location} = props;
    const currentParams = queryString.parse(location.search);
    const currentPage = parseInt(currentParams.page) || 1;
    return (
        <div>
            <div>
                <ul>
                    {currentPage !== 1 &&
                    <li><NavLink to={renderPaginationLink('/cars/list', currentParams, 1)}>first</NavLink></li>}
                    {currentPage !== 1 && <li><NavLink
                        to={renderPaginationLink('/cars/list', currentParams, currentPage - 1)}>previous</NavLink>
                    </li>}
                    <li>page {currentPage} of {totalPageCount}</li>
                    {currentPage !== totalPageCount &&
                    <li><NavLink to={renderPaginationLink('/cars/list', currentParams, currentPage + 1)}>next</NavLink>
                    </li>}
                    {currentPage !== totalPageCount &&
                    <li><NavLink to={renderPaginationLink('/cars/list', currentParams, totalPageCount)}>last</NavLink>
                    </li>}
                </ul>
            </div>
        </div>
    );
};


export default PagingComponent;