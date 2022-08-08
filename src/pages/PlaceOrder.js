import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cart-context'
export const PlaceOrder = () => {
    const { cart, removeFromCart, setOrders } = useCart()
    const navigate = useNavigate()
    const userAddress = localStorage.getItem("userAddress")
    const { address, city, postalCode, country } = JSON.parse(userAddress)
    const userName = localStorage.getItem("userName")
    const userEmail = localStorage.getItem("userEmail")
    const itemsCost = cart?.cartItems.reduce((acc, item) => acc + item.qty * Number(item.price), 0)
    const shippingCost = itemsCost < 500 ? 40 : 0
    const totalCost = itemsCost + (cart?.cartItems.length > 0 ? shippingCost : 0)

    const clearCart = () => {
        cart.cartItems.forEach((item) => removeFromCart(item))
    }

    //RAZORPAY INTEGRATION 
    const loadScript = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = url;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        );

        if (!res) {
            console.error('Razorpay SDK failed to load, check you connection');
            return;
        }

        const options = {
            key: 'rzp_test_ZFTb0wWGCxqgPM',
            amount: totalCost * 100,
            currency: 'INR',
            name: 'essentiali',
            description: 'Thank you for shopping with us',
            image:
                'https://res.cloudinary.com/rahulb4/image/upload/v1649335973/Group_3_zmruuj.png',
            handler: function (response) {
                response.razorpay_payment_id && navigate(`/order-success/${response.razorpay_payment_id}`)
                localStorage.setItem("orders", JSON.stringify([...cart.cartItems]))
                localStorage.setItem("totalCost", JSON.stringify(totalCost))
                clearCart()
            },
            prefill: {
                name: userName,
                email: userEmail,

            },
            theme: {
                color: '#9B7A50',
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

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
                                    onClick={() => navigate(`/product/${item._id}`)}
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
                            <span>&#8377;{totalCost}</span>
                        </div>
                        <button onClick={() => displayRazorpay()} className={`btn btn-checkout text-white fw-semibold text-sm ${totalCost === 0 ? `bg-gray` : `bg-brown`}`} disabled={totalCost === 0}>
                            Place Order
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}
