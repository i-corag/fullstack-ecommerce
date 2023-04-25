import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.config.js';
import Product from './Product.model.js';

const Stock = sequelize.define('Stock', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
});

//ASSOCIATION PRODUCT-STOCK (ONE TO ONE)
Product.hasOne(Stock);
Stock.belongsTo(Product);

module.exports = Stock;
