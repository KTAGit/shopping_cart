import placeholderImg from "./assets/unnamed.png"
import star from "./assets/icons/star.png"
import addCartIcon from "./assets/icons/add-cart.png"
export function Shop() {
    return (
        <>
        <div className="category-tags-container">
            <span className="category-tag">All Products</span>
            <span className="category-tag">All Products</span>
            <span className="category-tag">All Products</span>
            <span className="category-tag">All Products</span>
            <span className="category-tag">All Products</span>
        </div>
        <div className="cards-container">
            <div className="card-wrapper">
                <img src={placeholderImg} alt="" />
                <p className="category">WEARABLE TECH</p>
                <h2 className="item-name">Neon-Sync Headset</h2>
                <p className="item-description">Spatial audio reimagined with biometric feedback sensors and crystalline acoustic chambers.</p>
                <div className="rating-item-quantity-wrapper">
                    <div className="item-rating">
                        <img src={star} alt="" />
                        <p className="item-review">4.9 (124 reviews)</p>
                    </div>
                    <div className="item-quantity-wrapper">
                        <button className="card-minus-btn">−</button>
                        <input type="text" name="" id=""/>
                        <button className="card-plus-btn">+</button>
                    </div>
                </div>
                
                <div className="add-to-cart-wrapper">
                    <p className="item-price">$899.00</p>
                    <span className="add-to-cart-btn"> <img src={addCartIcon} alt="" /> ADD TO CART</span>
                </div>
            </div>
        </div>
        
        </>
    )
}