import "./checkoutsteps.css"
import {
    ActiveLine, DisabledLine, PlaceOrderSVG, ShippingSVG,
    SignInSVG, PaymentSVG, ActivePaymentSVG, ActivePlaceOrderSVG
} from '../SvgComponents/SvgComponents'
import { Link } from "react-router-dom"
export const CheckoutSteps = ({ payment, placeOrder }) => {
    return (
        <div className="steps-wrapper">
            <div className='steps-container'>
                <div className="step-items">
                    <SignInSVG />
                    <ActiveLine />
                    <ShippingSVG />

                    {payment ? <><ActiveLine />
                        <Link to="/payment">
                            <ActivePaymentSVG />
                        </Link> </> : <> <DisabledLine /><PaymentSVG /></>}



                    {placeOrder ? <> <ActiveLine /><Link to="/placeorder">
                        <ActivePlaceOrderSVG />
                    </Link></> : <><DisabledLine /> <PlaceOrderSVG /></>}

                </div>
            </div>

        </div>

    )
}
