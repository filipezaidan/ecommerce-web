import axios from 'axios'

const URL_API = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: URL_API,
})

export default api;