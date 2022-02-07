import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import { User } from '../entities/User';
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });

    return user;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const createUser = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(createUser);

    return createUser;
  }

  async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export { UsersRepository };
