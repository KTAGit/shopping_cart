import cartIcon from "./assets/icons/shopping-cart-icon.png"
import menuIcon from "./assets/icons/menu.png"
import { useState } from "react"

export function Navbar() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="navbar-container">
            <div className="navbar-content-wrapper">
                <div className="title-wrapper">
                    <img className="menu-icon" src={menuIcon} alt="" onClick={() => setIsActive(!isActive)}/>
                    <h1 className="title">VALERIUS</h1>
                </div>
                <div className={isActive ? "category-wrapper active" : "category-wrapper"}>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Categories</p>
                </div>
                <div className="cart-wrapper">
                    <img src={cartIcon} alt="" />
                </div>
            </div>
        </div>
    )
}