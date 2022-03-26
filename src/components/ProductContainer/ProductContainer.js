import './productContainer.css'
import { ProductCard } from './../Cards/Card'
import { categorisedProducts, priceRangedProducts, ratedProducts, sortedProducts } from '../../utils/filter-functions'
import { useProductList } from '../../context/product-context'
export const ProductContainer = () => {
    const { state, dispatch } = useProductList()
    const ratedData = ratedProducts(state.products, state.rating)
    const pricedRangedData = priceRangedProducts(ratedData, state.priceValue)
    const categorisedData = categorisedProducts(pricedRangedData, state.categories)
    const data = sortedProducts(categorisedData, state.sortBy)

    return (
        <section className='product-list'>
            {data.map(({ _id, title, price, imageURL, rating }) => {
                return <ProductCard key={_id} _id={_id} title={title} price={price} imageURL={imageURL} rating={rating} />
            })}
        </section>
    )
}
