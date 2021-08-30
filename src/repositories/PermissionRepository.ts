import 'reflect-metadata';
import { EntityRepository, Repository } from 'typeorm';
import { Permission } from '../app/models/Permission';

@EntityRepository(Permission)
export class PermissionRepository extends Repository<Permission> {}
