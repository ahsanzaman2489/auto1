import {combineReducers} from 'redux';
import Cars from './cars/';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    form:formReducer,
    Cars
});