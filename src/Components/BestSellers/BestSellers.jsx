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
        <div className={s.BestSellers}>
            {products.map((product) => (
                <BestSellersItem 
                    product={product} 
                    key={product.id} 
                    addToCart={addToCart} 
                />
            ))}
        </div>
    );
}

export default BestSellers;
