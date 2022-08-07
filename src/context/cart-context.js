import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { getCartService, addToCartService, removeFromCartService } from '../services/cartService'
import { useAuth } from './auth-context'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const { auth } = useAuth()
    const [cart, setCart] = useState({
        cartItems: [],
        cartLoading: '',
        cartError: ''
    })
    const [shippingAddress, setShippingAddress] = useState({
        address: "",
        city: "",
        postalCode: "",
        country: ""
    })
    const [orders, setOrders] = useState([])
    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                const cartData = await getCartService(auth.token)
                setCart((prevItems) => ({
                    ...prevItems, cartItems: cartData, cartLoading: false

                }))
            }
        })();

    }, [auth.isAuthenticated])

    const addToCart = async (product) => {
        try {
            const response = await addToCartService(product, auth.token)
            if (response.status === 200 || response.status === 201) {
                setCart((prevData) => ({ ...prevData, cartItems: response.data.cart }))
                toast.success("Product added to cart", { position: "top-right" })
            }
        }
        catch (error) {
            toast.error("User Login Required", { position: "top-right", duration: 800 })
        }
    }
    const removeFromCart = async (product) => {
        try {
            const response = await removeFromCartService(product._id, auth.token)
            if (response.status === 200) {
                setCart((prevData) => ({ ...prevData, cartItems: response.data.cart }))
            }
        }
        catch (error) {
            console.log("error", error)
            toast.error("Error removing from cart", { position: "top-right" })
        }
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, shippingAddress, setShippingAddress, orders, setOrders }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {
    useCart, CartProvider
}
