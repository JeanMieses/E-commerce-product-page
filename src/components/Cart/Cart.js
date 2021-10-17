import { useContext } from 'react';
import Modal from './../UI/Modal';
import CartItems from './CartItems';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
    const ctx = useContext(CartContext);
    return <Modal hideCart={props.hideCart} >
        {ctx.items.length === 0 ? <p>Cart is empty</p> :
            <ul>{
                ctx.items.map(item => {
                    return <CartItems
                        key={item.id}
                        product={item.product}
                        price={item.price}
                        quantity={3} />
                })
            }
            </ul>
        }
        <button onClick={props.hideCart} >Cancel</button>
        {ctx.items.length === 0 ? '' : <button>Checkout</button>}
    </Modal>
}

export default Cart;