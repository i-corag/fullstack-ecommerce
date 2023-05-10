import { Link } from 'react-router-dom'
import { AiOutlineFileAdd, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useGetCategories, useDeleteCategory } from '../../../hooks/useCategory';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import Loading from '../../../components/sharedComponents/Loading';

const AdminCategoryList = () => {

    const { data: categories = [], isLoading, isError, error } = useGetCategories()

    const { mutate, isLoading: isMutating } = useDeleteCategory()

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='px-2'>
            <h1 className='kH2 text-kD text-center mt-16 '>LIST OF CATEGORIES</h1>
            <div className='my-8 flex flex-col md:w-3/5 md:mx-auto'>
                <table className="w-full border border-kL">
                    <thead className="flex w-full border-b border-b-kL">
                        <tr className='flex w-full'>
                            <th className='flex items-center justify-center text-sm text-center text-kL border p-1 w-5/12'>ID</th>
                            <th className='flex items-center justify-center text-sm text-center text-kL border p-1 w-3/12'>CATEGORY NAME</th>
                            <th className='flex items-center justify-center text-sm text-center text-kL border p-1 w-2/12'>EDIT</th>
                            <th className='flex items-center justify-center text-sm text-center text-kL border p-1 w-2/12'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full max-h-64">
                        {categories?.map((category) => (
                            <tr key={category.id} className='flex w-full'>
                                <td className='flex items-center justify-center text-xs text-center border p-2 w-5/12'> {category.id} </td>
                                <td className='flex items-center justify-center text-xs text-center border p-2 w-3/12'> {category.name} </td>
                                <td className='flex items-center justify-center text-xs text-center border p-2 w-2/12'>
                                    <Link className='flex justify-center' to={`update/${category.id}`}>
                                        <AiOutlineEdit />
                                    </Link>
                                </td>
                                <td className='flex items-center justify-center text-xs text-center border p-2 w-2/12'>
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