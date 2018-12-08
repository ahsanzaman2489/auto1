import {CAR_DETAIL} from '../constanst/actionTypes';
import CarsService from '../service';

const service = new CarsService();

export const fetchCar = (stockNumber) => dispatch => service.fetchList('/cars/' + stockNumber).then(payload => {
    dispatch({type: CAR_DETAIL, payload: payload.car});
});