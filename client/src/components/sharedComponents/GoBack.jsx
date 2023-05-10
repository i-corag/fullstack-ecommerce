import { IoIosArrowBack } from 'react-icons/io'

const GoBack = () => {

    return (
        <div className="absolute top-[170px] left-4 md:top-32">
            <div className="flex items-center justify-center">
                <IoIosArrowBack />
                <p>BACK</p>
            </div>
        </div>
    )
}

export default GoBack