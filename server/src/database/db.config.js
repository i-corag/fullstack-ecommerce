import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: DB_PORT,
});

const testDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Base de datos conectada');
  } catch (err) {
    console.log('Error de conexión con base de datos');
    console.log(err);
  }
};

module.exports = { sequelize, testDB };
