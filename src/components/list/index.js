import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import ExtraDataComponent from '../extraData';
import selectBox from '../form/selectbox';


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
    const {cars} = props;
    return (
        <div>
            <aside>form</aside>
            <section>
                {renderList(cars)}
            </section>
        </div>
    );
};

CarListComponent.propTypes = {
    cars: PropTypes.array.isRequired,
};

export default CarListComponent;