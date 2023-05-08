import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
  //const queryClient = useQueryClient();
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

const useDeleteUser = () => {
  //const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

const useUpdateUser = () => {
  //const queryClient = useQueryClient();
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
