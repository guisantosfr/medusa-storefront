import axios from 'axios';

const api = axios.create({
    baseURL: process.env.MEDUSA_URL
});
  
export default api;