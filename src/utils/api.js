// Modules
import axios from 'axios';

// Constants
import { BASE_URL } from './constants.js';

const instancePublic = axios.create({});

instancePublic.interceptors.request.use(
  (config) => {
    // Don't IE request cache
    config.headers.Pragma = 'no-cache';
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => Promise.reject(error),
);

class ApiSOF {
  static get(uri) {
    return instancePublic.get(`${BASE_URL}${uri}`);
  }
}

export {
  ApiSOF
};