import carsState from "../../reducers/cars";
import {LOADING_CARS, CARS_LIST} from "../../constants/actionTypes";

describe("Cars Reducer", () => {
    it('should return current state if no action is passed as default', () => {
        expect(carsState(JSON.stringify({
            cars: [],
            totalPageCount: 10,
            count: 10,
        }), {type: undefined})).toBe(JSON.stringify({
            cars: [],
            totalPageCount: 10,
            count: 10,
        }));
    });

    it('should add isloading true is LOADING_CARS action is dispacthed', () => {
        expect(JSON.stringify(carsState({}, {
            type: LOADING_CARS,
            payload: []
        }))).toBe(JSON.stringify({isLoading: true}));
    });

    it('should change isloading to false and add cars to state', () => {
        expect(JSON.stringify(carsState({}, {
            type: CARS_LIST, payload: {
                cars: [],
                totalPageCount: 10,
                count: 10,
            }
        }))).toBe(JSON.stringify({
            cars: [],
            totalPageCount: 10,
            count: 10,
            isLoading: false
        }));
    });

});


