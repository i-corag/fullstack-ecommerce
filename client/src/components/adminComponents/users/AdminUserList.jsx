import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useGetUsers, useDeleteUser } from '../../../hooks/useUser.js';
import Loading from '../../Loading';
import ErrorMsg from '../../ErrorMsg';
import GoBack from '../../GoBack';

const AdminUserList = () => {
  const { data: users = [], isLoading, isError, error } = useGetUsers();
  const { mutate, isLoading: isMutating } = useDeleteUser();

  {
    isLoading && <Loading />;
  }
  {
    isError && <ErrorMsg error={error.message} />;
  }

  return (
    <section className='px-2'>
      <Link to='/admin'>
        <GoBack />
      </Link>
      <h1 className='kH2 text-kD text-center mt-16 '>LIST OF USERS</h1>
      <div className='my-8 flex flex-col md:w-3/5 md:mx-auto'>
        <table className='table-auto'>
          <thead>
            <tr>
              <th className='text-sm text-center text-kL border p-1'>ID</th>
              <th className='text-sm text-center text-kL border p-1'>NAME</th>
              <th className='text-sm text-center text-kL border p-1'>EMAIL</th>
              <th className='text-sm text-center text-kL border p-1'>
                ADDRESS
              </th>
              <th className='text-sm text-center text-kL border p-1'>PHONE</th>
              <th className='text-sm text-center text-kL border p-1'>ROLE</th>
              <th className='text-sm text-center text-kL border p-1'>EDIT</th>
              <th className='text-sm text-center text-kL border p-1'>DELETE</th>
            </tr>
          </thead>
          <tbody className=''>
            {users?.map((user) => (
              <tr key={user.id}>
                <td className='text-xs text-center border p-2'>{user.id}</td>
                <td className='text-xs text-center border p-2'>{user.name}</td>
                <td className='text-xs text-center border p-2'>{user.email}</td>
                <td className='text-xs text-center border p-2'>
                  {user.address}
                </td>
                <td className='text-xs text-center border p-2'>{user.phone}</td>
                <td className='text-xs text-center border p-2'>{user.role}</td>
                <td className='text-xs text-center border p-2'>
                  <Link
                    className='flex justify-center'
                    to={`update/${user.id}`}>
                    <AiOutlineEdit />
                  </Link>
                </td>
                <td className='text-xs text-center border p-2'>
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
