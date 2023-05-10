import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGetUsers, useDeleteUser } from '../../../hooks/useUser.js';
import ErrorMsg from '../../../components/sharedComponents/ErrorMsg';
import Loading from '../../../components/sharedComponents/Loading';

const AdminUserList = () => {
  const { data: users = [], isLoading, isError, error } = useGetUsers();
  const { mutate, isLoading: isMutating } = useDeleteUser();

  { isLoading && <Loading /> }
  { isError && <ErrorMsg error={error.message} /> }

  return (
    <section className='px-2'>
      <h1 className='kH2 text-kD text-center mt-16 '>LIST OF USERS</h1>
      <div className='w-screen my-8 mx-auto flex flex-col px-1 md:w-4/5 md:mx-auto'>
        <table className="w-full overflow-x-scroll border border-kL">
          <thead className="flex w-full border-b border-b-kL">
            <tr className='flex w-full'>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-3/12'>ID</th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>NAME</th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-2/12'>EMAIL</th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-2/12'>
                ADDRESS
              </th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>PHONE</th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>ROLE</th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>EDIT</th>
              <th className='flex items-center justify-center text-[8px] md:text-sm text-center text-kL border p-1 w-1/12'>DELETE</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full max-h-80">
            {users?.map((user) => (
              <tr key={user.id} className='flex w-full'>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-3/12'>{user.id}</td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'>{user.name}</td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-2/12'>{user.email}</td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-2/12'>
                  {user.address}
                </td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'>{user.phone}</td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'>{user.role}</td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'>
                  <Link
                    className='flex justify-center'
                    to={`update/${user.id}`}>
                    <AiOutlineEdit />
                  </Link>
                </td>
                <td className='flex items-center justify-center text-[8px] md:text-sm text-center border p-2 w-1/12'>
                  <Link className='flex justify-center' onClick={() => { mutate(user.id) }}>
                    {isMutating ? <Loading /> : <AiOutlineDelete />}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminUserList;
