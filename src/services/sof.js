// Api
import { ApiSOF } from '../utils/api.js';

class SOFService {
    static getSearchResults(data) {
        return ApiSOF.get(`/search?page=${data.currentPage}&pagesize=${data.pageSize}&order=desc&sort=${data.sortType}&intitle=${data.searchText}&site=stackoverflow`);
    }
}

export default SOFService;
