import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetUser, useUpdateUser } from '../../../hooks/useUser';
import ErrorMsg from '../../ErrorMsg/index.jsx';
import GoBack from '../../GoBack';
import Loading from '../../Loading/index.jsx';
import RegisterForm from '../../RegisterForm';

const UpdateUser = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const { data: user = [], isLoading, isError, error } = useGetUser(id)

    const { mutate, isLoading: isMutating } = useUpdateUser()

    const onFormSubmit = async (data) => {
        mutate({ id, ...data })
        navigate('/admin/users')
    }

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }
    return (
        <>
            <Link to='/admin/products'><GoBack /></Link>
            <div className='w-4/5 h-[300px] my-6 mx-auto p-4 bg-white rounded md:w-3/6 md:my-10'>
                <h1 className='kH2 text-kL text-center my-6 md:kH1'>Update User</h1>
                <RegisterForm defaultValues={user} onFormSubmit={onFormSubmit} isLoading={isMutating} />
            </div>
        </>
    )
}

export default UpdateUser