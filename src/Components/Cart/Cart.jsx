import CartItem from '../Cart/CartItem/CartItem';
import s from '../Cart/Cart.module.scss';

const Cart = ({ productsInCart, setProductsInCart, addToWishList, productsInWishList }) => {

    const updateCart = (productId, newQuantity) => {
        setProductsInCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setProductsInCart(prevCart => prevCart.filter(item => item.id != productId));
    }

    const totalPrice = productsInCart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className='section'>
            <div className="layout layout--cart">
                <>
                    <h1>Cart</h1>
                </>
                
                <ul className={s.cart}>
                    {productsInCart.length > 0 ? (
                    productsInCart.map((product, index) => (
                        <CartItem 
                            product={product}
                            key={index}
                            addToWishList={addToWishList}
                            productsInWishList={productsInWishList}
                            updateCart={updateCart}
                            removeFromCart={removeFromCart}
                       />
                    ))
                    ) : (
                        <p>Cart is empty</p>
                    )}
                </ul>

                <div className={s.price}>
                    <p className={s.text}>{totalPrice.toFixed(2)} $</p>
                    <button className="order-button order-button--total">
                        Order
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cart;