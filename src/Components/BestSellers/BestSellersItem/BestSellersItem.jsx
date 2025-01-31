import style from './BestSellersItem.module.scss';
import { useNavigate } from 'react-router-dom';

const BestSellersItem = ({ product, addToCart }) => {
    let navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    };

    const addToCartHandler = () => {
        addToCart(product);
    };

    return (
        <li className={style.item}>
            <div className={style.product}>
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

export default BestSellersItem;
