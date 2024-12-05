import { IUser, IUserInput } from '../interfaces/user.interface';

class UserModel {
  private static users: IUser[] = [];

  static async create(userData: IUserInput): Promise<IUser> {
    const user: IUser = {
      id: this.users.length + 1,
      ...userData
    };
    this.users.push(user);
    return user;
  }

  static async findByUsername(username: string): Promise<IUser | undefined> {
    return this.users.find(user => user.username === username);
  }
}

export default UserModel;