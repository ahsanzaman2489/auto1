import {CAR_DETAIL} from '../../constants/actionTypes';
import type {ActionTypes, CarsType} from '../../constants/types';

type State = CarsType;

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