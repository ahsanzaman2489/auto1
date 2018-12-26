import React from 'react';
import {NavLink} from 'react-router-dom';
import queryString, {stringify} from "query-string";

type Props = { totalPageCount: number, location: Object }
const PagingComponent = (props: Props) => {

    const renderPaginationLink = (url: string, currentParams: Object, page: number): string => {
        if (page === 0) page = 1;
        currentParams.page = page;
        const newQuery = stringify(currentParams, {encode: false});
        return (url + "?" + newQuery);
    };

    const {totalPageCount, location} = props;
    const currentParams = queryString.parse(location.search);
    const currentPage = parseInt(currentParams.page, 10) || 1;
    return (
        <div className="pagination">
            <ul>
                <li><NavLink to={renderPaginationLink('/cars/list', currentParams, 1)}
                             className={currentPage === 1 ? 'disabled' : ''}>first</NavLink></li>
                <li><NavLink
                    to={renderPaginationLink('/cars/list', currentParams, currentPage - 1)}
                    className={currentPage === 1 ? 'disabled' : ''}>previous</NavLink>
                </li>
                <li><span>page {currentPage} of {totalPageCount}</span></li>
                <li><NavLink to={renderPaginationLink('/cars/list', currentParams, currentPage + 1)}
                             className={currentPage === totalPageCount ? 'disabled' : ''}>next</NavLink>
                </li>
                <li><NavLink to={renderPaginationLink('/cars/list', currentParams, totalPageCount)}
                             className={currentPage === totalPageCount ? 'disabled' : ''}>last</NavLink>
                </li>
            </ul>
        </div>
    );
};


export default PagingComponent;