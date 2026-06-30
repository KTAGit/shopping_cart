import cartIcon from "./assets/icons/shopping-cart-icon.png"
import menuIcon from "./assets/icons/menu.png"
import { CartNotification } from "./CartNotification"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

export function Navbar({cart}) {
    const [isActive, setIsActive] = useState(false) 

    const location = useLocation()
    const navLinks = [["Home", "/"], ["Shop", "/shop"], ["Categories", "/#categories"]]

    return (
        <div className="navbar-container">
            <div className="navbar-content-wrapper">
                <div className="title-wrapper">
                    <img className="menu-icon" src={menuIcon} alt="" onClick={() => setIsActive(!isActive)}/>
                    <h1 className="title">VALERIUS</h1>
                </div>

                <div onClick={() => setIsActive(false)} className={isActive ? "category-wrapper active" : "category-wrapper"}>
                    {navLinks.map(([label, des], index) => (
                        <NavLink key={index} to={des} className={location.pathname + location.hash === des ? "selected" : ""}>
                            {label}
                        </NavLink>
                    ))}
                </div>

                <div className="cart-wrapper">
                    <NavLink to="/cart" className="nav-cart-wrapper">
                        <CartNotification cart={cart}/>
                        <img src={cartIcon} alt="" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}