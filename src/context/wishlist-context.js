import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { addToWishlistService, getWishlistService, removeFromWishlistService } from '../services/wishListService'
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

            }
        })();

    }, [auth.isAuthenticated])

    const removeFromWishlist = async (product) => {
        const response = await removeFromWishlistService(product._id, auth.token)
        if (response.status === 200) {
            setWishlist((prevData) => ({ ...prevData, wishlistItems: response.data.wishlist }))
            toast.success("Product removed from wishlist", { position: "top-right" })
        }
    }
    const addToWishlist = async (product) => {
        try {
            const response = await addToWishlistService(product, auth.token)
            if (response.status === 200 || response.status === 201) {
                setWishlist((prevData) => ({ ...prevData, wishlistItems: response.data.wishlist }))
                toast.success("Product added to wishlist", { position: "top-right" })
            }
        }
        catch (err) {
            console.log(err)
            toast.error("Something went wrong", { position: "top-right" })
        }
    }


    return (
        <WishListContext.Provider value={{ wishlist, setWishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishListContext.Provider>
    )
}

const useWishList = () => useContext(WishListContext)

export {
    useWishList, WishListProvider
}
