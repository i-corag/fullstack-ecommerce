import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetBrand, useUpdateBrand } from '../../../hooks/useBrand';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import GoBack from '../../../components/sharedComponents/GoBack';
import Loading from '../../../components/sharedComponents/Loading';
import Form from '../shared/Form.jsx';

const UpdateBrand = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const { data: brand = [], isLoading, isError, error } = useGetBrand(id)

    const { mutate, isLoading: isMutating } = useUpdateBrand()

    const onFormSubmit = async (data) => {
        mutate({ id, ...data })
        navigate('/admin/brands')
    }

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }
    return (
        <>
            <Link to='/admin/brands'><GoBack /></Link>
            <div className='w-4/5 h-[300px] my-6 mx-auto p-4 bg-white rounded md:w-3/6 md:my-10'>
                <h1 className='kH2 text-kL text-center my-6 md:kH1'>Update Brand</h1>
                <Form defaultValues={brand.name} onFormSubmit={onFormSubmit} isLoading={isMutating} />
            </div>
        </>
    )
}

export default UpdateBrand