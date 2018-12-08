import {CARS_LIST} from '../../constanst/actionTypes';
import type {ActionTypes, CarsType} from "../../constanst/types";

type State = CarsType;

const carsState = (state: ?State, action: ActionTypes): State => {

    switch (action.type) {
        case CARS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default carsState;