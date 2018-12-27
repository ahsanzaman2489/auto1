import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions/car_detail'
import * as types from '../../constants/actionTypes'
import expect from 'expect'

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

    it('creates CAR_DETAIL when fetching cars has been done', () => {

        const expectedActions = [
            {type: types.CAR_DETAIL, payload: {}},
        ];
        const store = mockStore({cars: []});

        return store.dispatch(actions.fetchCar()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});