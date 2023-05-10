import { useGetLoggedUser } from "../../hooks/useUser";
import ErrorMsg from "../../components/sharedComponents/ErrorMsg";

const ConfirmOrderModal = ({ openModal, closeModal, newOrder }) => {

    const { data: loggedUser = [], isError, error } = useGetLoggedUser();

    if (!openModal) return null;

    { isError && <ErrorMsg error={error.message} /> }
    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-900 bg-opacity-75'>
            <div className='w-4/5 h-[150px] my-56 mx-auto p-4 bg-white rounded md:w-2/5'>
                <p className='text-lg text-center my-1 md:my-4'>Place the order as:<span className='text-kL pl-3'>{loggedUser.user.email}</span></p>
                <div className='flex items-center justify-end gap-2 mt-6 md:mr-4'>
                    <button className="btn-transparent" onClick={closeModal}>Cancel</button>
                    <button className="btn-solid" onClick={newOrder}>Confirm</button>
                </div>
            </div>
        </div >
    )
}

export default ConfirmOrderModal