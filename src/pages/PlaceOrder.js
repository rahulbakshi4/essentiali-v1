import { useEffect } from 'react'
import { useCart } from '../context/cart-context'
export const PlaceOrder = () => {
    const { cart } = useCart()

    const userAddress = localStorage.getItem("userAddress")
    const { address, city, postalCode, country } = JSON.parse(userAddress)
    const itemsCost = cart?.cartItems.reduce((acc, item) => acc + item.qty * Number(item.price), 0)
    const shippingCost = itemsCost < 500 ? 40 : 0
    return (
        <main>
            <div className="cart-main">
                <div className="cart-container">
                    <div className="cart-details">
                        <div className="cart-table">
                            <h1 className="text-xl fw-semibold">Shipping Address</h1>
                        </div>
                        {cart?.cartItems.length > 0 && <div className='address-details'>
                            <p>{address}, {city}, {postalCode}</p>
                            <p> {country}</p>
                        </div>
                        }


                        {cart?.cartItems.map((item, index) => (<div className='cart-row item-gap' key={index}>
                            <div className="cart-img-container">
                                <img className="cart-img"
                                    src={item.imageURL}
                                    alt="product in the cart image" />
                            </div>
                            <div>
                                <h1 className="fw-semibold text-sm">{item.title}</h1>
                                <div className="">
                                    {`${item.qty} x ₹${item.price} = ₹${item.qty * item.price} `}
                                </div>
                            </div>

                        </div>

                        ))}


                    </div>
                    <div className="summary">
                        <h1 className="summary-head fw-semibold">Order Summary</h1>
                        <div className="summary-item fw-semibold text-sm">
                            <span>
                                Items in Cart
                            </span>
                            <span>{cart?.cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                        </div>
                        <div className="summary-item fw-semibold text-sm">
                            <span>
                                Items Cost
                            </span>
                            <span>&#8377;{itemsCost}</span>
                        </div>
                        <div className="summary-item fw-semibold text-sm">
                            <span>
                                Shipping Cost
                            </span>
                            <span>&#8377;{cart?.cartItems.length > 0 ? shippingCost : 0}</span>
                        </div>
                        <div className="summary-cost fw-semibold text-sm">
                            <span>Total cost</span>
                            <span>&#8377;{itemsCost + (cart?.cartItems.length > 0 ? shippingCost : 0)}</span>
                        </div>
                        <button className="btn btn-checkout bg-brown text-white fw-semibold text-sm">
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </main >
    )
}
