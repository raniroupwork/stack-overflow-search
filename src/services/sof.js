// Api
import { ApiSOF } from '../utils/api.js';

class SOFService {
    static listUsers(data) {
        console.log(data); // REMOVE
        return ApiSOF.get.get(`/search?page=${data.page}&pagesize=${data.pageSize}&order=desc&sort=${data.sortType}&intitle=${data.search}site=stackoverflow`);
    }
}

export default SOFService;
