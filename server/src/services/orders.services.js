import crypto from 'crypto';
import Order from '../models/Order.model.js';
import User from '../models/User.model.js';

const createOrder = async (order) => {
  if (order.id) {
    let newOrder = await Order.findAll({
      where: { id: order.id },
    });
    if (newOrder.length > 0) {
      const error = `The order "${order.id}" already exists`;
      return error;
    }
  }
  const id = crypto.randomBytes(10).toString('hex');
  let newOrder = {
    id,
    ...order,
  };
  await Order.create(newOrder);
  return newOrder;
};

const getOrders = async () => {
  const allOrders = await Order.findAll({
    include: [{ model: User, as: 'User' }],
  });
  return allOrders;
};

const getOrder = async (id) => {
  const order = await Order.findByPk(id, {
    include: [{ model: User, as: 'User' }],
  });
  return order;
};

const updateOrder = async (id, body) => {
  let updatedOrder = await Order.findByPk(id);
  if (!updatedOrder) {
    const error = `The order ID: "${id}" does not exists`;
    return error;
  }
  updatedOrder = await Order.update({ ...body }, { where: { id } });
  return updatedOrder;
};

const deleteOrder = async (id) => {
  let order = await getOrder(id);
  if (order) {
    await order.destroy({ where: { id } });
  }
  return order;
};

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};