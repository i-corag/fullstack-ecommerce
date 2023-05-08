import React from 'react'

const ProductSort = () => {



    return (
        <div className='h-9 flex items-center relative border border-kD rounded'>
            <select className='text-kD focus:ring-0 focus:ring-offset-0 focus:ring-inset-0' name="sort" id="sort">
                <option value="">Sort by</option>
                <option value="lowest price" >lowest price</option>
                <option value="highest price" >highest price</option>
            </select>
        </div>
    )
}

export default ProductSort