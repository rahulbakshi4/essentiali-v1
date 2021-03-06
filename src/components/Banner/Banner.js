import { Link } from 'react-router-dom'
import './banner.css'

export const Banner = () => {
    return (
        <div className="home-banner" >
            <Link to='/products'>
                <img className="banner-img"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/Coop/Cadbury_750x375.jpg"
                    alt="home banner image" /></Link>
        </div>
    )
}
