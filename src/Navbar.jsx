import cartIcon from "./assets/icons/shopping-cart-icon.png"
export function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-content-wrapper">
                <div className="title-wrapper">
             <h1 className="title">VALERIUS</h1>
           </div>
            <div className="category-wrapper">
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