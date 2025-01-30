const Cart = ({ productsInCart }) => {
    console.log(productsInCart);

    return (
        <div className="layout">
            <h1>Cart</h1>
            {productsInCart.length > 0 ? (
                productsInCart.map((product, index) => (
                    <div className="Cart" key={index}>
                        <h2>{product.title}</h2>
                        <p>Price: {product.price} $</p>
                        <img src={product.image} alt={product.title} />
                    </div>
                ))
            ) : (
                <p>Cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
