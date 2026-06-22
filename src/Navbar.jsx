import cartIcon from "./assets/icons/shopping-cart-icon.png"
import menuIcon from "./assets/icons/menu.png"
import { useState } from "react"
import { Link, NavLink } from "react-router"

export function Navbar() {
    const [isActive, setIsActive] = useState(false) 
    const [selected, setIsSelected] = useState("Home")

    const navLinks = [["Home", "/"], ["Shop", "/shop"], ["Categories", "/#categories"]]

    return (
        <div className="navbar-container">
            <div className="navbar-content-wrapper">
                <div className="title-wrapper">
                    <img className="menu-icon" src={menuIcon} alt="" onClick={() => setIsActive(!isActive)}/>
                    <h1 className="title">VALERIUS</h1>
                </div>

                <div className={isActive ? "category-wrapper active" : "category-wrapper"}>
                    {navLinks.map(([label, des], index) => (
                        <NavLink key={index} to={des} className={selected === label ? "selected" : ""} onClick={() => {setIsSelected(label)}}>
                            {label}
                        </NavLink>
                    ))}
                </div>

                <div className="cart-wrapper">
                    <NavLink to="/cart" onClick={() => setIsSelected("")}>
                        <img src={cartIcon} alt="" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}