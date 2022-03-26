import { ProductCard } from "../components/Cards/Card"
import { useWishList } from "../context/wishlist-context"
import "./../components/Wishlist/wishlist.css"
const WishList = () => {
    const { wishlist } = useWishList()
    console.log(wishlist.wishlistItems)
    return (
        <main>
            <div className="wishlist-head">
                <h2 className="text-center text-large text-brown fw-semibold">My Wishlist ({wishlist.wishlistItems.length} items) </h2>
            </div>
            {wishlist.wishlistItems.length ? (<section className="home-cards">

                {wishlist.wishlistItems.map(({ _id, title, price, imageURL, rating }) => {

                    return (<ProductCard key={_id} _id={_id} title={title} price={price} rating={rating} imageURL={imageURL} />)
                })}
            </section>) : <h2 className="text-center text-large text-brown fw-semibold">No item in wishlist</h2>}

        </main>

    )
}

export { WishList }
