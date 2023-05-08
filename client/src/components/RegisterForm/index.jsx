import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from '../Loading';

const RegisterForm = ({ defaultValues, onFormSubmit, isLoading }) => {

    const schema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Email format is not valid").required("Email is required"),
        password: yup.string().required("Password is required"),
        address: yup.string().required("Address is required"),
        phone: yup.number("Phone has to be a number").required("Phone is required"),
    });
    const form = useForm({ defaultValues, resolver: yupResolver(schema) });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState

    const onSubmit = handleSubmit((data) => onFormSubmit(data));

    return (
        <form className='w-4/5 h-[300px] my-4 mx-auto bg-white rounded md:w-3/6 md:my-8' onSubmit={onSubmit}>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Name</label>
                <input className='input' id='name' type='text' {...register('name')} />
                <small className='text-red-500'>{errors.name?.message}</small>
            </div>
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
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Address</label>
                <input className='input' type='text' {...register('address')} />
                <small className='text-red-500'>{errors.address?.message}</small>
            </div>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Phone</label>
                <input className='input' type='number' {...register('phone')} />
                <small className='text-red-500'>{errors.phone?.message}</small>
            </div>
            <div className='mt-6 flex justify-center'>
                <button disabled={isLoading} className='btn-solid'>
                    {isLoading ? <Loading /> : 'SUBMIT'}
                </button>
            </div>
        </form>
    )
};

export default RegisterForm;