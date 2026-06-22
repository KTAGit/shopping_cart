import electronicsImg from "./assets/categories-img/electronics.png"
import mensImg from "./assets/categories-img/men's.png"
import womensImg from "./assets/categories-img/womens.png"
import jewelryImg from "./assets/categories-img/jewelry.png"
import { useLocation } from "react-router"
import { useEffect } from "react"
export function Categories() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash === "#categories") {
            const element = document.getElementById("categories")

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                })
            }
        }
    },[location])

    return (
        <div id="categories" className="categories-container">
            
            <div className="categories-wrapper">
                <div className="text-content-wrapper">
                    <h1 className="categories-title">Categories</h1>
                <p className="categories-text-content">Curated essentials for every lifestyle.</p>
                </div>
                <div className="mens-clothing-wrapper">
                    <img src={mensImg} alt="" />
                    <p>Men's Clothing</p>
                </div>
                <div className="womans-clothing-wrapper">
                    <img src={womensImg} alt="" />
                    <p>Women's Clothing</p>
                </div>
                <div className="jewelry-wrapper">
                    <img src={jewelryImg} alt="" />
                    <p>Jewelry</p>
                </div>
                <div className="electronics-wrapper">
                    <img src={electronicsImg} alt="" />
                    <p>Electronics</p>
                </div>
            </div>
        </div>
    )
}