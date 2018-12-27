import React from 'react';

/**
 * Every car additional details like mileage , fuelType etc.
 * @constructor
 *
 * @param {Object} item - Object of Cars additional details.
 */

type Props = { item: { stockNumber: number, mileage: Object, fuelType: string, color: string } };
const ExtraDataComponent = (props: Props) => {

    const {stockNumber, mileage, fuelType, color} = props.item;

    return (
        <div>
            <ul>
                <li>Stock # {stockNumber}</li>
                <li>{mileage.number} {mileage.unit}</li>
                <li>{fuelType}</li>
                <li>{color}</li>
            </ul>
        </div>
    );
};

export default ExtraDataComponent;