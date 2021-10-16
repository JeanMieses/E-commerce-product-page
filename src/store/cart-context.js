import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    addToCart : () => {},
    removeFromCart: () => {}

});


export default CartContext;
