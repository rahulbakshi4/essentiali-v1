import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import { useWishList } from '../../context/wishlist-context'
import { useCart } from '../../context/cart-context'
export const Navbar = () => {
    const { auth, setAuth } = useAuth()
    const { wishlist } = useWishList()
    const { cart } = useCart()
    const navigate = useNavigate()
    const logoutHandler = () => {
        setAuth({ token: '', isAuthenticated: false })
        localStorage.removeItem('token')
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userName')
        navigate("/login")
    }

    return (
        <nav className="bg-brown navbar text-white">
            <div>
                <p className="text-2xl ff-title"><Link to='/' className="text-white">essentiali.</Link></p>
            </div>
            <input className="nav-input" type="text" name="search" placeholder="Search" />
            <ul className="nav-options ">
                <li className="nav-icons badge">
                    <span className="material-icons"> <Link to="/cart" className="text-white">shopping_cart</Link></span>
                    {cart.cartItems.length !== 0 && <span className="number-count">{cart.cartItems.length}</span>}
                </li>
                <li className="nav-icons badge">
                    <span className="material-icons"><Link to="/wishlist" className="text-white">favorite</Link></span>
                    {wishlist.wishlistItems.length !== 0 && <span className="number-count">{wishlist.wishlistItems.length}</span>}
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
