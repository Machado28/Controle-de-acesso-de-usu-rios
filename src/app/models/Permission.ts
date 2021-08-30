import { Entity } from 'typeorm';
import { ContentTemplate } from './shared';

@Entity('permission')
export class Permission extends ContentTemplate {}
