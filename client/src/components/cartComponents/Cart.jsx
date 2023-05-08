import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetLoggedUser } from "../../hooks/useUser";
import { useCartStore } from "../../stores/CartStore";
import { AiOutlineDelete } from 'react-icons/ai';
import ErrorMsg from "../ErrorMsg";
import ConfirmOrderModal from "./ConfirmOrderModal";
import { createOrder } from "../../api/order";

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
        <div>
            {cartProducts.length === 0 ? (
                <div className='flex flex-col items-center mt-10'>
                    <p className="text-sm font-light md:text-base">There are no products in the cart</p>
                    <Link to='/home'>
                        <button className='btn-solid mt-4'>Back to shopping</button>
                    </Link>
                </div>
            ) : (
                <>
                    {id ? (
                        <div className='flex flex-colum items-center'>
                            <p classNAme='text-md font-bold color-kD'>Thank you for your order!</p>
                            <p className='mt-1 text-md' my='1em'>
                                Remember to verify your information and order details before paying
                            </p>
                            <div className='py-2 px-3 border border-kD rounded m-1'>
                                <p className='text-md'>
                                    Order ID: <span>{id}</span>
                                </p>
                                <p className='text-md'>
                                    Name: <span>{loggedUser.user.name}</span>
                                </p>
                                <p className='text-md'>
                                    Email: <span>{loggedUser.user.email}</span>
                                </p>
                                <p className='text-md'>
                                    Address: <span>{loggedUser.user.address}</span>
                                </p>
                                <p className='text-md'>
                                    Phone: <span>{loggedUser.user.phone}</span>
                                </p>
                            </div>
                            <Link to='/'>
                                <button
                                    className='btn-transparent m-3'
                                    onClick={clearCart}>
                                    Confirmar Pedido
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <div className='flex justify-end'>
                                <button className='btn-solid mb-3' onClick={() => clearCart()}>Clear all</button>
                            </div>
                            <ul> {cartProducts.map((product) => {
                                return (
                                    <li key={product.id}>
                                        <div className='h-full object-contain'>
                                            <img src={product.image} alt='productImg' />
                                        </div>
                                        <p className="w-[250px] text-center text-xs">{product.name}</p>
                                        <p className="w-[80px] text-center text-xs">US${product.price}</p>
                                        <div className='w-[150px] flex items-center justofy-center gap-1'>
                                            <button className='btn-transparent' onClick={() => removeFromCart(product, 1)}>
                                                -
                                            </button>
                                            <p className='text-sm text-kD'>{product.quantity}</p>
                                            <button className='btn-transparent' onClick={() => addToCart(product, 1)}>
                                                +
                                            </button>
                                        </div>
                                        <p className="w-[80px] text-center text-xs">
                                            Subtotal: US${(product.quantity * product.price).toFixed(2)}
                                        </p>
                                        <button className='btn-transparent' onClick={() => deleteProduct(product.id)}>
                                            <AiOutlineDelete />
                                        </button>
                                    </li>
                                );
                            })}
                            </ul>
                            {pay && (
                                <div className='flex justify-end items-center gap-2'>
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
        </div>
    );
};


export default Cart