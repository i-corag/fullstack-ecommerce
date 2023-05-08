import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryClient } from '../api/api.js';
import {
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} from '../api/order.js';

//CUSTOM QUERY HOOKS

const useGetOrders = () => useQuery(['orders'], getOrders);

const useGetOrder = (id) => useQuery(['order', id], getOrder);

const useCreateOrder = () => {
  //const queryClient = useQueryClient();
  return useMutation(createOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries('order');
    },
  });
};

const useDeleteOrder = () => {
  //const queryClient = useQueryClient();
  return useMutation(deleteOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries('order');
    },
  });
};

const useUpdateOrder = () => {
  //const queryClient = useQueryClient();
  return useMutation(updateOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries('orders');
    },
  });
};

export {
  useGetOrders,
  useGetOrder,
  useCreateOrder,
  useDeleteOrder,
  useUpdateOrder,
};
