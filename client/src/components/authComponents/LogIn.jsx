import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from '../../components/sharedComponents/Loading';
import { useNavigate, NavLink } from 'react-router-dom';
import { logIn } from '../../api/auth';
import { useState } from 'react';
import ErrorMsg from '../sharedComponents/ErrorMsg';

const LogIn = () => {

    const [isError, setIsError] = useState(null)
    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().email("Email format is not valid").required("Email is required"),
        password: yup.string().required("Password is required"),
    });
    const form = useForm({ resolver: yupResolver(schema) });
    const { register, handleSubmit, isLoading, formState } = form;
    const { errors } = formState

    const onFormSubmit = async (data) => {
        try {
            await logIn({ ...data })
            navigate('/home');
        } catch (err) {
            setIsError(err.response.data.message)
        }
    }

    const onSubmit = handleSubmit((data) => onFormSubmit(data));

    return (
        <section className='w-4/5 my-10 mx-auto md:w-2/5'>
            <h1 className='kH1 text-kL text-center my-6'>Log In</h1>
            <form className='w-4/5 h-[200px] mt-4 mx-auto bg-white rounded md:w-3/6' onSubmit={onSubmit}>
                <div className='my-4'>
                    <label className='font-light text-sm p-2'>Email</label>
                    <input className='input' type='email'{...register('email')} />
                    <small className='text-red-500'>{errors.email?.message}</small>
                </div>
                <div className='my-4'>
                    <label className='font-light text-sm p-2'>Password</label>
                    <input className='input' type='password'{...register('password')} />
                    <small className='text-red-500'>{errors.password?.message}</small>
                </div>
                <div className='mt-6 flex justify-center'>
                    <button disabled={isLoading} className='btn-solid'>
                        {isLoading ? <Loading /> : 'SUBMIT'}
                    </button>
                </div>
            </form>
            {!!isError && <ErrorMsg error={isError} />}
            <p className='font-light text-center mt-4'>
                Don't have an account?{' '}
                <NavLink className='kH2 text-kL' to='/register'>
                    Register
                </NavLink>
            </p>
        </section>
    );
};

export default LogIn;