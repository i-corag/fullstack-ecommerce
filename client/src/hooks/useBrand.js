import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '../api/api.js';
import {
  getBrands,
  getBrand,
  createBrand,
  deleteBrand,
  updateBrand,
} from '../api/brand.js';

//CUSTOM QUERY HOOKS

const useGetBrands = () => useQuery(['brands'], getBrands);

const useGetBrand = (id) => useQuery(['brands', id], getBrand);

const useCreateBrand = () => {
  // const queryClient = useQueryClient();
  return useMutation(createBrand, {
    onSuccess: () => {
      queryClient.invalidateQueries('brands');
    },
  });
};

const useDeleteBrand = () => {
  //const queryClient = useQueryClient();
  return useMutation(deleteBrand, {
    onSuccess: () => {
      queryClient.invalidateQueries('brands');
    },
  });
};

const useUpdateBrand = () => {
  //const queryClient = useQueryClient();
  return useMutation(updateBrand, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
};

export {
  useGetBrands,
  useGetBrand,
  useCreateBrand,
  useDeleteBrand,
  useUpdateBrand,
};
