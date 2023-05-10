import { NavLink } from 'react-router-dom';
import { logOut } from '../../api/auth';
import { useGetLoggedUser } from '../../hooks/useUser';

const AuthMenu = ({ handleClose }) => {

    const { data: loggedUser = [], isError, error } = useGetLoggedUser();

    const singOut = async () => {
        await logOut()
        handleClose();
    }

    { isError && <ErrorMsg error={error.message} /> }
    return (
        <>
            <NavLink to='/register' onClick={handleClose}>
                <li className='kH2 mobil-dropdown-li'>REGISTER</li>
            </NavLink>

            <NavLink to='/login' onClick={handleClose}>
                <li className={(loggedUser.loggedIn) ? 'hidden' : 'kH2 mobil-dropdown-li'}>LOG IN</li>
            </NavLink>

            <NavLink to='/home' onClick={() => singOut()}>
                <li className={(loggedUser.loggedIn) ? 'kH2 mobil-dropdown-li' : 'hidden'}>LOG OUT</li>
            </NavLink>
        </>
    )
}

export default AuthMenu