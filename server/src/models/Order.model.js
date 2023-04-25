import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.config.js';
import User from './User.model.js';
import Product from './Product.model.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//ASSOCIATION USER-ORDER (ONE TO MANY)
User.hasMany(Order);
Order.belongsTo(User);

//ASSOCIATION ORDER-PRODUCT (MANY TO MANY)
Product.belongsToMany(Order, {
  through: 'order_product',
  as: 'orders',
  foreignKey: 'productId',
});
Order.belongsToMany(Product, {
  through: 'order_product',
  as: 'products',
  foreingKey: 'orderId',
});

module.exports = Order;
