import { createContext, useContext, useReducer, useEffect } from 'react'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstant'
import { productListReducer } from '../reducers/productListReducer'
import { categoryListService, productListService } from './../services/productListService'

const ProductListContext = createContext()


const ProductListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productListReducer, {
        products: [],
        sortBy: '',
        categories: {},
        priceValue: 400,
        rating: 1,
        productLoading: false
    })

    useEffect(() => {

        (async () => {
            try {
                let res = await productListService();

                dispatch({
                    type: PRODUCT_LIST_REQUEST,
                    payload: { status: true }
                })

                if (res.status === 200) {
                    let products = res.data.products
                    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { products, status: false } })
                }

            } catch (error) {
                console.log(error)
            }

        })()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                let res = await categoryListService();

                dispatch({
                    type: PRODUCT_LIST_REQUEST,
                    payload: { status: true }
                })

                if (res.status === 200) {
                    let categoriesList = res.data.categories
                    const categories = categoriesList.reduce(
                        (acc, curr) => ({ ...acc, [curr.categoryName]: false })
                        , {});
                    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: { categories, status: false } })
                }

            } catch (error) {
                console.log(error)
            }

        })()
    }, [])

    return <ProductListContext.Provider value={{ state, dispatch }}>{children}</ProductListContext.Provider>
}
const useProductList = () => useContext(ProductListContext)
export { ProductListProvider, useProductList }
