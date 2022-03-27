import { createContext, useContext, useState, useEffect } from 'react'
import { getCartService } from '../services/cartService'
import { useAuth } from './auth-context'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const { auth } = useAuth()
    const [cart, setCart] = useState({
        cartItems: [],
        cartLoading: '',
        cartError: ''
    })

    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                const cartData = await getCartService(auth.token)
                setCart((prevItems) => ({
                    ...prevItems, cartItems: cartData, cartLoading: false

                }))
                console.log(cart)
            }
        })();

    }, [auth.isAuthenticated])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {
    useCart, CartProvider
}
