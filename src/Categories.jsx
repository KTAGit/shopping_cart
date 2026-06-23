import electronicsImg from "./assets/categories-img/electronics.png"
import mensImg from "./assets/categories-img/men's.png"
import womensImg from "./assets/categories-img/womens.png"
import jewelryImg from "./assets/categories-img/jewelry.png"
import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import { Link } from "react-router"
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
                <span className="categories-text-content">Curated essentials for every lifestyle.</span>
                </div>
                
                <div className="mens-clothing-wrapper">
                    <Link to="/shop" state={{category: "men's clothing"}} onClick={() => window.scrollTo(0,0)} >
                    <img src={mensImg} alt="" />
                    </Link>
                    <p>Men's Clothing</p>
                </div>
                
                <div className="womans-clothing-wrapper">
                    <Link to="/shop" state={{category: "women's clothing"}} onClick={() => window.scrollTo(0,0)}>
                    <img src={womensImg} alt="" />
                    </Link>
                    <p>Women's Clothing</p>
                </div>
                <div className="jewelry-wrapper">
                    <Link to="/shop" state={{category: "jewelery"}} onClick={() => window.scrollTo(0,0)}> 
                    <img src={jewelryImg} alt="" />
                    </Link>
                    <p>Jewelry</p>
                </div>
                <div className="electronics-wrapper">
                    <Link to="/shop" state={{category: "electronics"}} onClick={() => window.scrollTo(0,0)}>
                    <img src={electronicsImg} alt="" />
                    </Link>
                    <p>Electronics</p>
                </div>
            </div>
        </div>
    )
}