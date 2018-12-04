import * as actionTypes from '../constanst/actionTypes';

import CarsService from '../service';

const service = new CarsService();

export const fetchCars = query => dispatch => service.fetchList('/cars',query).then(payload => {
    dispatch({type: actionTypes.CARS_LIST, payload});
});

export const fetchColors = () => dispatch => service.fetchList('/colors').then(payload => {
    dispatch({type: actionTypes.COLORS_LIST, payload});
});

export const fetchManufacturers = () => dispatch => service.fetchList('/manufacturers').then(payload => {
    dispatch({type: actionTypes.MANUFACTURERS_LIST, payload});
});