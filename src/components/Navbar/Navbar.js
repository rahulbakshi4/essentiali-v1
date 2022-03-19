import './navbar.css'
export const Navbar = () => {
    return (
        <nav className="bg-brown navbar text-white">
            <div>
                <p className="text-2xl ff-title"><a href="./index.html" className="text-white">essentiali.</a></p>
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
                    <span> <a href="" className="text-white">Log In</a></span>
                </li>
            </ul>
        </nav>
    )
}
