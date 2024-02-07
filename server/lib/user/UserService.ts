import { User } from '../models/User';
import { UserRepository } from './UserRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }

  public async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
