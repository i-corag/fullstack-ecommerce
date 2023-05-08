import { useQuery, useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { queryClient, URI } from '../api/api.js';
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from '../api/product.js';

//CUSTOM QUERY HOOKS

const useProducts = () => {
  const [search] = useSearchParams();
  //const [search] = useSearchParams({ sort: 'name' });
  return useQuery(['products', search.toString()], () =>
    URI.get('products', { params: search }).then((res) => res.data)
  );
};

const useGetProducts = () => useQuery(['products'], getProducts);

const useGetProduct = (id) => useQuery(['product', id], getProduct);

const useCreateProduct = () => {
  //const queryClient = useQueryClient();
  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

const useDeleteProduct = () => {
  //const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

const useUpdateProduct = () => {
  //const queryClient = useQueryClient();
  return useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};

export {
  useGetProducts,
  useGetProduct,
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
  useProducts,
};
