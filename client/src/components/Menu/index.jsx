import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    let activeStyle = { color: '#7a6427' };
    return (
        <div>
            <button className='btn-transparent md:hidden'>
                <RxHamburgerMenu size={20} />
            </button>
            <ul className='hidden md:flex items-center gap-8'>
                <li className='kH2'>
                    <NavLink
                        to='/products'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        ALL
                    </NavLink>
                </li>
                <li className='kH2'>
                    <NavLink
                        to='/categories/makers'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        MAKERS
                    </NavLink>
                </li>
                <li className='kH2'>
                    <NavLink
                        to='/categories/accessories'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        ACCESSORIES
                    </NavLink>
                </li>
                <l1 className='kH2'>
                    <NavLink
                        to='/categories/grains'
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        GRAINS
                    </NavLink>
                </l1>
            </ul>
        </div>
    )
}

export default Menu