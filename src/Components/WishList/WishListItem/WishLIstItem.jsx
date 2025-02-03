import style from '../../BestSellers/BestSellersItem/BestSellersItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WishListButton from '../../utils/WishListButton/WishListButton';

const WishListItem = ({ product, addToCart, addToWishList, productsInWishList }) => {
    let navigate = useNavigate();
    const [isInWishList, setIsInWishLIst] = useState(false);

    useEffect(() => {
        setIsInWishLIst((productsInWishList.some(item => item.id === product.id)))
    }, [productsInWishList, product.id]);

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    };

    const addToCartHandler = () => {
        addToCart(product);
    };

    const toggleWishListHandler = () => {
        addToWishList(product);
        setIsInWishLIst(!isInWishList);
    };

    return (
        <li className={style.item}>
            <div className={style.product}>
                <WishListButton toggleWishListHandler={toggleWishListHandler} isInWishList={isInWishList} />
                
                <img className={style.image} src={product.image} alt={product.title} />

                <div>
                    <h2 className={style.title}>{product.title}</h2>
                    <p className={style.price}>{product.price} $</p>
                </div>
                
                <div className={style.buttons}>
                    <button className={style.button} onClick={onClickHandler}>Show more...</button>
                    <button className={style.button} onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </div>
        </li>
    );
};

export default WishListItem;