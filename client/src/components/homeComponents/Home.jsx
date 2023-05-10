import { useGetLoggedUser } from '../../hooks/useUser.js';
import ErrorMsg from '../../components/sharedComponents/ErrorMsg';
import Carousel from './Carousel.jsx';

const Home = () => {

    const { data: loggedUser = [], isError, error, isLoading } = useGetLoggedUser();

    { isLoading && <isLoading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='flex flex-col justify-center items-center px-2'>
            {(loggedUser.loggedIn) ?
                <div className='w-screen flex justify-start items-center mt-3 md:mt-8'>
                    <p className='text-kL text-xl md:text-3xl font-extralight px-10 py-2'>Hello <span className='font-bold'>{loggedUser.user.name}</span>... let's enjoy the koffie expience at the bliss of home</p>
                </div> :
                <div className='w-screen flex justify-start items-center mt-3 md:mt-8'>
                    <p className='text-kL text-xl md:text-3xl font-extralight px-10 py-2'>Enjoy the koffie expience at the bliss of our home ...</p>
                </div>
            }
            <Carousel />
        </section>
    );
};

export default Home;