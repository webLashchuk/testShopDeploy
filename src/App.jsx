import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import BestSellers from './Components/BestSellers/BestSellers';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import WishList from './Components/WishList/WishList';

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [productsInWishList, setProductsInWishList] = useState([]);

  const addToCart = (product) => {
    setProductsInCart((prev) => {

      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
      
    }); 
  };

  const addToWishList = (product) => {
    setProductsInWishList((prev) => {
      const isAlreadyInWishList = prev.some(item => item.id === product.id);
      if (isAlreadyInWishList) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    })
  };

  return (
    <BrowserRouter basename="/testShopDeploy">
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<BestSellers addToCart={addToCart} addToWishList={addToWishList} productsInWishList={productsInWishList} />} />
          <Route path="/product/:productId" element={<Product addToCart={addToCart} addToWishList={addToWishList} productsInWishList={productsInWishList} />} />
          <Route path="/cart" element={<Cart productsInCart={productsInCart} addToWishList={addToWishList} productsInWishList={productsInWishList} setProductsInCart={setProductsInCart} />} />
          <Route path="/wishlist" element={<WishList productsInWishList={productsInWishList} addToCart={addToCart} addToWishList={addToWishList} />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
