import React from 'react';

/**
 * Results component renders results string for search query.
 * @constructor
 *
 * @param {Number} totalItemCount - total number of cars in search.
 * @param {Number} currentPage - current page of search.
 * @param {Number} currentItemCount - current numbers of cars on the page.
 * @param {Number} itemPerPage - item divided per page.
 */

type Props = { totalItemCount: number, currentPage: number, currentItemCount: number, itemPerPage: number }
const ResultsComponent = (props: Props) => {

    const {totalItemCount, currentPage, currentItemCount, itemPerPage} = props;

    return (
        <div className="searchResult">
            <p>Showing {(itemPerPage * (currentPage - 1)) + currentItemCount} of {totalItemCount} results</p>
        </div>
    );
};


export default ResultsComponent;