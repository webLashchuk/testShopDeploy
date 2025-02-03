import { useEffect, useState } from "react";
import axios from "axios";
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import s from "../BestSellers/BestSellers.module.scss";

const BestSellers = ({ addToCart, addToWishList, productsInWishList }) => { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    return (
        <section className="section">
            <div className="layout">
                <h1>Our Bestsellers</h1>

                <ul className={s.products}>
                    {products.map((product) => (
                        <BestSellersItem 
                            product={product} 
                            key={product.id} 
                            addToCart={addToCart} 
                            addToWishList={addToWishList}
                            productsInWishList={productsInWishList}
                        />
                    ))}
                </ul>
            </div>
        </section>        
    );
}

export default BestSellers;
