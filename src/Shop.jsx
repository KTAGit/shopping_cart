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
    const [itemCount, setItemCount] = useState(null)
    const category = [...new Set(data?.map(object => object.category))] 
    const filteredProducts = data?.filter(product => itemCategory === "all" || product.category === itemCategory)

    function handleProductCount(action, type, quantity, productId) {
        if (quantity <= 0 || quantity >= 100) return
        if ((itemCount?.quantity === 1 && action === "subtract")) return
        if ((itemCount?.quantity === 99 && action === "add")) return
        
        if (type === "button") {
            if (itemCount && itemCount.productId === productId) {
                action === "add" ? setItemCount(prev => ({...prev, quantity: prev.quantity + quantity})) :
                setItemCount(prev => ({...prev, quantity: prev.quantity - quantity}))
                
            }else {
                setItemCount({quantity: quantity, productId: productId})
            }
            
        }else if (type === "input") {
            const value = Number(quantity)
            if (Number.isNaN(value)) return
            setItemCount({quantity: value, productId: productId})
        }
    }
    console.log(itemCount)
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
                        <button className="card-minus-btn" onClick={() => handleProductCount("subtract", "button", 1, object.id)}>−</button>
                        <input type="text" value={itemCount?.productId === object.id ? itemCount.quantity : 1} onChange={(e) => handleProductCount("", "input", e.target.value, object.id)} name="" id=""/>
                        <button className="card-plus-btn" onClick={() => handleProductCount("add", "button", 1, object.id)}>+</button>
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