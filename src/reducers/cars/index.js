import {CARS_LIST, LOADING_CARS} from '../../constants/actionTypes';
import type {ActionTypes, CarsType} from "../../constants/types";

type State = CarsType;

/**
 * All Cars Reducer
 * @constructor
 *
 * @param {Object} state - holds cars list from api response
 * @param {Object} action - holds payload and type of action
 * @return {Object} state - returns new state after manipulation
 */
const carsState = (state: State = {}, action: ActionTypes): State => {
    switch (action.type) {
        case LOADING_CARS:
            state = {...action.payload, isLoading: true};
            return state;
        case CARS_LIST:
            state = {...action.payload, isLoading: false};
            return state;
        default:
            return state;
    }
};

export default carsState;