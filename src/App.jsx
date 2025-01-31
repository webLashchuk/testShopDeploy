import './App.scss';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import BestSellers from './Components/BestSellers/BestSellers';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart((prev) => [...prev, product]); 
  };

  return (
    <BrowserRouter basename="/testShopDeploy">
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<BestSellers addToCart={addToCart} />} />
          <Route path="/product/:productId" element={<Product addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart productsInCart={productsInCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
