import s from './Product.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WishListButton from '../utils/WishListButton/WishListButton';

const Product = ({ addToCart, addToWishList, productsInWishList }) => {
    const [product, setProduct] = useState([]);

    const [isInWishList, setIsInWishLIst] = useState(false);

    useEffect(() => {
        setIsInWishLIst((productsInWishList.some(item => item.id === product.id)))
    }, [productsInWishList, product.id]);

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

    const toggleWishListHandler = () => {
        addToWishList(product);
        setIsInWishLIst(!isInWishList);
    };

    return (
        <div className="layout">
            <div className={s.Product}>
                <img className={s.image} src={product.image} alt={product.title} />

                <div className={s.container}>
                    <h1>{product.title}</h1>

                    <h2>{product.price} $</h2>

                    <h2>Category: {product.category}</h2>

                    <p>{product.description}</p>
                    
                    <div className={s.buttons}>
                        <button onClick={addToCartHandler} className="order-button">
                            Add to cart
                        </button>

                        <WishListButton toggleWishListHandler={toggleWishListHandler} isInWishList={isInWishList} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
