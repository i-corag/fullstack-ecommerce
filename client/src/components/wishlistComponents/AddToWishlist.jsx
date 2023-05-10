import { useWishListStore } from '../../stores/WishListStore.js';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'

const AddToWishlist = ({ product }) => {

    const wishlist = useWishListStore((state) => state.wishlist)
    const addToWishlist = useWishListStore((state) => state.addToWishlist);
    const removeFromWishlist = useWishListStore((state) => state.removeFromWishlist);

    const inWishlist = wishlist.some(x => x.id === product.id);

    const toggleWishlist = () => {
        if (inWishlist) {
            removeFromWishlist(product);
            return;
        }
        addToWishlist(product);
    };

    return (
        <button onClick={toggleWishlist}>
            {inWishlist ?
                <div className='btn-transparent ml-2'><BsSuitHeartFill /></div> : <div className='btn-transparent ml-2'><BsSuitHeart /></div>}
        </button>
    )
}

export default AddToWishlist

