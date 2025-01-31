import { useEffect, useState } from "react";
import axios from "axios";
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import s from "../BestSellers/BestSellers.module.scss";

const BestSellers = ({ addToCart }) => { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    return (
        <section className={s.bestsellers}>
            <div className="layout">
                <h1>Our Bestsellers</h1>

                <ul className={s.products}>
                    {products.map((product) => (
                        <BestSellersItem 
                            product={product} 
                            key={product.id} 
                            addToCart={addToCart} 
                        />
                    ))}
                </ul>
            </div>
        </section>        
    );
}

export default BestSellers;
