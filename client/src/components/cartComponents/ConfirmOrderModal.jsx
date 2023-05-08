import { useGetLoggedUser } from "../../hooks/useUser";
import ErrorMsg from "../ErrorMsg";

const ConfirmOrderModal = ({ openModal, closeModal, newOrder }) => {

    const { data: loggedUser = [], isError, error } = useGetLoggedUser();

    if (!openModal) return null;

    { isError && <ErrorMsg error={error.message} /> }
    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-900 bg-opacity-75'>
            <div className='w-4/5 h-[200px] my-56 mx-auto p-4 bg-white rounded md:fixed md:w-3/6 md:top-1/3 md:start-1/4'>
                <p className='text-lg text-center my-1'>Place the order as <span>{loggedUser.user.email}</span></p>
                <div className='flex items-center justify-end gap-2 mt-2'>
                    <button className="btn-transparent" onClick={closeModal}>Cancel</button>
                    <button className="btn-solid" onClick={newOrder}>Confirm</button>
                </div>
            </div>
        </div >
    )
}

export default ConfirmOrderModal