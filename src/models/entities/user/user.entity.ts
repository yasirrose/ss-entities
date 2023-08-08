import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { UserSecurity } from './user-security.entity';
import { UserDetails } from './user-details.entity';
import { UserStatus } from './user-status.entity';
import { Enterprise } from '..';

@Entity('user')
export class User extends BaseEntity {
  @Column({
    name: 'isActive',
    default: true
  })
  isActive: boolean;

  @Column({
    name: 'enterpriseId',
    nullable: true
  })
  enterpriseId: number;

  @Column({
    name: 'statusId',
    nullable: true,
    default: 1
  })
  statusId: number;

  @Column({
    name: 'description',
    nullable: true
  })
  description: string;

  @OneToOne(() => UserSecurity, (security) => security.user, {
    cascade: ['insert']
  })
  security: UserSecurity;

  @OneToOne(() => UserDetails, (details) => details.user, {
    cascade: ['insert']
  })
  details: UserDetails;

  @ManyToOne(() => UserStatus, (status) => status.userStatus)
  @JoinColumn({ name: 'statusId' })
  status: UserStatus;

  @ManyToOne(() => Enterprise, (enterprise) => enterprise.user)
  @JoinColumn({ name: 'enterpriseId' })
  enterprise: Enterprise;
}
