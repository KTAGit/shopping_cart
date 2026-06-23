import placeholderImg from "./assets/unnamed.png"
import star from "./assets/icons/star.png"
import addCartIcon from "./assets/icons/add-cart.png"
import { useOutletContext } from "react-router"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
export function Shop() {
    const location = useLocation()
    const [data, setData] = useOutletContext()
    const [itemCategory, setItemCategory] = useState(location.state?.category || "all")
    const category = [...new Set(data?.map(object => object.category))] 
    const filteredProducts = data?.filter(product => itemCategory === "all" || product.category === itemCategory)
    return (
        <>
        <div className="category-tags-container">
            <span className={itemCategory === "all" ? "category-tag active-category" : "category-tag"} onClick={() => {setItemCategory("all")}}>All Products</span>
            {category.map((object, index) => (
                <span key={index} className={object === itemCategory ? "category-tag active-category" : "category-tag"} onClick={() => setItemCategory(object)}>{object}</span>
            ))}
        </div>
        <div className="cards-container">
            {filteredProducts?.map((object) => (
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