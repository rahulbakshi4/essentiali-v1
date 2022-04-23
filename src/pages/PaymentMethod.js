import "../components/PaymentForm/paymentForm.css"
import { CheckoutSteps } from "../components/CheckoutSteps/CheckoutSteps"
import { useNavigate } from "react-router-dom"
export const PaymentMethod = () => {
    const navigate = useNavigate()
    const submitHandler = e => {
        e.preventDefault()
        navigate("/place-order")
    }
    return (
        <div>
            <CheckoutSteps payment />
            <div className="form-container">
                <h2 className="text-2xl fw-xbold text-brown text-center">
                    Payment Method
                </h2>
                <form onSubmit={submitHandler}>
                    <div className="payment-method-container">
                        <div className="payment-method-form">
                            <h4 className="text-center fw-semibold text-brown">Select Method</h4>

                            <label className="payment-method-label" htmlFor="payment-method">
                                <span className="fw-semibold text-brown">UPI or Debit/Credit Card</span>
                                <input type="radio" defaultChecked name="opt" />
                            </label>


                            <div className="form-content">
                                <button type="submit" className="form-btn bg-brown">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
