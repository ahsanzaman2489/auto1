import {HOST, HOST_PORT} from '../constanst/app';
import 'whatwg-fetch';


class CarsService {
    fetchList = (END_POINT: string, query: string = ""): Promise<any> => {
        return fetch(HOST + HOST_PORT + END_POINT + query, {method: 'get', mode: 'cors'}).then((response) => {
            return response.json();
        }).catch(error => {
            return error;
        });
    };
}

export default CarsService;