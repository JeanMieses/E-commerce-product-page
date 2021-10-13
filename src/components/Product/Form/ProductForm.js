import { useState } from "react";
import classes from './Form.module.css';

const ProductForm = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(previous => previous + 1);
    }

    const descreaseQuantity = () => {
        setQuantity(previous => {
            return (previous <= 0 ? previous = 0 : previous = previous - 1)
        }
        )
    }

    const inputHandler = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    const onAddToCart = (e) => {
        e.preventDefault();
        console.log('adding to cart');
    }

    return (
        <form onSubmit={onAddToCart}>
            <span>
                <button onClick={descreaseQuantity}> -</button>
                <input value={quantity} onChange={inputHandler} type='number' />
                <button onClick={increaseQuantity}>  + </button>
            </span>
            <button className={classes.addCartButton} >Add to Cart</button>
        </form>
    )
}


export default ProductForm;