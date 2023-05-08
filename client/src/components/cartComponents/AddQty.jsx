import { useState } from 'react';

const AddQty = ({ onAdd }) => {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () => setCounter(counter + 1)
    const decreaseCounter = () => (counter > 0) ? setCounter(counter - 1) : setCounter(0)

    return (
        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1 '>
                <button className='w-[24px] h-[24px] bg-white border border-kL rounded flex items-center justify-center md:w-[30px] md:h-[30px]' onClick={decreaseCounter}>-</button>
                <p>{counter}</p>
                <button className='w-[24px] h-[24px] bg-white border border-kL rounded flex items-center justify-center md:w-[30px] md:h-[30px]' onClick={increaseCounter}>+</button>
            </div>
            <button className='btn-solid' mx='2em' onClick={() => onAdd(counter)}>Add to cart</button>
        </div>
    );
};

export default AddQty;

