import 'reflect-metadata';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../app/models/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
