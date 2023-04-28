import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

//mport { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } from 'process.env';

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT,
  }
);

const testDB = async () => {
  try {
    await db.authenticate();
    //await db.sync();
    console.log('Successfully connected to database');
  } catch (err) {
    console.log('Unable to connect to database');
    console.log(err);
  }
};

export { db, testDB };
