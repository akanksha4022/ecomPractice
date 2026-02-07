import axios from "axios";

const BASE_URL =  "https://api.escuelajs.co/api/v1";

const api = axios.create({
    baseURL : BASE_URL,
    timeout: 10000,
});

export const getProducts = ()=> api.get("/products");

export const getProductById = (id)=> api.get(`/products/${id}`);

export const getCategories = ()=> api.get('/categories');

export default api;