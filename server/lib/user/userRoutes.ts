import { Router } from 'express';
import { UserHandler } from './UserHandler.js';

export function createUserRoutes(userHandler: UserHandler): Router {
  const router = Router();

  router.get('/users', userHandler.getAllUsers);
  router.get('/users/:id', userHandler.getUserById);
  router.post('/users', userHandler.createUser);

  return router;
}
