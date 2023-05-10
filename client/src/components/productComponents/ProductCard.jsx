import { useState } from "react";
import { Link } from "react-router-dom"
import { useCartStore } from "../../stores/CartStore";
import AddQty from "../cartComponents/AddQty";
import AddToWishlist from "../wishlistComponents/AddToWishlist";

const ProductCard = ({ product }) => {

    const addToCart = useCartStore(state => state.addToCart)
    const [add, setAdd] = useState(false);

    const onAdd = (quantity) => {
        setAdd(true)
        addToCart(product, quantity)
    }

    return (
        <li className="w-full h-[500px] px-4 py-6  rounded-lg border border-kL shadow-lg md:w-80">
            <Link to={`/product/${product.id}`}>
                <div className="w-full h-[170px]">
                    <img className="w-full h-full object-contain" src={product.image} alt='productImg' />
                </div>
                <div className="w-full h-[80px] p-4">
                    <p className="text-lg text-end truncate">{product.name}</p>
                    <p className="text-kL text-end">{product.Brand?.name}</p>
                </div>
                <div className="h-[80px] p-1 font-light text-ellipsis overflow-hidden">
                    <p className="text-justify">{product.description}</p>
                </div>
                <p className="mt-2 text-end text-kL text-xl font-bolder">US${product.price}</p>
            </Link>

            {add ?
                <div className='flex items-center justify-between mt-8 p-3'>
                    <p className='text-green-500 text-sm'>Succesfully added</p>
                    <Link to='/cart'>
                        <p className='text-kD text-sm'>Go to cart</p>
                    </Link>
                </div> :
                <div className='flex items-center justify-between mt-8 p-1'>
                    <AddQty onAdd={onAdd} />
                    <AddToWishlist product={product} />
                </div>
            }
        </li >
    )
}

export default ProductCard