import React from 'react';

const ExtraDataComponent = props => {

    const {stockNumber, mileage, fuelType, color} = props.item;

    return (
        <ul>
            <li>Stock # {stockNumber}</li>
            <li>{mileage.number} {mileage.unit}</li>
            <li>{fuelType}</li>
            <li>{color}</li>
        </ul>
    );
};

export default ExtraDataComponent;