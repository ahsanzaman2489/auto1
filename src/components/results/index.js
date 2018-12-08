import React from 'react';


const ResultsComponent = props => {

    const {totalItemCount, currentPage, currentItemCount, itemPerPage} = props;

    return (
        <div>
            Showing {(itemPerPage * (currentPage - 1)) + currentItemCount} of {totalItemCount} results
        </div>
    );
};


export default ResultsComponent;