import "./cart.css"
import { removeFromCartService, cartQuantityService } from "../../services/cartService"
import { useCart } from "../../context/cart-context"
import { useAuth } from "../../context/auth-context"
const CartRow = ({ _id, title, price, imageURL, qty }) => {
    const { cart, setCart, removeFromCart } = useCart()
    const { auth } = useAuth()
    const product = {
        _id, title, price, imageURL
    }


    const cartQuantityHandler = async (operation) => {
        let response;
        try {
            if (qty === 1 && operation === "decrement") {
                response = await removeFromCartService(_id, auth.token)
            } else {
                response = await cartQuantityService(_id, auth.token, operation)
            }
            if (response.status) {
                setCart((prevData) => ({ ...prevData, cartItems: response.data.cart }))
            }

        } catch (error) {
            console.log("err")
        }
    }

    return (

        <div className="cart-row">
            <div className="cart-product">
                <div className="cart-img-container">
                    <img className="cart-img"
                        src={imageURL}
                        alt="product in the cart image" />
                </div>
                <div className="cart-product-name">
                    <span className="text-sm fw-semibold">{title}</span>
                    <button onClick={() => removeFromCart(product)} className="text-left fw-semibold text-sm btn-remove ">Remove</button>
                </div>
            </div>
            <div className="quantity-section">
                <button onClick={() => cartQuantityHandler("decrement")} className="btn action-btn  bg-brown">
                    <span className="material-icons md-18">horizontal_rule</span>
                </button>
                <span className="text-center num-width fw-semibold text-sm">{qty}</span>
                <button onClick={() => cartQuantityHandler("increment")} className="btn action-btn bg-brown">
                    <span className="material-icons md-18 ">add</span>
                </button>
            </div>

            <span className="text-center num-width fw-semibold text-sm">&#8377;{price}</span>
            <span className="text-center num-width fw-semibold text-sm">&#8377;{Number(price) * qty}</span>
        </div>

    )
}

export { CartRow }
