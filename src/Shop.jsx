import placeholderImg from "./assets/unnamed.png"
import star from "./assets/icons/star.png"
import addCartIcon from "./assets/icons/add-cart.png"
import { useOutletContext } from "react-router"
import { useEffect } from "react"
export function Shop() {
    const [data, setData] = useOutletContext()
    
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
            {data?.map((object) => (
            <div key={object.id} className="card-wrapper">
                <img src={object.image} alt="" />
                <p className="category">{object.category}</p>
                <h2 className="item-name">{object.title}</h2>
                <p className="item-description">{object.description}</p>
                <div className="rating-item-quantity-wrapper">
                    <div className="item-rating">
                        <img src={star} alt="" />
                        <p className="item-review">{object.rating.rate} ({object.rating.count} reviews)</p>
                    </div>
                    <div className="item-quantity-wrapper">
                        <button className="card-minus-btn">−</button>
                        <input type="text" name="" id=""/>
                        <button className="card-plus-btn">+</button>
                    </div>
                </div>
                
                <div className="add-to-cart-wrapper">
                    <p className="item-price">${object.price}</p>
                    <span className="add-to-cart-btn"> <img src={addCartIcon} alt="" /> ADD TO CART</span>
                </div>
            </div>
            ))}
            
        </div>
        
        </>
    )
}