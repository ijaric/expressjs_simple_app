import { User } from '../../models/User';

export class UserRepository {
  private users: User[] = [];

  public async findAll(): Promise<User[]> {
    // Here should be the code to get all users from the database
    return this.users;
  }

  public async findById(id: number): Promise<User | undefined> {
    // Here should be the code to get a user by id from the database
    return this.users.find((user) => user.id === id);
  }

  public async create(user: User): Promise<User> {
    // Here should be the code to create a user in the database
    this.users.push(user);
    return user;
  }
}
