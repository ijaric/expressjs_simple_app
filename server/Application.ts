import express, { Express } from 'express';
import { Server } from 'http';
import { createUserRoutes } from './routes/userRoutes.js';
import { UserRepository } from './repository/UserRepository.js';
import { UserService } from './service/UserService.js';

export class Application {
  public express: Express;
  private userRepository: UserRepository;
  private userService: UserService;
  private server?: Server;

  constructor() {
    this.express = express();
    this.express.use(express.json());

    // Initialize repositories
    this.userRepository = new UserRepository();

    // Initialize services
    this.userService = new UserService(this.userRepository);

    // Initialize routes
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.express.use('/api/v1', createUserRoutes(this.userService));
  }

  public start(port: number): void {
    this.server = this.express.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }

  public dispose(): void {
    if (this.server) {
      this.server.close(() => {
        console.log('Server has been stopped.');
      });
      // Here you can dispose of any resources that the application uses,
      // for example, database connections, file handles, etc.
    }
  }
}
