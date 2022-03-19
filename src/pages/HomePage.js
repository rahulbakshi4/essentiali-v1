import { ProductCard, HorizontalCard, CategoryCard } from "../components/Cards/Card"
import { Navbar } from "../components/Navbar/Navbar"
import { Banner } from "../components/Banner/Banner"
import { homeProducts, homeOffers, categoryProducts } from "../components/Cards/cardData"
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="home-titles">
                <h3 className="text-center text-brown text-xl fw-bold">
                    Daily Essentials
                </h3>
            </div>

            <div className="home-cards">
                {
                    homeProducts.map((product) => {
                        return <ProductCard key={product.id} name={product.name} price={product.price} img={product.img} />
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

export default HomePage
