import { Router } from 'express';
import userRouter from './users.routes';
import productsRouter from './products.routes';
import categoriesRouter from './categories.routes';
import brandsRouter from './brands.routes';
import ordersRouter from './orders.routes';

function routerAPI(app) {
  const router = Router();
  app.use('/api/', router);
  router.use('/users', userRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/brands', brandsRouter);
  router.use('/orders', ordersRouter);
}

module.exports = routerAPI;
