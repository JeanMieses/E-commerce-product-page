const CartItems = (props) => {

    return (
        <li>
            <p> {props.product} </p>
            <span> ${props.price} x {props.quantity} {parseInt(props.price) * parseInt(props.quantity)} </span>
            <hr/>
        </li>
    )
}


export default CartItems;