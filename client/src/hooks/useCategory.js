import { useQuery, useMutation } from '@tanstack/react-query'; //useQueryClient
import { queryClient } from '../api/api.js';
import {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} from '../api/category.js';

//CUSTOM QUERY HOOKS

// Get QueryClient from the context

const useGetCategories = () => useQuery(['categories'], getCategories);

const useGetCategory = (id) => useQuery(['category', id], getCategory);

const useCreateCategory = () => {
  //const queryClient = useQueryClient();
  return useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

const useDeleteCategory = () => {
  //const queryClient = useQueryClient();
  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

const useUpdateCategory = () => {
  //const queryClient = useQueryClient();
  return useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

export {
  useGetCategories,
  useGetCategory,
  useCreateCategory,
  useDeleteCategory,
  useUpdateCategory,
};
