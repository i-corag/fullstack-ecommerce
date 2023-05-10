import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../hooks/useUser';
import ErrorMsg from '../../components/sharedComponents/ErrorMsg';
import RegisterForm from './RegisterForm';
import GoBack from '../../components/sharedComponents/GoBack';
import { useState } from 'react';

const Register = () => {

    const navigate = useNavigate();
    const [isError, setIsError] = useState(null)

    const { mutateAsync, isLoading, isError: isMutatingError, error: mutatingError } = useCreateUser()

    const onFormSubmit = async (data) => {
        try {
            const { data: result } = await mutateAsync({ ...data })
            console.log('REGISTER', result)
            result.success ? navigate('/login') : setIsError(result.message)
        } catch (err) {
            setIsError(err.response.data.message)
        }
    }

    return (
        <section className='w-4/5 my-10 mx-auto md:w-2/5'>
            <Link to='/home'><GoBack /></Link>
            {!!isError && <ErrorMsg error={isError} />}
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