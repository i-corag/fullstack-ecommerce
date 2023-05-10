import { Link, useNavigate } from 'react-router-dom';
import { useCreateBrand } from '../../../hooks/useBrand';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import GoBack from '../../../components/sharedComponents/GoBack';
import Loading from '../../../components/sharedComponents/Loading';
import Form from '../shared/Form.jsx';

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
                <Form onFormSubmit={onFormSubmit} isLoading={isLoading} />
            </div>
        </>
    )
}

export default CreateBrand