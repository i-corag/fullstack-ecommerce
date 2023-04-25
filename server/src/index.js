require('dotenv').config();
import express from 'express';
import cors from 'cors';
import testDB from './src/database/db.config.js';
import routerAPI from './src/routes.js';

//CREATE SERVER
const app = express();

//CONECTION TO DB
testDB();

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
routerAPI(app);

//SERVER LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
