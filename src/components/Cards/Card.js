import "./cards.css"

const ProductCard = ({ title, price, imageURL, rating }) => {
    return (
        <div className="ecom-card">
            <div className="product-div">
                <img className="product-img"
                    src={imageURL}
                    alt="product image" />
                <div className="icon-div">
                    <span className="material-icons">favorite</span>
                </div>
            </div>
            <div className="ratings bg-brown">
                <span className="text-white text-sm fw-semibold">{rating}</span>
                <span className="material-icons rated">star_rate</span>

            </div>
            <div className="product-details">
                <div>
                    <p className="product-name text-brown fw-semibold">
                        {title}
                    </p>
                    <p className="product-price text-brown">&#8377;{price}</p>
                </div>

                <div className="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
const HorizontalCard = ({ offer, item, img }) => {
    return (
        <div className="card h-card">
            <div>
                <a href="">
                    <img className="h-card-img"
                        src={img}
                        alt="product image for bakery items" /></a>
            </div>

            <div className="h-card-content">
                <div className="card-heading">
                    <h2>{offer}</h2>
                    <h3>{item}</h3>
                </div>
                <div className="card-btn-container">
                    <button className="btn bg-brown"><a href="" className="text-white">Shop now</a></button>
                </div>
            </div>
        </div>
    )
}
const CategoryCard = ({ img }) => {
    return (<div className="cg-card">
        <img className="h-card-img" src={img} alt="product category image" />
    </div>
    )
}
export { ProductCard, HorizontalCard, CategoryCard }
