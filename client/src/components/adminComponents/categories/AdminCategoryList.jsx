import { Link } from 'react-router-dom'
import { AiOutlineFileAdd, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useGetCategories, useDeleteCategory } from '../../../hooks/useCategory';
import Loading from '../../Loading';
import ErrorMsg from '../../ErrorMsg';
import GoBack from '../../GoBack';

const AdminCategoryList = () => {

    const { data: categories = [], isLoading, isError, error } = useGetCategories()

    const { mutate, isLoading: isMutating } = useDeleteCategory()

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='px-2'>
            <Link to='/admin'><GoBack /></Link>
            <h1 className='kH2 text-kD text-center mt-16 '>LIST OF CATEGORIES</h1>
            <div className='my-8 flex flex-col md:w-3/5 md:mx-auto'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='text-sm text-center text-kL border p-1'>ID</th>
                            <th className='text-sm text-center text-kL border p-1'>CATEGORY NAME</th>
                            <th className='text-sm text-center text-kL border p-1'>EDIT</th>
                            <th className='text-sm text-center text-kL border p-1'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {categories?.map((category) => (
                            <tr key={category.id}>
                                <td className='text-xs text-center border p-2'> {category.id} </td>
                                <td className='text-xs text-center border p-2'> {category.name} </td>
                                <td className='text-xs text-center border p-2'>
                                    <Link className='flex justify-center' to={`update/${category.id}`}>
                                        <AiOutlineEdit />
                                    </Link>
                                </td>
                                <td className='text-xs text-center border p-2'>
                                    <Link className='flex justify-center' onClick={() => { mutate(category.id) }}>
                                        {isMutating ? <Loading /> : <AiOutlineDelete />}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex justify-end mt-6 mr-2'>
                    <Link className="rounded border border-kL shadow-md flex items-center gap-1 py-1 px-2 text-sm" to={'create'}>
                        <AiOutlineFileAdd />
                        <p>ADD NEW CATEGORY</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AdminCategoryList