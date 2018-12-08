import React from 'react';

type Props = { totalItemCount: number, currentPage: number, currentItemCount: number, itemPerPage: number }
const ResultsComponent = (props: Props) => {

    const {totalItemCount, currentPage, currentItemCount, itemPerPage} = props;

    return (
        <div>
            Showing {(itemPerPage * (currentPage - 1)) + currentItemCount} of {totalItemCount} results
        </div>
    );
};


export default ResultsComponent;