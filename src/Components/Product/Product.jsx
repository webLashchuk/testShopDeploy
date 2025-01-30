import s from './Product.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = ({ addToCart }) => {
    const [product, setProduct] = useState([]);
    let { productId } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => setProduct(res.data));
    }, [productId]);

    const addToCartHandler = () => {
        if (product) {
            addToCart(product); 
        }
    };

    return (
        <div className="layout">
            <div className={s.Product}>
                <img src={product.image} alt={product.title} />
                <div className={s.container}>
                    <h1>{product.title}</h1>
                    <h2>{product.price} $</h2>
                    <h2>Category: {product.category}</h2>
                    <p>{product.description}</p>
                    <button onClick={addToCartHandler} className="order-button">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
