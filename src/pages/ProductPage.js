import "../components/SingleProduct/singleProduct.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getProductByIdService } from "../services/productListService"
import { useCart } from "../context/cart-context"
import { useAuth } from "../context/auth-context"
import { useWishList } from "../context/wishlist-context"
import { removeFromWishlistService } from "../services/wishListService"
import toast from "react-hot-toast"
export const ProductPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const { auth } = useAuth()
    const { cart, addToCart } = useCart()
    const { wishlist, setWishlist } = useWishList()
    const [product, setProduct] = useState({})
    const inCart = cart?.cartItems.find((item) => item._id === product._id)
    const inWishlist = wishlist?.wishlistItems.find((item) => item._id === product._id)
    const [clicked, setClicked] = useState(false)
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

    const removeFromWishlist = async (product) => {
        const response = await removeFromWishlistService(product._id, auth.token)
        if (response.status === 200) {
            setWishlist((prevData) => ({ ...prevData, wishlistItems: response.data.wishlist }))
            toast.success("Product removed from wishlist", { position: "top-right" })
        }
    }
    const addToCartHandler = () => {
        if (!auth.isAuthenticated) {
            navigate('/login', { state: { from: location } })
        }
        setClicked(true)
        if (inWishlist) {
            addToCart(product)
            removeFromWishlist(product)
        }
        else {
            addToCart(product)
        }
    }

    return (
        <div className="wrapper">
            <div className="product-page-container">
                <div className="product-img-container">
                    <img className="single-product-img" src={product.imageURL} alt="" />
                </div>

                <div className="product-title ">
                    <h1 className="text-xl">{product.title}</h1>

                    <div className="product-content">
                        <p>
                            MRP:
                            <span className="text-bold text-xl"> ₹ {product.price}</span>
                        </p>
                        {!inCart && <button onClick={() => !clicked && addToCartHandler()} className="text-sm btn bg-brown">
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

