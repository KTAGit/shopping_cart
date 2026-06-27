import placeholderImg from "./assets/unnamed.png"
import { useOutletContext } from "react-router"
export function Cart() {

    const [, , cart, setCart] = useOutletContext()
    const calculateSubTotal = cart.reduce((sum, item) => {
        const total = item.price * item.quantity
        return sum += total
    }, 0)
    const subTotal = Math.round(calculateSubTotal * 100) / 100
    const tax = Math.round(6 / 100 * subTotal * 100) / 100
    const total = Math.round((subTotal + tax) * 100) / 100

    return (
        <>
        <div className="cart-main-container">
            <h1 className="shopping-cart-title">Shopping Cart</h1>
            <div className="cart-items-container">
                {cart?.map((item) => (
                    <div key={item.id} className="item-wrapper">
                        <div className="item-img-wrapper">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="item-details-wrapper">
                            <h2 className="item-name">{item.title}</h2>
                            <p className="item-description">{item.description}</p>
                            <div className="item-quantity-price-wrapper">
                                <div className="cart-item-quantity-wrapper">
                                    <button className="item-minus-btn">−</button>
                                    <p className="quantity-count">{item.quantity}</p>
                                    <button className="item-plus-btn">+</button>
                                </div>
                                <div className="price-wrapper">
                                    <p className="price">${item.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="delete-item-wrapper">
                            <svg className="trash-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18" />
                                <path d="M8 6V4h8v2" />
                                <path d="M19 6l-1 14H6L5 6" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                            </svg>
                        </div>
                    </div> 
                ))}   
            </div>
            <div className="chickout-summary-container">
                <h2>Order Summary</h2>
                <div className="subtotal-wrapper">
                    <p className="subtotal label">Subtotal</p>
                    <p className="subtotal-amount">${subTotal}</p>
                </div>
                <div className="shipping-wrapper">
                    <p className="shipping label">Shipping</p>
                    <p className="shipping-amount">Free</p>
                </div>
                <div className="tax-wrapper">
                    <p className="tax label">Tax</p>
                    <p className="tax-amount">${tax}</p>
                </div>
                <div className="total-price-wrapper">
                    <p className="total label">TOTAL</p>
                    <p className="total-price">${total}</p>
                </div>
                <div className="chieckout-btn-wrapper">
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
        </>
    )
}