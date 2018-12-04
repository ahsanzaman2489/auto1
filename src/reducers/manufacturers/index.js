import {MANUFACTURERS_LIST} from 'src/constanst/actionTypes';

const manufacturersState = (state = {}, action) => {

    switch (action.type) {
        case MANUFACTURERS_LIST:
            state = {...action.payload};
            return state;
        default:
            return {...state};
    }
};

export default manufacturersState;