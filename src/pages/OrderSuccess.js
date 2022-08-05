import "../components/OrderSuccess/ordersuccess.css"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartRow } from "../components/Cart/CartRow"
export const OrderSuccess = () => {
    const navigate = useNavigate()
    const orders = JSON.parse(localStorage.getItem("orders"))
    const userAddress = localStorage.getItem("userAddress")
    const { address, city, postalCode, country } = JSON.parse(userAddress)
    const [orderDetails, setOrderDetails] = useState(false)
    const orderID = Math.floor(Math.random() * 89999 + 10000)
    useEffect(() => {
        let order = true
        setTimeout(() => {
            setOrderDetails(true)
        }, 3000)

        return function cleanup() {
            order = false
        }
    }, [])
    return (
        <section className="">
            <div className={`success-container ${!orderDetails ? "show" : "hide"}`}>
                <h2 className="fw-semibold text-xl ff-title text-brown">Order Placed Successfully</h2>
                <p className=" text-large">Thanks for shopping!!</p>
                <div className="btn-container">
                    <button onClick={() => navigate("/products")} className="btn bg-brown">Shop More!</button>
                </div>
            </div>
            <div className={`order-container ${orderDetails ? "show" : "hide"}`}>
                <div className="order-details">
                    <div className="cart-table order-col">
                        <h1 className="text-xl fw-semibold">Order Details</h1>
                        <div className="order-data-head">
                            <div className="order-data ">
                                <span className="fw-semibold">Deliver To</span>
                                <span>{localStorage.getItem('userName')}</span>
                                <span>{address}, {city}, {postalCode}</span>
                                <span>{country}</span>
                            </div>
                            <div className="order-data fw-semibold">
                                <span>Order ID: #{orderID} </span>
                                <span>Order Date: {new Date().toDateString()}</span>
                                <span>Amount Paid: &#8377;{JSON.parse(localStorage.getItem('totalCost'))}</span>
                            </div>
                        </div>


                    </div>

                    <div className="detail-head">
                        <h3 className="">Product Details</h3>
                        <h3 className="">Quantity</h3>
                        <h3 className="">Price</h3>
                        <h3 className="">Total</h3>
                    </div>

                    {orders?.map(({ _id, title, price, imageURL, qty }) => {
                        return (<CartRow key={_id} _id={_id} title={title} price={price} imageURL={imageURL} qty={qty} orderSuccess={true} />)
                    })}
                </div>
                <div className="prev-page">
                    <span className="material-icons md-18 text-brown">west</span>
                    <span className="text-large"><Link to="/products" className="text-brown fw-semibold">Continue
                        Shopping</Link></span>
                </div>
            </div>
        </section >
    )
}
