import {MANUFACTURERS_LIST} from '../../constants/actionTypes';
import type {ActionTypes, ManufacturersType} from "../../constants/types";

type State = ManufacturersType;

/**
 * All Manufacturers Reducer
 * @constructor
 *
 * @param {Object} state - holds Manufacturers list from api response
 * @param {Object} action - holds payload and type of action
 * @return {Object} state - returns new state after manipulation
 */

const manufacturersState = (state: State = {}, action: ActionTypes): State => {

    switch (action.type) {
        case MANUFACTURERS_LIST:
            state = {...action.payload};
            return state;
        default:
            return state;
    }
};

export default manufacturersState;