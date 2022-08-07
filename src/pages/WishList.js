import { ProductCard } from "../components/Cards/Card"
import { useWishList } from "../context/wishlist-context"
import { useNavigate } from "react-router-dom"
import "./../components/Wishlist/wishlist.css"
const WishList = () => {
    const { wishlist } = useWishList()
    const navigate = useNavigate()
    return (
        <main>
            {wishlist.wishlistItems.length ? (
                <>
                    <div className="wishlist-head">
                        <h2 className="text-center text-large text-brown fw-semibold">My Wishlist ({wishlist.wishlistItems.length} {wishlist.wishlistItems.length > 1 ? 'items' : 'item'}) </h2>
                    </div>
                    <section className="home-cards">

                        {wishlist.wishlistItems.map(({ _id, title, price, imageURL, rating }) => {

                            return (<ProductCard key={_id} _id={_id} title={title} price={price} rating={rating} imageURL={imageURL} />)
                        })}
                    </section></>) : <div className="empty-state">
                <img src="https://res.cloudinary.com/rahulb4/image/upload/v1659874848/empty-states-5_4_a5fglh.svg" alt="illustration depicting empty wishlist" />
                <span className="text-brown fw-semibold">No item found in wishlist!</span>
                <div className="btn-container">
                    <button onClick={() => navigate("/products")} className="btn bg-brown">Add items now</button>
                </div>
            </div>}

        </main>

    )
}

export { WishList }
