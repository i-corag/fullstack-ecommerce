import { Link, useNavigate } from "react-router-dom"
import { BsSuitHeartFill } from 'react-icons/bs'
import { useWishListStore } from "../../stores/WishListStore"
import GoBack from "../sharedComponents/GoBack";

const Wishlist = () => {
    const wishlist = useWishListStore(state => state.wishlist)
    const removeFromWishlist = useWishListStore(state => state.removeFromWishlist)
    const clearWishlist = useWishListStore(state => state.clearWishlist)

    const navigate = useNavigate();

    return (
        <section className="w-11/12 mx-auto my-16 md:w-5/12">
            <Link onClick={() => navigate(-1)}><GoBack /></Link>
            {wishlist.length === 0 ?
                <div className='flex flex-col items-center mt-10'>
                    <p className="text-sm font-light md:text-base">You don't have products in the wishlist</p>
                    <Link to='/products'>
                        <button className='btn-solid mt-4'>Back to shopping</button>
                    </Link>
                </div>
                :
                <div className='w-full mt-6 md:mt-14'>
                    <div className='flex justify-end'>
                        <button className='btn-solid mb-3' onClick={() => clearWishlist()}>Clear all</button>
                    </div>
                    <ul className="flex flex-col items-center gap-4 ">
                        {wishlist.map((product) => {
                            return (
                                <li key={product.id} className='w-full flex items-center justify-between px-3 py-2 border border-kL rounded md:justify-center'>
                                    <div className='w-3/12 my-2 flex items-center justify-center md:h-[100px]'>
                                        <img className='h-full object-contain' src={product.image} alt='productImg' />
                                    </div>
                                    <div className="w-9/12 ml-4 my-2 py-2 md:w-7/12">
                                        <div className="flex items-center justify-between">
                                            <p className="text-start text-sm font-bold py-1 truncate my-1">{product.name}</p>
                                            <button className='btn-transparent rounded-full p-2' onClick={() => removeFromWishlist(product)}>
                                                <BsSuitHeartFill />
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-start gap-4">
                                            <p className=" text-start text-sm text-kD font-bold md:text-center">{product.Brand.name}</p>
                                            <p className=" text-start text-sm text-kD font-light md:text-center">US${product.price}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            }
        </section>
    )
}

export default Wishlist