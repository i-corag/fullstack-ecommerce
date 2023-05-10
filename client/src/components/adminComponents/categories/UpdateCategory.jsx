import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetCategory, useUpdateCategory } from '../../../hooks/useCategory';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import GoBack from '../../../components/sharedComponents/GoBack';
import Loading from '../../../components/sharedComponents/Loading';
import Form from '../shared/Form.jsx';

const UpdateCategory = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const { data: category = [], isLoading, isError, error } = useGetCategory(id)

    const { mutate, isLoading: isMutating } = useUpdateCategory()

    const onFormSubmit = async (data) => {
        mutate({ id, ...data })
        navigate('/admin/categories')

    }

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }
    return (
        <>
            <Link to='/admin/categories'><GoBack /></Link>
            <div className='w-4/5 h-[300px] my-6 mx-auto p-4 bg-white rounded md:w-3/6 md:my-10'>
                <h1 className='kH2 text-kL text-center my-6 md:kH1'>Update Category</h1>
                <Form defaultValues={category.name} onFormSubmit={onFormSubmit} isLoading={isMutating} />
            </div>
        </>
    )
}

export default UpdateCategory