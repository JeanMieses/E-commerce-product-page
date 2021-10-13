import { useState } from "react";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import './App.css';
import Modal from './components/UI/Modal';
import Cart from "./components/Cart/Cart";

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
      {showCart && <Cart hideCart={onHideCart} /> }
      <Header  showCart={onShowCart}/>
      <main>
        <Product 
        company={products[0].make} 
        product={products[0].productName}
        description={products[0].description}
        discount={products[0].discount}
        originalPrice={products[0].originalPrice}
        currentPrice={products[0].currentPrice}
        />
      </main>
    </>
  );
}

export default App;
