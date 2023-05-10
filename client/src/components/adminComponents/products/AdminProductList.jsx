import { Link } from 'react-router-dom'
import { AiOutlineFileAdd, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useGetProducts, useDeleteProduct } from '../../../hooks/useProduct';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import Loading from '../../../components/sharedComponents/Loading';

const AdminProductList = () => {

    const { data: products = [], isLoading, isError, error } = useGetProducts()
    const { mutate, isLoading: isMutating } = useDeleteProduct()

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='px-2'>
            <h1 className='kH2 text-kD text-center mt-16 '>LIST OF PRODUCTS</h1>
            <div className='w-screen my-8 mx-auto flex flex-col px-1 md:w-4/5 md:mx-auto'>
                <table className="w-full overflow-x-scroll border border-kL">
                    <thead className="flex w-full border-b border-b-kL">
                        <tr className='flex w-full'>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-2/12'>ID</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-2/12'>PRODUCT NAME</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-3/12'>DESCRIPTION</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>BRAND</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>CATEGORY</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>PRICE</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>EDIT</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full max-h-80">
                        {products?.map((product) => (
                            <tr key={product.id} className='flex w-full'>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-2/12'> {product.id} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-2/12'> {product.name} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-3/12'> {product.description} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'> {product.Brand?.name} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'> {product.Category?.name} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'> {product.price} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'>
                                    <Link className='flex justify-center' to={`update/${product.id}`}>
                                        <AiOutlineEdit />
                                    </Link>
                                </td>
                                <td className='flex items-center justify-center text-xs text-center border p-2 w-1/12'>
                                    <Link className='flex justify-center' onClick={() => { mutate(product.id) }}>
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
                        <p>ADD NEW PRODUCT</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AdminProductList