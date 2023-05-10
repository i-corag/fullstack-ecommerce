import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import { useCartStore } from "../../stores/CartStore";

const CartWidget = () => {
    const cartProducts = useCartStore(state => state.cartProducts)
    const totalCartQuantity = () => cartProducts.reduce((acc, cur) => acc + cur.quantity, 0);

    return (
        <NavLink to={'/cart'}>
            <button className="w-[42px] h-[42px] bg-white border border-kL shadow-md rounded-full flex items-center justify-center hover:bg-kL inline-flex">
                <BsCart3 className='text-md' />
                <span className='font-light ml-0.5 mb-2'>{totalCartQuantity()}</span>
            </button>
        </NavLink>
    )
}

export default CartWidget