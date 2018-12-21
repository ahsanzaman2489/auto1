import {CAR_DETAIL} from '../constanst/actionTypes';
import type {SingleCarPayload} from '../constanst/types';
import CarsService from '../service';

const service = new CarsService();

export const fetchCar = (stockNumber: number) => (dispatch: Function) => service.fetchList('/cars/' + stockNumber).then((payload: SingleCarPayload) => {
    if (payload.car) dispatch({type: CAR_DETAIL, payload: payload.car});
    else dispatch({type: CAR_DETAIL, payload: {}});
});