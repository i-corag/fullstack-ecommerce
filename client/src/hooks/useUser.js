import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/api.js';
import { isLoggedIn } from '../api/auth.js';
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from '../api/user.js';

//CUSTOM QUERY HOOKS

const useGetUsers = () => useQuery(['users'], getUsers);

const useGetLoggedUser = () => useQuery(['loggedUser'], isLoggedIn);

const useGetUser = (id) => useQuery(['user', id], getUser);

const useCreateUser = () => {
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

const useDeleteUser = () => {
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

const useUpdateUser = () => {
  return useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

export {
  useGetUsers,
  useGetUser,
  useCreateUser,
  useDeleteUser,
  useUpdateUser,
  useGetLoggedUser,
};
