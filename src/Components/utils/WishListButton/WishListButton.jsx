import icons from '../../../assets/img/icons.svg';

const WishListButton = ({toggleWishListHandler, isInWishList}) => {
    return (
        <button  onClick={toggleWishListHandler} className='wishlist-button wishlist-button--product'>
            <svg className="wishlist-icon" width="25" height="25">
                <use href={`${icons}${isInWishList ? "#icon-heart-solid" : "#icon-heart"}`} />
            </svg>
        </button>
    )
}

export default WishListButton;