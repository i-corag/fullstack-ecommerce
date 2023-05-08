import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from '../../Loading';
import { useGetBrands } from '../../../hooks/useBrand';
import { useGetCategories } from '../../../hooks/useCategory';

const CreateProductForm = ({ defaultValues, onFormSubmit, isLoading }) => {

    const { data: brands = [] } = useGetBrands()
    const { data: categories = [] } = useGetCategories()

    const schema = yup.object(
        {
            name: yup.string().required("Name is required"),
            description: yup.string().required("Description is required"),
            price: yup.number("Price must be a number").positive("Price must be positive").required("Price is required"),
            image: yup.string().url("Must be a valid url").required("Image is required"),
            CategoryId: yup.string().required("Must select a Category. If does not exist, please create it first"),
            BrandId: yup.string().required("Must select a Brand. If does not exist, please create it first")
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
                <label className='font-light text-sm p-2'>Description</label>
                <textarea className='input' type='text' {...register('description')} />
                <small className='text-red-500'>{errors.name?.message}</small>
            </div>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Price</label>
                <input className='input' type='number' step="any" {...register('price')} />
                <small className='text-red-500'>{errors.name?.message}</small>
            </div>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Image</label>
                <input className='input' type='text' {...register('image')} />
                <small className='text-red-500'>{errors.name?.message}</small>
            </div>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Category</label>
                <select className='input' {...register('CategoryId')}>
                    <option value=''>category</option>
                    {categories?.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <small className='text-red-500'>{errors.name?.message}</small>
            </div>
            <div className='my-4'>
                <label className='font-light text-sm p-2'>Brand</label>
                <select className='input' {...register('BrandId')}>
                    <option value=''>brand</option>
                    {brands?.map((brand) => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                </select>
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

export default CreateProductForm