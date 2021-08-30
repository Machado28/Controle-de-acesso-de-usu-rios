import { Entity } from 'typeorm';
import { ContentTemplate } from './shared';

@Entity('product')
export class Product extends ContentTemplate {}
