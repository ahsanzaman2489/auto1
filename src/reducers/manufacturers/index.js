import {MANUFACTURERS_LIST} from '../../constanst/actionTypes';
import type {ActionTypes, ManufacturersType} from "../../constanst/types";

type State = ManufacturersType;

const manufacturersState = (state: ?State, action: ActionTypes): State => {

    switch (action.type) {
        case MANUFACTURERS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default manufacturersState;