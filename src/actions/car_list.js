import * as actionTypes from '../constanst/actionTypes';
import type {CarsType, ColorType, ManufacturersType} from '../constanst/types';
import CarsService from '../service';

const service = new CarsService();


export const fetchCars = (query: string) => (dispatch: Function) => {
    dispatch({type: actionTypes.LOADING_CARS, isLoading: true});
    return service.fetchList('/cars', query).then((payload: CarsType) => {
        dispatch({type: actionTypes.CARS_LIST, payload});
    });
};

export const fetchColors = () => (dispatch: Function) => service.fetchList('/colors').then((payload: ColorType) => {
    dispatch({type: actionTypes.COLORS_LIST, payload});
});

export const fetchManufacturers = () => (dispatch: Function) => service.fetchList('/manufacturers').then((payload: ManufacturersType) => {
    dispatch({type: actionTypes.MANUFACTURERS_LIST, payload});
});
