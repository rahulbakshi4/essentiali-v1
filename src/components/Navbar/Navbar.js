import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import { useWishList } from '../../context/wishlist-context'
import { useCart } from '../../context/cart-context'
import toast from 'react-hot-toast'
export const Navbar = () => {
    const { auth, setAuth } = useAuth()
    const { wishlist, setWishlist } = useWishList()
    const { cart, setCart } = useCart()
    const navigate = useNavigate()
    const logoutHandler = () => {
        setAuth({ token: '', isAuthenticated: false })
        localStorage.removeItem('token')
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userName')
        localStorage.removeItem('userAddress')
        localStorage.removeItem('orders')
        localStorage.removeItem('totalCost')
        setWishlist({ ...wishlist, wishlistItems: [] })
        setCart({ ...cart, cartItems: [] })
        navigate("/login")
        toast.success('Logged out successfully')
    }

    return (
        <nav className="bg-brown navbar text-white">
            <div>
                <h1 className="text-2xl ff-title"><Link to='/' className="text-white">essentiali.</Link></h1>
            </div>

            <ul className="nav-options ">
                <Link to="/products" className='text-white fw-semibold'>
                    Explore
                </Link>
                <li className="nav-icons badge">
                    <span className="material-icons"> <Link to="/cart" className="text-white">shopping_cart</Link></span>
                    {cart?.cartItems?.length !== 0 && <span className="number-count">{cart?.cartItems?.length}</span>}
                </li>
                <li className="nav-icons badge">
                    <span className="material-icons"><Link to="/wishlist" className="text-white">favorite</Link></span>
                    {wishlist?.wishlistItems?.length !== 0 && <span className="number-count">{wishlist?.wishlistItems?.length}</span>}
                </li>
                <li className="nav-icons">
                    <span className="material-icons">person</span>
                    <span>
                        {auth.isAuthenticated ? localStorage.getItem("userName") : <Link to="/login" className="text-white">Log In</Link>}
                    </span>
                </li>

                {auth.isAuthenticated && <li className="pointer">
                    <span onClick={logoutHandler}> Logout
                    </span>
                </li>}
            </ul>
        </nav>
    )
}
