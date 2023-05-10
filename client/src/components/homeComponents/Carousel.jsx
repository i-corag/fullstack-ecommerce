import { useEffect } from 'react'
import { useState } from 'react'

const Carousel = () => {

    const images = [
        { id: 0, url: "https://cdn-food.tribune.com.pk/gallery/images/Brew%20Coffee%20at%20home/01.jpg" },
        { id: 1, url: "https://images.unsplash.com/photo-1505489304219-85ce17010209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwYXQlMjBob21lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60" },
        { id: 2, url: "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMGF0JTIwaG9tZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" },
        { id: 3, url: "https://images.unsplash.com/photo-1439242088854-0c76045f4124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvZmZlZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" },
    ];

    const [current, setCurrent] = useState(0)

    useEffect(() => { setTimeout(() => { slideRight() }, 4500) })

    const slideRight = () => setCurrent(current === (images.length - 1) ? 0 : current + 1)

    return (
        <div className='flex h-[400px] w-screen px-1 mt-2 md:h-[450px] md:w-4/5 md:mt-4'>
            <div className='relative w-full'>
                {images.map((image) => {
                    return <div key={image.id} className='flex flex-1 absolute w-full h-full overflow-hidden md:rounded-xl'>
                        <img className='w-full object-cover contrast-100' src={(image.id === current) ? image.url : undefined} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Carousel