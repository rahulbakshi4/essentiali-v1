
import "../components/NotFound/notfound.css"
import { useNavigate } from "react-router-dom"
export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section className="hero-section">
            <div className="content-container">
                <h2 className="fw-semibold text-4xl ff-title text-brown">404 </h2>
                <p className=" text-large">We deliver all the products with our super fast delivary speed but we couldn't deliver this page.</p>
                <div className="btn-container">
                    <button onClick={() => navigate("/")} className="btn bg-brown">Back To Home</button>
                </div>

            </div>
            <div className="hero-image-container">
                <img className="hero-img"
                    src="https://res.cloudinary.com/rahulb4/image/upload/v1649335973/Group_3_zmruuj.png"
                    alt="illustration of a delivery man with truck" />
            </div>
        </section>
    )
}
