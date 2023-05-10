import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
//import GoBack from '../../../components/sharedComponents/GoBack';
import Loading from '../../sharedComponents/Loading';


const Form = ({ defaultValues, onFormSubmit, isLoading }) => {

    const schema = yup.object({ name: yup.string().required("Name is required") })

    const form = useForm({ defaultValues, resolver: yupResolver(schema) });
    const { register, handleSubmit, formState } = form;
    const { errors } = formState

    const onSubmit = handleSubmit((data) => onFormSubmit(data));

    return (
        <form className='w-4/5 h-[300px] my-4 mx-auto bg-white rounded md:w-3/6 md:my-8' onSubmit={onSubmit}>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Name</label>
                <input className='input' id='name' type='text' defaultValue={defaultValues} {...register('name')} />
                <small className='text-red-500'>{errors.name?.message}</small>
            </div>
            <div className='mt-6 flex justify-center'>
                <button disabled={isLoading} className='btn-solid'>
                    {isLoading ? <Loading /> : 'SUBMIT'}
                </button>
            </div>
        </form>
    )
}

export default Form