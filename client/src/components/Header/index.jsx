import { NavLink } from 'react-router-dom';
import Logo from '../../../public/logo.svg';
import Auth from '../Auth';
import CartWidget from '../CartWidget';
import Menu from '../Menu';

const Header = () => {

    return (
        <header className='sticky top-0 w-screen py-3 px-2 flex items-end justify-between border-b border-kL md:px-8 py-6'>
            <div className='w-3/6 flex items-center mr-4 md:w-1/4'>
                <NavLink to='/'>
                    <img className='w-full object-contain md:w-52' src={Logo} alt='logo' />
                </NavLink>
            </div>
            <Menu className='w-1/6 md:w-1/2' />
            <div className='w-2/6 flex gap-0 md:w-1/4 justify-end gap-2'>
                <Auth className='md:1/8' />
                <CartWidget className='md:1/8' />
            </div>
        </header>
    );
};

export default Header;
