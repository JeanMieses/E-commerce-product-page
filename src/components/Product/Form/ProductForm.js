import { useState, useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from './Form.module.css';

const ProductForm = (props) => {
    const [quantity, setQuantity] = useState(0);
    const ctx = useContext(CartContext);

    const addToCartHandler = () => {
        if (quantity > 0) {
            if (ctx.items.length > 0 && ctx.items[0].id === '1') {
                ctx.items[0].quantity = ctx.items[0].quantity + quantity;
            } else {
                ctx.addToCart({ id: '1', product: props.product, quantity: quantity, price: props.price });
            }
        }
        setQuantity(0);
    }

    const increaseQuantity = () => {
        setQuantity(previous => previous + 1);
    }

    const descreaseQuantity = () => {
        setQuantity(previous => {
            return (previous <= 0 ? previous = 0 : previous = previous - 1)
        })
    }

    const inputHandler = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <span>
                <button onClick={descreaseQuantity}> -</button>
                <input value={quantity} onChange={inputHandler} type='number' />
                <button onClick={increaseQuantity}>  + </button>
            </span>
            <span>
                <button onClick={addToCartHandler} className={classes.addCartButton} >Add to Cart</button>
            </span>
        </form>
    )
}

export default ProductForm;