import { NavLink } from "react-router-dom"

const CategoryMenu = ({ handleClose }) => {

    let activeStyle = { color: '#968452' };

    return (
        <>
            <NavLink to='/products' onClick={handleClose} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <li className='kH2 max-md:mobil-dropdown-li'>ALL</li>
            </NavLink>

            <NavLink to='/categories/makers' onClick={handleClose} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <li className='kH2 max-md:mobil-dropdown-li'>MAKERS</li>
            </NavLink>

            <NavLink to='/categories/accessories' onClick={handleClose} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <li className='kH2 max-md:mobil-dropdown-li'>ACCESSORIES</li>
            </NavLink>

            <NavLink to='/categories/grains' onClick={handleClose} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <li className='kH2 max-md:mobil-dropdown-li'>GRAINS</li>
            </NavLink>
        </>
    )
}

export default CategoryMenu