import { ProductCard, HorizontalCard, CategoryCard } from "../components/Cards/Card"

import { Banner } from "../components/Banner/Banner"
import { homeProducts, homeOffers, categoryProducts } from "../components/Cards/cardData"
export const HomePage = () => {
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
                    homeProducts.map(({ title, price, id, imageURL }) => {
                        return <ProductCard key={id} title={title} price={price} imageURL={imageURL} />
                    })
                }
            </div>
            <div className="home-titles">
                <h3 className="text-center text-brown text-xl fw-bold">
                    Shop By Category
                </h3>
            </div>
            <div className="home-cards">
                {categoryProducts.map((img, index) => {
                    return <CategoryCard key={index} img={img} />
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
                        return <HorizontalCard key={product.id} offer={product.offer} item={product.item} img={product.img} />
                    })
                }

            </div>

        </div>
    )
}

