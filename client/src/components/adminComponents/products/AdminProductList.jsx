import { Link } from 'react-router-dom'
import { AiOutlineFileAdd, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useGetProducts, useDeleteProduct } from '../../../hooks/useProduct';
import Loading from '../../Loading';
import ErrorMsg from '../../ErrorMsg';
import GoBack from '../../GoBack';

const AdminProductList = () => {

    const { data: products = [], isLoading, isError, error } = useGetProducts()
    const { mutate, isLoading: isMutating } = useDeleteProduct()

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='px-2'>
            <Link to='/admin'><GoBack /></Link>
            <h1 className='kH2 text-kD text-center mt-16 '>LIST OF PRODUCTS</h1>
            <div className='my-8 flex flex-col md:w-3/5 md:mx-auto'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='text-sm text-center text-kL border p-1'>ID</th>
                            <th className='text-sm text-center text-kL border p-1'>PRODUCT NAME</th>
                            <th className='text-sm text-center text-kL border p-1'>DESCRIPTION</th>
                            <th className='text-sm text-center text-kL border p-1'>BRAND</th>
                            <th className='text-sm text-center text-kL border p-1'>CATEGORY</th>
                            <th className='text-sm text-center text-kL border p-1'>PRICE</th>
                            <th className='text-sm text-center text-kL border p-1'>EDIT</th>
                            <th className='text-sm text-center text-kL border p-1'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {products?.map((product) => (
                            <tr key={product.id}>
                                <td className='text-xs text-center border p-2'> {product.id} </td>
                                <td className='text-xs text-center border p-2'> {product.name} </td>
                                <td className='text-xs text-center border p-2'> {product.description} </td>
                                <td className='text-xs text-center border p-2'> {product.BrandId} </td>
                                <td className='text-xs text-center border p-2'> {product.CategoryId} </td>
                                <td className='text-xs text-center border p-2'> {product.price} </td>
                                <td className='text-xs text-center border p-2'>
                                    <Link className='flex justify-center' to={`update/${product.id}`}>
                                        <AiOutlineEdit />
                                    </Link>
                                </td>
                                <td className='text-xs text-center border p-2'>
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