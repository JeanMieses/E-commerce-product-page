import { useState } from "react";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import './App.css';

const products = [
  {
    id: '1',
    make: 'SNEAKER COMPANY',
    productName: 'Fall Limited Edition Sneakers',
    description: 'Collections Men Women About Contact Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    discount: 50.00,
    originalPrice: 250.00,
    currentPrice: 125.00
  }
]

function App() {
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => {
    setShowCart(true);
  }

  const onHideCart = () => {
    setShowCart(false);
  }

  return (
    <>
      <CartProvider>
        {showCart && <Cart hideCart={onHideCart}/>}
        <Header showCart={onShowCart} />
        <main>
          {products.map(product => {
            return <Product key='1'
              company={product.make}
              product={product.productName}
              description={product.description}
              discount={product.discount}
              originalPrice={product.originalPrice}
              currentPrice={product.currentPrice} />
          })}
        </main>
      </CartProvider>
    </>
  );
}

export default App;
