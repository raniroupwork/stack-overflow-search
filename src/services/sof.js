// Api
import { ApiSOF } from '../utils/api.js';

class SOFService {
    static getSearchResults(data) {
        console.log("SOF Service", data);
        const fromDate = data.fromDate ? `&fromdate=${data.fromDate}` : '';
        const toDate = data.toDate ? `&fromdate=${data.toDate}` : '';
        const searchTags = data.toDate.length ? `&tagged=${data.searchTags.join("%20")}` : '';
        const searchText = data.searchText.trim().replace(/\s/g, "%20");

        return ApiSOF.get(`/search?page=${data.currentPage}&pagesize=${data.pageSize}${fromDate}${toDate}&order=desc&sort=${data.sortBy}${searchTags}&intitle=${searchText}&site=stackoverflow`);
    }
}

export default SOFService;
