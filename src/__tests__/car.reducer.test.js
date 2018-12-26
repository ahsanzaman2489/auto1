import carState from "../reducers/car";
import {CAR_DETAIL} from "../constants/actionTypes";

describe("Cars Reducer", () => {
    it('should return current state if no action is passed as default', () => {
        expect(carState(JSON.stringify({
            cars: [],
            totalPageCount: 10,
            count: 10,
        }), {type: undefined})).toBe(JSON.stringify({
            cars: [],
            totalPageCount: 10,
            count: 10,
        }));
    });

    it('should add cars to state', () => {
        expect(JSON.stringify(carState({}, {
            type: CAR_DETAIL, payload: {
                cars: [],
                totalPageCount: 10,
                count: 10,
            }
        }))).toBe(JSON.stringify({
            cars: [],
            totalPageCount: 10,
            count: 10,
        }));
    });

});


