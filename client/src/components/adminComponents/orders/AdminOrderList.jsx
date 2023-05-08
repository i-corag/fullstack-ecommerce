import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useGetOrders, useDeleteOrder } from '../../../hooks/useOrder';
import Loading from '../../Loading';
import ErrorMsg from '../../ErrorMsg';
import GoBack from '../../GoBack'

const AdminOrderList = () => {

    const { data: orders = [], isLoading, isError, error } = useGetOrders()
    const { mutate, isLoading: isMutating } = useDeleteOrder()

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='px-2'>
            <Link to='/admin'><GoBack /></Link>
            <h1 className='kH2 text-kD text-center mt-16 '>LIST OF ORDERS</h1>
            <div className='my-8 flex flex-col md:w-3/5 md:mx-auto'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='text-sm text-center text-kL border p-1'>ID</th>
                            <th className='text-sm text-center text-kL border p-1'>USER ID</th>
                            <th className='text-sm text-center text-kL border p-1'>PRODUCTS</th>
                            <th className='text-sm text-center text-kL border p-1'>EDIT</th>
                            <th className='text-sm text-center text-kL border p-1'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {orders?.map((order) => (
                            <tr key={order.id}>
                                <td className='text-xs text-center border p-2'> {order.id} </td>
                                <td className='text-xs text-center border p-2'> {order.UserId} </td>
                                <td className='text-xs text-center border p-2'> {order.products.map((product) => product.id).join(" / ")} </td>
                                <td className='text-xs text-center border p-2'>
                                    <Link className='flex justify-center' to={`update/${order.id}`}>
                                        <AiOutlineEdit />
                                    </Link>
                                </td>
                                <td className='text-xs text-center border p-2'>
                                    <Link className='flex justify-center' onClick={() => { mutate(order.id) }}>
                                        {isMutating ? <Loading /> : <AiOutlineDelete />}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default AdminOrderList