import { useContext } from 'react';
import Modal from './../UI/Modal';
import CartItems from './CartItems';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
    const ctx = useContext(CartContext);
    return <Modal hideCart={props.hideCart} >
        {ctx.items.length === 0 ? <p>Cart is empty</p> :
            <ul className={classes.cart} >{
                ctx.items.map(item => {
                    return <CartItems
                        key={item.id}
                        id={item.id}
                        product={item.product}
                        price={item.price}
                        quantity={item.quantity} />
                })
            }
            </ul>
        }
        <button onClick={props.hideCart}> {ctx.items.length === 0? 'Close' : 'Cancel'} </button>
        {ctx.items.length === 0 ? '' : <button onClick={props.hideCart}>Checkout</button>}
    </Modal>
}

export default Cart;