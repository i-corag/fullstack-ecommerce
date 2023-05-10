import { NavLink } from 'react-router-dom';
import { useGetLoggedUser } from '../../hooks/useUser';
import Logo from '../../public/logo.svg';
import CartWidget from '../widgetComponents/CartWidget';
import AuthWidget from '../widgetComponents/AuthWidget';
import CategoryWidget from '../widgetComponents/CategoryWidget';
import WishlistWidget from '../widgetComponents/WishlistWidget';
import CategoryMenu from './CategoryMenu';
import PortalAdminWidget from '../widgetComponents/PortalAdminWidget';

const Header = () => {

    const { data: loggedUser = [] } = useGetLoggedUser();

    const isLogged = (loggedUser.loggedIn) ? loggedUser.user.role : undefined
    const isAdmin = !isLogged ? false : isLogged

    return (
        <header className='w-screen h-[150px] flex flex-col sticky top-0 z-10 py-2 px-2  items-end justify-between border-b border-kL bg-white shadow-sm md:h-[100px] md:flex-row md:px-10 md:py-6'>
            <div className='w-full flex items-center justify-center md:1/4 md:justify-start'>
                <NavLink to='/'>
                    <img className='w-2/3 object-contain mx-auto md:w-52' src={Logo} alt='logo' />
                </NavLink>
            </div>
            <ul className='hidden md:flex md:flex-row  md:items-center md:justify-center md:gap-8 md:w-1/2 '>
                <CategoryMenu />
            </ul>
            <div className='w-full flex items-center justify-center gap-4 mt-4 md:1/4  md:justify-end md:gap-2'>
                <PortalAdminWidget isAdmin={isAdmin} />
                <WishlistWidget />
                <CategoryWidget />
                <AuthWidget />
                <CartWidget />
            </div>
        </header>
    );
};

export default Header;