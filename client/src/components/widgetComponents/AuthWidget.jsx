import { useState } from 'react';
import { BiUser } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import AuthMenu from '../../components/sharedComponents/AuthMenu';

const AuthWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <button onClick={handleOpen} className='w-[42px] h-[42px] bg-white border border-kL shadow-md rounded-full flex items-center justify-center hover:bg-kL'>
                <BiUser className='text-md' />
            </button>
            {isOpen && (
                <ul className="mobil-dropdown-ul md:dropdown-ul">
                    <div onClick={handleClose} className='h-10 flex items-center justify-end'>
                        <AiOutlineCloseCircle className='text-3xl text-kD bg-white bg-opacity-70 rounded-full transition ease-in-out hover:scale-[1.2] duration-300' />
                    </div>
                    <AuthMenu handleClose={handleClose} />
                </ul>
            )}
        </>
    )
}

export default AuthWidget

