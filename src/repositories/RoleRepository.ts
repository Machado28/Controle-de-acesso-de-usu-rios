import { Role } from '../app/models/Role';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
