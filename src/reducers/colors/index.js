import {COLORS_LIST} from '../../constants/actionTypes';
import type {ActionTypes, ColorType} from "../../constants/types";

type State = ColorType;

/**
 * All Colors Reducer
 * @constructor
 *
 * @param {Object} state - holds colors list from api response
 * @param {Object} action - holds payload and type of action
 * @return {Object} state - returns new state after manipulation
 */

const colorState = (state: State = {}, action: ActionTypes): State => {

    switch (action.type) {
        case COLORS_LIST:
            state = {...action.payload};
            return state;
        default:
            return state;
    }
};

export default colorState;