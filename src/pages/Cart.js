import "../../src/components/Cart/cart.css"
import { CartRow } from "../components/Cart/CartRow"
import { useCart } from "../context/cart-context"
import { Link, useNavigate } from "react-router-dom"
const Cart = () => {
    const { cart } = useCart()
    const navigate = useNavigate()
    return (
        <main>
            <div className="cart-main">
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
                        <button onClick={() => cart?.cartItems?.length > 0 && navigate("/shipping")} className="btn btn-checkout bg-brown text-white fw-semibold text-sm">
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export { Cart }
