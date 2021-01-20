// Api
import { ApiHistory } from '../utils/api.js';

class HistoryService {
    static fetchSearchHistory(data) {
        return ApiHistory.get(`/${data}`); // TODO
    }

    static updateSearchHistory(data) {
        console.log(data); //REMOVE
        return ApiHistory.put(`/${data}`); // TODO
    }
}

export default HistoryService;
