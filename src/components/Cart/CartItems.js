import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from './CartItems.module.css';

const CartItems = (props) => {
    const ctx = useContext(CartContext);

    const removeItem = () => {
        ctx.removeFromCart();
    }

    return (
        <li className={classes.item} >
            <p> {props.product} </p>
            <span> ${props.price} x {props.quantity} {parseInt(props.price) * parseInt(props.quantity)} </span>
            <button onClick={removeItem}> <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"/> </button>
            <hr/>
        </li>
    )
}

export default CartItems;