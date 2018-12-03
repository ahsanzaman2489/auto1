import * as actionTypes from '../constanst/actionTypes';

import CarsService from '../service';
const service = new CarsService();

export const fetchCars = () => dispatch => service.fetchList('/cars').then(payload => {
    dispatch({type: actionTypes.CARS_LIST, payload});
});