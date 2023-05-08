import { Link, useNavigate } from 'react-router-dom';
import { useCreateBrand } from '../../../hooks/useBrand';
import ErrorMsg from '../../ErrorMsg';
import GoBack from '../../GoBack';
import Loading from '../../Loading';
import BrandForm from '../shared/BrandForm.jsx';

const CreateBrand = () => {

    const navigate = useNavigate()
    const { mutate, isLoading, isError, error } = useCreateBrand()

    const onFormSubmit = async (data) => {
        mutate({ ...data })
        navigate('/admin/brands');
    }

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }
    return (
        <>
            <Link to='/admin/brands'><GoBack /></Link>
            <div className='w-4/5 h-[300px] my-6 mx-auto p-4 bg-white rounded md:w-3/6 md:my-10'>
                <h1 className='kH2 text-kL text-center my-6 md:kH1'>Add New Brand</h1>
                <BrandForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
            </div>
        </>
    )
}

export default CreateBrand