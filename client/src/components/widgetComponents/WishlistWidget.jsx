import { BsSuitHeart } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const WishlistWidget = () => {
    return (
        <NavLink to='/wishlist' className='w-[42px] h-[42px] bg-white border border-kL shadow-md rounded-full flex items-center justify-center hover:bg-kL'>
            <BsSuitHeart className='text-md' />
        </NavLink>
    )
}

export default WishlistWidget