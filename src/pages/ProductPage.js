import "../components/SingleProduct/singleProduct.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getProductByIdService } from "../services/productListService"
import { useCart } from "../context/cart-context"
import { useAuth } from "../context/auth-context"
import { useWishList } from "../context/wishlist-context"
export const ProductPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { auth } = useAuth()
    const { cart, addToCart } = useCart()
    const { wishlist, addToWishlist, removeFromWishlist } = useWishList()
    const [product, setProduct] = useState({})
    const inCart = cart?.cartItems.find((item) => item._id === product._id)
    const inWishlist = wishlist?.wishlistItems.find((item) => item._id === product._id)
    const [clicked, setClicked] = useState({
        cart: false,
        wishlist: false
    })
    useEffect(() => {
        (async () => {
            try {
                const response = await getProductByIdService(id)
                if (response.status === 200 || response.status === 201) {
                    setProduct(response.data.product)
                }
            } catch (error) {
                console.log('error')
            }
        })()
    }, [id])

    const addToCartHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login', { state: { from: location } })
        }
        setClicked((prevData) => ({ ...prevData, cart: true }))
        addToCart(product)

    }
    const addTowishlistHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login', { state: { from: location } })
        }
        setClicked((prevData) => ({ ...prevData, wishlist: true }))
        addToWishlist(product)

    }
    const removeFromWishlistHandler = () => {
        if (inWishlist) {
            removeFromWishlist(product)
            setClicked((prevData) => ({ ...prevData, wishlist: false }))
        }
    }
    return (
        <div className="wrapper">
            <div className="product-page-container">
                <div className="product-img-container">
                    <img className="single-product-img" src={product.imageURL} alt="" />
                    <div className="icon-div">
                        {inWishlist && <span onClick={() => removeFromWishlistHandler()} className="material-icons text-brown">favorite</span>}
                        {!inWishlist && <span onClick={() => !clicked.wishlist && addTowishlistHandler()}
                            className="material-icons">favorite</span>}
                    </div>
                </div>

                <div className="product-title ">
                    <h1 className="text-xl">{product.title}</h1>

                    <div className="product-content">
                        <p>
                            MRP:
                            <span className="text-bold text-xl"> ₹ {product.price}</span>
                        </p>
                        {!inCart && <button onClick={() => !clicked.cart && addToCartHandler()} className="text-sm btn bg-brown">
                            Add to Cart
                        </button>}
                        {inCart && <button onClick={() => navigate('/cart')} className="text-sm btn bg-brown">
                            Go to Cart
                        </button>}
                    </div>

                    <div className="mt-5">
                        {product.description && <span className="text-large">Description:</span>}
                        <p className="text-sm">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

