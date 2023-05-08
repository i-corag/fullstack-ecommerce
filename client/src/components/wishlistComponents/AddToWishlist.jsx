import { WishListStore } from '../../stores/WishListStore.js';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

const AddToWishlist = (id) => {

    const wishlist = WishListStore((state) => state.wishlist)
    const addToWishlist = WishListStore((state) => state.addToWishlist);
    const removeFromWishlist = WishListStore((state) => state.removeFromWishlist);
    const inWishlist = wishlist.includes(id);
    const toggleWishlist = () => {
        if (inWishlist) {
            removeFromWishlist(id);
            return;
        }
        addToWishlist(id);
    };

    return (
        <button onClick={toggleWishlist}>
            {inWishlist ?
                <div className='btn-transparent ml-2'><BsSuitHeartFill /></div> : <div className='btn-transparent ml-2'><BsSuitHeart /></div>}
        </button>
    )
}

export default AddToWishlist