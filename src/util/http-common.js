import axios from "axios";
import { BASE_URL } from '../constants/base-url';

export default axios.create({
    baseURL: BASE_URL + "/api",
    headers: {
        "Content-type": "application/json"
    }
});