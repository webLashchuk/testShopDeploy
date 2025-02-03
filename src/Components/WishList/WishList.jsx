import WishListItem from './WishListItem/WishLIstItem';
import s from "../BestSellers/BestSellers.module.scss";

const WishList = ({ productsInWishList, addToCart, addToWishList }) => {

    return (
        <section className="section">
            <div className="layout">
                <h1>Your wishlist</h1>

                <ul className={s.products}>
                    {productsInWishList.length > 0 ? (productsInWishList .map((product) => (
                        <WishListItem
                            product={product} 
                            key={product.id}
                            addToCart={addToCart} 
                            addToWishList={addToWishList}
                            productsInWishList={productsInWishList}
                        />
                    ))):(<p>Wish list is empty</p>)}
                </ul>
            </div>
        </section>     
    )
}

export default WishList;