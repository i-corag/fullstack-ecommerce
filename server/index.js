//require('dotenv').config();
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { testDB } from './src/database/db.config.js';
import routerAPI from './src/routes/index.js';

const env = dotenv.config();

//CREATE SERVER
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
routerAPI(app);

//CONECTION TO DB
testDB();

//SERVER LISTEN
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
