import { products } from '../../backend/db/products'
import './productContainer.css'
import { ProductCard } from './../Cards/Card'
export const ProductContainer = () => {
    return (
        <section className='product-list'>
            {products.map(({ title, price, imageURL }) => {
                return <ProductCard title={title} price={price} imageURL={imageURL} />
            })}
        </section>
    )
}
