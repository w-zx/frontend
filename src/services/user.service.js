import axios from 'axios';
import authHeader from './auth-header';
import { BASE_URL } from '../constants/base-url';

const API_URL = BASE_URL + '/api/test/';

class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
