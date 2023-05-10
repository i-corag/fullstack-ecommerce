import { NavLink } from "react-router-dom"

const AdminMenu = ({ handleClose }) => {

    return (
        <>
            <NavLink to='/admin/brands' onClick={handleClose} >
                <li className='kH2 mobil-dropdown-li'>BRANDS</li>
            </NavLink>

            <NavLink to='/admin/categories' onClick={handleClose} >
                <li className='kH2 mobil-dropdown-li'>CATEGORIES</li>
            </NavLink>

            <NavLink to='/admin/products' onClick={handleClose} >
                <li className='kH2 mobil-dropdown-li'>PRODUCTS</li>
            </NavLink>

            <NavLink to='/admin/users' onClick={handleClose} >
                <li className='kH2 mobil-dropdown-li'>USERS</li>
            </NavLink>

            <NavLink to='/admin/orders' onClick={handleClose} >
                <li className='kH2 mobil-dropdown-li'>ORDERS</li>
            </NavLink>
        </>
    )
}

export default AdminMenu



