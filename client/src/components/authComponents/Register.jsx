import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../hooks/useUser';
import Loading from '../../components/sharedComponents/Loading';
import ErrorMsg from '../../components/sharedComponents/ErrorMsg';
import RegisterForm from './RegisterForm';
import GoBack from '../../components/sharedComponents/GoBack';

const Register = () => {

    const navigate = useNavigate();
    const { mutate, isLoading, isError, error } = useCreateUser()

    const onFormSubmit = async (data) => {
        mutate({ ...data })
        navigate('/login');
    }

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='w-4/5 my-10 mx-auto md:w-2/5'>
            <Link to='/home'><GoBack /></Link>
            <h1 className='kH1 text-kL text-center my-2'>Register</h1>
            <RegisterForm onFormSubmit={onFormSubmit} isLoading={isLoading} isUpdating={false} />
            <p className='font-light text-center mt-[160px]'>
                Already have an account?{' '}
                <NavLink className='kH2 text-kL' to='/login'>Log In</NavLink>
            </p>
        </section>
    )
};

export default Register;