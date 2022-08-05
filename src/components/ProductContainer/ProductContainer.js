import './productContainer.css'
import { ProductCard } from './../Cards/Card'
import { categorisedProducts, priceRangedProducts, ratedProducts, sortedProducts } from '../../utils/filter-functions'
import { useProductList } from '../../context/product-context'
export const ProductContainer = () => {
    const { state, dispatch } = useProductList()
    const ratedData = ratedProducts(state.products, state.rating)
    const categorisedData = categorisedProducts(ratedData, state.categories)
    const pricedRangedData = priceRangedProducts(categorisedData, state.priceValue)
    const data = sortedProducts(pricedRangedData, state.sortBy)

    return (
        <section className='product-list'>
            {data?.length === 0 && <h1 className='text-center text-large text-brown fw-semibold'>No products found</h1>}
            {data.map(({ _id, title, price, imageURL, rating }) => {
                return <ProductCard key={_id} _id={_id} title={title} price={price} imageURL={imageURL} rating={rating} />
            })}
        </section>
    )
}
