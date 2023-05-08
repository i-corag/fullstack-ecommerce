import { NavLink } from "react-router-dom"

const CategoryMenu = ({ handleClose }) => {

    let activeStyle = { color: '#968452' };

    return (
        <>
            <li className='kH2 max-md:mobil-dropdown-li'>
                <NavLink
                    to='/products'
                    onClick={handleClose}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    ALL
                </NavLink>
            </li>
            <li className='kH2 max-md:mobil-dropdown-li'>
                <NavLink
                    to='/categories/makers'
                    onClick={handleClose}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    MAKERS
                </NavLink>
            </li>
            <li className='kH2 max-md:mobil-dropdown-li'>
                <NavLink
                    to='/categories/accessories'
                    onClick={handleClose}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    ACCESSORIES
                </NavLink>
            </li>
            <li className='kH2 max-md:mobil-dropdown-li'>
                <NavLink
                    to='/categories/grains'
                    onClick={handleClose}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    GRAINS
                </NavLink>
            </li>
        </>
    )
}

export default CategoryMenu