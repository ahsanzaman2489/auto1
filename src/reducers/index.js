import {combineReducers} from 'redux';
import Cars from './cars/';
import Colors from './colors/';
import Manufacturers from './manufacturers/';
import Car from './car/';
import {reducer as formReducer} from 'redux-form';

export default (combineReducers({
    form: formReducer,
    Cars,
    Colors,
    Manufacturers,
    Car
}): Function);