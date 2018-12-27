import {CAR_DETAIL} from '../../constants/actionTypes';
import type {ActionTypes, CarsType} from '../../constants/types';

type State = CarsType;

/**
 * Single detail Car Reducer
 * @constructor
 *
 * @param {Object} state - holds car detail
 * @param {Object} action - holds payload and type of action
 * @return {Object} state - returns new state after manipulation
 */


const carState = (state: State = {}, action: ActionTypes): State => {

    switch (action.type) {
        case CAR_DETAIL:
            state = {...action.payload};
            return state;
        default:
            return state;
    }
};

export default carState;