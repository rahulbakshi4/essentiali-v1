import "./cards.css"

import { useWishList } from "../../context/wishlist-context"
import { useState, useEffect } from "react"
import { addToWishlistService } from "../../services/wishListService"
import { removeFromWishlistService } from "../../services/wishListService"
import { useAuth } from "../../context/auth-context"
import { useCart } from "../../context/cart-context"
import { useNavigate } from "react-router-dom"
import { addToCartService } from "../../services/cartService"

const ProductCard = ({ _id, title, price, imageURL, rating }) => {
    const { auth } = useAuth()
    const navigate = useNavigate()
    const { wishlist, setWishlist } = useWishList()
    const { cart, setCart } = useCart()

    const [inWishlist, setInWishlist] = useState(false)
    const [inCart, setInCart] = useState(false)
    const product = {
        _id, title, price, imageURL, rating
    }
    useEffect(() => {
        if (wishlist.wishlistItems) {
            wishlist.wishlistItems.find((item) => item._id === product._id) &&
                setInWishlist(true)
            console.log(inWishlist)
        }
    }, [wishlist.wishlistItems]);

    useEffect(() => {
        if (cart.cartItems) {
            cart.cartItems.find((item) => item._id === product._id) &&
                setInCart(true)
        }
    }, [cart.cartItems])

    const addToWishlist = async (product) => {
        try {
            const response = await addToWishlistService(product, auth.token)
            if (response.status === 200 || response.status === 201) {
                setWishlist((prevData) => ({ ...prevData, wishlistItems: response.data.wishlist }))
                setInWishlist(true)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const removeFromWishlist = async (product) => {
        const response = await removeFromWishlistService(product._id, auth.token)
        if (response.status === 200) {
            setWishlist((prevData) => ({ ...prevData, wishlistItems: response.data.wishlist }))
            setInWishlist(false)
        }
    }

    const addToCart = async (product) => {
        try {
            const response = await addToCartService(product, auth.token)
            if (response.status === 200 || response.status === 201) {
                setCart((prevData) => ({ ...prevData, cartItems: response.data.cart }))
                setInCart(true)
            }
        } catch (error) {
            console.log("error")
        }
    }


    return (
        <div className="ecom-card">
            <div className="product-div">
                <img className="product-img"
                    src={imageURL}
                    alt="product image" />
                <div className="icon-div">
                    {inWishlist && <span onClick={() => removeFromWishlist(product)} className="material-icons text-brown">favorite</span>}
                    {!inWishlist && <span onClick={() => auth.isAuthenticated ? addToWishlist(product) : navigate("/login")} className="material-icons">favorite</span>}
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

                {!inCart && <div className="cart-icon">
                    <svg onClick={() => auth.isAuthenticated ? addToCart(product) : navigate("/login")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
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
