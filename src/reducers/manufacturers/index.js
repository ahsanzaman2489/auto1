import {MANUFACTURERS_LIST} from '../../constants/actionTypes';
import type {ActionTypes, ManufacturersType} from "../../constants/types";

type State = ManufacturersType;

const manufacturersState = (state: ?State={}, action: ActionTypes): State => {

    switch (action.type) {
        case MANUFACTURERS_LIST:
            state = {...action.payload};
            return state;
        default:
            return state;
    }
};

export default manufacturersState;