
import { useGetLoggedUser } from '../../hooks/useUser.js';
import ErrorMsg from '../ErrorMsg/index.jsx';

const Home = () => {

    const { data: loggedUser = [], isError, error } = useGetLoggedUser();
    console.log(loggedUser);

    {
        isError && <ErrorMsg error={error.message} />;
    }
    return (
        <section className='px-2'>
            {(loggedUser.loggedIn) ? <div> Hola {loggedUser.user.name}</div> : <div> Please Log in</div>}
        </section>
    );
};

export default Home;