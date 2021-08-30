import {
      Column,
      Entity,
      JoinTable,
      ManyToMany,
      PrimaryGeneratedColumn,
} from 'typeorm';
import { ContentDates } from './shared';
import { Role } from './Role';
@Entity('user')
export class User extends ContentDates {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column()
      name: string;

      @Column()
      username: string;

      @Column()
      password: string;

      @ManyToMany(() => Role)
      @JoinTable({
            name: 'user_role',
            joinColumns: [{ name: 'permission_id' }],
            inverseJoinColumns: [{ name: 'role_id' }],
      })
      role: Role[];
}
