import axios from 'axios';

export const productListService = async () => axios.get('/api/products')
export const categoryListService = async () => axios.get('/api/categories')
