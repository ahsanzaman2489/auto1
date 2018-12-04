import {COLORS_LIST} from 'src/constanst/actionTypes';

const colorState = (state = {}, action) => {

    switch (action.type) {
        case COLORS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default colorState;