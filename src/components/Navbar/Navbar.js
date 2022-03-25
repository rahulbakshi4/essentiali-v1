import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
export const Navbar = () => {
    const { auth, setAuth } = useAuth()
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
                    <span className="material-icons"> <a href="" className="text-white">shopping_cart</a></span>
                    <span className="number-count">0</span>
                </li>
                <li className="nav-icons badge">
                    <span className="material-icons"><a href="" className="text-white">favorite</a></span>
                    <span className="number-count">0</span>
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
