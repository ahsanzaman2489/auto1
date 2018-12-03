import {CARS_LIST} from 'src/constanst/actionTypes';

const carState = (state = {}, action) => {

    switch (action.type) {
        case CARS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {};
    }
};

export default carState;