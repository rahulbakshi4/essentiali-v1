import axios from 'axios';

export const productListService = async () => axios.get('/api/products')
export const categoryListService = async () => axios.get('/api/categories')
export const getProductByIdService = async (id) => await axios.get(`/api/products/${id}`)
