import {HOST, HOST_PORT} from '../constanst/app';
import 'whatwg-fetch';


class CarsService {
    fetchList = (END_POINT, query = "") => {
        return fetch(HOST + HOST_PORT + END_POINT + query, {method: 'get', mode: 'cors'}).then((response) => {
            return response.json();
        }).catch(error => {
            console.log('error ===>', error);
        });
    };
}

export default CarsService;