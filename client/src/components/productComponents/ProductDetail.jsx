import { useGetProduct } from '../../hooks/useProduct.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ErrorMsg from '../../components/sharedComponents/ErrorMsg';
import Loading from '../../components/sharedComponents/Loading';
import GoBack from '../../components/sharedComponents/GoBack';
import { useCartStore } from '../../stores/CartStore.js';
import { useState } from 'react';
import AddQty from '../cartComponents/AddQty.jsx';
import AddToWishlist from '../wishlistComponents/AddToWishlist.jsx';

const ProductDetail = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const { data: product = [], isLoading, isError, error } = useGetProduct(id)

    const addToCart = useCartStore(state => state.addToCart)

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart(product, quantity)
    }

    if (isLoading) return <Loading />
    if (isError) return <ErrorMsg error={error.message} />
    return (
        <>
            <Link onClick={() => navigate(-1)}><GoBack /></Link>
            <section className='w-4/5 h-full my-12 mx-auto flex flex-col items-center gap-6 md:flex-row justify-center h-[500px] w-4/5 my-20'>
                <div className='md:w-3/6 flex justify-center items-center'>
                    <img className="w-8/12 h-8/12 object-contain" src={product.image} alt='productImg' />
                </div>
                <div className='md:w-4/5 flex flex-col items-end'>
                    <div >
                        <p className="text-xl text-center py-2 md:kH1 text-end">{product.name}</p>
                        <p className="text-kL text-center py-2 md:kH2 text-end">{product.Brand?.name}</p>
                        <p className='text-center py-2 md:text-end text-lg font-light' >{product.description}</p>
                        <p className="text-center text-kL text-xl font-bolder py-2 md:kH2 text-end">US$ {product.price}</p>
                        <hr className="md:my-6" />
                    </div>
                    {goToCart ?
                        <div className='flex justify-between items-center md:w-1/2'>
                            <Link to='/home'>
                                <p className='text-md' fontWeight='normal'>Continue shopping</p>
                            </Link>
                            <Link to="/cart">
                                <p className='btn-solid my-1'>Proceed to Checkout</p>
                            </Link>
                        </div> :
                        <div className="h-[60px] flex justify-between items-center mt-4 md:w-1/2 md:justify-center md:gap-4">
                            <AddQty onAdd={onAdd} />
                            <AddToWishlist product={product} />
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default ProductDetail