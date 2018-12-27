import colorState from "../../reducers/colors";
import {COLORS_LIST} from "../../constants/actionTypes";

describe("Cars Reducer", () => {
    it('should return current state if no action is passed as default', () => {
        expect(colorState(JSON.stringify({colors:['red']}), {type: undefined})).toBe(JSON.stringify({colors:['red']}));
    });

    it('should add colors to state', () => {
        expect(JSON.stringify(colorState({}, {
            type: COLORS_LIST, payload: {
                colors:['red','green']
            }
        }))).toBe(JSON.stringify({
            colors:['red','green']
        }));
    });

});


