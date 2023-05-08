import { NavLink } from 'react-router-dom';
import { logOut } from '../../api/auth';

const AuthMenu = ({ handleClose }) => {

    const singOut = async () => {
        logOut()
        handleClose;
    }

    return (
        <>
            <li className='kH2 mobil-dropdown-li'>
                <NavLink to='/register' onClick={handleClose}>
                    REGISTER
                </NavLink>
            </li>
            <li className='kH2 mobil-dropdown-li'>
                <NavLink to='/login' onClick={handleClose}>
                    LOG IN
                </NavLink>
            </li>
            <li className='kH2 mobil-dropdown-li'>
                <NavLink to='/home' onClick={singOut()}>
                    LOG OUT
                </NavLink>
            </li>
            <li className='kH2  mobil-dropdown-li'>
                <NavLink to='/admin' onClick={handleClose}>
                    PORTAL ADMIN
                </NavLink>
            </li>
        </>
    )
}

export default AuthMenu