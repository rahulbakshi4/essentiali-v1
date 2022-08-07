
import "../components/NotFound/notfound.css"
import { useNavigate } from "react-router-dom"
export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="empty-state">
            <img src="https://res.cloudinary.com/rahulb4/image/upload/v1659877558/empty-states-5_6_a9bqe1.svg" alt="illustration showing empty cart" />
            <span className="text-small text-center text-brown">We deliver all the products with our super fast delivary speed but we couldn't deliver this page.</span>
            <div className="btn-container">
                <button onClick={() => navigate("/products")} className="btn bg-brown">Back to home</button>
            </div>
        </div>
    )
}
