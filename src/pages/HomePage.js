import { ProductCard, HorizontalCard, CategoryCard } from "../components/Cards/Card"
import { useProductList } from "../context/product-context"
import { Banner } from "../components/Banner/Banner"
import { homeOffers, categoryProducts } from "../components/Cards/cardData"
export const HomePage = () => {
    const { state } = useProductList()
    return (
        <div>

            <Banner />
            <div className="home-titles">
                <h3 className="text-center text-brown text-xl fw-bold">
                    Daily Essentials
                </h3>
            </div>

            <div className="home-cards">
                {
                    state.products.map(({ title, price, _id, imageURL, rating }, index) => {
                        if (index <= 2)
                            return <ProductCard key={_id} _id={_id} title={title} price={price} imageURL={imageURL} rating={rating} />
                    })
                }
            </div>
            <div className="home-titles">
                <h3 className="text-center text-brown text-xl fw-bold">
                    Shop By Category
                </h3>
            </div>
            <div className="home-cards">
                {categoryProducts.map(({ img, name }) => {
                    return <CategoryCard key={name} img={img} name={name} />
                })}
            </div>

            <div className="home-titles">
                <h3 className="text-center text-brown text-xl fw-bold">
                    Top Offers
                </h3>
            </div>
            <div className="home-cards">
                {
                    homeOffers.map((product) => {
                        return <HorizontalCard key={product.id} offer={product.offer} item={product.item} img={product.img} name={product.name} />
                    })
                }

            </div>

        </div>
    )
}

