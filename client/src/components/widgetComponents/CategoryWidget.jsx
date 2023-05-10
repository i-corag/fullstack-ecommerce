import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiMenu5Fill } from 'react-icons/ri'
import CategoryMenu from '../../components/sharedComponents/CategoryMenu';

const CategoryWidget = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <button onClick={handleOpen} className='w-[42px] h-[42px] bg-white border border-kL shadow-md rounded-full flex items-center justify-center hover:bg-kL md:hidden'>
                <RiMenu5Fill className='text-md' />
            </button>
            {isOpen && (
                <ul className="mobil-dropdown-ul">
                    <div onClick={handleClose} className='h-10 flex items-center justify-end'>
                        <AiOutlineCloseCircle className='text-3xl text-kD bg-white bg-opacity-70 rounded-full transition ease-in-out hover:scale-[1.2] duration-300' />
                    </div>
                    <CategoryMenu handleClose={handleClose} />
                </ul>
            )}
        </>
    )
}

export default CategoryWidget


