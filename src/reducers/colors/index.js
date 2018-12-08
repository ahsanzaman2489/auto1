import {COLORS_LIST} from '../../constanst/actionTypes';
import type {ActionTypes, ColorType} from "../../constanst/types";

type State = ColorType;

const colorState = (state: ?State, action: ActionTypes): State => {

    switch (action.type) {
        case COLORS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default colorState;