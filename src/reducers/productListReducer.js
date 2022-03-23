import { LOW_TO_HIGH, HIGH_TO_LOW, CLEAR, BREADS, CHOCOLATES, PASTA_AND_NOODLES, SPREADS_AND_JAM, COFFEE, PRICE_CHANGE, RATING } from "../constants/filterConstant"
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstant"

const productListReducer = (state, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, productLoading: action.payload.status }
        case PRODUCT_LIST_SUCCESS:
            if (action.payload.products) {
                return { ...state, products: [...action.payload.products], productLoading: action.payload.status }
            }
            if (action.payload.categories) {
                return {
                    ...state, categories: { ...action.payload.categories }, productLoading: action.payload.status
                }
            }
        case LOW_TO_HIGH:
            return { ...state, sortBy: action.type }
        case HIGH_TO_LOW:
            return { ...state, sortBy: action.type }

        case BREADS:
            return {
                ...state, categories: {
                    ...state["categories"], breads: !state.categories.breads
                }

            }

        case CHOCOLATES:
            return {
                ...state, categories: {
                    ...state['categories'], chocolates: !state.categories.chocolates
                }
            }
        case COFFEE:
            return {
                ...state, categories: {
                    ...state['categories'], coffee: !state.categories.coffee
                }
            }
        case PASTA_AND_NOODLES:
            return {
                ...state, categories: {
                    ...state['categories'], pasta_noodles: !state.categories.pasta_noodles
                }
            }
        case SPREADS_AND_JAM:
            return {
                ...state, categories: {
                    ...state['categories'], spreads_jam: !state.categories.spreads_jam
                }
            }
        case PRICE_CHANGE:
            return {
                ...state, priceValue: action.payload
            }

        case RATING:
            return {
                ...state, rating: action.payload
            }
        case CLEAR:
            return {
                ...state, sortBy: '',
                categories: {
                    breads: false,
                    coffee: false,
                    chocolates: false,
                    spreads_jam: false,
                    pasta_noodles: false,
                },
                priceValue: 400,
                rating: 1
            }
        default:
            return state

    }
}
export { productListReducer }
