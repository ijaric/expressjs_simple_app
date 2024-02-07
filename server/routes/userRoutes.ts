import { Router } from 'express';
import { UserService } from '../service/UserService.js';
import { UserHandler } from '../handler/UserHandler.js';

export function createUserRoutes(userService: UserService): Router {
  const router = Router();
  const userHandler = new UserHandler(userService);

  router.get('/users', userHandler.getAllUsers);
  router.get('/users/:id', userHandler.getUserById);
  router.post('/users', userHandler.createUser);

  return router;
}
