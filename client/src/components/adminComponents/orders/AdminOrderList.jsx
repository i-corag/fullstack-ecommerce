import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { useGetOrders, useDeleteOrder } from '../../../hooks/useOrder';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import Loading from '../../../components/sharedComponents/Loading';

const OrderList = () => {

    const { data: orders = [], isLoading, isError, error } = useGetOrders()
    const { mutate, isLoading: isMutating } = useDeleteOrder()

    { isLoading && <Loading /> }
    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className='px-2'>
            <h1 className='kH2 text-kD text-center mt-16 '>LIST OF ORDERS</h1>
            <div className='w-screen my-8 mx-auto flex flex-col px-1 md:w-3/5 md:mx-auto'>
                <table className="w-full border border-kL">
                    <thead className="flex w-full border-b border-b-kL">
                        <tr className='flex w-full'>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-3/12'>ID</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-3/12'>USER ID</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-4/12'>PRODUCTS</th>
                            <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-2/12'>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full max-h-64">
                        {orders?.map((order) => (
                            <tr key={order.id} className='flex w-full'>
                                <td className='flex items-center justify-center text-[8px] md:text-xs text-center border p-2 w-3/12'> {order.id} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-xs text-center border p-2 w-3/12'> {order.UserId} </td>
                                <td className='flex flex-col items-center text-[8px] md:text-xs text-center border p-2 w-4/12'> {order.products.map((product) => <p key={product.id}>{product.name}</p>)} </td>
                                <td className='flex items-center justify-center text-[8px] md:text-xs text-center border p-2 w-2/12'>
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

export default OrderList