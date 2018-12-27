import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/car_list'
import * as types from '../../constants/actionTypes'
import expect from 'expect';

jest.mock('../../service/index.js', () => {
        return class CarsService {
            fetchList = () => {
                return new Promise(resolve => {
                    resolve({});
                })
            };
        }
    }
);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {

    it('creates CAR_LIST when fetching cars has been done', () => {

        const expectedActions = [
            {type: types.LOADING_CARS, isLoading: true},
            {type: types.CARS_LIST, payload: {}},
        ];

        const store = mockStore({cars: []});

        return store.dispatch(actions.fetchCars()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates COLORS_LIST when fetching colors has been done', () => {

        const expectedActions = [
            {type: types.COLORS_LIST, payload: {}},
        ];

        const store = mockStore({colors: []});

        return store.dispatch(actions.fetchColors()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates MANUFACTURERS_LIST when fetching colors has been done', () => {

        const expectedActions = [
            {type: types.MANUFACTURERS_LIST, payload: {}},
        ];

        const store = mockStore({colors: []});

        return store.dispatch(actions.fetchManufacturers()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

});