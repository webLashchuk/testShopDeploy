import s from './CartItem.module.scss';
import icons from "../../../assets/img/icons.svg";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Quantity from '../../utils/Quantity';
import WishListButton from '../../utils/WishListButton/WishListButton';

const CartItem = ({ product, index, addToWishList, productsInWishList, updateCart, removeFromCart}) => {
    let navigate = useNavigate();
    const [isInWishList, setIsInWishLIst] = useState(false);

    useEffect(() => {
        setIsInWishLIst((productsInWishList.some(item => item.id === product.id)))
    }, [productsInWishList, product.id]);

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    };
    
    const toggleWishListHandler = () => {
        addToWishList(product);
        setIsInWishLIst(!isInWishList);
    };

    const incrementQuantity = () => {
        updateCart(product.id, product.quantity + 1);
    };

    const decrementQuantity = () => {
        if (product.quantity > 1) {
            updateCart(product.id, product.quantity - 1);
        }
    };

    const removeItem = () => {
        removeFromCart(product.id);
    }

    return (
     <li key={index}>        
        <div className={s.cart} >
                <img className={s.image} src={product.image} alt={product.title} />

            <div className={s.content}>
                <h2 className={s.title}>{product.title}</h2>
                <div className={s.container}>
                    <Quantity 
                        value={product.quantity}
                        increment={incrementQuantity}
                        decrement={decrementQuantity}    
                    />
                    <p className={s.price}>{(product.price * product.quantity).toFixed(2)} $</p>
                </div>
                    
                <div className={s.buttons}>
                    <button  onClick={onClickHandler} className={s.button}>Show more...</button>
                    <button onClick={removeItem} className={s.button}>Remove</button>

                    <WishListButton toggleWishListHandler={toggleWishListHandler} isInWishList={isInWishList} />
                </div>
            </div>
        </div>
    </li>
    )
}

export default CartItem;