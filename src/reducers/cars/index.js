import {CARS_LIST,LOADING_CARS} from '../../constanst/actionTypes';
import type {ActionTypes, CarsType} from "../../constanst/types";

type State = CarsType;

const carsState = (state: ?State, action: ActionTypes): State => {
    switch (action.type) {
        case LOADING_CARS:
            state = {...action.payload,isLoading:true};
            return state;
        case CARS_LIST:
            state = {...action.payload,isLoading:false};
            return state;
        default:
            return {...state};
    }
};

export default carsState;