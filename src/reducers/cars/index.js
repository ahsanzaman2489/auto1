import {CARS_LIST} from 'src/constanst/actionTypes';

const carsState = (state = {}, action) => {

    switch (action.type) {
        case CARS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default carsState;