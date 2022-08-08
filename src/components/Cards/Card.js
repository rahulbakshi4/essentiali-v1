import "./cards.css"

import { useWishList } from "../../context/wishlist-context"
import { useState, useEffect } from "react"
import { addToWishlistService } from "../../services/wishListService"
import { removeFromWishlistService } from "../../services/wishListService"
import { useAuth } from "../../context/auth-context"
import { useCart } from "../../context/cart-context"
import { useProductList } from "../../context/product-context"
import { useNavigate } from "react-router-dom"
import { CLEAR } from "../../constants/filterConstant"
import toast from "react-hot-toast"


const ProductCard = ({ _id, title, price, imageURL, rating }) => {
    const { auth } = useAuth()
    const navigate = useNavigate()
    const { wishlist, addToWishlist, removeFromWishlist } = useWishList()
    const { cart, addToCart } = useCart()
    const [inWishlist, setInWishlist] = useState(false)
    const [inCart, setInCart] = useState(false)
    const [clicked, setClicked] = useState({
        cart: false,
        wishlist: false
    })
    const product = {
        _id, title, price, imageURL, rating
    }
    useEffect(() => {
        if (wishlist.wishlistItems) {
            wishlist.wishlistItems.find((item) => item._id === product._id) &&
                setInWishlist(true)

        }
    }, [wishlist.wishlistItems]);

    useEffect(() => {
        if (cart.cartItems) {
            cart.cartItems.find((item) => item._id === product._id) &&
                setInCart(true)
        }
    }, [cart.cartItems])




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
        removeFromWishlist(product)
        setInWishlist(false)
        setClicked((prevData) => ({ ...prevData, wishlist: false }))
    }

    return (
        <div className="ecom-card">
            <div className="product-div">
                <img className="product-img" onClick={() =>
                    navigate(`/product/${_id}`)}
                    src={imageURL}
                    alt="product image" />
                <div className="icon-div">
                    {inWishlist && <span onClick={() => removeFromWishlistHandler()} className="material-icons text-brown">favorite</span>}
                    {!inWishlist && <span onClick={() => !clicked.wishlist && addTowishlistHandler()}
                        className="material-icons">favorite</span>}
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

                {!inCart && <div onClick={() => !clicked.cart && addToCartHandler()} className="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>}

                {inCart && <div>
                    <button onClick={() => navigate('/cart')} className="btn remove-cart-btn bg-brown text-sm text-white">Go to cart</button >
                </div>}
            </div>
        </div>
    )
}
const HorizontalCard = ({ offer, item, img, name }) => {
    const navigate = useNavigate()
    const { dispatch } = useProductList()
    const offerClickHandler = () => {
        dispatch({ type: CLEAR })
        dispatch({ type: name })
        navigate("/products")
    }
    return (
        <div className="card h-card">
            <div>

                <img className="h-card-img"
                    src={img}
                    alt="product image for bakery items" />
            </div>

            <div className="h-card-content">
                <div className="card-heading">
                    <h2>{offer}</h2>
                    <h3>{item}</h3>
                </div>
                <div className="card-btn-container">
                    <button className="btn bg-brown" onClick={() => offerClickHandler()}>Shop now</button>
                </div>
            </div>
        </div>
    )
}
const CategoryCard = ({ img, name }) => {
    const navigate = useNavigate()
    const { dispatch } = useProductList()
    const categoryClickHandler = () => {
        dispatch({ type: CLEAR })
        dispatch({ type: name })
        navigate("/products")
    }
    return (<div className="cg-card">
        <img onClick={() =>
            categoryClickHandler()
        } className="h-card-img" src={img} alt="product category image" />
    </div>
    )
}
export { ProductCard, HorizontalCard, CategoryCard }
