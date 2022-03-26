import { createContext, useContext, useState, useEffect } from 'react'
import { getWishlistService } from '../services/wishListService'
import { useAuth } from './auth-context'

const WishListContext = createContext()

const WishListProvider = ({ children }) => {
    const { auth } = useAuth()
    const [wishlist, setWishlist] = useState({
        wishlistItems: [],
        wishlistLoading: '',
        wishlistError: ''
    })

    useEffect(() => {
        (async () => {
            if (auth.isAuthenticated) {
                const wishlistData = await getWishlistService(auth.token)
                setWishlist((prevItems) => ({
                    ...prevItems, wishlistItems: wishlistData, wishlistLoading: false

                }))
                console.log(wishlist)
            }
        })();

    }, [auth.isAuthenticated])

    return (
        <WishListContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}

const useWishList = () => useContext(WishListContext)

export {
    useWishList, WishListProvider
}
