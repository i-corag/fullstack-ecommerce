import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';
import { createOrder } from "../../api/order";
import { useGetLoggedUser } from "../../hooks/useUser";
import { useCartStore } from "../../stores/CartStore";
import ConfirmOrderModal from "./ConfirmOrderModal";
import ErrorMsg from "../../components/sharedComponents/ErrorMsg";
import GoBack from "../sharedComponents/GoBack";

const Cart = () => {

    const { data: loggedUser = [], isError, error } = useGetLoggedUser();
    const navigate = useNavigate();

    //CART
    const cartProducts = useCartStore(state => state.cartProducts)
    const addToCart = useCartStore(state => state.addToCart)
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const deleteProduct = useCartStore(state => state.deleteProduct)
    const clearCart = useCartStore(state => state.clearCart)
    const totalCartPrice = () => cartProducts.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0);

    const [id, setId] = useState(null);
    const [pay, setPay] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const handleLogged = () => {
        (loggedUser.loggedIn) ? setOpenModal(true) : navigate('/login')
    };

    const newOrder = async () => {
        //create order
        let order = {};
        order.buyer = { name: loggedUser.user.name, email: loggedUser.user.email };
        order.UserId = loggedUser.user.id;
        order.products = cartProducts.map((cartProduct) => {
            const productId = cartProduct.id;
            return productId;
        });
        order.total = totalCartPrice();

        // add order to DB
        try {
            const { data } = await createOrder(order)
            setId(data.createdOrder.id)
            setPay(false);
            return order;
        } catch (error) {
            console.error(error.message)
        }
    };

    { isError && <ErrorMsg error={error.message} /> }

    return (
        <section className="w-11/12 mx-auto my-6 md:w-8/12">
            <Link to='/home'><GoBack /></Link>
            {cartProducts.length === 0 ? (
                <div className='flex flex-col items-center mt-10'>
                    <p className="text-sm font-light md:text-base">There are no products in the cart</p>
                    <Link to='/products'>
                        <button className='btn-solid mt-4'>Back to shopping</button>
                    </Link>
                </div>
            ) : (
                <>
                    {id ? (
                        <div className='w-4/5 flex flex-col items-center mx-auto my-14'>
                            <p className='text-lg font-bold text-kD md:text-2xl'>Thank you for your order!</p>
                            <p className='text-sm text-center py-2 md:text-base md:py-4'>
                                Remember to verify your information before paying
                            </p>
                            <div className='w-full p-3 border border-kD rounded my-2 md:w-3/5'>
                                <p className='text-md font-bold'>
                                    Order ID: <span className='pl-1 font-light'>{id}</span>
                                </p>
                                <p className='text-md font-bold'>
                                    Name: <span className='pl-1 font-light'>{loggedUser.user.name}</span>
                                </p>
                                <p className='text-md font-bold'>
                                    Email: <span className='pl-1 font-light'>{loggedUser.user.email}</span>
                                </p>
                                <p className='text-md font-bold'>
                                    Address: <span className='pl-1 font-light'>{loggedUser.user.address}</span>
                                </p>
                                <p className='text-md font-bold'>
                                    Phone: <span className='pl-1 font-light'>{loggedUser.user.phone}</span>
                                </p>
                            </div>
                            <Link to='/'>
                                <button
                                    className='btn-solid m-3'
                                    onClick={clearCart}>
                                    Confirmar Pedido
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='w-full mt-6 md:mt-14'>
                            <div className='flex justify-end'>
                                <button className='btn-solid mb-3' onClick={() => clearCart()}>Clear all</button>
                            </div>
                            <ul className="flex flex-col items-center">
                                {cartProducts.map((product) => {
                                    return (
                                        <li key={product.id} className='w-full flex items-center justify-between border-b md:justify-center'>
                                            <div className='w-3/12 my-2 flex items-center justify-center md:h-[100px]'>
                                                <img className='h-full object-contain' src={product.image} alt='productImg' />
                                            </div>
                                            <div className="w-9/12 ml-2 my-2 py-2 md:flex md:items-center md:justify-between">
                                                <p className="text-start text-sm font-bold py-1 md:w-4/12">{product.name}</p>
                                                <p className=" text-start text-sm text-kD font-light md:w-2/12 md:text-center md:font-bold">US${product.price}</p>
                                                <div className='flex justify-between items-center mt-4 md:w-6/12 md:justify-center md:gap-4 md:mt-0'>
                                                    <div className='flex items-center justofy-center gap-1'>
                                                        <button className='btn-transparent py-1' onClick={() => removeFromCart(product, 1)}>
                                                            -
                                                        </button>
                                                        <p className='text-md text-kD mx-1'>{product.quantity}</p>
                                                        <button className='btn-transparent py-1' onClick={() => addToCart(product, 1)}>
                                                            +
                                                        </button>
                                                    </div>
                                                    <p className="text-center text-xs md:text-sm">
                                                        Subtotal: US${(product.quantity * product.price).toFixed(2)}
                                                    </p>
                                                    <button className='btn-transparent' onClick={() => deleteProduct(product.id)}>
                                                        <AiOutlineDelete />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            {pay && (
                                <div className='flex justify-end items-center gap-6 mt-4'>
                                    <p className='text-md text-kD mt-1'>
                                        Total US${totalCartPrice().toFixed(2)}
                                    </p>
                                    <button className='btn-solid mt-1' onClick={handleLogged}>CheckOut</button>

                                    <ConfirmOrderModal
                                        openModal={openModal}
                                        newOrder={newOrder}
                                        closeModal={() => setOpenModal(false)}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </section>
    );
};


export default Cart