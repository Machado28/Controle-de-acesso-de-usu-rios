import { ContentTemplate } from './shared';
import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { Permission } from './Permission';

@Entity('role')
export class Role extends ContentTemplate {
      @ManyToMany(() => Permission)
      @JoinTable({
            name: 'permissions_role',
            joinColumns: [{ name: 'role_id' }],
            inverseJoinColumns: [{ name: 'permission_id' }],
      })
      permission: Permission[];
}
