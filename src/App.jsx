import './App.scss';
import Header from './Components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from "react";
import BestSellers from './Components/BestSellers/BestSellers';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';

function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (product) => {
    setProductsInCart((prev) => [...prev, product]); 
  };
  
  const router = createBrowserRouter([
    {
        path: "/",
        element: <BestSellers addToCart={addToCart} /> 
    },
    {
        path: "/product/:productId",
        element: <Product addToCart={addToCart} />
    },
    {
        path: "/cart",
        element: <Cart productsInCart={productsInCart} />
    }
  ],
  {
    basename: "/testShopDeploy",
  });

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
