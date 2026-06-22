import heroImg from "./assets/hero-image.png"
import { Link } from "react-router"
export function Hero() {
    return (
        <div id="home" className="hero-section-container">
            <div className="hero-left-section-container">
                <h1 className="hero-main-text">Discover Your Next <span>Favorite Product</span></h1>
                <p className="hero-text-content">Experience luxury redefined through our curated selection of ethereal objects designed for the visionary soul.</p>
                <div className="hero-section-button-container">
                    <Link to="/shop">
                        <button className="shop-btn">Shop Now</button>
                    </Link>
                    <Link to="/#categories">
                        <button className="categories-btn">Browse Categories</button>
                    </Link>
                    
                </div>
            </div>
            <div className="hero-right-section-container">
                <img src={heroImg} alt="" />
            </div>
        </div>
    ) 
}