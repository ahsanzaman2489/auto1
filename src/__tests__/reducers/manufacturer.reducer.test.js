import manufacturersState from "../../reducers/manufacturers";
import {MANUFACTURERS_LIST} from "../../constants/actionTypes";

describe("Cars Reducer", () => {
    it('should return current state if no action is passed as default', () => {
        expect(manufacturersState(JSON.stringify({manufacturers: [{"name": "Audi"}]}), {type: undefined})).toBe(JSON.stringify({manufacturers: [{"name": "Audi"}]}));
    });

    it('should add colors to state', () => {
        expect(JSON.stringify(manufacturersState({}, {
            type: MANUFACTURERS_LIST, payload: {
                manufacturers: [{"name": "bmw"}]
            }
        }))).toBe(JSON.stringify({
            manufacturers: [{"name": "bmw"}]
        }));
    });

});


