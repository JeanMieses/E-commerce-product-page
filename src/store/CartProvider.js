import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    
    const addToCart = (item) => {
        setItems(previous => [...previous, item])
    }

    const cartContext = {
        items: items,
        addToCart: addToCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}



export default CartProvider;