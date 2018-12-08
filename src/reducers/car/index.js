import {CAR_DETAIL} from 'src/constanst/actionTypes';

const carState = (state = {}, action) => {

    switch (action.type) {
        case CAR_DETAIL:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default carState;