import { BsCart3 } from 'react-icons/bs'

const CartWidget = () => {
    return (
        <button className='btn-transparent flex items-center gap-1 md:text-lg'>
            <BsCart3 size={20} />
            <p>0</p>
        </button>
    )
}

export default CartWidget