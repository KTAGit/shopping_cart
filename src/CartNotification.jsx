export function CartNotification({cart}) {
    const itemCount = cart.length
    return (
        <span className={itemCount ? "cart-item-count" : "no-item"}>{itemCount < 100 ? itemCount : 99 + "+"}</span>
    )
}