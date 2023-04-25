import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.config.js';

const Brand = sequelize.define('Brand', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Brand;
