import {CAR_DETAIL} from '../constants/actionTypes';
import type {SingleCarPayload} from '../constants/types';
import CarsService from '../service';

const service = new CarsService();

export const fetchCar = (stockNumber: number) => (dispatch: Function) => service.fetchList('/cars/' + stockNumber).then((payload: SingleCarPayload) => {
    dispatch({type: CAR_DETAIL, payload: payload.car || {}});
});