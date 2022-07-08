import "../components/OrderSuccess/ordersuccess.css"
import { useNavigate } from "react-router-dom"
export const OrderSuccess = () => {
    const navigate = useNavigate()
    return (
        <section className="">
            <div className="success-container">
                <h2 className="fw-semibold text-xl ff-title text-brown">Order Placed Successfully</h2>
                <p className=" text-large">Thanks for shopping!!</p>
                <div className="btn-container">
                    <button onClick={() => navigate("/products")} className="btn bg-brown">Shop More!</button>
                </div>
            </div>
            {/* <div className="hero-image-container">
                <img className="hero-img"
                    src="https://i.gifer.com/6k2.gif"
                    alt="gif of confetti" />
            </div> */}

        </section>
    )
}
