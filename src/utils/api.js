// Modules
import axios from 'axios';

// Constants
import { BASE_URL } from './constants.js';

const instancePublic = axios.create({});

instancePublic.interceptors.request.use(
  (config) => {
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