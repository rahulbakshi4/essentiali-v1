import { useNavigate } from "react-router-dom"
import { CheckoutSteps } from "../components/CheckoutSteps/CheckoutSteps"
import { useCart } from "../context/cart-context"
export const Shipping = () => {
    const navigate = useNavigate()
    const { shippingAddress, setShippingAddress } = useCart()
    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("userAddress", JSON.stringify(shippingAddress))
        navigate("/payment-method")
    }
    return (
        <div>
            <CheckoutSteps />
            <div className="form-container">
                <h1 className="text-2xl fw-xbold text-brown text-center">Add Shipping Address</h1>
                <form onSubmit={submitHandler} method="post">
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="address">
                                Address
                            </label>
                            <input onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })} value={shippingAddress.address}
                                type="text" name="address" placeholder="Enter Your Address" required />
                        </div>
                    </div>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="city">
                                City
                            </label>
                            <input onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} value={shippingAddress.city}
                                type="text" name="city" placeholder="Enter Your City" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="postalCode">
                                Postal Code
                            </label>
                            <input onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })} value={shippingAddress.postalCode}
                                type="text" name="postalCode" placeholder="Enter Your Postal Code" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="country">
                                Country
                            </label>
                            <input onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })} value={shippingAddress.country}
                                type="text" name="country" placeholder="Enter Your Country" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <button type="submit" className="form-btn bg-brown">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}
