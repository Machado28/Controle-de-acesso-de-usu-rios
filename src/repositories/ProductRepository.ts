import 'reflect-metadata';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../app/models/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
