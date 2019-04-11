import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnibackteste.herokuapp.com',
});

export default api;