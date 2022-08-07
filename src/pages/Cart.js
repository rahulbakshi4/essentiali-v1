import "../../src/components/Cart/cart.css"
import { CartRow } from "../components/Cart/CartRow"
import { useCart } from "../context/cart-context"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
const Cart = () => {
    const { cart } = useCart()
    const navigate = useNavigate()

    const checkoutHandler = () => {
        cart?.cartItems?.length > 0 ? navigate("/shipping") : toast.error("Cart is empty", { position: "top-center" })
    }
    return (
        <main>
            {cart.cartItems.length > 0 ?
                (<div className="cart-main">
                    <div className="cart-container">
                        <div className="cart-details">
                            <div className="cart-table">
                                <h1 className="text-xl fw-semibold">Shopping Cart</h1>
                            </div>

                            <div className="detail-head">
                                <h3 className="">Product Details</h3>
                                <h3 className="">Quantity</h3>
                                <h3 className="">Price</h3>
                                <h3 className="">Total</h3>
                            </div>

                            {cart.cartItems.map(({ _id, title, price, imageURL, qty }) => {
                                return (<CartRow key={_id} _id={_id} title={title} price={price} imageURL={imageURL} qty={qty} />)
                            })}


                            <div className="prev-page">
                                <span className="material-icons md-18 text-brown">west</span>
                                <span className="text-sm "><Link to="/products" className="text-brown fw-semibold">Continue
                                    Shopping</Link></span>
                            </div>
                        </div>
                        <div className="summary">
                            <h1 className="summary-head fw-semibold">Order Summary</h1>
                            <div className="summary-item fw-semibold text-sm">
                                <span>
                                    Items in Cart
                                </span>
                                <span>{cart.cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                            </div>
                            <div className="summary-cost fw-semibold text-sm">
                                <span>Total cost</span>
                                <span>&#8377;{cart.cartItems.reduce((acc, item) => acc + item.qty * Number(item.price), 0)}</span>
                            </div>
                            <button onClick={() => checkoutHandler()} className="btn btn-checkout bg-brown text-white fw-semibold text-sm">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>) : <div className="empty-state">
                    <img src="https://res.cloudinary.com/rahulb4/image/upload/v1659876652/empty-states-5_5_uooxjk.svg" alt="illustration showing empty cart" />
                    <span className="text-brown fw-semibold">Your Cart is empty!</span>
                    <div className="btn-container">
                        <button onClick={() => navigate("/products")} className="btn bg-brown">Let's shop now</button>
                    </div>
                </div>}
        </main>
    )
}

export { Cart }
