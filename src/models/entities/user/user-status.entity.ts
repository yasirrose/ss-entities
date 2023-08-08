import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity('userStatus')
export class UserStatus extends BaseEntity {
  @Column({
    name: 'name'
  })
  name: string;

  @Column({
    name: 'description',
    nullable: true
  })
  description: string;

  @OneToMany(() => User, (user) => user.status)
  userStatus: User;
}
