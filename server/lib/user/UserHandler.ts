import { Request, Response } from 'express';
import { UserService } from './UserService.js';

export class UserHandler {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await this.userService.getAllUsers();
    res.json(users);
  };

  public getUserById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  };

  public createUser = async (req: Request, res: Response): Promise<void> => {
    const newUser = await this.userService.createUser(req.body);
    res.status(201).json(newUser);
  };
}
