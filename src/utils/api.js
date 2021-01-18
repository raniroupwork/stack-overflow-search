// Modules
import axios from 'axios';

// Constants
import { BASE_URL, BASE_HISTORY_URL } from './constants.js';

const instancePublic = axios.create({});

instancePublic.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

class ApiSOF {
  static get(uri) {
    // console.log('URI: ', uri); REMOVE
    return instancePublic.get(`${BASE_URL}${uri}`);
  }
}
class ApiHistory {
  static get(uri) {
    return instancePublic.get(`${BASE_HISTORY_URL}${uri}`);
  }

  static put(uri) {
    return instancePublic.get(`${BASE_HISTORY_URL}${uri}`);
  }
}

export {
  ApiSOF,
  ApiHistory
};