import Modal from './../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    return <Modal hideCart={props.hideCart} >
        <div className={classes.cart}> 
            <h4>Cart</h4>
            <button onClick={props.hideCart} >Close</button>
            <button>Order</button>

        </div>
    </Modal>
}




export default Cart;